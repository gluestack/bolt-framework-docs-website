import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  Button,
  HStack,
  VStack,
} from "@gluestack/design-system";
import { Done, MailIcon } from "./images";
import { ArrowForwardIcon } from "@gluestack/design-system";
import Image from "next/image";
import axios from "axios";

const emailValidator =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Newsletter = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const makeRequestToServer = async (email: string) => {
    setLoading(true);
    const res = await axios.post("/api/newsletter-subscribe", { email: email });
    if (res.status == 200) {
      setSuccess(true);
      setError(false);
      setLoading(false);
      setErrorMessage("");
      setEmail("");
    } else {
      setError(true);
      setSuccess(false);
      setLoading(false);
      setErrorMessage("Error in subscribing!");
      setEmail("");
    }
  };

  const subscribeToNewsLetter = (e: any) => {
    e.preventDefault();
    if (email === "") {
      setErrorMessage("Email address is required!");
      setError(true);

      setError(true);
    } else if (!emailValidator.test(email)) {
      setErrorMessage("Enter a valid email address!");
      setError(true);
    } else {
      makeRequestToServer(email);
    }
  };

  return (
    <Box
      mb="$20"
      sx={{
        "@md": {
          mb: 200,
        },
      }}
      nativeID="subscribe"
    >
      <Box margin="0 auto" alignItems="center">
        <Box
          w="85%"
          sx={{
            "@md": {
              w: "60%",
              flexDirection: "row",
            },
          }}
        >
          <VStack
            alignItems="center"
            sx={{
              "@base": {
                mb: "$20",
              },
              "@md": {
                mb: 0,
                mr: "$20",
              },
            }}
          >
            <Image
              src="/images/sanketsahu.png"
              width={120}
              height={120}
              alt="sanketsahu"
            />
            <Box my="$2">
              <Image
                src="/icon/signature.svg"
                width={93}
                height={56}
                alt="signature"
              />
            </Box>
            <Text
              fontWeight="$medium"
              fontSize="$xl"
              lineHeight="$xl"
              color="$textDark50"
            >
              Sanket Sahu
            </Text>
            <Text fontSize="$lg" lineHeight="$lg" color="$textDark400">
              Creator, gluestack
            </Text>
          </VStack>

          <Box flex={1}>
            <Text
              fontWeight="$bold"
              lineHeight="$3xl"
              color="$trueGray50"
              mb="$3"
              letterSpacing="$sm"
              fontFamily="$heading"
              width="100%"
              sx={{
                "@base": {
                  // w: "85%",
                  fontSize: "$3xl",
                },
                "@md": {
                  // w: "70%",
                  fontSize: "$4xl",
                },
              }}
            >
              We are building fast, you need releases, we need feedback!
            </Text>
            <Text
              fontWeight="$normal"
              fontSize="$xl"
              lineHeight="$xl"
              color="$trueGray400"
              mb="$12"
            >
              We can&apos;t do this alone, we would love feedback and the
              fastest way for us to reach out to you is via emails. We
              won&apos;t spam, I promise!
            </Text>
            <Box
              flexDirection="row"
              alignItems="center"
              mb="$2"
              sx={{
                "@base": {
                  flexDirection: "column",
                },
                "@lg": {
                  flexDirection: "row",
                  width: "$full",
                },
              }}
            >
              <Input
                isReadOnly={success}
                variant="rounded"
                borderColor="$trueGray700"
                flexDirection="row"
                py="$2"
                px="$3"
                flex={1}
                sx={{
                  "@base": {
                    mb: "$4",
                    width: "$full",
                  },
                  "@md": {
                    maxWidth: 380,
                  },
                  "@lg": {
                    mb: "0",
                    maxWidth: 420,
                  },
                }}
              >
                <Input.Icon
                  backgroundColor="transparent"
                  justifyContent="center"
                >
                  <Image
                    src="/icon/mail.svg"
                    width={24}
                    height={24}
                    alt="mail icon"
                  />
                </Input.Icon>
                <Input.Input
                  flex={1}
                  onKeyPress={(e) => {
                    if (e.key == "Enter") {
                      subscribeToNewsLetter(e);
                    }
                  }}
                  onChangeText={(value) => {
                    setEmail(value);
                  }}
                  fontFamily="$body"
                  placeholder="Enter your email"
                  color="$trueGray400"
                  fontWeight="$normal"
                  fontSize="$lg"
                  lineHeight="$lg"
                  py="$0"
                  px="$3"
                />
              </Input>
              <Button
                isDisabled={success}
                variant="primary"
                py="$2.5"
                px="$6"
                sx={{
                  "@base": {
                    width: "100%",
                    ml: "$0",
                  },
                  "@lg": {
                    width: "auto",
                    ml: "$3",
                  },
                }}
                onPress={subscribeToNewsLetter}
              >
                {loading ? (
                  <Button.Spinner color={"$trueGray50"} />
                ) : !success ? (
                  <>
                    <Button.Text
                      color="$trueGray50"
                      fontWeight="$medium"
                      fontSize="$md"
                      lineHeight="$md"
                    >
                      Subscribe
                    </Button.Text>
                    <ArrowForwardIcon
                      w="$4"
                      h="$4"
                      color="$trueGray50"
                      ml="$1.5"
                      strokeWidth={0.5}
                    />
                  </>
                ) : (
                  <Done />
                )}
              </Button>
            </Box>
            {success && (
              <Text ml="$4" color="$green500">
                Thank you for subscribing to our newsletter!
              </Text>
            )}
            <Text ml="$4" color="$red500">
              {errorMessage}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Newsletter;

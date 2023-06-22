import React, { memo } from "react";
import {
  Text,
  HStack,
  Button,
  VStack,
  Heading,
  GitHubIcon,
  Link as DSLink,
  OpenInNewIcon,
} from "@gluestack/design-system";
import CustomArrowForwardIcon from "../CustomArrowForwardIcon";
import { CustomNextLink } from "./CustomNextLink";

const features = [
  "Utility Props",
  "Precompile Styles",
  "<15kb gzip",
  "SSR optimized",
  "Universal",
];

const Fold1 = memo(() => {
  return (
    // @ts-ignore
    <VStack
      pt="$10"
      sx={{
        "@base": {
          mb: "$20",
        },
        "@md": {
          pt: "140px",
          mb: "100px",
        },
      }}
    >
      <VStack
        justifyContent="center"
        w="100%"
        sx={{
          "@sm": {
            m: "0 auto",
          },
        }}
      >
        <Heading
          color="white"
          size="3xl"
          fontWeight="$bold"
          lineHeight="$4xl"
          textAlign="center"
          my="0"
          sx={{
            "@base": {
              fontSize: "$4xl",
              lineHeight: "$4xl",
              textAlign: "left",
            },
            "@sm": {
              textAlign: "center",
            },

            "@md": {
              fontSize: "$6xl",
              lineHeight: "$6xl",
              mx: "50px",
            },
            "@lg": {
              mx: "0px",
            },
            "@xl": {
              mx: "20px",
            },
            "@xxl": {
              mx: "140px",
            },
            _dark: {
              color: "white",
            },
          }}
        >
          Development environment without the pain
        </Heading>
        <Text
          color="$secondary300_alpha_70"
          fontSize="$lg"
          lineHeight="$2xl"
          textAlign="center"
          sx={{
            "@base": {
              mt: "$3",
              fontSize: "$2xl",
              lineHeight: "$2xl",
              textAlign: "left",
            },
            "@sm": {
              mt: "$4",
              fontSize: "$2xl",
              textAlign: "center",
            },
            "@md": {
              // textAlign: "center",
            },
            _dark: {
              color: "$secondary300_alpha_70",
            },
          }}
        >
          Bolt runs the dev environment on your machine with the option of
          running services on the host machine, Docker and inside a VM with a
          unified API
        </Text>
      </VStack>
      <VStack
        // space="lg"
        sx={{
          "@base": {
            mt: "$9",
          },
          "@md": {
            mt: "$12",
          },
        }}
      >
        {/* <HStack
          sx={{
            "@base": {
              flexDirection: "column",
            },
            "@sm": {
              flexDirection: "row",
              margin: "0 auto",
            },
          }}
          space="lg"
          flexWrap="wrap"
        >
          {features.map((feature, key) => (
            <HStack
              key={key}
              alignItems="center"
              space="sm"
              sx={{
                "@base": {
                  mb: "$6",
                },
                "@lg": {
                  mb: 0,
                },
              }}
            >
              <Box
                borderRadius="$full"
                borderWidth="$1"
                borderColor="$primary500"
                w="$5"
                h="$5"
                alignItems="center"
                justifyContent="center"
              >
                <CheckIcon
                  sx={{
                    _dark: {
                      color: "$primary500",
                    },
                  }}
                  h="$3"
                  w="$3"
                />
              </Box>
              <Text
                color="$textDark50"
                fontSize="$md"
                sx={{
                  _dark: {
                    color: "$textDark50",
                  },
                }}
              >
                {feature}
              </Text>
            </HStack>
          ))}
        </HStack> */}
        <HStack
          // space="lg" need responsive
          sx={{
            "@base": {
              mt: "$3",
              flexDirection: "column",
              justifyContent: "center",
              //alignItems: "",
            },
            "@md": {
              mt: "$7",
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "flex-start",
            },
          }}
        >
          <CustomNextLink
            href="/docs/getting-started/installation"
            style={{
              textDecoration: "none",
              // outline: 0,
              marginBottom: "24px",
              borderRadius: "999px",
            }}
            sx={{
              outlineWidth: 0,
              ":focusVisible": {
                boxShadow:
                  "0px 1px 3px rgba(10, 124, 255, 0.24), 0px 2px 6px rgba(10, 124, 255, 0.24), 0px 4px 8px rgba(10, 124, 255, 0.12), 0px 12px 48px -8px rgba(10, 124, 255, 0.48), inset 1px 1px 2px rgba(255, 255, 255, 0.24)",
              },
            }}
          >
            <Button
              focusable={false}
              accessibilityLabel="Get started"
              variant="primary"
              sx={{
                "@base": {
                  // width: "60%",
                  py: "$2.5",
                },
                "@md": {
                  width: "auto",
                },
              }}
              px="$6"
            >
              <Button.Text
                fontWeight="$medium"
                fontSize="$md"
                lineHeight="$md"
                color="$textDark50"
                mr={6}
              >
                Get started
              </Button.Text>
              <CustomArrowForwardIcon />
            </Button>
          </CustomNextLink>

          <DSLink
            // className="fold1-btn2"
            href="https://snack.expo.dev/@gluestack/gluestack-style-starter?platform=web&theme=dark"
            sx={{
              rounded: "$full",
              _text: {
                textDecoration: "none",
              },
              "@md": {
                ml: "$4",
              },
              ":focusVisible": {
                outlineWidth: 0,
                bg: "$secondary50_alpha_20",
              },
            }}
            isExternal
          >
            <Button
              variant="secondary"
              py="$3"
              sx={{
                "@base": {
                  px: "52px",
                  py: "$2.5",
                },
                "@md": {
                  px: "$6",
                },
              }}
            >
              <Button.Text
                // @ts-ignore
                fontWeight="$medium"
                fontSize="$md"
                lineHeight="$md"
                color="$textDark50"
                mr={10}
              >
                Try now
              </Button.Text>
              <OpenInNewIcon color="white" h="$4" w="$4" />
            </Button>
          </DSLink>
        </HStack>
      </VStack>
    </VStack>
  );
});

Fold1.displayName = "Fold1";

export default Fold1;

import React, { memo } from "react";
import {
  Text,
  VStack,
  Heading,
  Link as DSLink,
  HStack,
  Box,
  CheckIcon,
} from "@gluestack/design-system";

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
      mb="$20"
      sx={{
        "@md": {
          pt: 140,
          mb: 200,
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
              mx: 50,
            },
            "@lg": {
              mx: 0,
            },
            "@xl": {
              mx: 20,
            },
            "@xxl": {
              mx: 140,
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
        sx={{
          "@base": {
            mt: "$9",
          },
          "@md": {
            mt: "$12",
          },
        }}
      >
        <HStack
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
        </HStack>
      </VStack>
    </VStack>
  );
});

Fold1.displayName = "Fold1";

export default Fold1;

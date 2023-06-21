import {
  Box,
  HStack,
  Link,
  Text,
  VStack,
  Heading,
} from "@gluestack/design-system";
import React from "react";

function More() {
  return (
    <Box
      mb="$20"
      sx={{
        "@md": {
          mb: 100,
        },
        "@xl": {
          flexDirection: "row",
        },
      }}
    >
      <Box
        width="100%"
        justifyContent="center"
        mb="$10"
        sx={{
          "@xl": {
            mb: "0",
            mr: "$10",
            // width: "36%",
            width: "auto",
            flex: 1,
          },
        }}
      >
        <Text
          fontSize="$lg"
          lineHeight="$xl"
          style={{
            // @ts-ignore web-only
            background:
              "linear-gradient(93.67deg, #3E92E1 -12.63%, #9985FF 146.77%)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          }}
          mb="$3"
        >
          More from the creators
        </Text>
        <Heading
          my={0}
          fontWeight="$bold"
          fontSize="$5xl"
          lineHeight="$4xl"
          color="$textDark50"
          sx={{
            _dark: {
              color: "$textDark50",
            },
          }}
        >
          Our Ecosystem
        </Heading>
      </Box>
      <Box
        sx={{
          "@md": {
            flexDirection: "row",
            flex: 2,
          },
        }}
      >
        <Box
          mb="$10"
          borderWidth={1}
          borderColor="$borderDark800"
          borderRadius="$xl"
          overflow="hidden"
          sx={{
            // @ts-ignore web-only
            background:
              "linear-gradient(290.46deg, rgba(0, 16, 71, 0.4) -26%, rgba(77, 77, 77, 0) 100.23%), linear-gradient(98.21deg, rgba(25, 44, 171, 0.6) -21.6%, rgba(15, 24, 86, 0) 94.94%)",
            "@md": {
              mb: "0",
              mr: "$6",
              flex: 1,
            },
            "@lg": {
              mr: "$10",
            },
          }}
        >
          <Link
            href="https://ui.gluestack.io"
            style={{
              flex: 1,
            }}
            isExternal
          >
            <Box h="100%" p="$6">
              <Text
                fontSize="$lg"
                lineHeight="$lg"
                color="$textDark300"
                mb="$5"
                sx={{
                  _dark: {
                    color: "$textDark300",
                  },
                }}
              >
                Want beautifully designed, accessible and universal components?
              </Text>
              <HStack mt="auto" space="sm">
                <Text
                  fontWeight="$semibold"
                  fontSize="$2xl"
                  lineHeight="$xl"
                  color="$white"
                  sx={{
                    _dark: {
                      color: "$white",
                    },
                  }}
                >
                  gluestack-ui
                </Text>
                <VStack>
                  <Box
                    style={{
                      // @ts-ignore web-only
                      background:
                        "linear-gradient(260.55deg, rgba(21, 129, 228, 0.165) 11.83%, rgba(107, 54, 175, 0.183) 45.13%, rgba(42, 180, 217, 0.045) 93.61%)",
                      backdropFilter: "blur(12px)",
                    }}
                    py={6}
                    px="$3"
                    borderRadius="$full"
                    borderWidth={2}
                    borderColor="$borderDark800"
                  >
                    <Text
                      fontSize="$2xs"
                      lineHeight="$2xs"
                      color="$textDark50"
                      sx={{
                        _dark: {
                          color: "$textDark50",
                        },
                      }}
                    >
                      beta
                    </Text>
                  </Box>
                </VStack>
              </HStack>
            </Box>
          </Link>
        </Box>
        <Box
          borderWidth={1}
          borderColor="$borderDark800"
          borderRadius="$xl"
          overflow="hidden"
          sx={{
            // @ts-ignore web-only
            background:
              "linear-gradient(103.74deg, rgba(3, 189, 153, 0.4) -16.75%, rgba(27, 155, 147, 0.125207) 33.87%, rgba(15, 31, 81, 0.28) 77.99%)",
            "@md": {
              flex: 1,
            },
          }}
        >
          <a
            href="https://gluestack.io/"
            style={{
              textDecoration: "none",
              flex: 1,
            }}
            target="_blank"
            rel="noreferrer"
          >
            <Box h="100%" p="$6">
              <Text
                fontSize="$lg"
                lineHeight="$lg"
                color="$textDark300"
                mb="$5"
                sx={{
                  _dark: {
                    color: "$textDark300",
                  },
                }}
              >
                Looking for a full-stack framework that simplifies the process
                of building modern web & mobile apps?
              </Text>
              <HStack mt="auto" space="sm">
                <Text
                  fontWeight="$semibold"
                  fontSize="$2xl"
                  lineHeight="$xl"
                  color="$white"
                  sx={{
                    _dark: {
                      color: "$white",
                    },
                  }}
                >
                  gluestack
                </Text>
              </HStack>
            </Box>
          </a>
        </Box>
      </Box>
    </Box>
  );
}

export default More;

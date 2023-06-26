import { Box, Text, VStack } from "@gluestack/design-system";
import React from "react";

function More() {
  return (
    <VStack
      mb="$20"
      sx={{
        "@md": {
          mb: 200,
        },
      }}
    >
      <Box mb={60}>
        <Text
          fontSize="$lg"
          lineHeight="$xl"
          textAlign="center"
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
        <Text
          my={0}
          fontWeight="$bold"
          fontSize="$5xl"
          lineHeight="$4xl"
          textAlign="center"
          color="$textDark50"
          sx={{
            _dark: {
              color: "$textDark50",
            },
          }}
        >
          Our Ecosystem
        </Text>
      </Box>
      <Box
        mb="$20"
        sx={{
          "@md": {
            mb: 100,
          },
        }}
      >
        <Box
          sx={{
            "@lg": {
              flexDirection: "row",
            },
          }}
        >
          <StyleCard />
          <UiCard />
          <FrameworkCard />
        </Box>
      </Box>
    </VStack>
  );
}

const StyleCard = () => {
  return (
    <Box
      mb="$10"
      borderWidth={1}
      borderColor="$borderDark800"
      borderRadius="$xl"
      overflow="hidden"
      sx={{
        _web: {
          background:
            "linear-gradient(290.46deg, rgba(0, 16, 71, 0.4) -26%, rgba(77, 77, 77, 0) 100.23%), linear-gradient(98.21deg, rgba(25, 44, 171, 0.6) -21.6%, rgba(15, 24, 86, 0) 94.94%)",
        },
        "@md": {
          flex: 1,
        },
        "@lg": {
          mb: 0,
          mr: "$10",
        },
      }}
    >
      <a
        href="https://style.gluestack.io/"
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
            Looking for universal and performant CSS-in-JS library?
          </Text>
          <Box mt="auto">
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
              gluestack-style
            </Text>
            <VStack mt="$2">
              <Box
                sx={{
                  _web: {
                    background:
                      "linear-gradient(260.55deg, rgba(21, 129, 228, 0.165) 11.83%, rgba(107, 54, 175, 0.183) 45.13%, rgba(42, 180, 217, 0.045) 93.61%)",
                    backdropFilter: "blur(12px)",
                  },
                }}
                py={6}
                px="$3"
                borderRadius="$full"
                borderWidth={2}
                borderColor="$borderDark800"
                alignSelf="flex-start"
              >
                <Text
                  fontSize="$xs"
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
          </Box>
        </Box>
      </a>
    </Box>
  );
};

const UiCard = () => {
  return (
    <Box
      mb="$10"
      borderWidth={1}
      borderColor="$borderDark800"
      borderRadius="$xl"
      overflow="hidden"
      sx={{
        _web: {
          background:
            "linear-gradient(103.74deg, rgba(3, 189, 153, 0.4) -16.75%, rgba(27, 155, 147, 0.125207) 33.87%, rgba(15, 31, 81, 0.28) 77.99%)",
        },
        "@md": {
          flex: 1,
          h: "100%",
        },
        "@lg": {
          mb: "0",
          mr: "$10",
        },
      }}
    >
      <a
        href="https://ui.gluestack.io"
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
            Want beautifully designed, accessible and universal components?
          </Text>
          <Box mt="auto">
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
            <VStack mt="$2">
              <Box
                sx={{
                  _web: {
                    background:
                      "linear-gradient(260.55deg, rgba(21, 129, 228, 0.165) 11.83%, rgba(107, 54, 175, 0.183) 45.13%, rgba(42, 180, 217, 0.045) 93.61%)",
                    backdropFilter: "blur(12px)",
                  },
                }}
                py={6}
                px="$3"
                borderRadius="$full"
                borderWidth={2}
                borderColor="$borderDark800"
                alignSelf="flex-start"
              >
                <Text
                  fontSize="$xs"
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
          </Box>
        </Box>
      </a>
    </Box>
  );
};

const FrameworkCard = () => {
  return (
    <Box
      borderWidth={1}
      borderColor="$borderDark800"
      borderRadius="$xl"
      overflow="hidden"
      sx={{
        "@md": {
          flex: 1,
        },

        _web: {
          background:
            "linear-gradient(281.59deg, rgba(0, 29, 131, 0.4) -24.93%, rgba(77, 77, 77, 0) 107.72%), linear-gradient(98.21deg, rgba(29, 18, 51, 0.6) -21.6%, rgba(27, 12, 42, 0.6) 94.94%)",
        },
      }}
    >
      <a
        href="https://framework.gluestack.io"
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
            Want full-stack framework for web, mobile & backend?
          </Text>
          <Box mt="auto">
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
              gluestack-framework
            </Text>
            <VStack mt="$2">
              <Box
                sx={{
                  _web: {
                    background:
                      "linear-gradient(80.55deg, rgba(21, 129, 228, 0.111) 48.67%, rgba(111, 38, 206, 0.216) 79.9%, rgba(42, 180, 217, 0.156) 108.54%)",
                    backdropFilter: "blur(12px)",
                  },
                }}
                py={6}
                px="$3"
                borderRadius="$full"
                borderWidth={2}
                borderColor="$borderDark800"
                alignSelf="flex-start"
              >
                <Text
                  fontSize="$xs"
                  lineHeight="$2xs"
                  color="$textDark50"
                  sx={{
                    _dark: {
                      color: "$textDark50",
                    },
                  }}
                >
                  coming soon
                </Text>
              </Box>
            </VStack>
          </Box>
        </Box>
      </a>
    </Box>
  );
};

export default More;

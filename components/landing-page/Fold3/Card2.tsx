import React from "react";

import {
  Box,
  HStack,
  VStack,
  Text,
  MoonIcon,
  Heading,
  ColorPaletteIcon,
  EarthIcon,
  OptionsIcon,
  GridIcon,
  DismissIcon,
  OpenInNewIcon,
  Center,
  // @ts-ignore
} from "@gluestack/design-system";

const keyFeatures = [
  {
    title: "Universal",
    icon: <EarthIcon color="$violet300" h="$5" w="$5" />,
  },

  {
    title: "Media Query",
    icon: <OptionsIcon color="$violet300" h="$5" w="$5" />,
  },
  {
    title: "Variants",
    icon: <ColorPaletteIcon color="$violet300" h="$5" w="$5" />,
  },
  {
    title: "Theme & token",
    icon: <GridIcon color="$violet300" h="$5" w="$5" />,
  },
  {
    title: "Utility & SX props",
    icon: <DismissIcon color="$violet300" h="$5" w="$5" />,
  },
  {
    title: "Zero JavaScript with SSR",
    icon: <OpenInNewIcon color="$violet300" h="$5" w="$5" />,
  },
];

const Card2 = () => {
  return (
    // @ts-ignore
    <VStack
      // borderWidth="$1"
      borderRadius="$xl"
      // borderColor="#3E485B"
      flex="1"
      style={{
        background:
          "linear-gradient(to left top, transparent 0, #374151 75% , #505A6A 100%)",
      }}
    >
      <Box
        borderRadius="$xl"
        m={1}
        flex={1}
        p="$8"
        style={{
          background:
            "linear-gradient(178.16deg, #2D2960 1.56%, #0F1114 105.08%)",
        }}
      >
        <Heading
          my={0}
          color="$textDark50"
          fontSize="$2xl"
          fontWeight="$bold"
          lineHeight="$2xl"
          mb="$3"
        >
          Key Features
        </Heading>
        <Text
          color="$textDark300"
          lineHeight="$md"
          sx={{
            _dark: {
              color: "$textDark300",
            },
          }}
        >
          Styling solution with universal compatibility, media query & variants.
        </Text>
        {/* This code will change after SimpleGrid is supported*/}
        <Box width="100%">
          {/* mobile */}
          {/* @ts-ignore */}
          <VStack
            sx={{
              "@lg": {
                display: "none",
              },
            }}
            space="lg"
            mt="$6"
          >
            {keyFeatures.map((item, index) => {
              return (
                // @ts-ignore
                <HStack key={item.title} alignItems="center">
                  <Center
                    sx={{
                      bg: "rgba(46, 55, 63, 0.24)",
                      rounded: "$lg",
                      p: "$2",
                      _web: {
                        boxShadow:
                          "0px 1px 3px #8055C5, 0px 2px 6px rgba(0, 119, 230, 0.24), 0px 4px 8px rgba(0, 119, 230, 0.12), inset 1px 1px 2px rgba(255, 255, 255, 0.24);",
                      },
                    }}
                  >
                    {item.icon}
                  </Center>
                  <Text
                    ml="$3"
                    color="$textDark300"
                    fontSize="$lg"
                    sx={{
                      _dark: {
                        color: "$textDark300",
                      },
                    }}
                  >
                    {item.title}
                  </Text>
                </HStack>
              );
            })}
          </VStack>
          {/*web  */}
          {/* @ts-ignore */}
          <HStack
            sx={{
              flexWrap: "wrap",
              "@base": {
                display: "none",
              },
              "@lg": { display: "flex" },
            }}
          >
            {/* @ts-ignore */}
            <VStack space="lg" mt="$6" flex="1">
              {keyFeatures
                .slice(0, keyFeatures.length / 2)
                .map((item, index) => {
                  return (
                    // @ts-ignore
                    <HStack key={item.title} space="sm" alignItems="center">
                      <Center
                        sx={{
                          bg: "rgba(46, 55, 63, 0.24)",
                          rounded: "$lg",
                          p: "$2",
                          _web: {
                            boxShadow:
                              "0px 1px 3px #8055C5, 0px 2px 6px rgba(0, 119, 230, 0.24), 0px 4px 8px rgba(0, 119, 230, 0.12), inset 1px 1px 2px rgba(255, 255, 255, 0.24);",
                          },
                        }}
                      >
                        {item.icon}
                      </Center>
                      <Text
                        color="$textDark300"
                        fontSize="$lg"
                        sx={{
                          _dark: {
                            color: "$textDark300",
                          },
                        }}
                      >
                        {item.title}
                      </Text>
                    </HStack>
                  );
                })}
            </VStack>
            {/* @ts-ignore */}
            <VStack space="lg" mt="$6" flex="1">
              {keyFeatures.slice(keyFeatures.length / 2).map((item, index) => {
                return (
                  // @ts-ignore
                  <HStack key={item.title} space="sm" alignItems="center">
                    <Center
                      sx={{
                        bg: "rgba(46, 55, 63, 0.24)",
                        rounded: "$lg",
                        p: "$2",
                        _web: {
                          boxShadow:
                            "0px 1px 3px #8055C5, 0px 2px 6px rgba(0, 119, 230, 0.24), 0px 4px 8px rgba(0, 119, 230, 0.12), inset 1px 1px 2px rgba(255, 255, 255, 0.24);",
                        },
                      }}
                    >
                      {item.icon}
                    </Center>
                    <Text
                      color="$textDark300"
                      fontSize="$lg"
                      sx={{
                        _dark: {
                          color: "$textDark300",
                        },
                      }}
                    >
                      {item.title}
                    </Text>
                  </HStack>
                );
              })}
            </VStack>
          </HStack>
          {/*  */}
        </Box>
      </Box>
    </VStack>
  );
};

export default Card2;

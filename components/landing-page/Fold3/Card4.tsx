import React from "react";
// @ts-ignore

import { Box, HStack, Text, Heading } from "@gluestack/design-system";
import NextImage from "next/image";
import { Image4 } from "./Image4";

const Card4 = () => {
  return (
    <Box
      flex={1}
      borderRadius="$xl"
      overflow="hidden"
      style={{
        background:
          "linear-gradient(to left top, transparent, #374151, #3E485B)",
      }}
    >
      <Box bg="black" borderRadius="$xl" m={1} h="$full" overflow="hidden">
        <HStack
          borderRadius="$xl"
          h="$full"
          style={{
            backgroundColor: "rgba(62, 72, 91, 0.2)",
          }}
          justifyContent="center"
          alignItems="center"
          p="$8"
          space="lg"
          sx={{
            "@base": {
              flexDirection: "column",
            },
            "@xl": {
              flexDirection: "row",
            },
          }}
        >
          <Box mb="$6" flex={1}>
            <Heading
              color="$textDark50"
              fontSize="$2xl"
              fontWeight="$bold"
              lineHeight="$2xl"
              my={0}
              mb="$3"
              sx={{
                _dark: {
                  color: "$textDark50",
                },
              }}
            >
              Write once, run anywhere.
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
              gluestack-style enhances the universal nature of React Native and
              extends it with features like variants and media-queries and
              reduces the JS runtime overhead on web wherever necessary.
            </Text>
          </Box>
          <Box
            maxWidth={260}
            width="100%"
            aspectRatio={260 / 289}
            position="relative"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            sx={{
              "@md": {
                borderRadius: "$xl",
              },
            }}
          >
            <Image4 />
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default Card4;

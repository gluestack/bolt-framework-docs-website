import React from "react";
// @ts-ignore

import { Box, HStack, VStack, Text, Heading } from "@gluestack/design-system";
import NextImage from "next/image";

const Fold3Card3 = () => {
  return (
    <Box
      borderRadius="$xl"
      overflow="hidden"
      style={{
        background:
          "linear-gradient(to left top, transparent, #374151, #4F8FAA)",
      }}
      sx={{
        "@base": {
          mb: "$6",
        },
        "@lg": {
          mb: "0",
          w: "45%",
        },
      }}
    >
      <VStack borderRadius="$xl" m={1} flex={1} bg="$black">
        <Box
          bg="rgba(79, 143, 170, 0.3)"
          flex={1}
          borderRadius="$xl"
          overflow="hidden"
          sx={{
            "@md": {
              p: "$8",
            },
          }}
        >
          <Box
            p="$6"
            sx={{
              "@md": {
                p: "0",
              },
            }}
          >
            <Heading
              my={0}
              color="$textDark50"
              fontSize="$2xl"
              fontWeight="$bold"
              lineHeight="$2xl"
              mb="$3"
              sx={{
                _dark: {
                  color: "$textDark50",
                },
              }}
            >
              Best-in-class DX
            </Heading>
            <Text
              color="$textDark300"
              lineHeight="$md"
              mb="$8"
              sx={{
                _dark: {
                  color: "$textDark300",
                },
              }}
            >
              With the goodness of TypeScript, you get the best developer
              experience. The types are generated for every feature, including
              variants, state, sx, utility props, and tokens!
            </Text>
          </Box>
          {/* Add a gif below */}
          <Box
            width="100%"
            aspectRatio={10 / 3}
            position="relative"
            sx={{
              borderRadius: "$none",
              px: "$6",
              "@md": {
                p: "0",
                borderRadius: "$xl",
              },
            }}
            overflow="hidden"
          >
            <NextImage
              src="/gif/best-in-class2.gif"
              alt="code gif"
              layout="fill"
              objectFit="cover"
              // width={"}
            />
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default Fold3Card3;

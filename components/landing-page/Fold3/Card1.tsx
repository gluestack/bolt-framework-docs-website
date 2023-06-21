// @ts-noc
import React from "react";
// @ts-ignore

import { Box, HStack, VStack, Text, Heading } from "@gluestack/design-system";

const Fold3Card1 = () => {
  return (
    // @ts-ignore
    <VStack
      sx={{
        "@base": {
          mb: "$4",
        },
        "@lg": { mb: 0, w: "40%" },
      }}
      borderRadius="$xl"
      style={{
        background:
          "linear-gradient(to left top, transparent, #374151 80% , #505A6A )",
      }}
    >
      <Box
        p="$8"
        borderRadius="$xl"
        m={1}
        flex={1}
        style={{
          background:
            "linear-gradient(178.16deg, #273B60 1.56%, #0F1114 105.08%)",
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
          Highly Performant
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
          gluestack-style can work with Zero JavaScript when combined with
          Next’s SSR & SSG. gluestack-style comes packed with a babel-plugin
          that brings the runtime token interpolation to zero and reduces the
          hydration resulting in faster runtime. We aim to reduce it further,
          maybe with bundler plugins in the future.
        </Text>
      </Box>
    </VStack>
  );
};

export default Fold3Card1;

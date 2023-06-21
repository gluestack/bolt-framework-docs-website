import React, { memo } from "react";
// @ts-ignore
import { Box, HStack, VStack } from "@gluestack/design-system";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";

const Fold3 = () => {
  return (
    <Box
      justifyContent="center"
      sx={{
        "@base": {
          mb: "$20",
        },
        "@md": {
          mb: 200,
        },
      }}
    >
      <Box
        position="absolute"
        right="0"
        left="75%"
        bottom="10%"
        top="30%"
        style={{
          // @ts-ignore
          background: "linear-gradient(101.86deg, #00FFC2 0%, #7000FF 100%)",
          filter: "blur(90px)",
          opacity: 0.2,
        }}
        zIndex={-1}
        display="none"
        sx={{
          "@md": {
            display: "flex",
          },
        }}
      />
      {/* @ts-ignore */}
      <VStack justifyContent="center">
        {/* @ts-ignore */}
        <HStack
          space="3"
          sx={{
            "@base": {
              flexDirection: "column",
              mb: "$4",
            },
            "@lg": {
              flexDirection: "row",
              mb: "$3",
            },
          }}
        >
          <Card1 />
          <Card2 />
        </HStack>
        {/* @ts-ignore */}
        <HStack
          space="3"
          w="100%"
          sx={{
            "@base": {
              flexDirection: "column",
            },
            "@lg": {
              flexDirection: "row",
            },
          }}
        >
          <Card3 />
          <Card4 />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Fold3;

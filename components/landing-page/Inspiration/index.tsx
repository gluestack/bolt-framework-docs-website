import { VStack, Box, Text } from "@gluestack/design-system";
import Image from "next/image";
import React from "react";
import InspiredImage from "./InspiredImage";

function Inspiration() {
  return (
    <VStack
      alignItems="center"
      sx={{
        "@base": {
          my: "$20",
        },
        "@md": {
          mt: 200,
          mb: 120,
        },
      }}
    >
      <Box
        h="$full"
        zIndex={-1}
        position="absolute"
        left="10%"
        right="10%"
        top={0}
        bottom={0}
        flexDirection="row"
      >
        <Box w="100%" position="relative">
          <Box
            position="absolute"
            left="-20%"
            // right="30%"
            top="0"
            bottom="-10%"
            width="100%"
            style={{
              background:
                "radial-gradient(106.99% 100.54% at 50% 50%, rgba(27, 115, 237, 0.6) 0%, rgba(194, 46, 255, 0.06) 25.67%)",

              filter: "blur(50px)",
            }}
          />
          <Box
            position="absolute"
            left="35%"
            right="0"
            top="10%"
            bottom="-5%"
            width="85%"
            style={{
              background:
                "radial-gradient(106.99% 100.54% at 50% 50%, rgba(27, 199, 237, 0.6) 0%, rgba(46, 180, 255, 0.06) 45.67%)",
              filter: "blur(150px)",
            }}
          />
        </Box>
      </Box>
      <Text
        fontWeight="$bold"
        lineHeight="$4xl"
        color="$textDark50"
        textAlign="center"
        sx={{
          "@base": {
            fontSize: "$4xl",
          },
          "@md": {
            fontSize: "$5xl",
          },
          _dark: {
            color: "$textDark50",
          },
        }}
      >
        Inspiration
      </Text>
      <Text
        color="$textDark400"
        textAlign="center"
        mt="$3"
        maxWidth={1000}
        sx={{
          "@base": {
            fontSize: "$xl",
            lineHeight: "$xl",
          },
          "@md": {
            fontSize: "$2xl",
            lineHeight: "$2xl",
          },
          _dark: {
            color: "$textDark400",
          },
        }}
      >
        {`This project wouldn't have been possible without the great work of community members and inspiration from these libraries.`}
      </Text>
      <Box
        mt="$4"
        maxWidth={844}
        w="100%"
        pt="$16"
        sx={{
          "@base": {
            pb: 60,
          },
          "@md": {
            pb: "$20",
          },
        }}
      >
        {/* <Box
          h="$full"
          zIndex={-1}
          position="absolute"
          left="10%"
          right="10%"
          top={0}
          bottom={0}
          flexDirection="row"
        >
          <Box w="100%" position="relative">
            <Box
              position="absolute"
              left="-20%"
              // right="30%"
              top="-28%"
              bottom="-10%"
              width="100%"
              style={{
                background:
                  "radial-gradient(106.99% 100.54% at 50% 50%, rgba(27, 115, 237, 0.6) 0%, rgba(194, 46, 255, 0.06) 25.67%)",

                filter: "blur(50px)",
              }}
            />
            <Box
              position="absolute"
              left="35%"
              right="0"
              top="0"
              bottom="0"
              width="85%"
              style={{
                background:
                  "radial-gradient(106.99% 100.54% at 50% 50%, rgba(27, 199, 237, 0.6) 0%, rgba(46, 180, 255, 0.06) 45.67%)",
                filter: "blur(150px)",
              }}
            />
          </Box>
        </Box> */}
        {/* <InspiredImage /> */}
        <Box position="relative" width="100%" aspectRatio={600 / 230}>
          <Image alt="inspiration" fill={true} src="/assets/inspiration.png" />
        </Box>
      </Box>
    </VStack>
  );
}

export default Inspiration;

// @ts-nocheck
import React from "react";
import { Box, Text, HStack, Badge } from "@gluestack/design-system";

import { DankBtnLogo } from "./MainContent";

const BadgeComponent = () => {
  return (
    <Box
      //   w="$full"
      pb="$4"
      position="fixed"
      alignItems="center"
      zIndex={10}
      bottom="0"
      //   left="0"
      right="0"
      // pointerEvents="none"
    >
      <Box
        flexDirection="row"
        alignItems="center"
        // w="85%"
        maxWidth={1440}
        sx={{
          "@lg": {
            mr: 180,
          },
        }}
        mx="$5"
      >
        {/* <Box flex="1" bg="yellow" /> */}
        <HStack justifyContent="center" alignItems="center" ml="auto">
          <Badge
            p="$3"
            borderRadius="$xl"
            borderWidth={2}
            borderColor="$borderDark700"
            style={{
              // @ts-ignore
              background:
                "linear-gradient(90.89deg, #1D2130 0%, #20253C 34.68%, #332E52 54.82%, #222F46 102.19%)",
            }}
            zIndex={50}
            ml="auto"
          >
            <DankBtnLogo />
            <Text ml="$3" lineHeight="$md" color="$textDark50">
              Made with gluestack-style
            </Text>
          </Badge>
        </HStack>
      </Box>
    </Box>
  );
};

export default BadgeComponent;

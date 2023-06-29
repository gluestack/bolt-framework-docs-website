// @ts-nocheck
import React from "react";
import { Box, Text, Badge } from "@gluestack/design-system";
import NextImage from "next/image";

const BadgeComponent = () => {
  return (
    <Box
      pb="$4"
      alignItems="center"
      zIndex={10}
      bottom="0"
      right="0"
      left={0}
      pointerEvents="none"
      sx={{
        _web: {
          position: "fixed",
        },
      }}
    >
      <Box
        flexDirection="row"
        alignItems="center"
        maxWidth={1440}
        sx={{
          "@lg": {
            mx: 180,
          },
        }}
        width="85%"
        mx="$5"
        pointerEvents="none"
      >
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
          pointerEvents="box-only"
        >
          <NextImage
            alt="ui logo"
            src="/icon/favicons/ui.svg"
            width={24}
            height={24}
          />
          <Text ml="$3" lineHeight="$md" color="$textDark50">
            Made with gluestack-ui
          </Text>
        </Badge>
      </Box>
    </Box>
  );
};
export default BadgeComponent;

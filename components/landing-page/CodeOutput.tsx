import React from "react";
import { Box, HStack } from "@gluestack/design-system";

import { styled, StyledProvider } from "@gluestack-style/react";
import { Pressable, Text } from "react-native";
import { config } from "@/docs-components/gluestack-style/api/Variants/config";

const Button = styled(
  Pressable,
  {
    rounded: "$lg",
    py: "$3",
    px: "$9",
    variants: {
      variant: {
        solid: { bg: "$backgroundLight100" },
        outline: {
          bg: " rgba(255, 255, 255, 0.24)",
          borderWidth: "$1",
          borderColor: "$borderLight100",
        },
      },
    },
  },
  {}
);

const ButtonText = styled(
  Text,
  {
    lineHeight: "$sm",
    fontSize: "$sm",
    textAlign: "center",
  },
  {}
);

const CodeOutput = ({ ...props }: any) => {
  return (
    <StyledProvider config={config}>
      <Box
        borderWidth="$1"
        borderTopLeftRadius="$md"
        borderTopRightRadius="$md"
        zIndex={1}
        {...props}
        alignItems="center"
        justifyContent="space-evenly"
        minHeight={"200px"}
        sx={{
          borderColor: "$borderDark800",
          "@lg": {
            borderTopRightRadius: "0",
            borderBottomRightRadius: "0",
            borderRightWidth: "0",
            borderBottomLeftRadius: "$md",
            borderBottomWidth: "$1",
            flex: 1,
          },
          borderBottomWidth: 0,
          bg: "$black",
        }}
      >
        <HStack
          flexDirection="column"
          sx={{
            "@lg": {
              flexDirection: "row",
            },
          }}
          space={"md"}
        >
          <Button
            sx={{
              "@base": {
                mb: "$3",
              },
              "@lg": {
                mb: "$0",
              },
            }}
            accessibilityRole="button"
            variant="solid"
          >
            <ButtonText color="$black">Solid</ButtonText>
          </Button>
          <Button accessibilityRole="button" variant="outline">
            <ButtonText color="$white">Outline</ButtonText>
          </Button>
        </HStack>
      </Box>
    </StyledProvider>
  );
};

export default CodeOutput;

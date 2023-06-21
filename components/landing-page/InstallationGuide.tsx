import React from "react";

// @ts-ignore
import {
  Box,
  Text,
  HStack,
  Button,
  CheckIcon,
  ArrowForwardIcon,
  VStack,
  IconButton,
  // @ts-ignore
} from "@gluestack/design-system";

const InstallationGuide = () => {
  return (
    <Box justifyContent="center" flexDirection="row">
      {/* @ts-ignore */}
      <HStack
        alignItems="center"
        space="md"
        px="$6"
        py="$2"
        rounded="$full"
        sx={{
          platform: {
            web: {
              style: {
                background:
                  "linear-gradient(0deg, rgba(100, 116, 139, 0.2), rgba(100, 116, 139, 0.2)), radial-gradient(100% 100% at 0% 0%, rgba(79, 29, 158, 0.2) 63.13%, rgba(0, 0, 0, 0) 80%), radial-gradient(76.89% 199.86% at 126.89% 50%, rgba(29, 151, 158, 0.2) 0%, rgba(0, 0, 0, 0) 100%)",
              },
            },
          },
        }}
      >
        <Text color="white">npm install @gluestack-style/react</Text>
        {/* @ts-ignore */}
        <IconButton size="xs">
          <CheckIcon w="$3" h="$3" />
        </IconButton>
      </HStack>
    </Box>
  );
};

export default InstallationGuide;

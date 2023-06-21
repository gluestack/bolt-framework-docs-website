import {
  Box,
  Button,
  HStack,
  Link,
  OpenInNewIcon,
  Text,
} from "@gluestack/design-system";
import React from "react";
import { GeekyAntsIcon } from "./icons";

function MeetCreators() {
  return (
    <Box
      borderRadius="$xl"
      px="$12"
      py={60}
      style={{
        // @ts-ignore web-only
        background:
          "radial-gradient(208.6% 2959.48% at -48.77% -48.39%, #1B73ED 0%, rgba(46, 180, 255, 0.1) 28.74%, rgba(194, 46, 255, 0.1) 67.56%, rgba(46, 180, 255, 0.4) 78.65%, #1BC7ED 100%)",
      }}
      mb="$20"
      sx={{
        "@md": {
          px: "$24",
          mb: 200,
        },
      }}
    >
      <Text
        fontSize="$4xl"
        fontWeight="$bold"
        color="$textDark50"
        lineHeight="$4xl"
        mb="$4"
        textAlign="center"
        sx={{
          _dark: {
            color: "$textDark50",
          },
          "@sm": {
            fontSize: "$5xl",
          },
        }}
      >
        Meet the Creators
      </Text>
      <Text
        fontSize="$2xl"
        fontWeight="$semibold"
        color="$white"
        lineHeight="$xl"
        textAlign="center"
        sx={{
          _dark: {
            color: "$white",
          },
        }}
      >
        GeɘkyAnts - An OSS-loving, community-driven team of geeks!
      </Text>
      <Text
        fontSize="$lg"
        color="$textDark300"
        lineHeight="$lg"
        my="$7"
        textAlign="center"
        sx={{
          _dark: {
            color: "$textDark300",
          },
        }}
      >
        {`We are a team of development experts who love open-source and solving developer problems. We've built more than 500 products for organizations across the globe ranging from startups to big enterprises!`}
      </Text>
      <HStack justifyContent="center">
        <Link
          sx={{
            rounded: "$full",
            ":focusVisible": {
              outlineWidth: 0,
              bg: "$secondary50_alpha_20",
            },
          }}
          href="https://geekyants.com/?utm_source=gluestack-ui-home&utm_medium=home-page&utm_campaign=meet-the-creators"
          isExternal
        >
          <Button focusable={false} variant="secondary">
            <Button.Text mr={10} color="$textDark50" textDecorationLine="none">
              Visit GeekyAnts
            </Button.Text>
            <GeekyAntsIcon />
          </Button>
        </Link>
      </HStack>
    </Box>
  );
}

export default MeetCreators;

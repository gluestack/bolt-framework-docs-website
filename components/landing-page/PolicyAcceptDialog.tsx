import React, { useEffect } from "react";
// @ts-ignore
import { Box, Button, Text, HStack, VStack } from "@gluestack/design-system";
import NextLink from "next/link";

const PolicyAcceptDialog = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const check = localStorage.getItem("EU_COOKIE_LAW_CONSENT_GLUESTACK");
    if (check) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, []);

  const handleEulaAccept = () => {
    localStorage.setItem("EU_COOKIE_LAW_CONSENT_GLUESTACK", "true");
    setIsVisible(false);
  };
  if (isVisible) {
    return (
      <Box
        zIndex={1}
        justifyContent="center"
        position="fixed"
        overflow="hidden"
        bottom="$5"
        left="$0"
        right="$0"
        alignItems="center"
      >
        {/* @ts-ignore */}
        <HStack
          p="$5"
          borderWidth="$2"
          borderColor="$borderDark600"
          borderRadius="$xl"
          alignItems="center"
          mx="$2"
          maxWidth="85%"
          // flexWrap="wrap"
          sx={{
            _web: {
              background:
                "linear-gradient(90.63deg, #1D2735 5.82%, #201D32 31.29%, #201C33 52.32%, #1C2330 80.22%)",
              backdropFilter: "blur(10px)",
            },
            "@base": {
              flexDirection: "column",
            },
            "@md": {
              p: "$6",
              flexDirection: "row",
            },
            "@lg": {
              maxWidth: 768,
            },
          }}
        >
          {/* @ts-ignore */}
          <HStack alignItems="center" space="lg" flex="1">
            <Box>
              <CookieIcon />
            </Box>
            {/* @ts-ignore */}
            <VStack flex="1">
              <Text color="$textDark50" lineHeight="$md">
                We use cookies to optimise the website experience. Check our{" "}
                <NextLink
                  href="/cookie-policy"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Text color="$primary400" lineHeight="$md">
                    Privacy Policy.
                  </Text>
                </NextLink>
              </Text>
            </VStack>
          </HStack>
          <HStack
            space="sm"
            alignItems="center"
            mt="$6"
            sx={{
              "@md": {
                mt: 0,
              },
            }}
            // @ts-ignore
            alignSelf="flex-start"
          >
            {/* @ts-ignore */}
            <Button onPress={() => setIsVisible(false)} variant="secondary">
              <Button.Text>Deny</Button.Text>
            </Button>
            {/* @ts-ignore */}
            <Button onPress={handleEulaAccept}>
              <Button.Text>Accept</Button.Text>
            </Button>
          </HStack>
        </HStack>
      </Box>
    );
  } else return <></>;
};

const CookieIcon = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 4C20.0444 4 16.1776 5.17298 12.8886 7.37061C9.59962 9.56824 7.03617 12.6918 5.52242 16.3463C4.00867 20.0009 3.6126 24.0222 4.3843 27.9018C5.15601 31.7814 7.06082 35.3451 9.85787 38.1421C12.6549 40.9392 16.2186 42.844 20.0982 43.6157C23.9778 44.3874 27.9992 43.9913 31.6537 42.4776C35.3082 40.9638 38.4318 38.4004 40.6294 35.1114C42.827 31.8224 44 27.9556 44 24C42.61 24.428 41.1297 24.469 39.7181 24.1185C38.3066 23.7681 37.0173 23.0395 35.9889 22.0111C34.9605 20.9827 34.2319 19.6934 33.8815 18.2819C33.531 16.8703 33.572 15.39 34 14C32.61 14.428 31.1297 14.469 29.7181 14.1185C28.3066 13.7681 27.0173 13.0395 25.9889 12.0111C24.9605 10.9827 24.2319 9.6934 23.8815 8.28187C23.531 6.87034 23.572 5.38998 24 4"
        stroke="#F5F5F5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 17V17.0208"
        stroke="#F5F5F5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 31V31.0208"
        stroke="#F5F5F5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 24V24.0208"
        stroke="#F5F5F5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 34V34.0208"
        stroke="#F5F5F5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 28V28.0208"
        stroke="#F5F5F5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PolicyAcceptDialog;

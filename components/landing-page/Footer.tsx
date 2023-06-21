import React from "react";
// @ts-ignore

import {
  Box,
  HStack,
  VStack,
  Text,
  ArrowTopRightIcon,
} from "@gluestack/design-system";
import DankLogoSmall from "./DankLogoSmall";
import { CustomNextLink } from "./CustomNextLink";

const footerItems = [
  {
    title: "Overview",
    links: [
      {
        title: "Introduction",
        href: "/docs/overview/introduction",
      },

      {
        title: "API",
        href: "docs/overview/api",
      },
      {
        title: "Performance",
        href: "/docs/overview/performance",
      },
    ],
  },
  {
    title: "Docs",
    links: [
      {
        title: "Installation",
        href: "/docs/getting-started/installation",
      },
      {
        title: "Token and theme",
        href: "/docs/configuration/theme-tokens",
      },
      {
        title: "Variants",
        href: "/docs/api/variants",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        title: "GitHub",
        href: "https://github.com/gluestack/gluestack-style",
        target: "_blank",
        icon: <ArrowTopRightIcon color="$text200" width="$4" height="$4" />,
      },
      {
        title: "Twitter",
        href: "https://twitter.com/gluestack",
        target: "_blank",
        icon: <ArrowTopRightIcon color="$text200" width="$4" height="$4" />,
      },
      {
        title: "Discord",
        href: "https://discord.gg/95qQ84nf6f",
        target: "_blank",
        icon: <ArrowTopRightIcon color="$text200" width="$4" height="$4" />,
      },
    ],
  },
];

const Footer = () => {
  return (
    // @ts-ignore
    <VStack
      sx={{
        "@base": {
          mb: "$5",
        },
        "@md": {
          mb: "$7",
        },
      }}
    >
      <HStack flexWrap="wrap">
        <Box
          width="100%"
          sx={{
            "@base": {
              mb: "$4",
            },
            "@xl": {
              mb: "0",
              flex: 1,
            },
          }}
        >
          <CustomNextLink
            href="/"
            // style={{
            //   textDecoration: "none",
            // }}
          >
            <DankLogoSmall />
          </CustomNextLink>
        </Box>
        {footerItems.map((item, key1) => (
          <VStack
            key={key1}
            space="md"
            alignItems="flex-start"
            width="50%"
            sx={{
              "@base": {
                mt: "$6",
              },
              "@xl": {
                mt: "$0",
                flex: 1,
              },
            }}
          >
            <Text
              color="$textDark100"
              fontWeight="$medium"
              lineHeight="$sm"
              sx={{
                "@base": {
                  fontSize: "$sm",
                },
                "@md": {
                  fontSize: "$md",
                },
                _dark: {
                  color: "$textDark100",
                },
              }}
            >
              {item.title}
            </Text>
            <VStack space="md">
              {item.links.map((link: any, key2) => (
                <CustomNextLink
                  href={link.href}
                  key={key2}
                  target={link.target}
                  // style={{
                  //   textDecoration: "none",
                  // }}
                >
                  <HStack
                    alignItems="center"
                    space="md"
                    width="$full"
                    sx={{
                      "@md": {
                        width: "99%",
                      },
                      "@lg": {
                        width: "$full",
                      },
                    }}
                  >
                    <Text
                      color="$textDark400"
                      lineHeight="$sm"
                      sx={{
                        "@base": {
                          fontSize: "$sm",
                        },
                        "@md": {
                          fontSize: "$md",
                        },
                        _dark: {
                          color: "$textDark400",
                        },
                      }}
                    >
                      {link.title}
                    </Text>
                    {link?.icon && (
                      <svg
                        width="13"
                        height="12"
                        viewBox="0 0 13 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.00007 1C5.72393 1 5.50007 0.776142 5.50007 0.5C5.50007 0.223858 5.72393 0 6.00007 0H12.0001C12.2762 0 12.5001 0.223858 12.5001 0.5V6.5C12.5001 6.77614 12.2762 7 12.0001 7C11.7239 7 11.5001 6.77614 11.5001 6.5V1.7071L1.35355 11.8536C1.15829 12.0488 0.841707 12.0488 0.646445 11.8536C0.451184 11.6583 0.451185 11.3417 0.646448 11.1464L10.793 1H6.00007Z"
                          fill="#E5E5E5"
                        />
                      </svg>
                    )}
                  </HStack>
                </CustomNextLink>
              ))}
            </VStack>
          </VStack>
        ))}
      </HStack>
    </VStack>
  );
};

export default Footer;

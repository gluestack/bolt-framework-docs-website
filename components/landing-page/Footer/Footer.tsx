import React from "react";
import { Box, HStack, Text } from "@gluestack/design-system";
import Link from "next/link";
import Image from "next/image";
import { LogoDarkMode } from "@/components/Logos";

const communities = [
  {
    name: "GitHub",
    link: "https://github.com/gluestack-v2/framework-cli",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/gluestack",
  },
  {
    name: "Discord",
    link: "https://discord.gg/95qQ84nf6f",
  },
];

function Footer() {
  return (
    <Box
      sx={{
        _web: {
          background: "linear-gradient(to left, transparent, #3E485B)",
        },
      }}
    >
      <Box bg="$black" my={1}>
        <Box
          alignItems="center"
          style={{
            backgroundColor: "rgba(62, 72, 91, 0.2)",
          }}
          justifyContent="center"
          py={60}
        >
          <Link
            href="/"
            style={{
              textDecoration: "none",
            }}
          >
            <LogoDarkMode />
          </Link>
          <HStack alignItems="center" my="$3">
            <Link
              target="_blank"
              href="https://geekyants.com/?utm_source=gluestack&utm_medium=Footer&utm_campaign=gluestack/"
              style={{
                textDecoration: "none",
              }}
            >
              <HStack alignItems="center">
                <Text color="$textDark100" fontSize="$lg" lineHeight="$lg">
                  Built with love at{" "}
                </Text>
                <Image
                  src="/icon/geekyants.svg"
                  width={21}
                  height={20}
                  alt="geekyants_icon"
                />
                <Text color="$textDark100" fontSize="$lg" lineHeight="$lg">
                  {" "}
                  GeekyAnts
                </Text>
              </HStack>
            </Link>
          </HStack>
          <Text mb="$16" color="$textDark400" fontSize="$lg" lineHeight="$lg">
            Copyright © 2023 gluestack
          </Text>
          <HStack space="md" alignItems="center">
            {communities.map((item, index) => (
              <>
                <Link
                  href={item.link}
                  key={item.name + index}
                  target="_blank"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Text
                    color="$textDark100"
                    fontSize="$lg"
                    lineHeight="$lg"
                    fontWeight="$medium"
                  >
                    {item.name}
                  </Text>
                </Link>
                {index < communities.length - 1 && (
                  <Box w={1} h="$5" bg="$textDark500" />
                )}
              </>
            ))}
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;

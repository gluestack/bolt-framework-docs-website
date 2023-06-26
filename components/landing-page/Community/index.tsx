import React from "react";
import {
  Box,
  HStack,
  VStack,
  TwitterIcon,
  GitHubIcon,
  DiscordIcon,
  Text,
  Heading,
  Link,
} from "@gluestack/design-system";

const communities = [
  {
    name: "Twitter",
    icon: <TwitterIcon color="#1D9BF0" />,
    link: "https://twitter.com/gluestack",
    description:
      "Follow us on Twitter for updates and helpful tips on our community and projects.",
  },
  {
    name: "GitHub",
    icon: <GitHubIcon color="white" />,
    link: "https://github.com/gluestack/gluestack-style",
    description:
      "To file issues, request features, and contribute, check out our GitHub.",
  },
  {
    name: "Discord",
    icon: <DiscordIcon color="#7289DA" />,
    link: "https://discord.gg/95qQ84nf6f",
    description:
      "To get involved in the community, ask questions, and share tips.",
  },
];

const Community = () => {
  return (
    //  @ts-ignore
    <VStack
      mt="$20"
      mb="$20"
      sx={{
        "@md": {
          mb: 100,
          mt: 100,
        },
      }}
    >
      <Box>
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
          Community
        </Text>
        <Text
          fontSize="$xl"
          lineHeight="$xl"
          color="$textDark400"
          textAlign="center"
          mt="$3"
          sx={{
            "@md": {
              fontSize: "$2xl",
              lineHeight: "$2xl",
            },
            _dark: {
              color: "$textDark400",
            },
          }}
        >
          Get involved in our community. Everyone is welcome!
        </Text>
      </Box>
      <Box
        sx={{
          "@base": {
            flexDirection: "column",
            pt: "$7",
          },
          "@md": {
            flexDirection: "row",
            pt: 60,
          },
        }}
        flexWrap="wrap"
      >
        {communities.map((community, key) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Link
              sx={{
                "@base": {
                  mb: key === communities?.length - 1 ? 0 : "$4",
                },
                "@md": {
                  mb: 0,
                  mr: key === communities?.length - 1 ? 0 : "$1.5",
                  ml: key === 0 ? 0 : "$1.5",
                },
                ":focusVisible": {
                  outlineWidth: 0,
                  borderColor: "$primary700",
                },
              }}
              flex={1}
              borderRadius="$xl"
              overflow="hidden"
              borderWidth="$1"
              borderColor="$borderDark700"
              href={community.link}
              key={key}
              isExternal
            >
              <VStack space="md" p="$6">
                <HStack>
                  <HStack alignItems="center">
                    {community.icon}
                    <Text
                      fontSize="$xl"
                      fontWeight="$medium"
                      lineHeight="$xl"
                      color="$textDark50"
                      ml="$3" // can be omitted when space="$3 is supported"
                      sx={{
                        textDecorationLine: "none",
                        _dark: {
                          color: "$textDark50",
                        },
                      }}
                    >
                      {community.name}
                    </Text>
                  </HStack>
                </HStack>
                <Text
                  color="$textDark400"
                  flexWrap="wrap"
                  lineHeight="$md"
                  sx={{
                    _dark: {
                      color: "$textDark400",
                    },
                  }}
                >
                  {community.description}
                </Text>
              </VStack>
            </Link>
          );
        })}
      </Box>
    </VStack>
  );
};

export default Community;

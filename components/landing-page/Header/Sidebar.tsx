import {
  Box,
  Text,
  VStack,
  Sidebar as SidebarMain,
  HStack,
} from "@gluestack/design-system";
import Link from "next/link";
import React, { useState } from "react";

function Sidebar({ data, dropDownItems, setIsOpenSidebar }: any) {
  const [isCollapsible, setIsCollapsible] = useState(false);
  return (
    <SidebarMain
      overflow="scroll"
      bg="$backgroundDark900"
      sx={{
        "@lg": {
          display: "none",
        },
      }}
      width="100%"
      flex={1}
    >
      <VStack p="$5">
        {/* pressable was used to enable the toggle functionality */}
        {/* <Pressable
            flexDirection="row"
            onPress={() => setIsCollapsible(!isCollapsible)}
            alignItems="center"
            px="$4"
            py="$2"
            sx={{
              _web: {
                ":focus": {
                  outlineWidth: 0,
                  boxShadow: "none",

                  _dark: {
                    boxShadow: "none",
                  },
                },
              },
            }}
          > */}
        {/* </Pressable> */}
        <HStack alignItems="center" px="$4" py="$2">
          <Text
            color="$trueGray50"
            fontWeight="$medium"
            fontSize="$lg"
            lineHeight="$lg"
          >
            Ecosystem
          </Text>
          {/* <ChevronRightIcon
            ml="$1"
            color="$trueGray50"
            width="$3"
            height="$3"
          /> */}
        </HStack>
        <Box ml="$4">
          {dropDownItems?.map((item: any, index: number) => (
            <SidebarMain.GroupItem
              key={index + item.name}
              w="$full"
              focusable={false}
            >
              <Link
                href={item.link}
                key={item.name + "SidebarItem" + index}
                style={{
                  textDecoration: "none",
                  width: "100%",
                }}
                target="_blank"
              >
                <Box px="$4" py="$2" flexDirection="row" alignItems="center">
                  <Text
                    fontSize="$lg"
                    fontWeight="$medium"
                    lineHeight="$lg"
                    color="$textLight50"
                    mr="$3"
                  >
                    {item.name}
                  </Text>
                  {item.icon}
                  <Box
                    style={{
                      background:
                        "linear-gradient(260.55deg, rgba(21, 129, 228, 0.165) 11.83%, rgba(107, 54, 175, 0.183) 45.13%, rgba(42, 180, 217, 0.045) 93.61%)",
                      backdropFilter: "blur(12px)",
                    }}
                    py="$0.5"
                    px="$2.5"
                    ml="$3"
                    mt="$0.5"
                    borderRadius="$full"
                    borderWidth={2}
                    borderColor="$borderDark800"
                    alignSelf="flex-start"
                  >
                    <Text
                      fontSize="$2xs"
                      lineHeight="$2xs"
                      color="$textDark50"
                      sx={{
                        _dark: {
                          color: "$textDark50",
                        },
                      }}
                    >
                      {item.tag}
                    </Text>
                  </Box>
                </Box>
              </Link>
            </SidebarMain.GroupItem>
          ))}
        </Box>
        {data?.map((item: any, index: number) => (
          <SidebarMain.GroupItem key={index} w="$full" focusable={false}>
            <Link
              href={item.link}
              key={item.name + "SidebarItem" + index}
              style={{
                textDecoration: "none",
                width: "100%",
              }}
              target={item.isExternal ? "_blank" : "_self"}
            >
              <HStack px="$4" py="$2" alignItems="center" space="sm">
                <Text
                  fontSize="$lg"
                  fontWeight="$medium"
                  lineHeight="$lg"
                  color="$textLight50"
                >
                  {item.name}
                </Text>
                {item.icon}
              </HStack>
            </Link>
          </SidebarMain.GroupItem>
        ))}
        <SidebarMain.GroupItem w="$full" focusable={false} mt="$2">
          <a
            href="#subscribe"
            style={{
              textDecoration: "none",
              width: "100%",
            }}
            onClick={() => setIsOpenSidebar(false)}
          >
            <HStack px="$3" py="$2" alignItems="center" space="sm">
              <Text
                fontSize="$lg"
                fontWeight="$medium"
                lineHeight="$lg"
                color="$textLight50"
              >
                Get Updates
              </Text>
            </HStack>
          </a>
        </SidebarMain.GroupItem>
      </VStack>
    </SidebarMain>
  );
}

export default Sidebar;

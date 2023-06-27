import React from "react";
import {
  Box,
  Text,
  HStack,
  HamburgerIcon,
  Pressable,
  CloseIcon,
  Link,
  Nav,
  Button,
} from "@gluestack/design-system";
import Sidebar from "./Sidebar";
import { data, dropDownItems } from "./data";
import { MailIcon } from "./images";
import Dropdown from "./Dropdown";
import NextLink from "next/link";
import { LogoDarkMode } from "@/components/Logos";
import { CustomNextLink } from "../CustomNextLink";
import ComingSoonTag from "./ComingSoonTag";

const Header = ({ isOpenSidebar, setIsOpenSidebar }: any) => {
  return (
    <>
      <Nav
        w="$full"
        py="$4"
        position="sticky"
        alignItems="center"
        zIndex={10}
        top="0"
        left="0"
        sx={{
          bg: "background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 56%, rgba(0, 0, 0, 0.8) 100%)",
          backdropFilter: "blur(8px)",
        }}
      >
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          w="85%"
          maxWidth={1440}
          sx={{
            //@ts-ignore
            "@lg": {
              mx: 180,
            },
          }}
          mx={"$5"}
        >
          <HStack alignItems="center">
            <NextLink
              href="/"
              style={{
                textDecoration: "none",
                display: "inherit",
              }}
            >
              <LogoDarkMode />
            </NextLink>
            <ComingSoonTag />
            <Box
              ml="$6"
              sx={{
                display: "none",
                "@md": {
                  display: "flex",
                },
              }}
            >
              <Dropdown dropDownItems={dropDownItems} />
            </Box>
          </HStack>
          <Box
            alignItems="center"
            sx={{
              _web: {
                userSelect: "none",
              },
            }}
          >
            <HStack
              sx={{
                "@base": {
                  display: "none",
                },
                "@md": {
                  display: "flex",
                },
              }}
            >
              {data.map((item, index) => (
                <Box
                  key={item.name + index + item.name}
                  sx={{
                    display: "none",
                    "@lg": {
                      display: "flex",
                    },
                  }}
                >
                  <Link
                    href={item.link}
                    isExternal={item.isExternal}
                    px="$3"
                    py="$1"
                    rounded="$full"
                    sx={{
                      ":hover": {
                        bg: "$secondary50_alpha_10",
                      },
                    }}
                  >
                    <Text
                      color="$white"
                      fontWeight="$medium"
                      sx={{
                        "@base": {
                          fontSize: "$sm",
                        },
                        "@md": {
                          fontSize: "$md",
                        },
                      }}
                    >
                      {item.name}
                    </Text>
                  </Link>
                  {/* {item.isExternal ? (
                    <Link
                      href={item.link}
                      isExternal={item.isExternal}
                      px="$3"
                      py="$1"
                      rounded="$full"
                      sx={{
                        ":hover": {
                          bg: "$secondary50_alpha_10",
                        },
                      }}
                    >
                      <Text
                        color="$white"
                        fontWeight="$medium"
                        sx={{
                          "@base": {
                            fontSize: "$sm",
                          },
                          "@md": {
                            fontSize: "$md",
                          },
                        }}
                      >
                        {item.name}
                      </Text>
                    </Link>
                  ) : (
                    <Pressable>
                      {({ hovered }: any) => (
                        <CustomNextLink href={item.link}>
                          <Box
                            px="$3"
                            py="$1"
                            rounded="$full"
                            bg={
                              hovered ? "$secondary50_alpha_10" : "transparent"
                            }
                          >
                            <Text
                              color="$white"
                              fontWeight="$medium"
                              sx={{
                                "@base": {
                                  fontSize: "$sm",
                                },
                                "@md": {
                                  fontSize: "$md",
                                },
                              }}
                            >
                              {item.name}
                            </Text>
                          </Box>
                        </CustomNextLink>
                      )}
                    </Pressable>
                  )} */}
                </Box>
              ))}
              <Link href="#subscribe" ml="$3" rounded="$full">
                <Button px="$4" py="$1.5" alignItems="center">
                  <Button.Text
                    fontWeight="$medium"
                    color="$textDark50"
                    textDecorationLine="none"
                    mr="$1.5"
                    sx={{
                      "@base": {
                        fontSize: "$sm",
                        lineHeight: "$sm",
                      },
                      "@md": {
                        fontSize: "$md",
                        lineHeight: "$md",
                      },
                    }}
                  >
                    Get Updates
                  </Button.Text>
                  <MailIcon />
                </Button>
              </Link>
            </HStack>
            {/* Mobile design */}
            <Pressable
              onPress={() => {
                setIsOpenSidebar(!isOpenSidebar);
              }}
              display="flex"
              ml="$6"
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
                //@ts-ignore
                "@md": {
                  display: "none",
                },
              }}
            >
              {isOpenSidebar ? (
                <CloseIcon
                  sx={{
                    color: "$white",
                  }}
                  w="$4"
                  h="$4"
                />
              ) : (
                <HamburgerIcon
                  sx={{
                    color: "$white",
                  }}
                  w="$6"
                  h="$6"
                />
              )}
            </Pressable>
          </Box>
        </Box>
      </Nav>
      {isOpenSidebar && (
        <Sidebar
          data={data}
          dropDownItems={dropDownItems}
          setIsOpenSidebar={setIsOpenSidebar}
        />
      )}
    </>
  );
};

export default Header;

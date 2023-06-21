import React, { memo, useState } from "react";
import {
  VStack,
  Text,
  Tabs,
  HStack,
  CodePreview,
  Box,
  Heading,
} from "@gluestack/design-system";
import Link from "next/link";
import { styled, createStyled, StyledProvider } from "@gluestack-style/react";
import * as RN from "react-native";
import { config } from "@/docs-components/gluestack-style/components/nb.config";
import { Motion } from "@legendapp/motion";
import { MotionSvg } from "@legendapp/motion/svg";
import { AnimationResolver } from "@gluestack-style/animation-plugin";
import { getExpoSnackUrl } from "@/utils/get-expo-snack-url";
import {
  transformCodeForCodePreviewExample,
  transformCodeForSnackExample,
} from "@/utils/transform-code";
import { CustomNextLink } from "./CustomNextLink";

const ThemeCodeSnippet = memo(
  ({
    heading,
    description,
    tabs,
    hideTabs,
    code,
    readMoreLink,
    codePreviewProps,
    isInViewPort,
    ...props
  }: any) => {
    const [temp, setTemp] = useState(false);

    React.useEffect(() => {
      setTemp((prev) => !prev);
    }, [isInViewPort]);

    return (
      <VStack
        {...props}
        sx={{
          "@base": {
            mt: "$20",
          },
          "@md": {
            mt: 120,
          },
        }}
        // ref={ref}
      >
        <VStack
          sx={{
            "@lg": {
              width: "60%",
            },
          }}
        >
          <Heading
            my={0}
            fontSize="$4xl"
            fontWeight="$bold"
            lineHeight="$4xl"
            color="$textDark50"
            sx={{
              "@md": {
                fontSize: "$5xl",
              },
              _dark: {
                color: "$textDark50",
              },
            }}
          >
            {heading}
          </Heading>
          <Text
            fontSize="$xl"
            lineHeight="$xl"
            color="$textDark400"
            mt="$3"
            mb="$6"
            sx={{
              _dark: {
                color: "$textDark400",
              },
            }}
          >
            {description}
          </Text>

          <CustomNextLink
            href={readMoreLink}
            // sx={{ _text: { textDecoration: "none" } }}
          >
            <Text
              color="$primary400"
              fontSize="$lg"
              lineHeight="$md"
              fontWeight="$bold"
              sx={{
                _dark: {
                  color: "$primary500",
                },
              }}
            >
              Learn more
            </Text>
          </CustomNextLink>
        </VStack>
        {tabs && !hideTabs ? (
          <Tabs pt={60}>
            <Box>
              <Tabs.TabList
                flexDirection="row"
                alignSelf="flex-start"
                // @ts-ignore
                borderRadius="$md"
                bg="transparent"
                // @ts-ignore
                sx={{
                  "@sm": {
                    flexDirection: "row",
                  },
                  borderRadius: "$full",
                  bg: "#ffffff14",
                }}
              >
                {tabs?.tabList?.map(
                  ({ tabName, icon, hideRenderer }: any, index: number) => {
                    return (
                      <Tabs.Tab
                        onPress={() => setTemp((prev) => !prev)}
                        key={`tablist-${index}`}
                      >
                        <HStack space="sm" alignItems="center">
                          <Text color="$textDark50">{tabName}</Text>
                          {icon}
                        </HStack>
                      </Tabs.Tab>
                    );
                  }
                )}
              </Tabs.TabList>
            </Box>
            <Tabs.TabPanels mt="$7">
              {tabs?.tabPanels?.map((code: any, index: number) => {
                if (typeof code === "string") {
                  return (
                    <Tabs.TabPanel key={`tabpanel-${index}`}>
                      <CodePreview
                        showArgsController={false}
                        showComponentRenderer={
                          !tabs?.tabList?.[index]?.hideRenderer
                        }
                        direction="row"
                        codeBlockProps={{
                          height: "400px",
                        }}
                        // height='$96'
                        metaData={{
                          scope: {
                            styled,
                            AnimationResolver,
                            Provider: StyledProvider,
                            config,
                            useState,
                            ...RN,
                            Motion,
                            createStyled,
                            MotionSvg,
                          },
                          code: code,
                        }}
                        style={{
                          maxWidth: "100%",
                        }}
                        {...codePreviewProps}
                      />
                    </Tabs.TabPanel>
                  );
                } else {
                  const transformedCodeForCodePreview =
                    transformCodeForCodePreviewExample(
                      code.componentCode,
                      code.exampleCode
                    );
                  const transformedCodeForSnack = transformCodeForSnackExample(
                    code.componentCode,
                    code.exampleCode
                  );
                  return (
                    <Tabs.TabPanel key={`tabpanel-${index}`}>
                      <CodePreview
                        showArgsController={false}
                        showComponentRenderer={
                          !tabs?.tabList?.[index]?.hideRenderer
                        }
                        direction="row"
                        showExternalResource
                        href={
                          code?.externalLink
                            ? code?.externalLink
                            : tabs?.tabList[index].tabName === "Token"
                            ? getExpoSnackUrl(
                                transformedCodeForSnack,
                                "",
                                code?.imports,
                                false
                              )
                            : getExpoSnackUrl(
                                transformedCodeForSnack,
                                "",
                                code?.imports
                              )
                        }
                        codeBlockProps={{
                          height: "400px",
                        }}
                        // height='$96'
                        metaData={{
                          scope: {
                            styled,
                            AnimationResolver,
                            Provider: StyledProvider,
                            config,
                            useState,
                            ...RN,
                            Motion,
                            createStyled,
                            MotionSvg,
                          },
                          code: transformedCodeForCodePreview,
                        }}
                        style={{
                          maxWidth: "100%",
                        }}
                        {...codePreviewProps}
                      />
                    </Tabs.TabPanel>
                  );
                }
              })}
            </Tabs.TabPanels>
          </Tabs>
        ) : typeof code === "string" ? (
          <CodePreview
            mt={60}
            showArgsController={false}
            direction="row"
            rendererProps={{
              height: "400px",
            }}
            codeBlockProps={{
              height: "400px",
            }}
            metaData={{
              scope: {
                styled,
                AnimationResolver,
                Provider: StyledProvider,
                config,
                useState,
                ...RN,
                Motion,
                MotionSvg,
                createStyled,
              },
              code: code,
            }}
            style={{
              maxWidth: "100%",
            }}
          />
        ) : (
          <CodePreview
            mt={60}
            showArgsController={false}
            direction="row"
            rendererProps={{
              height: "400px",
            }}
            codeBlockProps={{
              height: "400px",
            }}
            showExternalResource
            href={
              code?.externalLink
                ? code?.externalLink
                : getExpoSnackUrl(
                    transformCodeForSnackExample(
                      code.componentCode,
                      code.exampleCode
                    ),
                    "",
                    code?.imports
                  )
            }
            metaData={{
              scope: {
                styled,
                AnimationResolver,
                Provider: StyledProvider,
                config,
                useState,
                ...RN,
                Motion,
                MotionSvg,
                createStyled,
              },
              code: transformCodeForCodePreviewExample(
                code.componentCode,
                code.exampleCode
              ),
            }}
            style={{
              maxWidth: "100%",
            }}
          />
        )}
      </VStack>
    );
  }
);

ThemeCodeSnippet.displayName = "ThemeCodeSnippet";

export default ThemeCodeSnippet;

import React, { memo } from "react";
import {
  Text,
  VStack,
  Heading,
  Link,
  HStack,
  Button,
  OpenInNewIcon,
} from "@gluestack/design-system";
import { CustomNextLink } from "../CustomNextLink";
import CustomArrowForwardIcon from "../../CustomArrowForwardIcon";
import ArchitectureDiagram from "./ArchitectureDiagram";

const Fold1 = memo(() => {
  return (
    <VStack
      pt="$10"
      mb="$20"
      sx={{
        "@md": {
          pt: 140,
          mb: 200,
        },
      }}
    >
      <VStack
        justifyContent="center"
        w="100%"
        sx={{
          "@sm": {
            m: "0 auto",
          },
          "@md": {
            maxWidth: 700,
          },
        }}
      >
        <Heading
          color="white"
          size="3xl"
          fontWeight="$bold"
          lineHeight="$4xl"
          textAlign="center"
          my="0"
          sx={{
            "@base": {
              fontSize: "$4xl",
              lineHeight: "$4xl",
              textAlign: "left",
              maxWidth: 300,
            },
            "@sm": {
              textAlign: "center",
              alignSelf: "center",
            },

            "@md": {
              fontSize: "$6xl",
              lineHeight: "$6xl",
              mx: 50,
              maxWidth: "100%",
            },
          }}
        >
          The Universal Project Runner
        </Heading>
        <Text
          color="$secondary300_alpha_70"
          fontSize="$lg"
          lineHeight="$2xl"
          textAlign="center"
          sx={{
            "@base": {
              mt: "$3",
              fontSize: "$2xl",
              lineHeight: "$2xl",
              textAlign: "left",
            },
            "@sm": {
              mt: "$4",
              fontSize: "$2xl",
              textAlign: "center",
            },
            _dark: {
              color: "$secondary300_alpha_70",
            },
          }}
        >
          Run Docker containers, child processes, or even encapsulate your
          entire project within a VM, all under one unified API.
        </Text>
      </VStack>
      <HStack
        sx={{
          "@base": {
            mt: "$9",
            flexDirection: "column",
            justifyContent: "center",
            mb: "$9",
          },
          "@md": {
            mt: 76,
            mb: "$8",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "flex-start",
          },
        }}
      >
        <CustomNextLink
          href="/docs"
          style={{
            textDecoration: "none",
            // outline: 0,
            marginBottom: 24,
            borderRadius: 999,
          }}
          sx={{
            outlineWidth: 0,
            ":focusVisible": {
              boxShadow:
                "0px 1px 3px rgba(10, 124, 255, 0.24), 0px 2px 6px rgba(10, 124, 255, 0.24), 0px 4px 8px rgba(10, 124, 255, 0.12), 0px 12px 48px -8px rgba(10, 124, 255, 0.48), inset 1px 1px 2px rgba(255, 255, 255, 0.24)",
            },
          }}
        >
          <Button
            focusable={false}
            pointerEvents="none"
            accessibilityLabel="Get started"
            variant="primary"
            sx={{
              "@base": {
                py: "$2.5",
              },
              "@md": {
                width: "auto",
              },
            }}
            px="$6"
          >
            <Button.Text
              fontWeight="$medium"
              fontSize="$md"
              lineHeight="$md"
              color="$textDark50"
              mr={6}
            >
              Get started
            </Button.Text>
            <CustomArrowForwardIcon />
          </Button>
        </CustomNextLink>

        <Link
          isExternal={true}
          href="https://discord.gg/GEP2gWgd"
          sx={{
            rounded: "$full",
            _text: {
              textDecoration: "none",
            },
            "@md": {
              ml: "$4",
            },
            ":focusVisible": {
              _web: {
                outlineWidth: 0,
              },
              bg: "$secondary50_alpha_20",
            },
          }}
        >
          <Button
            variant="secondary"
            py="$3"
            sx={{
              "@base": {
                px: 52,
                py: "$2.5",
              },
              "@md": {
                px: "$6",
              },
            }}
          >
            <Button.Text
              fontWeight="$medium"
              fontSize="$md"
              lineHeight="$md"
              color="$textDark50"
              mr={10}
            >
              Discord
            </Button.Text>
            <OpenInNewIcon color="white" h="$4" w="$4" />
          </Button>
        </Link>
      </HStack>
      <ArchitectureDiagram />
    </VStack>
  );
});

Fold1.displayName = "Fold1";

export default Fold1;

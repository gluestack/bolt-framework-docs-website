import React, { memo } from "react";
import {
  Box,
  CodeBlock,
  Tabs,
  Text,
  Heading,
  HStack,
} from "@gluestack/design-system";
import CodeOutput from "./CodeOutput";

const tabPanels = [
  `import { styled } from "@gluestack-style/react"; 
export const Button = styled(
  Pressable,
  {
    rounded: "$lg",
    py: "$3",
    px: "$9",
    variants: {
      variant: {
        solid: { bg: "$backgroundLight100" },
        outline: {
          bg: " rgba(255, 255, 255, 0.24)",
          borderWidth: "$1",
          borderColor: "$borderLight100",
        },
      },
    },
  },
  {}
);`,
  `import { styled } from "@gluestack-style/react"
export const ButtonText = styled(
  Text,
  {
    lineHeight: "$sm",
    fontSize: "$sm",
  },
  {}
);`,
  `import { Button } from "./Button";
import { ButtonText } from "./ButtonText";
const App = () => {
  return ( 
    <Provider config={config}>
      <Button variant='solid'>
        <ButtonText color="$black">Solid</ButtonText>
      </Button>
      <Button variant='outline'>
        <ButtonText color="$white">Outline</ButtonText>
      </Button>
    </Provider>
  )
}`,
];

// const outputCode =

const Fold2 = () => {
  const [showScroller, setShowScroller] = React.useState(false);
  return (
    <Box
      borderRadius="$xl"
      sx={{
        "@base": {
          mb: "$20",
        },
        "@sm": {
          mb: 200,
        },
        "@lg": {
          flexDirection: "row",
        },
      }}
      // overflow="hidden"
    >
      <CodeOutput />
      <Box
        flex={1}
        bg="#1a1d23"
        sx={{
          "@lg": {
            borderTopRightRadius: "$xl",
            borderBottomRightRadius: "$xl",
            borderBottomLeftRadius: "$none",
            borderWidth: "$1",
            borderLeftWidth: 0,
          },
          borderWidth: "$1",
          borderTopWidth: "$0",
          borderBottomLeftRadius: "$xl",
          borderBottomRightRadius: "$xl",
          borderColor: "$borderDark800",
        }}
        overflow="hidden"
      >
        <Tabs
          bg="#16181B"
          // sx={{
          //   "@md": {
          //     borderWidth: "$1",
          //     borderLeftWidth: 0,
          //   },
          //   borderWidth: "$1",
          //   borderTopWidth: "0",
          // }}
          // borderColor="$coolGray800"
        >
          <Box
            onMouseEnter={() => {
              setShowScroller(true);
            }}
            onMouseLeave={() => {
              setShowScroller(false);
            }}
            //@ts-ignore
            sx={{ "overflow-x": showScroller ? "overlay" : "hidden" }}
          >
            <CodeBlock.TabList pt="$1">
              <CodeBlock.Tab>
                <Text color="white">Button.tsx</Text>
              </CodeBlock.Tab>
              <CodeBlock.Tab>
                <Text color="white">ButtonText.tsx</Text>
              </CodeBlock.Tab>
              <CodeBlock.Tab>
                <Text color="white">App.tsx</Text>
              </CodeBlock.Tab>
            </CodeBlock.TabList>
          </Box>
          <Tabs.TabPanels>
            {tabPanels.map((code) => (
              <CodeBlock.TabPanel
                code={code.trim()}
                key={code}
                height="348px"
              />
            ))}
          </Tabs.TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default Fold2;

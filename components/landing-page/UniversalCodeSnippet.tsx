import React from "react";

// @ts-ignore
import { VStack, Heading, Text, Link } from "@gluestack/design-system";
import CodeWithOutputTab from "./CodeWithOutputTab";
import CodeWithOutput from "./CodeWithOutput";

const UniversalCodeSnippet = () => {
  return (
    // @ts-ignore
    <VStack space="xl" mt="$8">
      {/* @ts-ignore */}
      <VStack space="sm" w="50%">
        {/* @ts-ignore */}
        <Heading color="$textDark50">Universal</Heading>
        <Text color="$textDark300">
          Lorem ipsum dolor sit amet consectetur. Etiam etiam pharetra amet
          tristique enim. Faucibus lacus gravida ullamcorper risus eget. Vitae
          odio habitant tincidunt lacus cursus quis consectetur id. Tortor
          praesent vitae elementum justo viverra blandit justo donec. Ultricies
          cursus libero magna sodales sed ut diam amet.
        </Text>
        <Link
          href="/docs/api/platform-based-styles"
          style={{
            textDecoration: "none",
          }}
        >
          {/* <Text color="$primary500">Learn more</Text> */}
        </Link>
      </VStack>
      <CodeWithOutputTab />
      <CodeWithOutput />
    </VStack>
  );
};

export default UniversalCodeSnippet;

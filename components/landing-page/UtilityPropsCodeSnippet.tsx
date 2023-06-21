import React from "react";

// @ts-ignore
import { VStack, Heading, Text, Link } from "@gluestack/design-system";
import CodeWithOutput from "./CodeWithOutput";
import { NextLink } from "./NextLink";

const UtilityPropsCodeSnippet = () => {
  return (
    // @ts-ignore
    <VStack space="xl" mt="$8">
      {/* @ts-ignore */}
      <VStack space="sm" w="50%">
        {/* @ts-ignore */}
        <Heading color="$textDark50">Utility Props</Heading>
        <Text color="$textDark300">
          Lorem ipsum dolor sit amet consectetur. Etiam etiam pharetra amet
          tristique enim. Faucibus lacus gravida ullamcorper risus eget. Vitae
          odio habitant tincidunt lacus cursus quis consectetur id. Tortor
          praesent vitae elementum justo viverra blandit justo donec. Ultricies
          cursus libero magna sodales sed ut diam amet.
        </Text>

        <NextLink href="/docs/api/utility-props">
          <Text color="$primary500">Learn more</Text>
        </NextLink>
      </VStack>
      <CodeWithOutput />
    </VStack>
  );
};

export default UtilityPropsCodeSnippet;

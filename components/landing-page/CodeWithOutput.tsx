import React from "react";
// @ts-ignore
import { HStack, Box, CodeBlock } from "@gluestack/design-system";

const CodeWithOutput = ({ code = "", ...props }: any) => {
  return (
    <HStack
      base-flexDirection="column"
      md-flexDirection="row"
      md-h="$96"
      borderRadius="$xl"
      overflow="hidden"
      {...props}
    >
      <Box flex={1} bg="white"></Box>
      <Box flex={1} bg="#1A1D23">
        <CodeBlock withLineNumbers code={code} bg="#1A1D23" />
      </Box>
    </HStack>
  );
};

export default CodeWithOutput;

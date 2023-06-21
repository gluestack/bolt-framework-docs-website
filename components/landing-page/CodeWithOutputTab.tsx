import React from "react";

import { HStack, Button, CheckIcon } from "@gluestack/design-system";

const CodeWithOutputTab = () => {
  return (
    <HStack borderRadius="$md" sx={{ overflow: "hidden" }} space="sm">
      <Button variant="secondary">
        <Button.Text>Token</Button.Text>
        <CheckIcon />
      </Button>
      <Button variant="secondary">
        <Button.Text>Theme</Button.Text>
        <CheckIcon />
      </Button>
      <Button variant="secondary">
        <Button.Text>Typescript</Button.Text>
        <CheckIcon />
      </Button>
    </HStack>
  );
};

export default CodeWithOutputTab;

import React from "react";
import { VStack } from "@gluestack/design-system";
import More from "./More";
import Community from "./Community";

import Fold1 from "./Fold1";

const MainContent = () => {
  return (
    <VStack>
      <Fold1 />
      <Community />
      <More />
    </VStack>
  );
};

export default MainContent;

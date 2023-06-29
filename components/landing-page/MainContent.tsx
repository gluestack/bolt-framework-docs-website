import React from "react";
import { Box, VStack } from "@gluestack/design-system";
import More from "./More";
import Community from "./Community";

import Fold1 from "./Fold1";
import ArchitectureDiagram from "./Fold1/ArchitectureDiagram";

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

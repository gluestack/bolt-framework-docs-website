import React from "react";
import { Community, Ecosystem, VStack } from "@gluestack/design-system";
import Fold1 from "./Fold1";
import { communities } from "./data";

const MainContent = () => {
  return (
    <VStack>
      <Fold1 />
      <Community communities={communities} />
      <Ecosystem values={["style", "ui", "framework"]} />
    </VStack>
  );
};

export default MainContent;

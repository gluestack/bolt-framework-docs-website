import React from "react";
import { Box, VStack } from "@gluestack/design-system";
import Fold1 from "./Fold1";
import Fold2 from "./Fold2";
import Fold3 from "./Fold3";
import Statistics from "./Statistics";
import ThemeCodeSnippet from "./ThemeCodeSnippet";
import { mainContent } from "./content";
import Inspiration from "./Inspiration";
import More from "./More";
import MeetCreators from "./MeetCreators";
import Community from "./Community";
import { useIsInViewport } from "hooks";

function Fold5() {
  const [ref, isInViewport] = useIsInViewport();

  return (
    <div ref={ref}>
      <ThemeCodeSnippet isInViewPort={isInViewport} {...mainContent[5]} />
    </div>
  );
}

const MainContent = () => {
  return (
    // @ts-ignore
    <VStack>
      <Fold1 />
      <Community />
      <More />
    </VStack>
  );
};

export const DankBtnLogo = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="7.2" height="7.2" rx="2" fill="#3F3B3B" />
      <rect y="8.3999" width="7.2" height="7.2" rx="2" fill="#3F3B3B" />
      <rect y="16.7998" width="7.2" height="7.2" rx="2" fill="#3F3B3B" />
      <rect x="8.40039" width="7.2" height="7.2" rx="2" fill="#3F3B3B" />
      <rect
        x="8.40039"
        y="8.3999"
        width="7.2"
        height="7.2"
        rx="2"
        fill="#3F3B3B"
      />
      <rect
        x="8.40039"
        y="16.7998"
        width="7.2"
        height="7.2"
        rx="2"
        fill="#3F3B3B"
      />
      <rect x="16.8008" width="7.2" height="7.2" rx="2" fill="#3F3B3B" />
      <rect
        x="16.8008"
        y="8.3999"
        width="7.2"
        height="7.2"
        rx="2"
        fill="#3F3B3B"
      />
      <rect
        x="16.8008"
        y="16.7998"
        width="7.2"
        height="7.2"
        rx="2"
        fill="#3F3B3B"
      />
      <path
        d="M11.3633 10.8859L12.8205 4.2002L6.59961 13.1145H12.0358L10.5787 19.8002L16.7996 10.8859H11.3633Z"
        fill="#3F3B3B"
        stroke="#1A91FF"
        stroke-width="1.25"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MainContent;

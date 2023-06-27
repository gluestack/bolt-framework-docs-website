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
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="32"
        height="32"
        rx="2"
        fill="url(#paint0_linear_7965_77042)"
      />
      <path
        d="M8 14.3559L15.9998 8.46325V11.2441L8 17.1368V14.3559Z"
        fill="white"
      />
      <path
        d="M23.9995 14.356L15.9998 8.46332V11.2442L23.9995 17.1368V14.356Z"
        fill="white"
      />
      <path
        d="M8 20.7558L15.9998 14.8632V17.6441L8 23.5367V20.7558Z"
        fill="white"
      />
      <path
        d="M23.9995 20.7559L15.9998 14.8632V17.6441L23.9995 23.5367V20.7559Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_7965_77042"
          x1="-8.31618"
          y1="-46.0313"
          x2="48.7819"
          y2="54.6382"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#066B8B" />
          <stop offset="0.885432" stop-color="#4CCCB5" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default MainContent;

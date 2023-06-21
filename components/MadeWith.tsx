import { Badge, Box, Text } from "@gluestack/design-system";
import React, { useEffect, useState } from "react";
import { DankBtnLogo } from "./landing-page/MainContent";

function MadeWith() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPos((prev) => window.scrollY);
    });
  }, []);

  console.log(scrollPos, "scrollPos");

  // console.log(window.innerHeight);

  return (
    <Box
      position="absolute"
      right="0"
      // bottom="$6"
      //   bg="red"
      width={185}
    >
      <Box
        width={185}
        height={48}
        //  @ts-ignore
        position="fixed"
        bottom="$6"
        // sx={{
        //   "@base": {
        //     bottom: scrollPos > 12630 ? "$96" : "$6",
        //   },
        //   "@sm": {
        //     bottom: scrollPos > 12630 ? "$48" : "$6",
        //   },
        //   "@md": {
        //     bottom: scrollPos > 9626 ? "$48" : "$6",
        //   },
        //   "@lg": {
        //     bottom: scrollPos > 9626 ? "$48" : "$6",
        //   },
        //   "@xl": {
        //     bottom: scrollPos > 9626 ? "$48" : "$6",
        //   },
        // }}
      >
        <Badge
          //  @ts-ignore
          variant="unstyled"
          p="$3"
          borderRadius="$xl"
          borderWidth={2}
          borderColor="$borderDark700"
          style={{
            //  @ts-ignore
            background:
              "linear-gradient(90.89deg, #1D2130 0%, #20253C 34.68%, #332E52 54.82%, #222F46 102.19%)",
          }}
          zIndex={50}
        >
          <DankBtnLogo />
          <Text ml="$3" lineHeight="$md" color="$textDark50">
            Made with gluestack-style
          </Text>
        </Badge>
      </Box>
    </Box>
  );
}

export default MadeWith;

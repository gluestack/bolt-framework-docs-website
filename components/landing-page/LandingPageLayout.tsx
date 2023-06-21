import React from "react";
// @ts-ignore
import { Badge, Box, HStack, Text } from "@gluestack/design-system";
import Header from "./Header";
import MainContent, { DankBtnLogo } from "./MainContent";
import Footer from "./Footer";
import Head from "next/head";
import BgImage from "./bgImage";
import NewsletterFold from "./NewsletterFold";
import MeetCreators from "./MeetCreators";
import BadgeComponent from "./BadgeComponent";

const LandingPageLayout = () => {
  const [isOpenSidebar, setIsOpenSidebar] = React.useState(false);

  return (
    <Box
      bg={isOpenSidebar ? "$backgroundDark900" : "$black"}
      flex={isOpenSidebar ? 1 : undefined}
    >
      <Box
        display="block"
        position="absolute"
        top="0"
        left="0"
        right="0"
        zIndex={-1}
      >
        <BgImage />
      </Box>
      <Head>
        <link rel="icon" type="image/x-icon" href="/icon/favicon.ico" />
        <title>gluestack-style: Universal and Performant styling Library</title>
        <meta
          name="description"
          content="gluestack-style is a universal & performant styling library for React Native, Next.js, Expo & React"
        />
        <meta
          property="og:title"
          content="gluestack-style: Universal and performant styling library"
        />
        <meta
          property="og:description"
          content="gluestack-style is a universal & performant styling library for React Native, Next.js, Expo & React"
        />
        <meta property="og:url" content="https://style.gluestack.io/" />
        <meta
          property="og:logo"
          content="https://style.gluestack.io/assets/logo.png"
        />
        <meta property="og:site_name" content="gluestack-style" />
        <meta
          name="og:image"
          content="https://style.gluestack.io/gluestack-style-og.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gluestack" />
        <meta
          property="twitter:title"
          content="gluestack-style: Universal and Performant styling Library"
        />
        <meta
          property="twitter:description"
          content="gluestack-style is a universal & performant styling library for React Native, Next.js, Expo & React"
        />
        <meta
          name="twitter:image"
          content="https://style.gluestack.io/gluestack-style-og.png"
        />

        <meta
          name="twitter:image:alt"
          content="gluestack-style is a universal & performant styling library for React Native, Next.js, Expo & React"
        />
        <meta
          name="google-site-verification"
          content="407fPlqhFVvkfGtuTVXUzXwd-Mcri2Lu4PDNwPFrpS4"
        />

        <link rel="canonical" href="https://style.gluestack.io/" />
      </Head>

      <Header
        isOpenSidebar={isOpenSidebar}
        setIsOpenSidebar={setIsOpenSidebar}
      />

      <Box>
        <Box
          justifyContent="center"
          display={isOpenSidebar ? "none" : "flex"}
          maxWidth={1200}
          w="85%"
          sx={{
            "@lg": {
              w: "70%",
            },
          }}
          margin="0 auto"
          position="relative"
        >
          <MainContent />
        </Box>
        <Box display={isOpenSidebar ? "none" : "flex"}>
          <NewsletterFold />
        </Box>
        <Box
          justifyContent="center"
          display={isOpenSidebar ? "none" : "flex"}
          maxWidth={1200}
          w="85%"
          sx={{
            "@lg": {
              w: "70%",
            },
          }}
          margin="0 auto"
          position="relative"
        >
          <MeetCreators />
        </Box>

        <Box
          justifyContent="center"
          display={isOpenSidebar ? "none" : "flex"}
          maxWidth={1200}
          w="85%"
          sx={{
            "@lg": {
              w: "70%",
            },
          }}
          margin="0 auto"
          position="relative"
        >
          <Footer />
        </Box>
      </Box>
      <Box
        position="sticky"
        bottom="$6"
        right="0"
        justifyContent="space-between"
        w="85%"
        maxWidth={1440}
        margin="0 auto"
        pointerEvents="none"
      >
        <HStack justifyContent="flex-end">
          <Badge
            p="$3"
            borderRadius="$xl"
            borderWidth={2}
            borderColor="$borderDark700"
            style={{
              // @ts-ignore
              background:
                "linear-gradient(90.89deg, #1D2130 0%, #20253C 34.68%, #332E52 54.82%, #222F46 102.19%)",
            }}
            zIndex={50}
            pointerEvents="box-only"
          >
            <DankBtnLogo />
            <Text ml="$3" lineHeight="$md" color="$textDark50">
              Made with gluestack-style
            </Text>
          </Badge>
        </HStack>
      </Box>
    </Box>
  );
};

export default LandingPageLayout;

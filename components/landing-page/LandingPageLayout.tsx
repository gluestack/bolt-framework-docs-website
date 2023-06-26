import React from "react";
// @ts-ignore
import { Badge, Box, HStack, Text } from "@gluestack/design-system";
import Header from "./Header";
import MainContent, { DankBtnLogo } from "./MainContent";
// import Footer from "./Footer";
import Footer from "./Footer/Footer";
import Head from "next/head";
import BgImage from "./bgImage";
import NewsletterFold from "./NewsletterFold";
import MeetCreators from "./MeetCreators";
import BadgeComponent from "./BadgeComponent";
import NextImage from "next/image";

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
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>Bolt: Development environment without the pain</title>
        <meta
          name="description"
          content="Bolt runs the dev environment on your machine with the option of running services on the host machine, Docker and inside a VM with a unified API"
        />
        <meta
          property="og:title"
          content="Bolt: Development environment without the pain"
        />
        <meta
          property="og:description"
          content="Bolt runs the dev environment on your machine with the option of running services on the host machine, Docker and inside a VM with a unified API"
        />
        <meta property="og:url" content="https://seal-framework.gluestack.io" />
        {/* <meta
          property="og:logo"
          content="https://seal-framework.gluestack.io/assets/logo.png"
        /> */}
        <meta property="og:site_name" content="Bolt" />
        {/* <meta
          name="og:image"
          content="https://seal-framework.gluestack.io/images/og-image.png"
        /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gluestack" />
        <meta
          property="twitter:title"
          content="Bolt: Development environment without the pain"
        />
        <meta
          property="twitter:description"
          content="Bolt runs the dev environment on your machine with the option of running services on the host machine, Docker and inside a VM with a unified API"
        />
        {/* <meta
          name="twitter:image"
          content="https://seal-framework.gluestack.io/images/og-image.png"
        /> */}

        <meta
          name="twitter:image:alt"
          content="Bolt runs the dev environment on your machine with the option of running services on the host machine, Docker and inside a VM with a unified API"
        />
        {/* need to update the content below */}
        {/* <meta
          name="google-site-verification"
          content="407fPlqhFVvkfGtuTVXUzXwd-Mcri2Lu4PDNwPFrpS4"
        /> */}

        <link rel="canonical" href="https://seal-framework.gluestack.io" />
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
        {/* <Box
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
        </Box> */}

        <Box display={isOpenSidebar ? "none" : "flex"}>
          <Footer />
        </Box>
      </Box>
      <Box
        pb="$4"
        alignItems="center"
        zIndex={10}
        bottom="0"
        right="0"
        left={0}
        pointerEvents="none"
        sx={{
          _web: {
            position: "fixed",
          },
        }}
      >
        <Box
          flexDirection="row"
          alignItems="center"
          maxWidth={1440}
          sx={{
            "@lg": {
              mx: 180,
            },
          }}
          width="85%"
          mx="$5"
          pointerEvents="none"
        >
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
            ml="auto"
            pointerEvents="box-only"
          >
            <NextImage
              alt="ui logo"
              src="/icon/favicons/ui.svg"
              width={24}
              height={24}
            />
            <Text ml="$3" lineHeight="$md" color="$textDark50">
              Made with gluestack-ui
            </Text>
          </Badge>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPageLayout;

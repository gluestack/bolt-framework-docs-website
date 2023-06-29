import React from "react";
// @ts-ignore
import { Box } from "@gluestack/design-system";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer/Footer";
import Head from "next/head";
import BgImage from "./bgImage";
import NewsletterFold from "./NewsletterFold";
import BadgeComponent from "./BadgeComponent";

const LandingPageLayout = () => {
  const [isOpenSidebar, setIsOpenSidebar] = React.useState(false);

  return (
    <Box
      bg={isOpenSidebar ? "$backgroundDark900" : "$black"}
      flex={isOpenSidebar ? 1 : undefined}
    >
      <Box
        sx={{
          _web: {
            display: "block",
          },
        }}
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
        <title>Bolt: The Universal Project Runner</title>
        <meta
          name="description"
          content="Run Docker containers, child processes, or even encapsulate your entire project within a VM, all under one unified API."
        />
        <meta
          property="og:title"
          content="Bolt: The Universal Project Runner"
        />
        <meta
          property="og:description"
          content="Run Docker containers, child processes, or even encapsulate your entire project within a VM, all under one unified API."
        />
        <meta property="og:url" content="https://bolt.gluestack.io" />
        <meta
          property="og:logo"
          content="https://bolt.gluestack.io/assets/logo.png"
        />
        <meta property="og:site_name" content="Bolt" />
        <meta
          name="og:image"
          content="https://bolt.gluestack.io/og-image.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gluestack" />
        <meta
          property="twitter:title"
          content="Bolt: The Universal Project Runner"
        />
        <meta
          property="twitter:description"
          content="Run Docker containers, child processes, or even encapsulate your entire project within a VM, all under one unified API."
        />
        <meta
          name="twitter:image"
          content="https://bolt.gluestack.io/og-image.png"
        />

        <meta
          name="twitter:image:alt"
          content="Run Docker containers, child processes, or even encapsulate your entire project within a VM, all under one unified API."
        />

        <meta
          name="google-site-verification"
          content="407fPlqhFVvkfGtuTVXUzXwd-Mcri2Lu4PDNwPFrpS4"
        />

        <link rel="canonical" href="https://bolt.gluestack.io" />
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

        <Box display={isOpenSidebar ? "none" : "flex"}>
          <Footer />
        </Box>
      </Box>
      <BadgeComponent />
    </Box>
  );
};

export default LandingPageLayout;

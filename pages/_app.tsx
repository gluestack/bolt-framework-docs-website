import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Image from "next/image";
import data from "./docs/versions.json";
import { useEffect, useRef, useState } from "react";
import { CustomNextLink } from "@/components/landing-page/CustomNextLink";

import { AppProvider, Box, Layout } from "@gluestack/design-system";

import { MDXProvider } from "@mdx-js/react";
import React from "react";
import Script from "next/script";

const headerItems = {
  left: [
    {
      type: "link",
      icon: (
        <Box h={"30px"} w={"247px"}>
          <Image src="/icon/logo/bolt-light.svg" alt="Github" fill />
        </Box>
      ),
      darkIcon: (
        <Box h={"30px"} w={"247px"}>
          <Image src="/icon/logo/bolt-dark.svg" alt="Github" fill />
        </Box>
      ),
      text: "",
      url: "/",
    },
  ],
  right: [
    // {
    //   type: "link",
    //   url: "https://github.com/gluestack/gluestack-style",
    //   icon: (
    //     <Image
    //       src="/icon/social/figma.svg"
    //       alt="Github"
    //       height="24"
    //       width="24"
    //     />
    //   ),
    //   text: "figma",
    // },
    {
      type: "link",
      url: "https://github.com/gluestack-v2/seal-framework-docs",
      icon: (
        <Image
          src="/icon/social/github.svg"
          alt="Github"
          height="24"
          width="24"
        />
      ),
      darkIcon: (
        <Image
          src="/icon/social/github-dark.svg"
          alt="Github"
          height="24"
          width="24"
        />
      ),
      text: "github",
    },
    {
      type: "link",
      url: "https://discord.gg/GEP2gWgd",
      icon: (
        <Image
          src="/icon/social/discord.svg"
          alt="Discord"
          height="24"
          width="24"
        />
      ),
      darkIcon: (
        <Image
          src="/icon/social/discord-dark.svg"
          alt="Discord"
          height="24"
          width="24"
        />
      ),
      text: "discord",
    },
  ],
  center: [{}],
};

function App({ Component, pageProps }: AppProps) {
  const versions = data.versions;
  const docsLayoutRef = useRef(null);
  const router = useRouter();

  const [colorMode, setColorMode] = React.useState("dark");
  const toggleColorMode = async () => {
    colorMode === "light" ? setColorMode("dark") : setColorMode("light");
  };

  useEffect(() => {
    if (docsLayoutRef?.current) {
      //@ts-ignore
      docsLayoutRef?.current?.scrollTo(0, 0);
    }
  }, [router.pathname]);

  // useEffect(() => {
  //   (async () => {
  //     const currColorMode = await colorModeManager.get();
  //     console.log(currColorMode, "currColorMode");
  //     setColorMode(currColorMode);
  //   })();
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     console.log(colorMode, "colorMode");
  //     await colorModeManager.set(colorMode);
  //   })();
  // }, [colorMode]);

  // useEffect(() => {
  //   const handleRouteChange = ({ url }: any) => GTMPageView(url);
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, []);

  // const darkMode = useDarkMode(false, {
  //   onChange: (state: any) => {
  //     const htmlElement = document.documentElement;
  //     if (state) {
  //       htmlElement.classList.add("dark");
  //       htmlElement.classList.remove("light");
  //     } else {
  //       htmlElement.classList.add("light");
  //       htmlElement.classList.remove("dark");
  //     }
  //   },
  // });

  let latestVersion = versions[versions.length - 1]?.version;
  let sidebarData = versions[versions.length - 1]?.pages;

  if (router.pathname.includes("/docs")) {
    return (
      <Layout
        version={latestVersion}
        sidebarItems={sidebarData}
        headerItems={headerItems}
        router={router}
        Link={CustomNextLink}
        MDXProvider={MDXProvider}
        Image={Image}
        colorMode={colorMode}
        toggleColorMode={toggleColorMode}
        ref={docsLayoutRef}
        fluidLayout={false}
      >
        {/* <MDXProvider
          components={{
            h1: (x) => {
              return <H1 {...x} mb={10} lineHeight={56} />;
            },
            h2: (x) => {
              return <H2 {...x} mt={32} />;
            },
            h3: (x) => {
              return <H3 {...x} mt={12} />;
            },
            pre: (x) => {
              console.log(x, "Code Props");

              //@ts-ignore
              return <Code {...x.children.props} h="max-content" />;
            },
            ul: (x) => <UL {...x} mb={32} />,
            ol: (x) => <UL {...x} mb={32} />,
            li: (x) => {
              console.log("X", x);
              return <LI {...x} containerProps={{ mb: 16 }} />;
            },
            p: (x) => (
              <Text {...x} mb={24} lineHeight={24} fontFamily="$body" />
            ),
            code: (x) => {
              return <InlineCode>{x.children}</InlineCode>;
            },
            blockquote: (x) => {
              //@ts-ignore  x.children[1].props added due to internal bug in next-mdx
              return <BlockQuote {...x.children[1].props} mb={24} />;
            },
          }}
        >
          <PagesLayout
            version={version}
            versionInfo={getSidebarJsonData()}
            setVersion={setVersion}
            versionsData={versions}
            showBackButton={showBackButton}
          > */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
        </Script>
        <Component {...pageProps} />
        {/* <PrevNextButtons /> */}
        {/* </PagesLayout> */}
        {/* </MDXProvider> */}
      </Layout>
    );
  } else {
    return (
      <AppProvider colorMode="dark">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
        </Script>
        <Component {...pageProps} />
      </AppProvider>
    );
  }
}

export default App;

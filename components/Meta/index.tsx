import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

function Meta({ pageTitle, description, ogImgUrl, ogUrl }: any) {
  const router = useRouter();
  const canonical = `https://bolt.gluestack.io${router.asPath.split("?")[0]}`; // change for your project

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index,follow" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href={canonical} />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
        />
        <title>{pageTitle || "gluestack-style"}</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta
          key="description"
          name="description"
          content={
            description ||
            "Run Docker containers, child processes, or even encapsulate your entire project within a VM, all under one unified API."
          }
        />
        <meta key="og:type" property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          key="og:title"
          property="og:title"
          content={pageTitle || "Bolt: The Universal Project Runner"}
        />
        <meta
          name="twitter:title"
          content={pageTitle || "Bolt: The Universal Project Runner"}
        />
        <meta
          key="og:description"
          property="og:description"
          content={
            description ||
            "Run Docker containers, child processes, or even encapsulate your entire project within a VM, all under one unified API."
          }
        />
        <meta
          property="twitter:description"
          content={
            description ||
            "Run Docker containers, child processes, or even encapsulate your entire project within a VM, all under one unified API."
          }
        />
        <meta
          key="og:image"
          property="og:image"
          content={ogImgUrl || "https://bolt.gluestack.io/og-tag.png"}
        />
        <meta
          name="twitter:image"
          content={ogImgUrl || "https://bolt.gluestack.io/og-tag.png"}
        />
        <meta
          property="og:url"
          content={ogUrl || "https://bolt.gluestack.io"}
        />
        <meta
          property="twitter:url"
          content={ogUrl || "https://bolt.gluestack.io"}
        />
      </Head>
    </>
  );
}

export default Meta;

import * as React from "react";
// @ts-ignore
import { AppRegistry } from "react-native-web";
import ExpoDocument, { Html, Head, Main, NextScript } from "next/document";
// @ts-ignore
import { flush } from "@gluestack/design-system";
class Document extends ExpoDocument {
  render() {
    return (
      <Html style={{ height: "100%" }} className="gs gs-dark">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            // @ts-ignore
            crossorigin
          />
          {/* plus jakarta sans font */}
          <link
            href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />

          {/* inter font */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          {/* Source code pro */}
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500&display=swap"
            rel="stylesheet"
          />
          <meta
            name="google-site-verification"
            content="nBG0oe2XkPBak7h3AGW3dLqBXiRtcWJoyKh_0tkp_l0"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export const style = `
html, body, #__next {
  width: 100%;
  /* To smooth any scrolling behavior */
  -webkit-overflow-scrolling: touch;
  margin: 0px;
  padding: 0px;
  /* Allows content to fill the viewport and go beyond the bottom */
  min-height: 100%;
  height: 100%; /* standard */
  height: -webkit-fill-available; /* Safari and Chrome */
  height: -ms-available; /* Internet Explorer/Edge */
  height: -moz-available; /* Firefox */
}

@-moz-document url-prefix() {
  body {
     height: auto;
  }
}

#__next { id=__next-
  flex-shrink: 0;
  flex-basis: auto;
  flex-direction: column;
  flex-grow: 1;
  display: flex;
  flex: 1;
}
html {
  scroll-behavior: smooth;
  /* Prevent text size change on orientation change
  https://gist.github.com/tfausak/2222823#file-ios-8-web-app-html-L138 */
  -webkit-text-size-adjust: 100%;
  height: 100%;
}
body {
  display: flex;
  /* Allows you to scroll below the viewport; default value is visible */
  overflow-y: overlay;
  overscroll-behavior-y: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // -ms-overflow-style: scrollbar;

}

[data-style~="1mj1wmr-1mj1wmr"] {
  align-items: normal !important;
}
`;

export async function getInitialProps({ renderPage }: any) {
  AppRegistry.registerComponent("Main", () => Main);
  const { getStyleElement } = AppRegistry.getApplication("Main");
  const page = await renderPage();
  const styles = [
    // eslint-disable-next-line react/jsx-key
    <style dangerouslySetInnerHTML={{ __html: style }} />,
    getStyleElement(),
    ...flush(),
  ];
  return { ...page, styles: React.Children.toArray(styles) };
}

Document.getInitialProps = getInitialProps;

export default Document;

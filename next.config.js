/** @type {import('next').NextConfig} */
const path = require("path");
const { withGluestackUI } = require("@gluestack/ui-next-adapter");

const withPlugins = require("next-compose-plugins");
const { withExpo } = require("@expo/next-adapter");

// const { withGluestackUI } = require("@gluestack/ui-next-adapter");
// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = withGluestackUI(nextConfig);

const withTM = require("next-transpile-modules")([
  "react-native-web",
  "react-native",

  "@gluestack/design-system",
  "@gluestack-style/react",
  "@gluestack-style/animation-plugin",

  "@expo/html-elements",
  "expo-linear-gradient",

  "react-native-svg",
  "@react-native-aria/checkbox",
  "@react-native-aria/focus",
  "@react-native-aria/overlays",
  "@react-native-aria/radio",
  "@react-native-aria/slider",
  "@react-native-aria/toggle",
  "@react-native-aria/utils",
  "@react-native-aria/menu",
  "@react-native-aria/interactions",

  "@gluestack-ui/actionsheet",
  "@gluestack-ui/form-control",
  "@gluestack-ui/avatar",
  "@gluestack-ui/modal",
  "@gluestack-ui/button",
  "@gluestack-ui/checkbox",
  "@gluestack-ui/divider",
  "@gluestack-ui/fab",
  "@gluestack-ui/hooks",
  "@gluestack-ui/hstack",
  "@gluestack-ui/icon",
  "@gluestack-ui/input",
  "@gluestack-ui/link",
  "@gluestack-ui/menu",
  "@gluestack-ui/modal",
  "@gluestack-ui/overlay",
  "@gluestack-ui/popover",
  "@gluestack-ui/progress",
  "@gluestack-ui/provider",
  "@gluestack-ui/radio",
  "@gluestack-ui/select",
  "@gluestack-ui/slider",
  "@gluestack-ui/spinner",
  "@gluestack-ui/stack",
  "@gluestack-ui/switch",
  "@gluestack-ui/textarea",
  "@gluestack-ui/toast",
  "@gluestack-ui/tooltip",
  "@gluestack-ui/vstack",
  "@gluestack-ui/transitions",
  "@gluestack-ui/utils",
  "@gluestack-ui/tabs",
  "@gluestack-ui/react-native-aria",
  "@gluestack-ui/alert-dialog",
  "@gluestack-ui/pressable",
  "@legendapp/motion",
]);
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["gluestack.io"],
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      "react-native$": "react-native-web",
    };

    return config;
  },
};

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});
module.exports = withPlugins([[withTM], [withMDX], [withExpo]], {
  // Append the default value with md extensions
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  ...nextConfig,
});

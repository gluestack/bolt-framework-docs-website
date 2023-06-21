import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";

const gluestackStyleConfig = {
  aliases: {
    bg: "backgroundColor",
    color: "color",
    borderColor: "borderColor",
    h: "height",
    w: "width",
    height: "height",
    width: "width",
    p: "padding",
    px: "paddingHorizontal",
    py: "paddingVertical",
    pt: "paddingTop",
    pb: "paddingBottom",
    pr: "paddingRight",
    pl: "paddingLeft",
    m: "margin",
    mx: "marginHorizontal",
    my: "marginVertical",
    mt: "marginTop",
    mb: "marginBottom",
    mr: "marginRight",
    ml: "marginLeft",
    borderWidth: "borderWidth",
    borderRadius: "borderRadius",
    rounded: "borderRadius",
    letterSpacing: "letterSpacing",
    lineHeight: "lineHeight",
    fontWeight: "fontWeight",
    fontFamily: "fontFamily",
    fontSize: "fontSize",
  },
  tokens: {
    colors: {
      purple50: "#faf5ff",
      purple100: "#f3e8ff",
      purple200: "#e9d5ff",
      purple300: "#d8b4fe",
      purple400: "#c084fc",
      purple500: "#a855f7",
      purple600: "#9333ea",
      purple700: "#7e22ce",
      purple800: "#6b21a8",
      purple900: "#581c87",
      violet50: "#f5f3ff",
      violet100: "#ede9fe",
      violet200: "#ddd6fe",
      violet300: "#c4b5fd",
      violet400: "#a78bfa",
      violet500: "#8b5cf6",
      violet600: "#7c3aed",
      violet700: "#6d28d9",
      violet800: "#5b21b6",
      violet900: "#4c1d95",
      indigo50: "#eef2ff",
      indigo100: "#e0e7ff",
      indigo200: "#c7d2fe",
      indigo300: "#a5b4fc",
      indigo400: "#818cf8",
      indigo500: "#6366f1",
      indigo600: "#4f46e5",
      indigo700: "#4338ca",
      indigo800: "#3730a3",
      indigo800_50: "#3730a380",
      indigo900: "#312e81",
      blue50: "#eff6ff",
      blue100: "#dbeafe",
      blue200: "#bfdbfe",
      blue300: "#93c5fd",
      blue400: "#60a5fa",
      blue500: "#3b82f6",
      blue600: "#2563eb",
      blue700: "#1d4ed8",
      blue800: "#1e40af",
      blue900: "#1e3a8a",
      red50: "#fef2f2",
      red100: "#fee2e2",
      red200: "#fecaca",
      red300: "#fca5a5",
      red400: "#f87171",
      red500: "#ef4444",
      red600: "#dc2626",
      red700: "#b91c1c",
      red800: "#991b1b",
      red900: "#7f1d1d",
      white: "#FFFFFF",
      black: "#000000",
      lightText: "#FFFFFF",
      darkText: "#000000",
      textDark0: "#ffffff",
      textDark50: "#f9fafb",
      textDark100: "#f3f4f6",
      textDark200: "#e5e7eb",
      textDark300: "#d1d5db",
      textDark400: "#9ca3af",
      textDark500: "#6b7280",
      textDark600: "#4b5563",
      textDark700: "#374151",
      textDark800: "#1f2937",
      textDark900: "#111827",
      textDark950: "#090C14",
      primary0: "#ffffff",
      primary50: "#faf5ff",
      primary100: "#f3e8ff",
      primary200: "#e9d5ff",
      primary300: "#d8b4fe",
      primary400: "#c084fc",
      primary500: "#a855f7",
      primary600: "#9333ea",
      primary700: "#7e22ce",
      primary800: "#6b21a8",
      primary900: "#581c87",
      primary950: "#3A0D5E",
    },
    space: {
      px: "1px",
      "0": 0,
      "0.5": 2,
      "1": 4,
      "1.5": 6,
      "2": 8,
      "2.5": 10,
      "3": 12,
      "3.5": 14,
      "4": 16,
      "5": 20,
      "6": 24,
      "7": 28,
      "8": 32,
      "9": 36,
      "10": 40,
      "12": 48,
      "16": 64,
      "20": 80,
      "40": 160,
      full: "100%",
    },
    borderWidths: {
      "0": 0,
      "1": 1,
      "2": 2,
      "4": 4,
      "8": 8,
    },
    radii: {
      none: 0,
      xs: 2,
      sm: 4,
      md: 6,
      lg: 8,
      xl: 12,
      "2xl": 16,
      "3xl": 24,
      full: 9999,
    },
    mediaQueries: {
      base: "@media screen and (min-width: 0)",
      sm: "@media screen and (min-width: 480px)",
      md: "@media screen and (min-width: 768px)",
      lg: "@media screen and (min-width: 992px)",
      xl: "@media screen and (min-width: 1280px)",
    },
    letterSpacings: {
      xs: -0.8,
      sm: -0.4,
      md: 0,
      lg: 0.4,
      xl: 0.8,
      "2xl": 1.6,
    },
    lineHeights: {
      "2xs": 16,
      xs: 18,
      sm: 20,
      md: 22,
      lg: 24,
      xl: 28,
      "2xl": 32,
      "3xl": 40,
      "4xl": 48,
      "5xl": 64,
    },
    fontWeights: {
      hairline: "100",
      thin: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
      extraBlack: "950",
    },
    fontSizes: {
      "2xs": 10,
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
    },
  },
};

export const getExpoSnackUrl = (
  code: string,
  dependencies: string,
  imports: string,
  shouldExportDefault: boolean = true
) => {
  let baseCode = imports;

  //   if (shouldExportDefault) {
  //     baseCode += `
  //     export default
  //         `;
  //   }

  const Content = {
    "App.tsx": {
      type: "CODE",
      contents: prettier.format(`${baseCode} ${code}`, {
        parser: "babel",
        plugins: [parserBabel],
      }),
    },
    "gluestack-style.config.ts": {
      type: "CODE",
      contents: `export const config = ${JSON.stringify(
        gluestackStyleConfig
      )}` /*prettier.format(
        `export const config = ${JSON.stringify(gluestackStyleConfig)}`,
        {
          parser: "babel",
          plugins: [parserBabel],
        }
      ),*/,
    },
  };

  const baseDependencies = `expo-constants,@gluestack-style/react,react-native-svg`;

  let packageJSONDependencies = `${baseDependencies}`;

  if (dependencies) {
    packageJSONDependencies += `,${dependencies}`;
  }

  const url = `https://snack.expo.dev?files=${encodeURIComponent(
    JSON.stringify(Content)
  )}&dependencies=${encodeURIComponent(
    packageJSONDependencies
  )}&platform=web&theme=dark`;

  return url;
};

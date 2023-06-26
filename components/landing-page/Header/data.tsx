import { DiscordIcon, GitHubIcon } from "@gluestack/design-system";
import { ComponentsIcon, FrameworkIcon, StylingIcon } from "./images";
import Image from "next/image";

export const dropDownItems = [
  {
    name: "Framework",
    description: "Devtools for Universal and Fullstack development",
    icon: (
      <Image
        src="/icon/favicons/main.svg"
        width={20}
        height={20}
        alt="framework logo"
      />
    ),
    link: "https://framework.gluestack.io",
    tag: "coming soon",
    isDisabled: false,
  },
  {
    name: "Components",
    description:
      "Universal Headless & Customizable Components for React Native, Next.js, Expo & React with Optional Styling",
    icon: (
      <Image src="/icon/favicons/ui.svg" width={20} height={20} alt="ui logo" />
    ),
    link: "https://ui.gluestack.io/",
    tag: "beta",
    isDisabled: false,
  },
  {
    name: "Styling library",
    description:
      "Universal and Performant library made for React Native, Next.js, Expo & React ",
    icon: (
      <Image
        src="/icon/favicons/style.svg"
        width={20}
        height={20}
        alt="style logo"
      />
    ),
    link: "https://style.gluestack.io",
    tag: "beta",
    isDisabled: false,
  },
  {
    name: "Bolt",
    description: "Development environment without the pain",
    icon: (
      <Image
        src="/icon/favicons/style.svg"
        width={20}
        height={20}
        alt="style logo"
      />
    ),
    link: "https://bolt.gluestack.io",
    isDisabled: true,
  },
];

export const data = [
  // {
  //   name: "Docs",
  //   link: "/docs/getting-started/installation",
  //   icon: <></>,
  // },
  // {
  //   name: "Example",
  //   link: "https://snack.expo.dev/@gluestack/gluestack-style-todos-example?platform=web&theme=dark",
  //   isExternal: true,
  // },

  {
    name: "Github",
    link: "https://github.com/gluestack-v2/framework-cli",
    isExternal: true,
    icon: <GitHubIcon w="$4" h="$4" color="white" />,
  },
  {
    name: "Discord",
    link: "https://discord.com/invite/95qQ84nf6f",
    isExternal: true,
    icon: <DiscordIcon w="$4" h="$4" color="white" />,
  },
];

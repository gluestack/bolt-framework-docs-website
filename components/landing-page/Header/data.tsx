import { DiscordIcon, GitHubIcon } from "@gluestack/design-system";
import { ComponentsIcon, FrameworkIcon, StylingIcon } from "./images";
import Image from "next/image";


export const data = [
  {
    name: "Docs",
    link: "/docs",
    icon: <></>,
  },
  // {
  //   name: "Example",
  //   link: "https://snack.expo.dev/@gluestack/gluestack-style-todos-example?platform=web&theme=dark",
  //   isExternal: true,
  // },

  {
    name: "Github",
    link: "https://github.com/gluestack/bolt-framework",
    isExternal: true,
    icon: <GitHubIcon w="$4" h="$4" color="white" />,
  },
  // {
  //   name: "Discord",
  //   link: "https://discord.com/invite/95qQ84nf6f",
  //   isExternal: true,
  //   icon: <DiscordIcon w="$4" h="$4" color="white" />,
  // },
];

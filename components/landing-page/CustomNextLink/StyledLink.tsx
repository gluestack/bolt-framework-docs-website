import { styled } from "@gluestack-style/react";
import Link from "next/link";

export default styled(Link, {
  outlineWidth: 0,
  textDecorationLine: "none",
  ":focusVisible": {
    //@ts-ignore
    outlineWidth: 2,
    outlineColor: "$primary700",
    outlineStyle: "solid",
  },
  fontWeight: "$normal",
  _light: {
    color: "$info700",
  },
  ":hover": {
    color: "$info600",
    textDecorationLine: "none",
  },
  ":active": {
    color: "$info700",
  },
  ":disabled": {
    opacity: 0.4,
  },
  _dark: {
    color: "$info300",
    ":hover": {
      color: "$info400",
      textDecorationLine: "none",
    },
    ":active": {
      color: "$info300",
    },
  },
  cursor: "pointer",
});

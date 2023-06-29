import { Box } from "@gluestack/design-system";
import Image from "next/image";
import React from "react";

function ArchitectureDiagram() {
  return (
    <Box aspectRatio={1344 / 782}>
      <Image src="/images/architecture-lp.svg" fill alt="architecture" />
    </Box>
  );
}

export default ArchitectureDiagram;

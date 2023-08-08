import { Box } from "@gluestack/design-system";
import Image from "next/image";
import React from "react";

function ArchitectureDiagram() {
  return (
    <Box alignItems="center">
      <Box
        aspectRatio={1344 / 782}
        width="100%"
        sx={{
          "@md": {
            width: "80%",
          },
        }}
      >
        <Image src="https://static.gluestack.io/assets/Bolt.svg" fill alt="architecture" />
      </Box>
    </Box>
  );
}

export default ArchitectureDiagram;

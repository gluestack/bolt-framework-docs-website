import { Box, Text } from "@gluestack/design-system";

import React from "react";

function ComingSoonTag() {
  return (
    <Box
      py="$0.5"
      px="$2.5"
      ml="$2"
      borderRadius="$full"
      borderWidth={1}
      borderColor="$borderDark700"
      alignSelf="flex-start"
      sx={{
        _web: {
          background:
            "linear-gradient(80.55deg, rgba(21, 129, 228, 0.111) 48.67%, rgba(111, 38, 206, 0.216) 79.9%, rgba(42, 180, 217, 0.156) 108.54%)",
          //   backdropFilter: "blur(12px)",
        },
      }}
    >
      <Text
        fontSize="$xs"
        lineHeight="$xs"
        color="$textDark50"
        fontWeight="$medium"
      >
        coming Soon
      </Text>
    </Box>
  );
}

export default ComingSoonTag;

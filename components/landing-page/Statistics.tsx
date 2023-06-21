import React, { memo } from "react";
import { Text, HStack, VStack, Divider } from "@gluestack/design-system";

const statistics = [
  {
    name: "Bundle Size",
    value: "<15kb gzip",
  },
  {
    name: "Runtime style calculation",
    value: "Zero",
  },
  {
    name: "Platforms",
    value: "All",
  },
];

const Statistics = () => {
  return (
    <HStack
      // maxWidth={992}
      // space="xl"
      // margin="0 auto"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        "@base": {
          flexDirection: "column",
        },
        "@md": {
          flexDirection: "row",
        },
      }}
      flex={1}
    >
      {statistics.map((statistic, key) => {
        return (
          <>
            {/* @ts-ignore */}
            <VStack
              space="sm"
              alignItems="center"
              key={key + statistic.name}
              sx={{
                "@lg": {
                  mx: "$4",
                },
              }}
            >
              <Text
                fontSize="$4xl"
                fontWeight="bold"
                color="$textDark50"
                lineHeight="$4xl"
                sx={{
                  "@md": {
                    fontSize: "32px",
                  },
                  "@lg": {
                    fontSize: "$5xl",
                  },
                  _dark: {
                    color: "$textDark50",
                  },
                }}
              >
                {statistic.value}
              </Text>
              <Text
                color="$textDark400"
                lineHeight="$2xl"
                fontSize="$xl"
                sx={{
                  "@md": {
                    fontSize: "18px",
                  },
                  "@lg": {
                    fontSize: "$2xl",
                  },
                  _dark: {
                    color: "$textDark400",
                  },
                }}
                mt="$1" //can be removed when space="12" or "$3" is supported
              >
                {statistic.name}
              </Text>
            </VStack>
            {key !== statistics.length - 1 && (
              // @ts-ignore
              <Divider
                key={key}
                borderRadius="$full"
                style={{
                  //@ts-ignore
                  background:
                    "linear-gradient(93.67deg, #3E92E1 -12.63%, #9985FF 146.77%)",
                }}
                sx={{
                  "@base": {
                    mx: "$4",
                    h: "$0.5",
                    w: "$16",
                    my: "$12",
                  },
                  "@md": {
                    mx: "$4",
                    width: "$1",
                    h: "$16",
                    my: 0,
                  },
                }}
                // md-variant="vertical"
              />
            )}
          </>
        );
      })}
    </HStack>
  );
};

export default Statistics;

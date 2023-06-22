import React, { useState } from "react";
import { Text, HStack, Pressable, Link, Box } from "@gluestack/design-system";
import { ChevronDownIcon } from "@gluestack/design-system";
import { TickIcon } from "./images";

function Dropdown(props: any) {
  let { dropDownItems } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Pressable
        onPress={() => setIsOpen(!isOpen)}
        sx={{
          _web: {
            cursor: "pointer",
            ":focus": {
              boxShadow: "#004282 0px 0px 0px 2px",
              _dark: {
                boxShadow: "#004282 0px 0px 0px 2px",
              },
            },
          },
        }}
      >
        <HStack alignItems="center">
          <Text
            color="$trueGray50"
            fontWeight="$medium"
            fontSize="$md"
            lineHeight="$md"
          >
            Ecosystem
          </Text>
          <ChevronDownIcon ml="$1" color="$trueGray50" width="$3" height="$3" />
        </HStack>
      </Pressable>

      {isOpen && (
        <Box position="absolute">
          <Box
            bg="$backgroundDark900"
            borderWidth={1}
            borderColor="$borderDark800"
            width={420}
            borderRadius="$md"
            mt="$2"
          >
            {dropDownItems.map((item: any, index: number) => {
              return (
                <>
                  <Link
                    href={item.link}
                    key={item.name}
                    p="$6"
                    sx={{
                      ":hover": {
                        bg: "$backgroundDark800",
                      },
                    }}
                    isExternal
                    // borderRadius="$md"
                    borderBottomWidth={
                      index !== dropDownItems.length - 1 ? 1 : 0
                    }
                    borderBottomColor="$borderDark800"
                    onPress={() => setIsOpen(false)}
                    isDisabled={item.isDisabled}
                  >
                    <HStack alignItems="center">
                      {item.icon}
                      <Text
                        ml="$3"
                        color="$trueGray50"
                        fontWeight="$medium"
                        fontSize="$md"
                        lineHeight="$md"
                      >
                        {item.name}
                      </Text>
                      <Box
                        style={{
                          // @ts-ignore web-only
                          background:
                            "linear-gradient(260.55deg, rgba(21, 129, 228, 0.165) 11.83%, rgba(107, 54, 175, 0.183) 45.13%, rgba(42, 180, 217, 0.045) 93.61%)",
                          backdropFilter: "blur(12px)",
                        }}
                        py="$0.5"
                        px="$2.5"
                        ml="$2"
                        borderRadius="$full"
                        borderWidth={2}
                        borderColor="$borderDark800"
                        alignSelf="flex-start"
                      >
                        <Text
                          fontSize="$2xs"
                          lineHeight="$2xs"
                          color="$textDark50"
                          sx={{
                            _dark: {
                              color: "$textDark50",
                            },
                          }}
                        >
                          {item.tag}
                        </Text>
                      </Box>
                      {item.isDisabled && (
                        <Box ml="auto">
                          <TickIcon />
                        </Box>
                      )}
                    </HStack>
                    <HStack mt="$2.5">
                      <Text
                        color="$trueGray400"
                        fontWeight="$normal"
                        fontSize="$sm"
                        lineHeight="$sm"
                      >
                        {item.description}
                      </Text>
                    </HStack>
                  </Link>
                </>
              );
            })}
          </Box>
        </Box>
      )}
    </div>
  );
}

export default Dropdown;

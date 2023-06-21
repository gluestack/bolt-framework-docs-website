import {
  CodeBlockIcon,
  ColorLineIcon,
  ColorPaletteIcon,
  DarkThemeIcon,
  // GlobeIcon,
  NavigationUnreadIcon,
  ResizeIcon,
  ScaleFillIcon,
  TicketIcon,
  // TypeScriptIcon,
  WindowHeaderIcon,
  BounceIcon,
  GentleIcon,
  QuickIcon,
} from "@gluestack/design-system";
type Content = {
  heading: string;
  description: string;
  tabs?: {
    tabList: {
      tabName?: string;
      icon?: any;
      hideRenderer?: boolean;
      isIframe?: boolean;
    }[];
    tabPanels:
      | string
      | {
          componentCode?: string;
          exampleCode?: string;
          externalLink?: string;
          imports?: string;
        }[];
  };
  hideTabs?: boolean;
  code?:
    | {
        componentCode?: string;
        exampleCode?: string;
        externalLink?: string;
      } & (string & {});
  readMoreLink?: string;
  codePreviewProps?: any;
};

const TypeScriptIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3332 8.53345V8.35531C13.3332 7.57025 12.6964 6.93345 11.9113 6.93345H10.6665C10.2422 6.93345 9.83522 7.10202 9.53516 7.40208C9.23511 7.70213 9.06654 8.1091 9.06654 8.53345C9.06654 8.95779 9.23511 9.36476 9.53516 9.66482C9.83522 9.96488 10.2422 10.1334 10.6665 10.1334H11.7332C12.1575 10.1334 12.5645 10.302 12.8646 10.6021C13.1646 10.9021 13.3332 11.3091 13.3332 11.7334C13.3332 12.1578 13.1646 12.5648 12.8646 12.8648C12.5645 13.1649 12.1575 13.3334 11.7332 13.3334H10.6665C10.2422 13.3334 9.83522 13.1649 9.53516 12.8648C9.23511 12.5648 9.06654 12.1578 9.06654 11.7334M8.5332 6.93345H3.19987M5.86654 6.93345V13.8668M0.533203 0.533447H15.4665V15.4668H0.533203V0.533447Z"
        stroke="#FAFAFA"
      />
    </svg>
  );
};

export const mainContent: Content[] = [
  {
    heading: "Token and theme",
    description: `Design tokens are the values or constants needed to construct a design system. These values can represent spacing, color, typography etc. Design tokens help to achieve consistency in building user interfaces across all platforms.`,
    tabs: {
      tabList: [
        {
          tabName: "Token",
          icon: <TicketIcon color="$backgroundDark50" size="$4" />,
          hideRenderer: true,
        },
        {
          tabName: "Theme",
          icon: <DarkThemeIcon color="$backgroundDark50" size="$4" />,
        },
        // {
        //   tabName: "Typescript",
        //   // icon: <TypeScriptIcon color="$backgroundDark50" size="$4" />,
        //   icon: <TypeScriptIcon />,
        // },
      ],
      tabPanels: [
        `const config = {
          tokens: {
  colors: {
    primary50: '#dbf4ff',
    primary100: '#addbff',
    primary200: '#7cc2ff',
    primary300: '#4aa9ff',
    primary400: '#1a91ff',
  },
  space: {
    '0': 0,
    '0.5': 2,
    '1': 4,
    '1.5': 6,
  },
  fontSizes: {
    '2xs': 10,
    'xs': 12,
    'sm': 14,
    'md': 16,
  },
  fontWeights: {},
  fonts: {},
  borderWidths: {},
  radii: {},
}
}`,
        {
          imports: `
          import { config } from './gluestack-style.config';
          import { View } from 'react-native';
          import { StyledProvider as Provider, styled } from '@gluestack-style/react';`,
          componentCode: `const Circle = styled(
            View,
            {
              bg: '$primary500',
              h: '$20',
              w: '$20',
              rounded: '$full',
            },
          );`,
          exampleCode: `return (
            <Provider config={config}>
            <Circle />
            </Provider>
          )`,
        },
      ],
    },
    readMoreLink: "docs/configuration/theme-tokens",
  },
  {
    heading: "Universal",
    description: `gluestack-style offers a universal styling solution for React Native, Next.js, Expo & React. With optimized performance, you can enjoy consistent and reliable styling across all your  applications.`,
    tabs: {
      tabList: [
        {
          tabName: "Platform",
          icon: <WindowHeaderIcon color="$backgroundDark50" size="$4" />,
        },
        // {
        //   tabName: "Universal",
        //   icon: <GlobeIcon color="$backgroundDark50" size="$4" />,
        // },
        {
          tabName: "Descendant Styling",
          icon: <ColorLineIcon color="$backgroundDark50" size="$4" />,
        },
      ],
      tabPanels: [
        {
          imports: `
          import { config } from './gluestack-style.config';
          import { View } from 'react-native';
          import { StyledProvider as Provider, styled } from '@gluestack-style/react';`,
          componentCode: `const Box = styled(View, {
            borderRadius: '$md',
            h: '$20',
            w: '$20',
            _web: {
              bg: '$violet600',
            },
            _ios: {
              bg: '$blue600',
            },
            _android: {
              bg: '$red600',
            },
          });`,
          exampleCode: `return (
            <Provider config={config}>
              <Box />
            </Provider>
          )`,
        },
        {
          imports: `
          import { config } from './gluestack-style.config';
          import { View, Pressable, Text } from 'react-native';
          import { StyledProvider as Provider, styled } from '@gluestack-style/react';`,
          componentCode: `const Button = styled(
            Pressable,
            {
              bg: '$violet600',
              px: '$4',
              py: '$2',
              _text: {
                fontSize: '$md',
                lineHeight: '$md',
                color: '$white',
              },
              rounded: '$md',
            },
            {
              descendantStyle: ['_text'],
            }
          );
          const ButtonText = styled(
          Text,
          {
          },
          { ancestorStyle: ['_text'] }
        );`,
          exampleCode: ` return (
          <Provider config={config}>
            <Button>
              <ButtonText>Hello world</ButtonText>
            </Button>
          </Provider>
        )`,
        },
      ],
    },
    readMoreLink: "docs/api/platform-based-styles",
  },
  {
    heading: "Utility Props",
    description: `Utility props are a way to alter the style of a component by simply passing props to it. It helps to save time by providing helpful shorthand ways to style components.`,
    readMoreLink: "docs/api/utility-props",
    hideTabs: true,
    code: {
      imports: `
      import { config } from './gluestack-style.config';
      import { View } from 'react-native';
      import { StyledProvider as Provider, styled } from '@gluestack-style/react';`,
      componentCode: `
      const Box = styled(View, {});`,
      exampleCode: `
      return (
        <Provider config={config}>
        <Box
        bg='$primary500'
        h='$20'
        w='$20'
        rounded='$md'
        />
        </Provider>
      )`,
    },
  },
  {
    heading: "Variants",
    description: `gluestack-style allows you to easily create different variations of a component with different styles. Using variant props in a UI component library allows for more flexibility and reusability of components.`,
    tabs: {
      tabList: [
        {
          tabName: "Variants",
          icon: <ResizeIcon color="$backgroundDark50" size="$4" />,
        },
        {
          tabName: "Sizes",
          icon: <ScaleFillIcon color="$backgroundDark50" size="$4" />,
        },
        {
          tabName: "States",
          icon: <NavigationUnreadIcon color="$backgroundDark50" size="$4" />,
        },
      ],
      tabPanels: [
        {
          imports: `
          import { config } from './gluestack-style.config';
          import { Pressable, View, Text } from 'react-native';
          import { StyledProvider as Provider, styled } from '@gluestack-style/react';`,
          componentCode: `const Button = styled(Pressable, {
            px: '$3.5',
            py: '$2.5',
            rounded: '$md',
              variants: {
                variant: {
                  solid: {
                    bg: '$indigo600',
                    _text: {
                      color: '$white',
                    }
                  },
                  outlined: {
                    bg: 'transparent',
                    borderWidth: '$1',
                    borderColor: '$indigo500',
                    _text: {
                      color: '$indigo300',
                    }
                  },
                  subtle: {
                    bg: '$indigo800_50',
                    _text: {
                      color: '$indigo300',
                    }
                  }
                },
              },
              defaultProps: {
                variant: 'solid',
              }
            }, 
            {
              descendantStyle: ['_text']
            }
            );
            const ButtonText = styled(
            Text,
            {
              textAlign: "center",
              fontSize: '$md',
              lineHeight: '$md',
            },
            { ancestorStyle: ['_text'] }
          );`,
          exampleCode: `return (
            <Provider config={config}>
            <View style={{ flexDirection: 'row', gap: 16 }}>
              <Button variant='solid'>
                <ButtonText>Solid</ButtonText>
              </Button>
              <Button variant='outlined'>
                <ButtonText>Outlined</ButtonText>
              </Button>
              <Button variant='subtle'>
                <ButtonText>Subtle</ButtonText>
              </Button>
            </View>
            </Provider>
          );`,
        },
        {
          imports: `
          import { config } from './gluestack-style.config';
          import { Pressable, View, Text } from 'react-native';
          import { StyledProvider as Provider, styled } from '@gluestack-style/react';`,
          componentCode: `const Button = styled(Pressable, {
            rounded: '$md',
            bg: '$indigo600',
            alignItems: 'center',
            justifyContent: 'center',
            _text: {
              color: '$white',
            },
            variants: {
              size: {
                sm: {
                  px: '$3.5',
                  py: '$1.5',
                  _text: {
                    fontSize: '$sm',
                    lineHeight: '$sm',
                  },
                },
                md: {
                  px: '$4',
                  py: '$2',
                  _text: {
                    fontSize: '$md',
                    lineHeight: '$md',
                  },
                },
                lg: {
                  px: '$5',
                  py: '$2.5',
                  _text: {
                    fontSize: '$lg',
                    lineHeight: '$lg',
                  },
                },
              },        
            },
            defaultProps: {
              size: 'sm',
            }
          }, {
          descendantStyle: ['_text']
        });
          const ButtonText = styled(
          Text,
          {
          },
          { ancestorStyle: ['_text'] }
        );`,
          exampleCode: `return (
          <Provider config={config}>
          <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
            <Button size='sm'>
              <ButtonText>Small</ButtonText>
            </Button>
            <Button size='md'>
              <ButtonText>Medium</ButtonText>
            </Button>
            <Button size='lg'>
              <ButtonText>Large</ButtonText>
            </Button>
          </View>
          </Provider>
        );`,
        },
        {
          imports: `
          import React, { useState } from 'react';
          import { config } from './gluestack-style.config';
          import { View, Pressable, Text } from 'react-native';
          import { StyledProvider as Provider, styled } from '@gluestack-style/react';`,
          componentCode: ` const Button = styled(Pressable, {
            'px': '$6',
            'py': '$3',
            'borderRadius': '$md',
            'bg': '$indigo600',
            ':hover': {
              bg: '$indigo500',
            },
            ':active': {
              bg: '$indigo600',
            },
          });
          const ButtonText = styled(
            Text,
            {
              color: '$white',
              fontSize: "$md",
              lineHeight: "$md",
              textAlign: "center",
            },
          );`,
          exampleCode: `const [isHovered, setIsHovered] = useState(false);
          const [isActive, setIsActive] = useState(false);
          return (
            <Provider config={config}>
              <Button
                states={{ hover: isHovered, active: isActive }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onMouseDown={() => setIsActive(true)}
                onMouseUp={() => setIsActive(false)}
              >
                <ButtonText>Click Me</ButtonText>
              </Button>
              </Provider>
          );`,
        },
      ],
    },
    readMoreLink: "docs/api/variants",
  },
  {
    heading: "Media Query",
    description: `gluestack-style provides support for responsive styles through the use of media queries.`,
    tabs: {
      tabList: [
        {
          tabName: "Media Query",
          icon: <CodeBlockIcon color="$backgroundDark50" size="$4" />,
        },
        {
          tabName: "Color Mode",
          icon: <ColorPaletteIcon color="$backgroundDark50" size="$4" />,
          isIframe: true,
        },
      ],
      tabPanels: [
        {
          imports: `
          import React, { useState } from 'react';
          import { config } from './gluestack-style.config';
          import { View, Pressable, Text } from 'react-native';
          import { StyledProvider as Provider, styled } from '@gluestack-style/react';`,
          componentCode: `const Button = styled(Pressable, {
            'bg': '$primary500',
            'p': '$3',
            rounded: '$md',
            'shadow': '$4',
            ':hover': {
                'bg': '$primary600',
              },
            ':active': {
                'bg': '$primary700',
              },
            '@md': {
              'bg': '$indigo500',
              ':hover': {
                'bg': '$indigo600',
              },
              ':active': {
                'bg': '$indigo700',
              },
            },
          });
          const ButtonText = styled(
            Text,
            {
              color: '$textDark50',
              fontSize: "$md",
              lineHeight: "$md",
              textAlign: 'center',
            },
          );`,
          exampleCode: ` const [isHovered, setIsHovered] = useState(false);
          const [isActive, setIsActive] = useState(false);

          return (
            <Provider config={config}>
              <Button
                states={{ hover: isHovered, active: isActive }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onMouseDown={() => setIsActive(true)}
                onMouseUp={() => setIsActive(false)}
              >
                <ButtonText>Hello World</ButtonText>
              </Button>
            </Provider>
          );`,
        },
        {
          imports: `
          import React, { useState } from 'react';
          import { config } from './gluestack-style.config';
          import { View, Pressable, Text } from 'react-native';
          import { StyledProvider as Provider, styled } from '@gluestack-style/react';`,
          componentCode: `const Box = styled(
            View,
            {
              bg: '$indigo500',
              _dark: {
                bg: '$primary500',
              },
              h: '$40',
              w: '$40',
              borderRadius: '$md'
            },
            {}
          );`,
          exampleCode: ` const [currentColorMode, setCurrentColorMode] = useState('dark');
        
          return (
            <Provider config={config} colorMode={currentColorMode}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Pressable
                style={{
                  backgroundColor: currentColorMode === 'dark' ? 'dimgray' : 'blueviolet',
                  padding: 12,
                  marginBottom: 12,
                  borderRadius: 6,
                }}
                onPress={() => {
                  setCurrentColorMode(currentColorMode === 'dark' ? 'light' : 'dark');
                }}
              >
                <Text style={{ color: 'white' }}>
                  Toggle {currentColorMode === 'dark' ? 'light' : 'dark'}
                </Text>
              </Pressable>
              <Box />
              </View>
            </Provider>
          );`,
        },
      ],
    },
    readMoreLink: "docs/api/responsive-styles",
  },
  {
    heading: "Animations, Simplified",
    description: `gluestack-style animation plugin empowers you to add a lively touch to your designs effortlessly. Shape your unique visual narrative by creating animations that speak to your brand’s spirit and keep users engaged.`,
    readMoreLink: "docs/plugins/animation-plugin",
    // hideTabs: true,
    codePreviewProps: {
      pt: "$0",
      overflow: "hidden",
      _container: {
        sx: {
          pb: "$0",
          pt: "$0",
        },
      },
      _rendererWrapper: {
        sx: {
          minHeight: "400px",
        },
      },
    },
    tabs: {
      tabList: [
        {
          tabName: "Bounce",
          icon: <BounceIcon color="$backgroundDark50" size="$4" />,
        },
        {
          tabName: "Quick",
          icon: <QuickIcon color="$backgroundDark50" size="$4" />,
        },
        {
          tabName: "Gentle",
          icon: <GentleIcon color="$backgroundDark50" size="$4" />,
        },
      ],
      tabPanels: [
        {
          externalLink:
            "https://snack.expo.dev/@gluestack/bounce-animation?platform=web&theme=dark",
          imports: `
          import React, { useState } from 'react';
          import { config } from './gluestack-style.config';
          import { Pressable, View, Text } from 'react-native';
          import { StyledProvider as Provider, styled } from '@gluestack-style/react';
          import { Motion } from '@legendapp/motion';
          import { MotionSvg } from '@legendapp/motion/svg';
          `,
          componentCode: `const styledAnimated = createStyled([new AnimationResolver()]);
            const StyledRings = styledAnimated(Motion.View, {
              height: "$12",
              width: "$12",
              borderRadius: "$full",
              borderWidth: "$1",
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              ":initial": {
                opacity: 1,
                scale: 1,
              },
              ":animate": {
                opacity: 0,
                scale: 4,
              },
              ":exit": {
                opacity: 0,
                scale: 1,
              },
              ":transition": {
                type: "timing",
                duration: 1000,
                ease: "easeOut",
              },
            });
            
            const AnimatedView = styledAnimated(Motion.View, {
              height: "$12",
              width: "$12",
              borderRadius: "$full",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              ":initial": {
                opacity: 0,
                scale: 0,
              },
              ":animate": {
                opacity: 1,
                scale: 1,
              },
              ":exit": {
                opacity: 0,
                scale: 0.7,
              },
              ":transition": {
                type: "spring",
                damping: 6,
                stiffness: 200,
                mass: 0.9,
              },
            });
            
            const AnimatedSvg = styledAnimated(MotionSvg.Svg, {
              height: "$5",
              width: "$5",
              props: {
                viewBox: "0 0 24 24",
              },
              ":initial": {
                opacity: 1,
                rotate: "0deg",
              },
              ":animate": {
                opacity: 1,
                rotate: "360deg",
              },
              ":exit": {
                opacity: 0,
                rotate: "0deg",
              },
              ":transition": {
                type: "spring",
                damping: 6,
                stiffness: 200,
                mass: 0.9,
              },
            });
            
            const Box = styled(View, {
              alignItems: "center",
              justifyContent: "center",
            });
            
            const StyledText = styled(Text, {});
    `,
          exampleCode: `const [active, setActive] = React.useState(true);
            const [actions, setActions] = React.useState("mic");
          
            const changeAnimation = () => {
              setActive(!active);
              setActions((prev) => {
                if (prev === "mic") {
                  return "record";
                } else if (prev === "record") {
                  return "ask";
                } else {
                  return "mic";
                }
              });
            };
          
            return (
              <Provider config={config}>
                <Box position="absolute" bottom="60%" right="55%">
                  {[1, 2, 3].map((index) => {
                    return (
                      <styledAnimated.Component key={index}>
                        <StyledRings
                          key={actions-index}
                          sx={{
                            ":transition": {
                              delay: index * 300,
                            },
                          }}
                          borderColor={
                            actions === "mic" || actions === "record"
                              ? "$rose500"
                              : "$yellow500"
                          }
                        />
                      </styledAnimated.Component>
                    );
                  })}
                  <Pressable onPress={changeAnimation}>
                    <AnimatedView
                      key={actions}
                      bg={
                        actions === "mic" || actions === "record"
                          ? "$rose500"
                          : "$yellow500"
                      }
                    >
                      <AnimatedSvg>
                        <styledAnimated.Component>
                          {actions === "mic" && (
                            <MotionSvg.Path
                              d="M12.3333 4C10.6765 4 9.33333 5.34315 9.33333 7V12.3333C9.33333 13.9902 10.6765 15.3333 12.3333 15.3333C13.9902 15.3333 15.3333 13.9902 15.3333 12.3333V7C15.3333 5.34315 13.9902 4 12.3333 4ZM8 11.8337C8 11.5575 7.77614 11.3337 7.5 11.3337C7.22386 11.3337 7 11.5578 7 11.8339V12.3333C7 15.1102 9.12227 17.3914 11.8333 17.6435V19.4999C11.8333 19.7761 12.0572 19.9999 12.3333 19.9999C12.6095 19.9999 12.8333 19.7761 12.8333 19.4999V17.6435C15.5444 17.3914 17.6667 15.1102 17.6667 12.3333V11.8337C17.6667 11.5575 17.4428 11.3337 17.1667 11.3337C16.8905 11.3337 16.6667 11.5577 16.6667 11.8338V12.3333C16.6667 14.7265 14.7266 16.6666 12.3333 16.6666C9.9401 16.6666 8 14.7262 8 12.333V11.8337Z"
                              fill="white"
                            />
                          )}
                          {actions === "record" && (
                            <MotionSvg.Path
                              d="M7.16667 6C6.52233 6 6 6.52233 6 7.16667V16.8333C6 17.4777 6.52233 18 7.16667 18H16.8333C17.4777 18 18 17.4777 18 16.8333V7.16667C18 6.52233 17.4777 6 16.8333 6H7.16667Z"
                              fill="white"
                            />
                          )}
                          {actions === "ask" && (
                            <MotionSvg.Path
                              d="M12.5 2.75V5.75C12.5 5.94891 12.421 6.13968 12.2803 6.28033C12.1397 6.42098 11.9489 6.5 11.75 6.5C11.5511 6.5 11.3603 6.42098 11.2197 6.28033C11.079 6.13968 11 5.94891 11 5.75V2.75C11 2.55109 11.079 2.36032 11.2197 2.21967C11.3603 2.07902 11.5511 2 11.75 2C11.9489 2 12.1397 2.07902 12.2803 2.21967C12.421 2.36032 12.5 2.55109 12.5 2.75ZM15.9922 8.25781C16.0908 8.25777 16.1884 8.23829 16.2794 8.20048C16.3705 8.16268 16.4532 8.1073 16.5228 8.0375L18.6444 5.91687C18.7851 5.77614 18.8642 5.58527 18.8642 5.38625C18.8642 5.18723 18.7851 4.99636 18.6444 4.85562C18.5036 4.71489 18.3128 4.63583 18.1138 4.63583C17.9147 4.63583 17.7239 4.71489 17.5831 4.85562L15.4625 6.97719C15.3575 7.08202 15.286 7.21563 15.257 7.3611C15.228 7.50658 15.2428 7.65739 15.2995 7.79447C15.3562 7.93155 15.4523 8.04874 15.5756 8.13121C15.6989 8.21369 15.8438 8.25774 15.9922 8.25781ZM20.75 11H17.75C17.5511 11 17.3603 11.079 17.2197 11.2197C17.079 11.3603 17 11.5511 17 11.75C17 11.9489 17.079 12.1397 17.2197 12.2803C17.3603 12.421 17.5511 12.5 17.75 12.5H20.75C20.9489 12.5 21.1397 12.421 21.2803 12.2803C21.421 12.1397 21.5 11.9489 21.5 11.75C21.5 11.5511 21.421 11.3603 21.2803 11.2197C21.1397 11.079 20.9489 11 20.75 11ZM16.5228 15.4625C16.381 15.3278 16.1922 15.2538 15.9966 15.2563C15.8011 15.2588 15.6142 15.3376 15.4759 15.4759C15.3376 15.6142 15.2588 15.8011 15.2563 15.9966C15.2538 16.1922 15.3278 16.381 15.4625 16.5228L17.5831 18.6444C17.7239 18.7851 17.9147 18.8642 18.1138 18.8642C18.3128 18.8642 18.5036 18.7851 18.6444 18.6444C18.7851 18.5036 18.8642 18.3128 18.8642 18.1138C18.8642 17.9147 18.7851 17.7239 18.6444 17.5831L16.5228 15.4625ZM11.75 17C11.5511 17 11.3603 17.079 11.2197 17.2197C11.079 17.3603 11 17.5511 11 17.75V20.75C11 20.9489 11.079 21.1397 11.2197 21.2803C11.3603 21.421 11.5511 21.5 11.75 21.5C11.9489 21.5 12.1397 21.421 12.2803 21.2803C12.421 21.1397 12.5 20.9489 12.5 20.75V17.75C12.5 17.5511 12.421 17.3603 12.2803 17.2197C12.1397 17.079 11.9489 17 11.75 17ZM6.97719 15.4625L4.85562 17.5831C4.71489 17.7239 4.63583 17.9147 4.63583 18.1138C4.63583 18.3128 4.71489 18.5036 4.85562 18.6444C4.99636 18.7851 5.18723 18.8642 5.38625 18.8642C5.58527 18.8642 5.77614 18.7851 5.91687 18.6444L8.0375 16.5228C8.17221 16.381 8.24621 16.1922 8.2437 15.9966C8.2412 15.8011 8.1624 15.6142 8.0241 15.4759C7.8858 15.3376 7.69894 15.2588 7.50337 15.2563C7.3078 15.2538 7.11898 15.3278 6.97719 15.4625ZM6.5 11.75C6.5 11.5511 6.42098 11.3603 6.28033 11.2197C6.13968 11.079 5.94891 11 5.75 11H2.75C2.55109 11 2.36032 11.079 2.21967 11.2197C2.07902 11.3603 2 11.5511 2 11.75C2 11.9489 2.07902 12.1397 2.21967 12.2803C2.36032 12.421 2.55109 12.5 2.75 12.5H5.75C5.94891 12.5 6.13968 12.421 6.28033 12.2803C6.42098 12.1397 6.5 11.9489 6.5 11.75ZM5.91687 4.85562C5.77614 4.71489 5.58527 4.63583 5.38625 4.63583C5.18723 4.63583 4.99636 4.71489 4.85562 4.85562C4.71489 4.99636 4.63583 5.18723 4.63583 5.38625C4.63583 5.4848 4.65524 5.58238 4.69296 5.67342C4.73067 5.76447 4.78594 5.84719 4.85562 5.91687L6.97719 8.0375C7.11898 8.17221 7.3078 8.24621 7.50337 8.2437C7.69894 8.2412 7.8858 8.1624 8.0241 8.0241C8.1624 7.8858 8.2412 7.69894 8.2437 7.50337C8.24621 7.3078 8.17221 7.11898 8.0375 6.97719L5.91687 4.85562Z"
                              fill="white"
                            />
                          )}
                        </styledAnimated.Component>
                      </AnimatedSvg>
                    </AnimatedView>
                  </Pressable>
                </Box>
                <Box
                  bg="#ffffff1a"
                  flexDirection="row"
                  justifyContent="space-evenly"
                  alignItems="center"
                  py="$4"
                  px="$6"
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                >
                  <Box>
                    <StyledText
                      fontWeight="$semibold"
                      fontSize="$2xl"
                      lineHeight="$2xl"
                      color="$textDark50"
                    >
                      6
                    </StyledText>
                    <StyledText fontSize="$lg" lineHeight="$lg" color="$textDark400">
                      damping
                    </StyledText>
                  </Box>
                  <Box>
                    <StyledText
                      fontWeight="$semibold"
                      fontSize="$2xl"
                      lineHeight="$2xl"
                      color="$textDark50"
                    >
                      200
                    </StyledText>
                    <StyledText fontSize="$lg" lineHeight="$lg" color="$textDark400">
                      stiffness
                    </StyledText>
                  </Box>
                  <Box>
                    <StyledText
                      fontWeight="$semibold"
                      fontSize="$2xl"
                      lineHeight="$2xl"
                      color="$textDark50"
                    >
                      0.9
                    </StyledText>
                    <StyledText fontSize="$lg" lineHeight="$lg" color="$textDark400">
                      mass
                    </StyledText>
                  </Box>
                </Box>
              </Provider>
            );`,
        },
        {
          imports: `
          import React, { useState } from 'react';
          import { config } from './gluestack-style.config';
          import { Pressable, View, Text } from 'react-native';
          import { StyledProvider as Provider, styled } from '@gluestack-style/react';
          import { Motion } from '@legendapp/motion';
          import { MotionSvg } from '@legendapp/motion/svg';
          `,
          externalLink:
            "https://snack.expo.dev/@gluestack/quick-animation?platform=web&theme=dark",
          componentCode: `const styledAnimated = createStyled([new AnimationResolver()]);
              const StyledRings = styledAnimated(Motion.View, {
                height: '$12',
                width: '$12',
                borderRadius: '$full',
                borderWidth: '$1',
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                ":initial": {
                  opacity: 1,
                  scale: 1,
                },
                ":animate": {
                  opacity: 0,
                  scale: 4,
                },
                ":exit": {
                  opacity: 0,
                  scale: 1,
                },
                ":transition": {
                  type: "timing",
                  duration: 800,
                  ease: "easeOut",
                }
              });
              
              const AnimatedView = styledAnimated(Motion.View, {
                height: '$12',
                width: '$12',
                borderRadius: 48,
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                ":initial": {
                  opacity: 0,
                  scale: 0,
                },
                ":animate": {
                  opacity: 1,
                  scale: 1,
                },
                ":exit": {
                  opacity: 0,
                  scale: 0.7,
                },
                ":transition": {
                  type: "spring",
                  damping: 40,
                  stiffness: 300,
                  mass: 1.2,
                },
              });
    
              const AnimatedSvg = styledAnimated(MotionSvg.Svg, {
                height: "$5",
                width: "$5",
                props: {
                  viewBox: "0 0 24 24",
                },
                ':initial': {
                  opacity: 1,
                  rotate: "0deg",
                },
                ':animate': {
                  opacity: 1,
                  rotate: "360deg",
                },
                ':exit': {
                  opacity: 0,
                  rotate: "0deg",
                },
                ':transition': {
                  type: "spring",
                  damping: 40,
                  stiffness: 300,
                  mass: 1.2,
                },
              });
    
              const Box = styled(View, {
                alignItems: 'center',
                justifyContent: 'center',
              })
    
              const StyledText = styled(Text, {})
          `,
          exampleCode: `const [active, setActive] = React.useState(true);
              const [actions, setActions] = React.useState("mic");
            
              const changeAnimation = () => {
                setActive(!active);
                setActions((prev) => {
                  if (prev === "mic") {
                    return "record";
                  } else if (prev === "record") {
                    return "ask";
                  } else {
                    return "mic";
                  }
                });
              };
              
                return (
                  <Provider config={config}>
                    <Box position="absolute" bottom="60%" right="55%">
                      {[1, 2, 3].map((index) => {
                        return (
                          <styledAnimated.Component key={index}>
                            <StyledRings
                              key={actions-index}
                              sx={{
                                ":transition": {
                                  delay: index * 300,
                                },
                              }}
                              borderColor={
                                actions === "mic" || actions === "record"
                                  ? "$rose500"
                                  : "$yellow500"
                              }
                            />
                          </styledAnimated.Component>
                        );
                      })}
                      <Pressable onPress={changeAnimation}>
                        <AnimatedView
                          key={actions}
                          bg={
                            actions === "mic" || actions === "record"
                              ? "$rose500"
                              : "$yellow500"
                          }
                        >
                          <AnimatedSvg>
                            <styledAnimated.Component>
                              {actions === "mic" && (
                                <MotionSvg.Path
                                  d="M12.3333 4C10.6765 4 9.33333 5.34315 9.33333 7V12.3333C9.33333 13.9902 10.6765 15.3333 12.3333 15.3333C13.9902 15.3333 15.3333 13.9902 15.3333 12.3333V7C15.3333 5.34315 13.9902 4 12.3333 4ZM8 11.8337C8 11.5575 7.77614 11.3337 7.5 11.3337C7.22386 11.3337 7 11.5578 7 11.8339V12.3333C7 15.1102 9.12227 17.3914 11.8333 17.6435V19.4999C11.8333 19.7761 12.0572 19.9999 12.3333 19.9999C12.6095 19.9999 12.8333 19.7761 12.8333 19.4999V17.6435C15.5444 17.3914 17.6667 15.1102 17.6667 12.3333V11.8337C17.6667 11.5575 17.4428 11.3337 17.1667 11.3337C16.8905 11.3337 16.6667 11.5577 16.6667 11.8338V12.3333C16.6667 14.7265 14.7266 16.6666 12.3333 16.6666C9.9401 16.6666 8 14.7262 8 12.333V11.8337Z"
                                  fill="white"
                                />
                              )}
                              {actions === "record" && (
                                <MotionSvg.Path
                                  d="M7.16667 6C6.52233 6 6 6.52233 6 7.16667V16.8333C6 17.4777 6.52233 18 7.16667 18H16.8333C17.4777 18 18 17.4777 18 16.8333V7.16667C18 6.52233 17.4777 6 16.8333 6H7.16667Z"
                                  fill="white"
                                />
                              )}
                              {actions === "ask" && (
                                <MotionSvg.Path
                                  d="M12.5 2.75V5.75C12.5 5.94891 12.421 6.13968 12.2803 6.28033C12.1397 6.42098 11.9489 6.5 11.75 6.5C11.5511 6.5 11.3603 6.42098 11.2197 6.28033C11.079 6.13968 11 5.94891 11 5.75V2.75C11 2.55109 11.079 2.36032 11.2197 2.21967C11.3603 2.07902 11.5511 2 11.75 2C11.9489 2 12.1397 2.07902 12.2803 2.21967C12.421 2.36032 12.5 2.55109 12.5 2.75ZM15.9922 8.25781C16.0908 8.25777 16.1884 8.23829 16.2794 8.20048C16.3705 8.16268 16.4532 8.1073 16.5228 8.0375L18.6444 5.91687C18.7851 5.77614 18.8642 5.58527 18.8642 5.38625C18.8642 5.18723 18.7851 4.99636 18.6444 4.85562C18.5036 4.71489 18.3128 4.63583 18.1138 4.63583C17.9147 4.63583 17.7239 4.71489 17.5831 4.85562L15.4625 6.97719C15.3575 7.08202 15.286 7.21563 15.257 7.3611C15.228 7.50658 15.2428 7.65739 15.2995 7.79447C15.3562 7.93155 15.4523 8.04874 15.5756 8.13121C15.6989 8.21369 15.8438 8.25774 15.9922 8.25781ZM20.75 11H17.75C17.5511 11 17.3603 11.079 17.2197 11.2197C17.079 11.3603 17 11.5511 17 11.75C17 11.9489 17.079 12.1397 17.2197 12.2803C17.3603 12.421 17.5511 12.5 17.75 12.5H20.75C20.9489 12.5 21.1397 12.421 21.2803 12.2803C21.421 12.1397 21.5 11.9489 21.5 11.75C21.5 11.5511 21.421 11.3603 21.2803 11.2197C21.1397 11.079 20.9489 11 20.75 11ZM16.5228 15.4625C16.381 15.3278 16.1922 15.2538 15.9966 15.2563C15.8011 15.2588 15.6142 15.3376 15.4759 15.4759C15.3376 15.6142 15.2588 15.8011 15.2563 15.9966C15.2538 16.1922 15.3278 16.381 15.4625 16.5228L17.5831 18.6444C17.7239 18.7851 17.9147 18.8642 18.1138 18.8642C18.3128 18.8642 18.5036 18.7851 18.6444 18.6444C18.7851 18.5036 18.8642 18.3128 18.8642 18.1138C18.8642 17.9147 18.7851 17.7239 18.6444 17.5831L16.5228 15.4625ZM11.75 17C11.5511 17 11.3603 17.079 11.2197 17.2197C11.079 17.3603 11 17.5511 11 17.75V20.75C11 20.9489 11.079 21.1397 11.2197 21.2803C11.3603 21.421 11.5511 21.5 11.75 21.5C11.9489 21.5 12.1397 21.421 12.2803 21.2803C12.421 21.1397 12.5 20.9489 12.5 20.75V17.75C12.5 17.5511 12.421 17.3603 12.2803 17.2197C12.1397 17.079 11.9489 17 11.75 17ZM6.97719 15.4625L4.85562 17.5831C4.71489 17.7239 4.63583 17.9147 4.63583 18.1138C4.63583 18.3128 4.71489 18.5036 4.85562 18.6444C4.99636 18.7851 5.18723 18.8642 5.38625 18.8642C5.58527 18.8642 5.77614 18.7851 5.91687 18.6444L8.0375 16.5228C8.17221 16.381 8.24621 16.1922 8.2437 15.9966C8.2412 15.8011 8.1624 15.6142 8.0241 15.4759C7.8858 15.3376 7.69894 15.2588 7.50337 15.2563C7.3078 15.2538 7.11898 15.3278 6.97719 15.4625ZM6.5 11.75C6.5 11.5511 6.42098 11.3603 6.28033 11.2197C6.13968 11.079 5.94891 11 5.75 11H2.75C2.55109 11 2.36032 11.079 2.21967 11.2197C2.07902 11.3603 2 11.5511 2 11.75C2 11.9489 2.07902 12.1397 2.21967 12.2803C2.36032 12.421 2.55109 12.5 2.75 12.5H5.75C5.94891 12.5 6.13968 12.421 6.28033 12.2803C6.42098 12.1397 6.5 11.9489 6.5 11.75ZM5.91687 4.85562C5.77614 4.71489 5.58527 4.63583 5.38625 4.63583C5.18723 4.63583 4.99636 4.71489 4.85562 4.85562C4.71489 4.99636 4.63583 5.18723 4.63583 5.38625C4.63583 5.4848 4.65524 5.58238 4.69296 5.67342C4.73067 5.76447 4.78594 5.84719 4.85562 5.91687L6.97719 8.0375C7.11898 8.17221 7.3078 8.24621 7.50337 8.2437C7.69894 8.2412 7.8858 8.1624 8.0241 8.0241C8.1624 7.8858 8.2412 7.69894 8.2437 7.50337C8.24621 7.3078 8.17221 7.11898 8.0375 6.97719L5.91687 4.85562Z"
                                  fill="white"
                                />
                              )}
                            </styledAnimated.Component>
                          </AnimatedSvg>
                        </AnimatedView>
                      </Pressable>
                    </Box>
                    <Box
                      bg="#ffffff1a"
                      flexDirection="row"
                      justifyContent="space-evenly"
                      alignItems="center"
                      py="$4"
                      px="$6"
                      position="absolute"
                      bottom={0}
                      left={0}
                      right={0}
                    >
                    <Box>
                    <StyledText
                      fontWeight="$semibold"
                      fontSize="$2xl"
                      lineHeight="$2xl"
                      color="$textDark50"
                    >
                      40
                    </StyledText>
                    <StyledText fontSize="$lg" lineHeight="$lg" color="$textDark400">
                      damping
                    </StyledText>
                  </Box>
                  <Box>
                    <StyledText
                      fontWeight="$semibold"
                      fontSize="$2xl"
                      lineHeight="$2xl"
                      color="$textDark50"
                    >
                      300
                    </StyledText>
                    <StyledText fontSize="$lg" lineHeight="$lg" color="$textDark400">
                      stiffness
                    </StyledText>
                  </Box>
                  <Box>
                    <StyledText
                      fontWeight="$semibold"
                      fontSize="$2xl"
                      lineHeight="$2xl"
                      color="$textDark50"
                    >
                      1.2
                    </StyledText>
                    <StyledText fontSize="$lg" lineHeight="$lg" color="$textDark400">
                      mass
                    </StyledText>
                  </Box>
                    </Box>
                  </Provider>
                );`,
        },
        {
          imports: `
          import React, { useState } from 'react';
          import { config } from './gluestack-style.config';
          import { Pressable, View, Text } from 'react-native';
          import { StyledProvider as Provider, styled } from '@gluestack-style/react';
          import { Motion } from '@legendapp/motion';
          import { MotionSvg } from '@legendapp/motion/svg';
          `,
          externalLink:
            "https://snack.expo.dev/@gluestack/gentle-animation?platform=web&theme=dark",
          componentCode: `const styledAnimated = createStyled([new AnimationResolver()]);
              const StyledRings = styledAnimated(Motion.View, {
                height: '$12',
                width: '$12',
                borderRadius: '$full',
                borderWidth: '$1',
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                ":initial": {
                  opacity: 1,
                  scale: 1,
                },
                ":animate": {
                  opacity: 0,
                  scale: 4,
                },
                ":exit": {
                  opacity: 0,
                  scale: 4,
                },
                ":transition": {
                  type: "timing",
                  duration: 2000,
                  ease: "easeOut",
                }
              });
              
              const AnimatedView = styledAnimated(Motion.View, {
                height: 48,
                width: 48,
                borderRadius: 48,
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,                
                ":initial": {
                  opacity: 0,
                  scale: 0,
                },
                ":animate": {
                  opacity: 1,
                  scale: 1,
                },
                ":exit": {
                  opacity: 0,
                  scale: 0.7,
                },
                ":transition": {
                  type: "spring",
                  damping: 18,
                  stiffness: 50,
                },
              });
    
              const AnimatedSvg = styledAnimated(MotionSvg.Svg, {
                height: "$5",
                width: "$5",
                props: {
                  viewBox: "0 0 24 24",
                },
                ':initial': {
                  opacity: 1,
                  rotate: "0deg",
                },
                ':animate': {
                  opacity: 1,
                  rotate: "360deg",
                },
                ':exit': {
                  opacity: 0,
                  rotate: "0deg",
                },
                ':transition': {
                  type: "spring",
                  damping: 18,
                  stiffness: 50,
                },
              });
    
              const Box = styled(View, {
                alignItems: 'center',
                justifyContent: 'center',
              })
    
              const StyledText = styled(Text, {})`,
          exampleCode: `const [active, setActive] = React.useState(true);
          const [actions, setActions] = React.useState("mic");
        
          const changeAnimation = () => {
            setActive(!active);
            setActions((prev) => {
              if (prev === "mic") {
                return "record";
              } else if (prev === "record") {
                return "ask";
              } else {
                return "mic";
              }
            });
          };
          
            return (
              <Provider config={config}>
                <Box position="absolute" bottom="60%" right="55%">
                  {[1, 2, 3].map((index) => {
                    return (
                      <styledAnimated.Component key={index}>
                        <StyledRings
                          key={actions-index}
                          sx={{
                            ":transition": {
                              delay: index * 300,
                            },
                          }}
                          borderColor={
                            actions === "mic" || actions === "record"
                              ? "$rose500"
                              : "$yellow500"
                          }
                        />
                      </styledAnimated.Component>
                    );
                  })}
                  <Pressable onPress={changeAnimation}>
                    <AnimatedView
                      key={actions}
                      bg={
                        actions === "mic" || actions === "record"
                          ? "$rose500"
                          : "$yellow500"
                      }
                    >
                      <AnimatedSvg>
                        <styledAnimated.Component>
                          {actions === "mic" && (
                            <MotionSvg.Path
                              d="M12.3333 4C10.6765 4 9.33333 5.34315 9.33333 7V12.3333C9.33333 13.9902 10.6765 15.3333 12.3333 15.3333C13.9902 15.3333 15.3333 13.9902 15.3333 12.3333V7C15.3333 5.34315 13.9902 4 12.3333 4ZM8 11.8337C8 11.5575 7.77614 11.3337 7.5 11.3337C7.22386 11.3337 7 11.5578 7 11.8339V12.3333C7 15.1102 9.12227 17.3914 11.8333 17.6435V19.4999C11.8333 19.7761 12.0572 19.9999 12.3333 19.9999C12.6095 19.9999 12.8333 19.7761 12.8333 19.4999V17.6435C15.5444 17.3914 17.6667 15.1102 17.6667 12.3333V11.8337C17.6667 11.5575 17.4428 11.3337 17.1667 11.3337C16.8905 11.3337 16.6667 11.5577 16.6667 11.8338V12.3333C16.6667 14.7265 14.7266 16.6666 12.3333 16.6666C9.9401 16.6666 8 14.7262 8 12.333V11.8337Z"
                              fill="white"
                            />
                          )}
                          {actions === "record" && (
                            <MotionSvg.Path
                              d="M7.16667 6C6.52233 6 6 6.52233 6 7.16667V16.8333C6 17.4777 6.52233 18 7.16667 18H16.8333C17.4777 18 18 17.4777 18 16.8333V7.16667C18 6.52233 17.4777 6 16.8333 6H7.16667Z"
                              fill="white"
                            />
                          )}
                          {actions === "ask" && (
                            <MotionSvg.Path
                              d="M12.5 2.75V5.75C12.5 5.94891 12.421 6.13968 12.2803 6.28033C12.1397 6.42098 11.9489 6.5 11.75 6.5C11.5511 6.5 11.3603 6.42098 11.2197 6.28033C11.079 6.13968 11 5.94891 11 5.75V2.75C11 2.55109 11.079 2.36032 11.2197 2.21967C11.3603 2.07902 11.5511 2 11.75 2C11.9489 2 12.1397 2.07902 12.2803 2.21967C12.421 2.36032 12.5 2.55109 12.5 2.75ZM15.9922 8.25781C16.0908 8.25777 16.1884 8.23829 16.2794 8.20048C16.3705 8.16268 16.4532 8.1073 16.5228 8.0375L18.6444 5.91687C18.7851 5.77614 18.8642 5.58527 18.8642 5.38625C18.8642 5.18723 18.7851 4.99636 18.6444 4.85562C18.5036 4.71489 18.3128 4.63583 18.1138 4.63583C17.9147 4.63583 17.7239 4.71489 17.5831 4.85562L15.4625 6.97719C15.3575 7.08202 15.286 7.21563 15.257 7.3611C15.228 7.50658 15.2428 7.65739 15.2995 7.79447C15.3562 7.93155 15.4523 8.04874 15.5756 8.13121C15.6989 8.21369 15.8438 8.25774 15.9922 8.25781ZM20.75 11H17.75C17.5511 11 17.3603 11.079 17.2197 11.2197C17.079 11.3603 17 11.5511 17 11.75C17 11.9489 17.079 12.1397 17.2197 12.2803C17.3603 12.421 17.5511 12.5 17.75 12.5H20.75C20.9489 12.5 21.1397 12.421 21.2803 12.2803C21.421 12.1397 21.5 11.9489 21.5 11.75C21.5 11.5511 21.421 11.3603 21.2803 11.2197C21.1397 11.079 20.9489 11 20.75 11ZM16.5228 15.4625C16.381 15.3278 16.1922 15.2538 15.9966 15.2563C15.8011 15.2588 15.6142 15.3376 15.4759 15.4759C15.3376 15.6142 15.2588 15.8011 15.2563 15.9966C15.2538 16.1922 15.3278 16.381 15.4625 16.5228L17.5831 18.6444C17.7239 18.7851 17.9147 18.8642 18.1138 18.8642C18.3128 18.8642 18.5036 18.7851 18.6444 18.6444C18.7851 18.5036 18.8642 18.3128 18.8642 18.1138C18.8642 17.9147 18.7851 17.7239 18.6444 17.5831L16.5228 15.4625ZM11.75 17C11.5511 17 11.3603 17.079 11.2197 17.2197C11.079 17.3603 11 17.5511 11 17.75V20.75C11 20.9489 11.079 21.1397 11.2197 21.2803C11.3603 21.421 11.5511 21.5 11.75 21.5C11.9489 21.5 12.1397 21.421 12.2803 21.2803C12.421 21.1397 12.5 20.9489 12.5 20.75V17.75C12.5 17.5511 12.421 17.3603 12.2803 17.2197C12.1397 17.079 11.9489 17 11.75 17ZM6.97719 15.4625L4.85562 17.5831C4.71489 17.7239 4.63583 17.9147 4.63583 18.1138C4.63583 18.3128 4.71489 18.5036 4.85562 18.6444C4.99636 18.7851 5.18723 18.8642 5.38625 18.8642C5.58527 18.8642 5.77614 18.7851 5.91687 18.6444L8.0375 16.5228C8.17221 16.381 8.24621 16.1922 8.2437 15.9966C8.2412 15.8011 8.1624 15.6142 8.0241 15.4759C7.8858 15.3376 7.69894 15.2588 7.50337 15.2563C7.3078 15.2538 7.11898 15.3278 6.97719 15.4625ZM6.5 11.75C6.5 11.5511 6.42098 11.3603 6.28033 11.2197C6.13968 11.079 5.94891 11 5.75 11H2.75C2.55109 11 2.36032 11.079 2.21967 11.2197C2.07902 11.3603 2 11.5511 2 11.75C2 11.9489 2.07902 12.1397 2.21967 12.2803C2.36032 12.421 2.55109 12.5 2.75 12.5H5.75C5.94891 12.5 6.13968 12.421 6.28033 12.2803C6.42098 12.1397 6.5 11.9489 6.5 11.75ZM5.91687 4.85562C5.77614 4.71489 5.58527 4.63583 5.38625 4.63583C5.18723 4.63583 4.99636 4.71489 4.85562 4.85562C4.71489 4.99636 4.63583 5.18723 4.63583 5.38625C4.63583 5.4848 4.65524 5.58238 4.69296 5.67342C4.73067 5.76447 4.78594 5.84719 4.85562 5.91687L6.97719 8.0375C7.11898 8.17221 7.3078 8.24621 7.50337 8.2437C7.69894 8.2412 7.8858 8.1624 8.0241 8.0241C8.1624 7.8858 8.2412 7.69894 8.2437 7.50337C8.24621 7.3078 8.17221 7.11898 8.0375 6.97719L5.91687 4.85562Z"
                              fill="white"
                            />
                          )}
                        </styledAnimated.Component>
                      </AnimatedSvg>
                    </AnimatedView>
                  </Pressable>
                </Box>
                <Box
                  bg="#ffffff1a"
                  flexDirection="row"
                  justifyContent="space-evenly"
                  alignItems="center"
                  py="$4"
                  px="$6"
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                >
                <Box>
                <StyledText
                  fontWeight="$semibold"
                  fontSize="$2xl"
                  lineHeight="$2xl"
                  color="$textDark50"
                >
                  18
                </StyledText>
                <StyledText fontSize="$lg" lineHeight="$lg" color="$textDark400">
                  damping
                </StyledText>
              </Box>
              <Box>
                <StyledText
                  fontWeight="$semibold"
                  fontSize="$2xl"
                  lineHeight="$2xl"
                  color="$textDark50"
                >
                  50
                </StyledText>
                <StyledText fontSize="$lg" lineHeight="$lg" color="$textDark400">
                  stiffness
                </StyledText>
              </Box>
                </Box>
              </Provider>
            );`,
        },
      ],
    },
  },
];

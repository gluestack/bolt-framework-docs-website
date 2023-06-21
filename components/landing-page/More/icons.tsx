import { Box, HStack, Text } from "@gluestack/design-system";
import React from "react";

export const UniversallyIcon = () => {
  return (
    <HStack>
      <Box
        style={{
          background:
            "linear-gradient(0deg, rgba(100, 116, 139, 0.2), rgba(100, 116, 139, 0.2)), radial-gradient(100% 100% at 0% 0%, rgba(79, 29, 158, 0.2) 63.13%, rgba(0, 0, 0, 0) 80%), radial-gradient(76.89% 199.86% at 126.89% 50%, rgba(29, 151, 158, 0.2) 0%, rgba(0, 0, 0, 0) 100%)",
        }}
        py="$1"
        px="$3"
        borderRadius="$full"
      >
        <Text
          fontWeight="$medium"
          fontSize="$2xs"
          lineHeight="$2xs"
          color="$textDark50"
        >
          Upcoming
        </Text>
      </Box>
    </HStack>
  );
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="7.2" height="7.2" rx="2" fill="#3F3D3D" />
      <rect y="8.40039" width="7.2" height="7.2" rx="2" fill="#3F3D3D" />
      <rect y="16.7998" width="7.2" height="7.2" rx="2" fill="#3F3D3D" />
      <rect x="8.40039" width="7.2" height="7.2" rx="2" fill="#3F3D3D" />
      <rect
        x="8.40039"
        y="8.40039"
        width="7.2"
        height="7.2"
        rx="2"
        fill="#3F3D3D"
      />
      <rect
        x="8.40039"
        y="16.7998"
        width="7.2"
        height="7.2"
        rx="2"
        fill="#3F3D3D"
      />
      <rect x="16.8008" width="7.2" height="7.2" rx="2" fill="#3F3D3D" />
      <rect
        x="16.8008"
        y="8.40039"
        width="7.2"
        height="7.2"
        rx="2"
        fill="#3F3D3D"
      />
      <rect
        x="16.8008"
        y="16.7998"
        width="7.2"
        height="7.2"
        rx="2"
        fill="#3F3D3D"
      />
      <path
        d="M12 20.5C16.4183 20.5 20 16.9183 20 12.5C20 8.08172 16.4183 4.5 12 4.5C7.58172 4.5 4 8.08172 4 12.5C4 16.9183 7.58172 20.5 12 20.5ZM12 5.83333C12.4983 5.83333 13.1672 6.30811 13.7501 7.59042C13.8764 7.86826 13.9926 8.17261 14.0969 8.5H9.90313C10.0074 8.17261 10.1236 7.86826 10.2499 7.59042C10.8328 6.30811 11.5017 5.83333 12 5.83333ZM9.03607 7.03868C8.83486 7.48134 8.65904 7.97173 8.51215 8.5H6.66618C7.36454 7.57025 8.30034 6.82903 9.38354 6.36637C9.25716 6.58155 9.14129 6.8072 9.03607 7.03868ZM8.21732 9.83333C8.07592 10.67 8 11.5686 8 12.5C8 13.4314 8.07592 14.33 8.21732 15.1667H5.88806C5.53126 14.35 5.33333 13.4481 5.33333 12.5C5.33333 11.5519 5.53126 10.65 5.88806 9.83333H8.21732ZM8.51215 16.5C8.65904 17.0283 8.83486 17.5187 9.03607 17.9613C9.14129 18.1928 9.25716 18.4184 9.38354 18.6336C8.30033 18.171 7.36454 17.4298 6.66618 16.5H8.51215ZM9.90313 16.5H14.0969C13.9926 16.8274 13.8764 17.1317 13.7501 17.4096C13.1672 18.6919 12.4983 19.1667 12 19.1667C11.5017 19.1667 10.8328 18.6919 10.2499 17.4096C10.1236 17.1317 10.0074 16.8274 9.90313 16.5ZM14.4285 15.1667H9.57155C9.41918 14.3523 9.33333 13.4519 9.33333 12.5C9.33333 11.5481 9.41918 10.6477 9.57155 9.83333H14.4285C14.5808 10.6477 14.6667 11.5481 14.6667 12.5C14.6667 13.4519 14.5808 14.3523 14.4285 15.1667ZM15.4879 16.5H17.3338C16.6355 17.4298 15.6997 18.171 14.6165 18.6336C14.7428 18.4184 14.8587 18.1928 14.9639 17.9613C15.1651 17.5187 15.341 17.0283 15.4879 16.5ZM18.1119 15.1667H15.7827C15.9241 14.33 16 13.4314 16 12.5C16 11.5686 15.9241 10.67 15.7827 9.83333H18.1119C18.4687 10.65 18.6667 11.5519 18.6667 12.5C18.6667 13.4481 18.4687 14.35 18.1119 15.1667ZM14.6165 6.36637C15.6997 6.82903 16.6355 7.57025 17.3338 8.5H15.4879C15.341 7.97173 15.1651 7.48134 14.9639 7.03868C14.8587 6.8072 14.7428 6.58155 14.6165 6.36637Z"
        fill="white"
      />
    </svg>
  );
};

export const GluestackIcon = () => {
  return (
    <HStack>
      <Box
        style={{
          background:
            "linear-gradient(0deg, rgba(100, 116, 139, 0.2), rgba(100, 116, 139, 0.2)), radial-gradient(100% 100% at 0% 0%, rgba(79, 29, 158, 0.2) 63.13%, rgba(0, 0, 0, 0) 80%), radial-gradient(76.89% 199.86% at 126.89% 50%, rgba(29, 151, 158, 0.2) 0%, rgba(0, 0, 0, 0) 100%) ",
        }}
        py="$1"
        px="$3"
        borderRadius="$full"
      >
        <Text
          fontWeight="$medium"
          fontSize="$2xs"
          lineHeight="$2xs"
          color="$textDark50"
        >
          Upcoming
        </Text>
      </Box>
    </HStack>
  );
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="7.2" height="7.2" rx="2" fill="#262626" />
      <rect y="8.40039" width="7.2" height="7.2" rx="2" fill="#262626" />
      <rect y="16.7998" width="7.2" height="7.2" rx="2" fill="#262626" />
      <rect x="8.40039" width="7.2" height="7.2" rx="2" fill="#262626" />
      <rect
        x="8.40039"
        y="8.40039"
        width="7.2"
        height="7.2"
        rx="2"
        fill="#262626"
      />
      <rect
        x="8.40039"
        y="16.7998"
        width="7.2"
        height="7.2"
        rx="2"
        fill="#262626"
      />
      <rect x="16.8008" width="7.2" height="7.2" rx="2" fill="#262626" />
      <rect
        x="16.8008"
        y="8.40039"
        width="7.2"
        height="7.2"
        rx="2"
        fill="#262626"
      />
      <rect
        x="16.8008"
        y="16.7998"
        width="7.2"
        height="7.2"
        rx="2"
        fill="#262626"
      />
      <path
        d="M7.33333 5H8.88889V19H7.33333V5ZM5 5H6.55556V19H5V5ZM9.66667 5H11.2222V19H9.66667V5ZM16.7149 18.8382L11.8748 5.70156L13.3347 5.16333L18.1748 18.3L16.7149 18.8382Z"
        fill="#1A91FF"
      />
    </svg>
  );
};

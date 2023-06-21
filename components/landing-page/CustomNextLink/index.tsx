import { createLink } from "@gluestack-ui/link";
import { Text } from "@gluestack/design-system";
import StyledLink from "./StyledLink";

export const CustomNextLink = createLink({ Root: StyledLink, Text: Text });

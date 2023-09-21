import "styled-components/native";

import type theme from "../constants/theme";

declare module "styled-components/native" {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {}
}

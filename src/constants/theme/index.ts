import { getSize } from "@/utils";

export default {
  COLORS: {},
  FONT_FAMILY: {
    NUNITO_SANS: {
      REGULAR: "NunitoSans_400Regular",
      BOLD: "NunitoSans_700Bold",
    },
    NUNITO_SANS_ITALIC: {
      REGULAR: "NunitoSans_400Regular_Italic",
      BOLD: "NunitoSans_700Bold_Italic",
    },
  },
  FONT_SIZE: {
    SM: getSize(14),
    MD: getSize(16),
    LG: getSize(18),
    XL: getSize(24),
  },
};

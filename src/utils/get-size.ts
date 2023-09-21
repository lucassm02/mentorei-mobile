import { RFValue } from "react-native-responsive-fontsize";

type Unity = "pixel" | "percentage" | "number";

const units = { pixel: "px", percentage: "%" };

export function getSize(value: number, unity: "pixel"): string;
export function getSize(value: number, unity: "percentage"): string;
export function getSize(value: number, unity: "number"): number;
export function getSize(value: number): string;
export function getSize(value: number, unity?: Unity) {
  if (unity === "number") {
    return RFValue(value);
  }
  if (!unity) return `${RFValue(value)}${units.pixel}`;
  return `${RFValue(value)}${units[unity]}`;
}

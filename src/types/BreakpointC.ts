import { BreakpointSet } from "./BreakpointCompassOptions";

//interface type for installed plugin options
export interface BreakpointC {
  breakpointSet: BreakpointSet;
  position: "tl" | "tr" | "bl" | "br";
}

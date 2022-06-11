import { BreakpointCompass } from "./components/BreakpointCompass";

export {};

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    BreakPointCompass: typeof BreakpointCompass;
  }
}

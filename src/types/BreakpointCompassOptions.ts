// This defines the custom settings for the plugin
export interface BreakpointCompassOptions {
  breakpoints?: BreakpointSet;
  position?: "tl" | "tr" | "bl" | "br";
}

export interface BreakPoint {
  name: string;
  px: number;
}

export interface BreakpointSet extends Array<BreakPoint> {}

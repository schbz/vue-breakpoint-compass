// This defines the custom settings for the plugin
export interface BreakpointCompassOptions {
  breakpoints?: BreakpointSet;
  position?: "tl" | "tr" | "bl" | "br";
}

interface BreakPoint {
  name: string;
  px: number;
}

export interface BreakpointSet extends Array<BreakPoint> {}

export const breakPointsTailwind: BreakpointSet = [
  { name: "sm", px: 640 },
  { name: "md", px: 768 },
  { name: "lg", px: 1024 },
  { name: "xl", px: 1280 },
  { name: "2xl", px: 1536 },
];

export const breakPointsQuasar: BreakpointSet = [
  { name: "xs", px: 0 },
  { name: "sm", px: 600 },
  { name: "md", px: 1024 },
  { name: "lg", px: 1440 },
  { name: "xl", px: 1920 },
];

export const breakPointsBootstrapv5: BreakpointSet = [
  { name: "sm", px: 576 },
  { name: "md", px: 768 },
  { name: "lg", px: 992 },
  { name: "xl", px: 1200 },
  { name: "2xl", px: 1400 },
];

export const breakPointsBulma: BreakpointSet = [
  { name: "mobile", px: 0 },
  { name: "tablet", px: 769 },
  { name: "desktop", px: 1024 },
  { name: "widescreen", px: 1216 },
  { name: "fullhd", px: 1408 },
];

export const breakPointsChakra: BreakpointSet = [
  { name: "sm", px: 480 },
  { name: "md", px: 768 },
  { name: "lg", px: 992 },
  { name: "xl", px: 1280 },
  { name: "2xl", px: 1472 },
];

export const breakPointsFoundation: BreakpointSet = [
  { name: "small", px: 0 },
  { name: "medium", px: 640 },
  { name: "large", px: 1024 },
  { name: "xlarge", px: 1024 },
  { name: "xl", px: 1200 },
  { name: "xxlarge", px: 1440 },
];

export const breakPointsIonic: BreakpointSet = [
  { name: "xs", px: 0 },
  { name: "sm", px: 576 },
  { name: "md", px: 768 },
  { name: "lg", px: 992 },
  { name: "xl", px: 1200 },
];

export const breakPointsMaterialUI: BreakpointSet = [
  { name: "xs", px: 0 },
  { name: "sm", px: 600 },
  { name: "md", px: 960 },
  { name: "lg", px: 1280 },
  { name: "xl", px: 1920 },
];

export const breakPointsMaterialize: BreakpointSet = [
  { name: "s", px: 0 },
  { name: "m", px: 600 },
  { name: "l", px: 992 },
  { name: "xl", px: 1200 },
];

export const breakPointsSemanticUI: BreakpointSet = [
  { name: "mobile", px: 0 },
  { name: "tablet", px: 768 },
  { name: "small monitor", px: 992 },
  { name: "large monitor", px: 1200 },
];

export const breakPointsSkeleton: BreakpointSet = [
  { name: "mobile", px: 0 },
  { name: "phablet", px: 550 },
  { name: "tablet", px: 750 },
  { name: "desktop", px: 1000 },
  { name: "desktop hd", px: 1200 },
];

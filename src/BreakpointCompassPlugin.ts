import { App, Plugin } from "vue";
import BreakpointCompass from "./components/BreakpointCompass.vue";
import { BreakpointC } from "./types/BreakpointC";
import { BreakpointCompassOptions } from "./types/BreakpointCompassOptions";
import { breakPointsTailwind } from "./types/BreakpointCompassOptions";

// Creates a new "BreakpointC" from options for use in the component via provide/inject
const createBreakpointOptions = (
  options: BreakpointCompassOptions
): BreakpointC => {
  return {
    breakpointSet: options.breakpoints || breakPointsTailwind,
    position: options.position || "tr",
  };
};

//Install function used by Vue to register the plugin
export const BreakpointCompassPlugin: Plugin = {
  install(app: App, options?: BreakpointCompassOptions) {
    // provide options for injection in descendant components
    app.provide("BreakpointCO", createBreakpointOptions(options || {}));
    // register compass display as a global component
    app.component("BreakpointCompass", BreakpointCompass);
  },
};

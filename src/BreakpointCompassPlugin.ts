import { App, Plugin } from "vue";
import BreakpointCompass from "./components/BreakpointCompass.vue";
import { BreakpointC } from "./types/BreakpointC";
import { BreakpointCompassOptions } from "./types/BreakpointCompassOptions";
import { breakPointsTailwind } from "./types/BreakpointCompassOptions";

// Creates a new DevHelp. "options" will be what is added to "app.use(DevHelpPlugin, options);"
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
  install(app: App, options: BreakpointCompassOptions) {
    // makes a global devhelp variable available in app as  "$this.devHelp"  "{{ $devHelp }}"
   // app.config.globalProperties.$BreakpointCOptions = createBreakpointOptions(options);

   // provide options for injection in decendant components
    app.provide("BreakpointCO", createBreakpointOptions(options));
    // register Panel as a global component
    app.component("BreakpointCompass", BreakpointCompass);
  },
};

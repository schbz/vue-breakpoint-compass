import { App, Plugin } from 'vue';
import Panel from './components/Panel.vue'
import { DevHelp } from "./types/DevHelp";
import { DevHelpOptions } from './types/DevHelpOptions';

// Creates a new DevHelp. "options" will be what is added to "app.use(DevHelpPlugin, options);"
const createHelpText = (options: DevHelpOptions): DevHelp => {
    return {
        panelText: options.text,
    }
}

//Install function used by Vue to register the plugin
export const DevHelpPlugin: Plugin = {
    install(app: App, options: DevHelpOptions) {
        // makes a global devhelp variable available in app as  "$this.devHelp"  "{{ $devHelp }}" 
        app.config.globalProperties.$devHelp = createHelpText(options)
        // register Panel as a global component
        app.component('DevHelpPanel', Panel)
    }
}
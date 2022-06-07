import Panel from './components/Panel.vue'
import { DevHelpOptions } from './types/DevHelpOptions'
import { DevHelp } from './types/DevHelp'
import { DevHelpPlugin } from './DevHelpPlugin'

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
      $devHelp: DevHelp,
    }
    export interface GlobalComponents {
        DevHelpPanel: typeof Panel,
      }
  }



export {Panel, DevHelpOptions, DevHelp, DevHelpPlugin}
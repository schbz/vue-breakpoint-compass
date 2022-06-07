import {Panel} from './components/Panel'

export {}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    DevHelpPanel: typeof Panel,
  }
}
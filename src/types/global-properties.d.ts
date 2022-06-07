import {DevHelp} from 'DevHelp'

export {}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $devHelp: DevHelp,
  }
}

# Dev Helper Panel

<p align="center">
    <a href="https://github.com/schbz/vue-breakpoint-compass" target="_blank">
      <img width="200" src="https://raw.githubusercontent.com/schbz/vue-breakpoint-compass/master/docs/VBChero.PNG" alt="insert image here later">
    </a>
    <br>
    A simple plugin that helps with CSS breakpoints
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/vue-breakpoint-compass"><img src="https://img.shields.io/npm/dt/vue-breakpoint-compass.svg" alt="Total Downloads"></a>
    <a href="https://github.com/schbz/vue-breakpoint-compass/releases"><img src="https://img.shields.io/npm/v/@schbz/vue-breakpoint-compass.svg" alt="Latest Release"></a>
    <a href="https://github.com/schbz/vue-breakpoint-compass/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@schbz/vue-breakpoint-compass.svg" alt="License"></a>
    <img src="https://img.shields.io/badge/dependencies-1-brightgreen.svg" /> 
</p>

---

## Install

```bash
npm i vue-breakpoint-compass
```

## Setup

Import: (in your main.js/ts)

```javascript
import BreakpointCompass, BreakpointCompassOptions from 'vue-breakpoint-compass'

// for default of top right position and tailwind v3 breakpoints:
Vue.use(BreakpointCompass)

//custom options example (breakpoints can be in any order but must be in correct object array format)
Vue.use(BreakpointCompass,{position: 'bl', breakpointSet: [{name: 'tiny', px: 300}, {name: 'bigger', px: 600}, {name: 'biggest', px: 1200}]})

```

## Usage

Use: (in your local .vue template/component)

```xml
<breakpoint-compass/>


<!-- Options struct: -->

default options: {
  position: "tr",
  breakpointSet:  [
    { name: "sm", px: 640 },
    { name: "md", px: 768 },
    { name: "lg", px: 1024 },
    { name: "xl", px: 1280 },
    { name: "2xl", px: 1536 }]
  }

```

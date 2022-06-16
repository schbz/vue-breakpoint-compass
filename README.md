# Vue Breakpoint Compass

<p align="center">
    <a href="https://github.com/schbz/vue-breakpoint-compass" target="_blank">
      <img width="200" src="https://raw.githubusercontent.com/schbz/vue-breakpoint-compass/master/docs/Animation.gif" alt="Example image">
    </a>
    <br>
    An easy to use plugin that makes responsive design with css breakpoints even easier
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/vue-breakpoint-compass"><img src="https://img.shields.io/npm/dt/vue-breakpoint-compass.svg" alt="Total Downloads"></a>
    <a href="https://github.com/schbz/vue-breakpoint-compass/releases"><img src="https://img.shields.io/npm/v/vue-breakpoint-compass.svg" alt="Latest Release"></a>
    <a href="https://github.com/schbz/vue-breakpoint-compass/blob/master/LICENSE.MD"><img src="https://img.shields.io/npm/l/vue-breakpoint-compass.svg" alt="License"></a>
    <img src="https://img.shields.io/badge/dependencies-1-brightgreen.svg" />
    <a href="https://unpkg.com/vue-breakpoint-compass"><img src="https://img.badgesize.io/https://unpkg.com/vue-breakpoint-compass.svg?compression=gzip&label=umd:minzip" alt="unpkg umd min:gzip size"</a>
    <a href="https://circleci.com/gh/schbz/vue-breakpoint-compass/tree/master"><img src="https://circleci.com/gh/schbz/vue-breakpoint-compass/tree/master.svg?style=svg" alt="CircleCI"</a>
    <a href="https://github.com/schbz/vue-breakpoint-compass/tree/master/src/types"><img src="https://img.shields.io/npm/types/vue-breakpoint-compass.svg?style=popout" alt="npm type definitions"</a>
    <a href="https://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome"</a>
</p>

---

## About

This is a typescript-ready vue 3 plugin created to provide web devs more detailed feedback as to how the current window size fits into any given set of CSS breakpoints. A small display shows the breakpoint name and how far away the nearest breakpoints are in pixel percentages with a progressbar.

[Demo](https://skylrs.com/apps/vbcdemo)

> "Wouldn't it be nice to know exactly how far away the nearest breakpoints are without having to go into Chrome devtools mode and slide the screen width thingy back and forth??!!??" - _web devs everywhere_

## Install

```bash
npm i vue-breakpoint-compass
```

## Setup

Import: (in your main.js or main.ts)

```javascript

import {BreakpointCompassPlugin} from "vue-breakpoint-compass";

// for default of top right position and tailwind v3 breakpoints:
Vue.use(BreakpointCompassPlugin);

//custom options example (breakpoints can be in any order but must be in correct object array format)
Vue.use(BreakpointCompassPlugin, {
  position: "bl",
  breakpointSet: [
    { name: "tiny", px: 300 },
    { name: "bigger", px: 600 },
    { name: "biggest", px: 1200 },
  ],
});

// TS users may also want to import BreakpointCompassOptions to type a custom option object.
import {BreakpointCompassPlugin, BreakpointCompassOptions} from "vue-breakpoint-compass";

<!-- Options struct: -->
const MyOptions: BreakpointCompassOptions = {
  position: "tr",
  breakpointSet:  [
    { name: "sm", px: 640 },
    { name: "md", px: 768 },
    { name: "lg", px: 1024 },
    { name: "xl", px: 1280 },
    { name: "2xl", px: 1536 }]
  }
```

### Valid position settings

- 'tr' top right (default)
- 'tl' top left
- 'br' bottom right
- 'bl' bottom left

### Importable breakpoint presets

- breakPointsBootstrapv5
- breakPointsTailwind
- breakPointsQuasar
- breakPointsBulma
- breakPointsChakra
- breakPointsFoundation
- breakPointsIonic
- breakPointsMaterialUI
- breakPointsMaterialize
- breakPointsSkeleton
- breakPointsSemanticUI

```javascript
import breakPointsBootstrapv5 from "vue-breakpoint-compass";

Vue.use(BreakpointCompassPlugin, { breakpointSet: breakPointsBootstrapv5 });
```

## Usage

Use: (in your local .vue template/component) during design phase or responsiveness fine-tuning process

```xml
<breakpoint-compass/>

// if you're too lazy to remove the plugin before deploying to production you could always use conditional rendering to show only during development
<breakpoint-compass v-if="devModeActive" />

```

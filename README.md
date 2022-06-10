# Dev Helper Panel

<p align="center">
    <a href="https://github.com/schbz" target="_blank">
      <img width="200" src="" alt="insert image here later">
    </a>
    <br>
    A simple plugin that helps with CSS breakpoints
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@schbz/dev-helper-panel"><img src="https://img.shields.io/npm/dt/@schbz/dev-helper-panel.svg" alt="Total Downloads"></a>
    <a href="https://github.com/schbz/devhelper/releases"><img src="https://img.shields.io/npm/v/@schbz/dev-helper-panel.svg" alt="Latest Release"></a>
    <a href="https://github.com/schbz/devHelper/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@schbz/dev-helper-panel.svg" alt="License"></a>
    <img src="https://img.shields.io/badge/dependencies-1-brightgreen.svg" /> 
</p>

---

## Install

```bash
npm i schbz@dev-helper-panel
```

## Setup

Import: (in your main.js)

```javascript
import DevHelperPanel, Optionns from 'insert thing here onec changes'
Vue.use(DevHelperPanel, options)
```

## Usage

Use: (in your local .vue file/component, html section)

```xml
<dev-Helper-panel
/>


<!-- Options struct: -->
options: {
  breakpointsTailwind: {
    value: "complete later"
  },

  }
}
```

## Update package:

### 1. Compile and build for production

```
npm run build
```

### 2. check into git

```
git add .
git commit -m "Message.."
```

### 3. Publish to NPM

```

# Do some work...

# x.x.1 -> x.x.2
npm version patch

# x.1.0 -> x.2.0
npm version minor

# 1.0.0 -> 2.0.0
npm version major

```

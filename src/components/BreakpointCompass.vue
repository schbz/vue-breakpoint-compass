<template>
  <div :style="styleObject">
    <div id="breakpointcompass" style="white">
      <p>{{ width }} {{ injected?.position }} ▣ {{ current(width) }}</p>
    </div>
    <div
      style="
        width: 100%;
        height: 10px;
        border-style: solid;
        border-width: 1px;
        border-color: white;
      "
    >
      <div
        style="background-color: white; height: 100%"
        :style="{ width: progressNext.toString() + '%' }"
      ></div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { CSSProperties } from "vue";
import { useWindowSize } from "@vueuse/core";
import { computed } from "@vue/reactivity";
import { inject } from "vue";
import { BreakpointSet } from "types/BreakpointCompassOptions";
import { BreakpointC } from "types/BreakpointC";

const styleObject: CSSProperties = {
  position: "fixed",
  bottom: "30px",
  right: "30px",
  minWidth: "70px",
  width: "auto",
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "white",
  height: "auto",
  textAlign: "center",
  fontSize: "14px",
  fontWeight: "bold",
  backgroundColor: "rgba(0,0,0)",
  display: "flex",
  flexDirection: "column",
};

const breakPoints: BreakpointSet = [
  { name: "d-sm", px: 640 },
  { name: "d-md", px: 768 },
  { name: "d-lg", px: 1024 },
  { name: "d-xl", px: 1280 },
  { name: "d-2xl", px: 1536 },
];

const injected: BreakpointC | undefined = inject("BreakpointCO");

const loadedBreakpoints: BreakpointSet = injected?.breakpointSet || breakPoints;

const sorted = loadedBreakpoints.sort((a, b) => a.px - b.px);

// returns current breakpoint as a string from a given width in number of pixels
const current = (w: Number): String => {
  let name = "none";
  sorted.forEach(function (item) {
    if (w >= item.px) {
      name = item.name;
    }
    if (w < item.px) return item.name;
  });
  return name;
};

//returns the number of pixels in the next higher breakpoint from a given current breakpoint string
const next = (c: String): Number => {
  // if c is the highest breakpoint return 5000 to prevent error
  if (c === sorted[sorted.length - 1].name) {
    return 5000;
  }
  return sorted[sorted.findIndex((i) => i.name === c) + 1].px || sorted[0].px;
};

//gives the most recent breakpoint number in pixels
const cur = (c: String): Number => {
  if (c === "none") {
    return 0;
  }
  return sorted[sorted.findIndex((i) => i.name === c)].px || 0;
};

const { width } = useWindowSize();

const progressNext = computed((): Number => {
  // check to see if current breakpoint is the highest, then return 100
  if (
    sorted.findIndex((i) => i.name === current(width.value)) >=
    sorted.length - 1
  ) {
    return 100;
  }
  const upgrade = next(current(width.value));
  const lastBP = cur(current(width.value));
  // return the percentage toward the next breakpoint
  return Math.round(
    ((width.value - Number(lastBP)) / (Number(upgrade) - Number(lastBP))) * 100
  );
});
</script>

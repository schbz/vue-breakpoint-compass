<template>
  <div id="breakpointcompass" :style="styleObject">
    <div
      id="breakpointcompass_display"
      style="color: black; display: flex; flex-direction: column; height: auto"
    >
      <div
        style="
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        "
      >
        <p
          style="padding: 2px 1px; font-size: 4px; text-align: right"
          v-show="prevBP !== NameFromPixels(width)"
        >
          {{ prevBP }}
        </p>
        <p style="padding: 2px 1px; font-size: 16px">
          {{ NameFromPixels(width) }}
        </p>
        <p
          style="padding: 2px 1px; font-size: 4px; text-align: right"
          v-show="nextBP !== NameFromPixels(width)"
        >
          {{ nextBP }}
        </p>
      </div>
      <div
        style="
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        "
      >
        <p
          style="padding: 2px 1px font-size: 4px; text-align:right;"
          v-show="prevPx !== width"
        >
          {{ prevPx }}
        </p>
        <p style="padding: 2px 1px">{{ width }}</p>
        <p
          style="padding: 2px 1px; text-align: right"
          v-show="nextBP !== NameFromPixels(width)"
        >
          {{ nextPx }}
        </p>
      </div>
    </div>
    <div
      style="
        width: full;
        height: 20px;
        border-style: solid;
        border-width: 2px;
        border-color: gold;
        position: relative;
      "
      id="breakpointcompass_progresscontainer"
    >
      <div
        id="breakpointcompass_progressbar"
        style="
          background-color: #ff0000bb;
          height: 100%;
          width: 3px;
          position: absolute;
          top: 0px;
        "
        :style="{ left: progressNext.toString() + '%' }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CSSProperties } from "vue";
import { useWindowSize } from "@vueuse/core";
import { computed } from "@vue/reactivity";
import { inject } from "vue";
import { BreakpointSet } from "types/BreakpointCompassOptions";
import { BreakpointC } from "types/BreakpointC";

// inject provided options
const injected: BreakpointC | undefined = inject("BreakpointCO");

const styleObject: CSSProperties = {
  position: "fixed",
  top: injected?.position?.includes("t") ? "30px" : "",
  bottom: injected?.position?.includes("b") ? "30px" : "",
  right: injected?.position?.includes("r") ? "30px" : "",
  left: injected?.position?.includes("l") ? "30px" : "",
  minWidth: "90px",
  width: "auto",
  borderStyle: "solid",
  borderWidth: "2px",
  borderColor: "goldenrod",
  height: "auto",
  textAlign: "center",
  fontSize: "6px",
  fontWeight: "bold",
  backgroundColor: "gold",
  display: "flex",
  flexDirection: "column",
};

//default breakpoints in case of problem with inject ( from tailwind v3)
const fallbackBreakPoints: BreakpointSet = [
  { name: "d-sm", px: 640 },
  { name: "d-md", px: 768 },
  { name: "d-lg", px: 1024 },
  { name: "d-xl", px: 1280 },
  { name: "d-2xl", px: 1536 },
];

const loadedBreakpoints: BreakpointSet =
  injected?.breakpointSet || fallbackBreakPoints;

// make sure the breakpoints are sorted from smallest to largest widths.
const sorted = loadedBreakpoints.sort((a, b) => a.px - b.px);

// returns current breakpoint as a string from a given width in number of pixels
const NameFromPixels = (w: Number): String => {
  let name = "none";
  sorted.forEach(function (item) {
    if (w >= item.px) {
      name = item.name;
    }
    if (w < item.px) return item.name;
  });
  return name;
};

//returns the number of pixels in the next higher breakpoint from a given NameFromPixels breakpoint string
const next = (c: String): Number => {
  // if c is the highest breakpoint return 5000 to prevent error
  if (c === sorted[sorted.length - 1].name) {
    return 5000;
  }
  return sorted[sorted.findIndex((i) => i.name === c) + 1].px || sorted[0].px;
};

//gives the most recent breakpoint number in pixels
const prev = (c: String): Number => {
  if (c === "none") {
    return 0;
  }
  return sorted[sorted.findIndex((i) => i.name === c)].px || 0;
};

const { width } = useWindowSize();

const nextBP = computed((): String => {
  return NameFromPixels(Number(nextPx));
});

const prevBP = computed((): String => {
  return NameFromPixels(Number(prevPx) - 5);
});

const nextPx = computed((): Number => {
  return next(NameFromPixels(width.value));
});

const prevPx = computed((): Number => {
  return prev(NameFromPixels(width.value));
});

const progressNext = computed((): Number => {
  // check to see if current breakpoint is the highest, then return 100
  if (
    sorted.findIndex((i) => i.name === NameFromPixels(width.value)) >=
    sorted.length - 1
  ) {
    return 100;
  }
  // return the percentage toward the next breakpoint
  return Math.round(
    ((width.value - Number(prevPx)) / (Number(nextPx) - Number(prevPx))) * 100
  );
});
</script>

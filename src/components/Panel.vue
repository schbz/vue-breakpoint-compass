<template>
  <div id="hpanel" :style="styleObject">
    <div id="container">
      <div
        id="message"
        style=""
        :style="{ color: $devHelp.panelText == 'green' ? 'green' : 'red' }"
      >
        {{ width }}
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CSSProperties } from "vue";
import { useWindowSize } from "@vueuse/core";

const styleObject: CSSProperties = {
  position: "fixed",
  top: "30px",
  right: "30px",
  width: "20px",
  height: "20px",
  fontSize: "10px",
  backgroundColor: "white",
};

const { width } = useWindowSize();
</script>

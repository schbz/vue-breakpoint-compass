<template>
  <h1 :style="{ color: 'green' }">
  This is the panel added from plugin. Slot:
    <slot></slot>
  </h1>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Panel"
})
</script>
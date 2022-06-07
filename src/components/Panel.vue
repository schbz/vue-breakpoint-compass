<template><div>
  <h1 :style="{ visibility: ($devHelp.panelText=='visible') ? 'visible' : 'hidden' }">
  This Text should only be visible if $devHelp exists
  </h1>
    This is the panel added from plugin. Slot:
    <slot></slot>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Panel"
})
</script>
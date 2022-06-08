<template><div id="hpanel">
<div id="container">
  <div id="message" :style="{ color: ($devHelp.panelText=='green') ? 'green' : 'red' }">
  Green if panelText is green
  </div>
    This is the panel added from plugin. Slot:
    <slot></slot>
    </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Panel"
})
</script>
<style>
#hpanel {
  position: sticky;
  top: 10rem;
  right: 10rem;
  height: 100rem;
  width: 100rem;
  background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
}

#message {
    font-size: 0.875rem;
  line-height: 1.25rem;
    text-align: center;
}

#container {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}

</style>
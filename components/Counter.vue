<template>
  <div 
    class="root" 
    @click="onclick">
    access counter: {{ counterValue || "" }}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Counter",
  props: {
    counterValue: {
      type: Number,
      required: true,
    },
    onclick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.root {
  text-align: center;
}
</style>

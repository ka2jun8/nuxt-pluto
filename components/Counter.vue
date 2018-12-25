<template>
  <div 
    class="root" 
    @click="increment">
    access counter: {{ counterValue || "" }}
  </div>
</template>

<script>
export default {
  name: "Counter",
  computed: {
    counterValue() {
      return this.$store.state.counter.count;
    },
  },
  watch: {
    $route: function() {
      this.increment();
    },
  },
  mounted() {
    this.$store.dispatch("counter/increment");
  },
  methods: {
    increment() {
      this.$store.dispatch("counter/increment");
    },
  },
};
</script>

<style lang="scss" scoped>
.root {
  text-align: center;
}
</style>

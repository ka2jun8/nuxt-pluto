<template>
  <Counter 
    :counter-value="count"
    :onclick="increment"
  />
</template>

<script>
import { mapState, mapActions } from "vuex";
import Counter from "../components/Counter";

export default {
  name: "CounterContainer",
  components: {
    Counter,
  },
  computed: {
    ...mapState("counter", ["count"]),
  },
  watch: {
    $route: function() {
      this.increment();
    },
  },
  mounted() {
    this.increment();
  },
  methods: {
    ...mapActions("counter", ["increment"]),
  },
};
</script>

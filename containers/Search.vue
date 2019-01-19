<template>
  <search :item="item" />
</template>

<script>
import Search from "../components/Search";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    Search,
  },
  computed: {
    ...mapState("search", ["item"]),
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  text-align: center;
}
</style>

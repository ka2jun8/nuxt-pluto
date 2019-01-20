<template>
  <search />
</template>

<script>
import Search from "../../containers/Search";

export default {
  components: {
    Search,
  },
  async fetch({ store, route }) {
    const { id } = route.params;
    if (keyword) {
      return store.dispatch("search/fetchItem", id);
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  text-align: center;
}
</style>

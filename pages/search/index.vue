<template>
  <search-list />
</template>

<script>
import SearchList from "../../containers/SearchList";

export default {
  components: {
    SearchList,
  },
  middleware: "auth",
  watchQuery: ["page", "keyword"],
  async fetch({ store, route }) {
    const { page, keyword } = route.query;
    if (keyword) {
      return store.dispatch("searchList/fetchItems", {
        page: page || 0,
        keyword,
      });
    }
  },
};
</script>

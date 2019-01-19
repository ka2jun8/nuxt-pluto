<template>
  <hacker-news />
</template>

<script>
import HackerNews from "../containers/HackerNews";

export default {
  components: {
    HackerNews,
  },
  async fetch({ store }) {
    return store.dispatch("hackerNews/fetchItems");
  },
};
</script>

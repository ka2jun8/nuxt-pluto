<template>
  <hacker-news />
</template>

<script>
import HackerNews from "../containers/HackerNews";

export default {
  components: {
    HackerNews,
  },
  head() {
    return {
      title: "Hacker news page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Hacker news page",
        },
      ],
    };
  },
  async fetch({ store }) {
    return store.dispatch("hackerNews/fetchItems");
  },
};
</script>

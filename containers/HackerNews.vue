<template>
  <hacker-news
    :items="items"
    :loading="loading"
  />
</template>

<script>
import { mapState } from "vuex";
import HackerNews from "../components/HackerNews";

export default {
  name: "HackerNewsContainer",
  components: {
    HackerNews,
  },
  computed: {
    ...mapState("hackerNews", ["loading", "items"]),
  },
};
</script>

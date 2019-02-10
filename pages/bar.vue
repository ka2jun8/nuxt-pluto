<template>
  <bar />
</template>

<script>
import Bar from "../components/Bar";

export default {
  components: {
    Bar,
  },
  head() {
    return {
      title: "Bar page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Bar page",
        },
      ],
    };
  },
};
</script>

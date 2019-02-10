<template>
  <foo />
</template>

<script>
import Foo from "../components/Foo";

export default {
  components: {
    Foo,
  },
  head() {
    return {
      title: "Foo page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Foo page",
        },
      ],
    };
  },
};
</script>

<template>
  <large-form />
</template>

<script>
import LargeForm from "../components/LargeForm";

export default {
  components: {
    LargeForm,
  },
  head() {
    return {
      title: "Large Form page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Large Form page",
        },
      ],
    };
  },
};
</script>

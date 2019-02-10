<template>
  <agreed-sample />
</template>

<script>
import { mapState } from "vuex";
import AgreedSample from "../containers/AgreedSample";

export default {
  name: "AgreedSamplePage",
  components: {
    AgreedSample,
  },
  head() {
    return {
      title: "Agreed sample page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Agreed sample page",
        },
      ],
    };
  },
  async fetch({ store }) {
    return store.dispatch("agreedsample/getText");
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  text-align: center;
}
</style>

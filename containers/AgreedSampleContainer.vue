<template>
  <AgreedSample 
    :text="text"
  />
</template>

<script>
import { mapState } from "vuex";
import AgreedSample from "../components/AgreedSample";

export default {
  name: "AgreedSampleContainer",
  components: {
    AgreedSample,
  },
  computed: {
    ...mapState("agreedsample", ["loading", "text"]),
  },
  mounted() {
    this.$store.dispatch("agreedsample/getText");
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  text-align: center;
}
</style>

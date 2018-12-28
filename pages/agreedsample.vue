<template>
  <div class="container">
    {{ text }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  async asyncData({ app }) {
    const result = await app.$axios.get("/api/agreedsample");
    return {
      text: result.data.results.text,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  text-align: center;
}
</style>

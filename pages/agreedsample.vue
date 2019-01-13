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
    try {
      const result = await app.$axios.get("/api/agreedsample");
      return {
        text: result.data.results.text,
      };
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  text-align: center;
}
</style>

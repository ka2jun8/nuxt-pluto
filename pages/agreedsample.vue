<template>
  <div class="container">
    {{ text }}
  </div>
</template>

<script>
export default {
  // asyncDataはnuxt generateでうまく動かないのでvuexで取得
  computed: {
    loading() {
      return this.$store.state.agreedsample.loading;
    },
    text() {
      return this.$store.state.agreedsample.text;
    },
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

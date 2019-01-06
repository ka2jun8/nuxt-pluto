<template>
  <div class="container">
    {{ item.name }}
    <a 
      :href="item.urls && item.urls.pc" 
      target="blank">
      詳細のページヘ行く
    </a>
  </div>
</template>

<script>
export default {
  computed: {
    item() {
      return this.$store.state.search.item;
    },
  },
  mounted() {
    this.$store.dispatch("search/fetchItem", this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  text-align: center;
}
</style>

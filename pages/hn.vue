<template>
  <div class="container">
    <h1>HackerNews</h1>
    <div v-if="loading">loading...</div>
    <div class="list-container">
      <div 
        v-for="item in items"
        :key="item.id"
        class="item-container" 
      >
        <a :href="item.url">{{ item.title }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.state.hackerNews.loading;
    },
    items() {
      return this.$store.state.hackerNews.items;
    },
  },
  mounted() {
    this.$store.dispatch("hackerNews/fetchItems");
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  text-align: center;
}
.list-container {
  display: flex;
  flex-direction: column;
}
.item-container {
  width: 100%;
}
</style>

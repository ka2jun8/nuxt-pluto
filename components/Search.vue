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
  name: "Search",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  text-align: center;
}
</style>

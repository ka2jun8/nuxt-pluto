<template>
  <div class="container">
    <div>
      <div 
        v-if="canGetPrev"
        class="search-more"
        @click="onClickPrev">
        戻る
      </div>
      <div>
        <span>{{ count || 0 }}</span>
        <span>件あります</span>
      </div>
      <span>~~~~ {{ page }} ~~~~</span>
      <div 
        v-for="(item, idx) in items" 
        :key="idx" 
        class="list-item">
        <div class="shop-name">
          <img 
            :src="item.logo_image_square" 
            :alt="item.name">
          <nuxt-link :to="`search/${item.id}`">{{ item.name }}</nuxt-link>
        </div>
        <div class="description">{{ item.description }}</div>
      </div>
      <div 
        v-if="canGetNext" 
        class="search-more"
        @click="onClickNext">
        進む
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchList",
  props: {
    page: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 0,
    },
    items: {
      type: Array,
      default: () => [],
    },
    canGetPrev: {
      type: Boolean,
      default: false,
    },
    canGetNext: {
      type: Boolean,
      default: false,
    },
    onClickPrev: {
      type: Function,
      required: true,
    },
    onClickNext: {
      type: Function,
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
.search-lists {
  text-align: center;
  margin: 0 auto;
}
.list-item {
  height: 200px;
  width: 100%;
  border: thin solid black;
}
.shop-name {
  float: left;
}
.description {
  clear: left;
  font-size: 5px;
  border: thin solid grey;
  height: 100px;
  text-align: left;
}
</style>

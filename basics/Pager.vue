<template>
  <div class="container">
    <div class="pager">
      <div 
        v-for="p in slicedPages"
        :key="p">
        <span 
          v-if="page === p" 
          class="current">
          {{ p }}
        </span>
        <nuxt-link 
          v-else 
          :to="`/search?keyword=${keyword}&page=${p}`"
          class="link">
          {{ p }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pager",
  props: {
    slicedPages: {
      type: Array,
      required: true,
    },
    page: {
      type: Number,
      default: 0,
    },
    keyword: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.pager {
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.curernt {
  text-decoration: bold;
  padding: 8px 8px;
}
.link {
  color: #0033cc;
  text-decoration: underline;
  cursor: pointer;
  padding: 8px 8px;
}
</style>

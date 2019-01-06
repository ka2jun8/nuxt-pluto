<template>
  <div class="container">
    <form 
      method="GET"
      @submit.prevent="submit">
      <div>
        <label htmlFor="keyword">
          Free Keyword
          <div id="keyword">
            <input
              id="keyword"
              v-model="keyword"
              :autoFocus="!count"
              type="text"
              name="keyword">
            <button 
              :disabled="loading"
              type="submit">
              Search
            </button>
          </div>
        </label>
      </div>
    </form>
    <div>
      <div 
        v-if="canGetPrev" 
        class="search-more">
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
        class="search-more">
        進む
      </div>
    </div>
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
const PAGE_WINDOW = 20;

export default {
  middleware: "auth",
  data() {
    return {
      keyword: this.$route.query.keyword || "",
    };
  },
  computed: {
    loading() {
      return this.$store.state.searchList.loading;
    },
    count() {
      return this.$store.state.searchList.count;
    },
    page() {
      return this.$store.state.searchList.page;
    },
    slicedPages() {
      const { page, pages } = this.$store.state.searchList;
      if (page < PAGE_WINDOW / 2) {
        return pages.slice(0, PAGE_WINDOW);
      }
      return pages.slice(page - PAGE_WINDOW / 2, page + PAGE_WINDOW / 2);
    },
    items() {
      return this.$store.state.searchList.items;
    },
    canGetPrev() {
      return this.$store.state.searchList.canGetPrev;
    },
    canGetNext() {
      return this.$store.state.searchList.canGetNext;
    },
  },
  watch: {
    $route: function() {
      this.fetchItems();
    },
  },
  mounted() {
    this.fetchItems();
  },
  methods: {
    async fetchItems() {
      const { page, keyword } = this.$route.query;
      if (keyword) {
        this.$store.dispatch("searchList/fetchItems", {
          page: page || 0,
          keyword,
        });
      }
    },
    async submit() {
      if (this.keyword) {
        this.$router.push(`/search?keyword=${this.keyword}&page=0`);
      }
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

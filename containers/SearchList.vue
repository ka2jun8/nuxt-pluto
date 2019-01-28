<template>
  <div class="container">
    <search-form
      :count="count"
      :loading="loading"
      :submit="submit"
    />
    <search-list 
      :page="page"
      :count="count"
      :items="items"
      :can-get-prev="canGetPrev"
      :can-get-next="canGetNext"
      :on-click-prev="onClickPrev"
      :on-click-next="onClickNext"
    />
    <pager 
      :sliced-pages="slicedPages"
      :page="page"
      :keyword="keyword"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import SearchForm from "../basics/SearchForm";
import Pager from "../basics/Pager";
import SearchList from "../components/SearchList";

const PAGE_WINDOW = 20;

export default {
  name: "SearchListContainer",
  components: {
    SearchForm,
    SearchList,
    Pager,
  },
  data() {
    return {
      keyword: this.queryKeyword || "",
    };
  },
  computed: {
    ...mapState("route", { queryKeyword: "keyword" }),
    ...mapState("searchList", [
      "loading",
      "count",
      "page",
      "pages",
      "items",
      "canGetPrev",
      "canGetNext",
    ]),
    slicedPages() {
      const { page, pages } = this;
      if (page < PAGE_WINDOW / 2) {
        return pages.slice(0, PAGE_WINDOW);
      }
      return pages.slice(page - PAGE_WINDOW / 2, page + PAGE_WINDOW / 2);
    },
  },
  methods: {
    onClickPrev() {
      this.$router.replace(
        `/search?keyword=${this.keyword}&page=${this.page - 1}`
      );
    },
    onClickNext() {
      this.$router.replace(
        `/search?keyword=${this.keyword}&page=${this.page + 1}`
      );
    },
    async submit(keyword) {
      if (keyword) {
        this.keyword = keyword;
        this.$router.push(`/search?keyword=${keyword}&page=0`);
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

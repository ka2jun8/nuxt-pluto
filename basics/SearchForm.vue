<template>
  <div class="container">
    <form 
      method="GET"
      @submit.prevent="onclick">
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
</div></template>

<script>
export default {
  name: "SearchForm",
  props: {
    count: {
      type: Number,
      default: 0,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    submit: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    onclick() {
      this.submit(this.keyword);
    },
  },
};
</script>

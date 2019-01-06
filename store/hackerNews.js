export const state = () => ({
  items: [],
  page: 1,
  loading: false,
});

export const actions = {
  async fetchItems(context) {
    context.commit("FETCH_ITEMS_REQUEST");
    try {
      const res = await this.$axios.get("/api/hackernews");
      context.commit("FETCH_ITEMS_SUCCESS", res.data);
    } catch (e) {
      context.commit("FETCH_ITEMS_FAIL", { error: e });
    }
  },
};

export const mutations = {
  FETCH_ITEMS_REQUEST: function(state, data) {
    state.loading = true;
  },
  FETCH_ITEMS_SUCCESS: function(state, data) {
    state.items = data;
    state.loading = false;
  },
  FETCH_ITEMS_FAIL: function(state, data) {
    state.loading = false;
    state.error = data.error;
  },
};

export const state = () => ({
  loading: false,
  item: {},
});

export const actions = {
  async fetchItem(context, id) {
    context.commit("FETCH_ITEM_REQUEST");
    try {
      const res = await this.$axios.get("/api/search", { params: { id } });
      context.commit("FETCH_ITEM_SUCCESS", res.data);
    } catch (e) {
      context.commit("FETCH_ITEM_FAIL", { error: e });
    }
  },
};

export const mutations = {
  FETCH_ITEM_REQUEST: function(state) {
    state.loading = true;
  },
  FETCH_ITEM_SUCCESS: function(state, data) {
    const {
      results: { search: items },
    } = data;
    const item = items[0];

    state.loading = false;
    state.item = item;
  },
  FETCH_ITEM_FAIL: function(state, data) {
    state.loading = false;
    state.error = data.error;
  },
};

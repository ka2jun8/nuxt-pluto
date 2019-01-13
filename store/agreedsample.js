export const state = () => ({
  loading: false,
  text: "",
});

export const actions = {
  async getText(context) {
    context.commit("AGREED_SAMPLE_GET_TEXT_REQUEST");
    try {
      const res = await this.$axios.get("/api/agreedsample");
      context.commit("AGREED_SAMPLE_GET_TEXT_SUCCESS", res.data);
    } catch (e) {
      context.commit("AGREED_SAMPLE_GET_TEXT_FAIL", { error: e });
    }
  },
};

export const mutations = {
  AGREED_SAMPLE_GET_TEXT_REQUEST: function(state, data) {
    state.loading = true;
  },
  AGREED_SAMPLE_GET_TEXT_SUCCESS: function(state, data) {
    const {
      results: { text },
    } = data;
    state.text = text;
    state.loading = false;
  },
  AGREED_SAMPLE_GET_TEXT_FAIL: function(state, data) {
    state.loading = false;
    state.error = data.error;
  },
};

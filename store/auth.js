export const state = () => ({
  user: null,
});

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.auth) {
      commit("SET_USER", req.session.auth);
    }
  },
  async login(context, data) {
    try {
      const res = await this.$axios.post("/api/login", data);
      context.commit("SET_USER", res.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error("Bad credentials");
      }
      throw error;
    }
  },
  async logout(context) {
    await this.$axios.post("/api/logout");
    context.commit("SET_USER", null);
  },
};

export const mutations = {
  SET_USER: function(state, data) {
    state.user = data;
  },
};

export const state = () => ({
  location: "/",
});

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req && req.session && req.session.auth) {
      commit("auth/SET_USER", req.session.auth);
    }
  },
  async change(context, data) {
    context.commit("change", data);
  },
};

export const mutations = {
  change(state, data) {
    state.location = data;
  },
};

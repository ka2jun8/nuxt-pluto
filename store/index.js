export const state = () => ({
  location: "/",
});

export const actions = {
  async change(context, data) {
    context.commit("change", data);
  },
};

export const mutations = {
  change(state, data) {
    state.location = data;
  },
};

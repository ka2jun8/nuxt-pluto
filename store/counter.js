export const state = () => ({
  count: 0,
});

export const getters = {
  getCount(state) {
    return state.count;
  },
};

export const actions = {
  async increment(context) {
    const res = await this.$axios.post("/api/counter");
    console.log("increment", { res });
    context.commit("increment", res.data);
  },
};

export const mutations = {
  increment(state, data) {
    state.count = data.counter;
  },
};

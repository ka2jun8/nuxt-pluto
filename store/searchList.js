export const state = () => ({
  loading: false,
  items: [],
  count: 0,
  page: 0,
  pages: [],
  canGetNext: false,
  canGetPrev: false,
});

export const actions = {
  async fetchItems(context, params) {
    context.commit("FETCH_ITEMS_REQUEST");
    try {
      const res = await this.$axios.get("/api/search", { params });
      context.commit("FETCH_ITEMS_SUCCESS", { ...res.data, params });
    } catch (e) {
      context.commit("FETCH_ITEMS_FAIL", { error: e });
    }
  },
};

export const mutations = {
  FETCH_ITEMS_REQUEST: function(state) {
    state.loading = true;
  },
  FETCH_ITEMS_SUCCESS: function(state, data) {
    const { results, params } = data;
    const {
      results_available: count,
      results_start: start,
      search: items,
    } = results;
    const page = +params.page || 0;

    state.loading = false;
    state.count = +count;
    state.page = page;
    state.pages = createPages(+count);
    state.items = items;
    state.canGetNext = canGetNext(count, start);
    state.canGetPrev = canGetPrev(page);
  },
  FETCH_ITEMS_FAIL: function(state, data) {
    state.loading = false;
    state.error = data.error;
  },
};

export const SEARCH_MAX_COUNT = 50;

function canGetNext(count, start) {
  return +count > +start + SEARCH_MAX_COUNT;
}

function canGetPrev(page) {
  return +page > 0;
}

function createPages(count) {
  const maxPage = count / SEARCH_MAX_COUNT;
  return new Array(maxPage).fill(null).map((n, p) => p);
}

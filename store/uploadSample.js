export const state = () => ({
  loading: false,
  path: "",
});

export const actions = {
  async upload(context, { path, name, file }) {
    context.commit("UPLOAD_FILE_REQUEST");
    try {
      const res = await uploadSingleFile({
        path,
        name,
        file,
        client: this.$axios,
      });
      context.commit("UPLOAD_FILE_SUCCESS", res.data);
    } catch (e) {
      context.commit("UPLOAD_FILE_FAIL", { error: e });
    }
  },
};

function uploadSingleFile({ path, name, file, client }) {
  const formData = new FormData();
  formData.append(name, file);
  const headers = formData.getHeaders && formData.getHeaders();
  return client.post(`${path}`, formData, { headers });
}

export const mutations = {
  UPLOAD_FILE_REQUEST: function(state) {
    state.loading = true;
  },
  UPLOAD_FILE_SUCCESS: function(state, data) {
    const { path } = data;
    state.loading = false;
    state.path = path;
  },
  UPLOAD_FILE_FAIL: function(state, data) {
    state.loading = false;
    state.error = data.error;
  },
};

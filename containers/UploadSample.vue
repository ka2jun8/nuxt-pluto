<template>
  <upload-sample 
    :loading="loading"
    :path="path"
    :on-input-file="onInputFile"
    :on-submit-file="onSubmitFile"
    :on-cancel="onCancel"
  />
</template>

<script>
import { mapState, mapActions } from "vuex";
import UploadSample from "../components/UploadSample";

export default {
  name: "UploadSampleContainer",
  components: {
    UploadSample,
  },
  data() {
    return {
      file: null,
    };
  },
  computed: {
    ...mapState("uploadSample", ["loading", "path"]),
  },
  methods: {
    ...mapActions("uploadSample", ["upload"]),
    onInputFile(e) {
      this.file = e.target.files.item(0);
    },
    onSubmitFile() {
      this.upload({
        path: "/upload/uploadsample",
        name: "file",
        file: this.file,
      });
    },
    onCancel() {
      // TODO cancel
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  text-align: center;
}
</style>

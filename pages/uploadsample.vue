<template>
  <div class="container">
    <div>
      <img 
        v-if="!!path" 
        :src="path">
    </div>
    <div>
      <input 
        type="file" 
        @change="onInputFile" >
    </div>
    <div>
      <button 
        :disabled="loading"
        type="button"
        @click="onSubmitFile">
        submit
      </button>
      <button 
        type="button" 
        @click="onCancel">
        cancel
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
    };
  },
  computed: {
    loading() {
      return this.$store.state.uploadSample.loading;
    },
    path() {
      return this.$store.state.uploadSample.path;
    },
  },
  methods: {
    onInputFile(e) {
      this.file = e.target.files.item(0);
    },
    onSubmitFile() {
      this.$store.dispatch("uploadSample/upload", {
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

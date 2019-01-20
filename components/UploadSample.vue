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
  name: "UploadSample",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    path: {
      type: String,
      default: "",
    },
    onInputFile: {
      type: Function,
      required: true,
    },
    onSubmitFile: {
      type: Function,
      required: true,
    },
    onCancel: {
      type: Function,
      required: true,
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

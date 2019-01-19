<template>
  <p 
    v-if="error" 
    class="error">
    {{ error }}
  </p>
</template>

<script>
export default {
  props: {
    error: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
}
</style>

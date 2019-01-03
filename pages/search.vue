<template>
  <div class="container">
    <div>
      Search
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  text-align: center;
}
</style>

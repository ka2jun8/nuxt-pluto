<template>
  <div class="container">
    Foo!
    <button 
      type="button" 
      @click="onClickMe">
      Click me!
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    onClickMe: function() {
      // TODO analytics tests
      console.log("onClickMe");
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

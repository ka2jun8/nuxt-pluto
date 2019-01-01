<template>
  <div class="container">
    <div 
      v-for="elm in elms" 
      :key="elm">
      Bar![{{ elm }}]
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      elms: new Array(500).fill(null).map((k, i) => i),
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  text-align: center;
}
</style>

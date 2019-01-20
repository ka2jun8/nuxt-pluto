<template>
  <div class="container">
    <div
      v-for="(item, idx) in items"
      :key="idx"
    >
      <label 
        :for="item.message" 
        class="label">
        メッセージ {{ idx }}
        <input 
          :id="item.message" 
          v-model="item.message"
          class="input"
          type="text">
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "LargeForm",
  data() {
    return {
      items: [...new Array(500)].map((k, i) => ({ message: `aaa${i}` })),
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  text-align: center;
}
.input {
  width: 600px;
}
.label {
  text-align: right;
}
</style>

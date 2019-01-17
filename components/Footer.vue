<template>
  <div class="footer-root">
    <counter />
    <div class="today">2018/12/19</div>
  </div>
</template>

<script>
import Counter from "../containers/Counter";

export default {
  name: "Footer",
  components: {
    Counter,
  },
};
</script>

<style lang="scss" scoped>
.footer-root {
  border-color: lightgrey;
  border-width: 1px;
  border-style: solid;
  padding: 10px;
}
.today {
  text-align: center;
}
</style>

<template>
  <div class="footer-root">
    <counter />
    <div class="today">{{ date }}</div>
  </div>
</template>

<script>
import format from "date-fns/format";
import Counter from "../containers/Counter";

export default {
  name: "Footer",
  components: {
    Counter,
  },
  data() {
    return {
      date: format(new Date(), "YYYY/MM/DD"),
    };
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

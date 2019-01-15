<template>
  <div class="container">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "AgreedSample",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

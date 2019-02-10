<template>
  <login />
</template>

<script>
import Login from "../containers/Login";

export default {
  components: {
    Login,
  },
  head() {
    return {
      title: "Login page",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Login page",
        },
      ],
    };
  },
};
</script>

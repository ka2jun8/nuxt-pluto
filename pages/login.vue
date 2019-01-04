<template>
  <div class="container">
    <form 
      v-if="!$store.state.auth.user" 
      @submit.prevent="login">
      <p 
        v-if="formError" 
        class="error">
        {{ formError }}
      </p>
      <p><i>To login, use <b>scott</b> as username and <b>tiger</b> as password.</i></p>
      <p>Username: 
        <input 
          v-model="formUsername" 
          type="text" 
          name="username">
      </p>
      <p>Password: 
        <input 
          v-model="formPassword" 
          type="password" 
          name="password">
      </p>
      <button type="submit">
        Login
      </button>
    </form>
    <div v-else>
      Hello {{ $store.state.auth.user.username }}!
      <button @click="logout">
        Logout
      </button>
    </div>
    <p>
      <nuxt-link to="/search">
        Search page
      </nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formError: null,
      formUsername: "",
      formPassword: "",
    };
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch("auth/login", {
          username: this.formUsername,
          password: this.formPassword,
          redirect: this.$route.query,
        });
        this.formUsername = "";
        this.formPassword = "";
        this.formError = null;
      } catch (e) {
        this.formError = e.message;
      }
    },
    async logout() {
      try {
        await this.$store.dispatch("auth/logout");
      } catch (e) {
        this.formError = e.message;
      }
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

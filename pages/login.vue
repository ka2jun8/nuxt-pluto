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
      <p><i>To login, use <b>scott@example.com</b> as username and <b>tiger</b> as password.</i></p>
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li 
            v-for="(error, idx) in errors"
            :key="idx">
            {{ error }}
          </li>
        </ul>
      </p>
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
      errors: [],
      formError: null,
      formUsername: "",
      formPassword: "",
    };
  },
  methods: {
    async login() {
      if (!this.validation()) {
        return;
      }
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
    validation() {
      this.errors = [];
      if (!this.formPassword) {
        this.errors.push("Password required.");
      } else if (!this.formUsername) {
        this.errors.push("Username required.");
      } else if (!this.validEmail(this.formUsername)) {
        this.errors.push("Valid email required.");
      }
      if (!this.errors.length) {
        return true;
      }
      return false;
    },
    validEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
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

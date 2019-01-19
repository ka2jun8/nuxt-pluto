<template>
  <div class="container">
    <form 
      v-if="!user" 
      @submit.prevent="login">
      <error :error="form.error" />
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
          v-model="form.username" 
          type="text" 
          name="username">
      </p>
      <p>Password: 
        <input 
          v-model="form.password" 
          type="password" 
          name="password">
      </p>
      <button type="submit">
        Login
      </button>
    </form>
    <div v-else>
      Hello {{ user.username }}!
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
import Error from "../basics/Error";

export default {
  name: "Login",
  components: {
    Error,
  },
  props: {
    user: {
      type: Object,
      default: null,
    },
    errors: {
      type: Array,
      required: true,
    },
    form: {
      type: Object,
      required: true,
    },
    login: {
      type: Function,
      required: true,
    },
    logout: {
      type: Function,
      required: true,
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

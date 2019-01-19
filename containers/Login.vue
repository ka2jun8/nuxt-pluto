<template>
  <div class="container">
    <login 
      :errors="errors"
      :form="form"
      :user="user"
      :login="login"
      :logout="logout"
    />
  </div>
</template>

<script>
import Login from "../components/Login";
import { mapState, mapActions } from "vuex";

const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default {
  name: "LoginContainer",
  components: {
    Login,
  },
  data() {
    return {
      errors: [],
      form: {
        error: null,
        username: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState("auth", ["user"]),
    ...mapState("route", ["query"]),
  },
  methods: {
    ...mapActions("auth", { loginAction: "login", logoutAction: "logout" }),
    async login() {
      if (!this.validation()) {
        return;
      }
      try {
        await this.loginAction({
          username: this.form.username,
          password: this.form.password,
          redirect: this.query,
        });
        this.form.username = "";
        this.form.password = "";
        this.form.error = null;
      } catch (e) {
        this.form.error = e.message;
      }
    },
    async logout() {
      try {
        await this.logoutAction();
      } catch (e) {
        this.form.error = e.message;
      }
    },
    validation() {
      this.errors = [];
      if (!this.form.password) {
        this.errors.push("Password required.");
      } else if (!this.form.username) {
        this.errors.push("Username required.");
      } else if (!this.validEmail(this.form.username)) {
        this.errors.push("Valid email required.");
      }
      if (!this.errors.length) {
        return true;
      }
      return false;
    },
    validEmail(email) {
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

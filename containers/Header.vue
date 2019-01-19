<template>
  <div class="header-root">
    <hgroup>
      <h1 class="service-logo">NUXT PLUTO</h1>
      <h2 class="corporate-logo">PRODUCED by KA2JUN8</h2>
    </hgroup>
    <nav-links 
      :links="links"
      :location="location"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import NavLinks from "../components/NavLinks";

export default {
  name: "HeaderContainer",
  components: {
    NavLinks,
  },
  data() {
    return {
      links: [
        { key: "home", to: "/", label: "Home", index: true },
        { key: "foo", to: "/foo", label: "Foo" },
        { key: "bar", to: "/bar", label: "Bar" },
        { key: "agreedsample", to: "/agreedsample", label: "AgeedSample" },
        { key: "uploadsample", to: "/uploadsample", label: "UploadSample" },
        { key: "search", to: "/search", label: "Search" },
        { key: "largeform", to: "/largeform", label: "LargeForm" },
        { key: "hacker-news", to: "/hn", label: "HackerNews" },
        { key: "login", to: "/login", label: "Login" },
        { key: "logout", to: "/logout", label: "Logout" },
      ],
    };
  },
  computed: {
    ...mapState(["location"]),
  },
  watch: {
    $route: function() {
      this.change($nuxt.$route.path);
    },
  },
  methods: {
    ...mapActions(["change"]),
  },
};
</script>

<style lang="scss" scoped>
.header-root {
  text-align: center;
  padding-top: 24px;
  background-color: #be3c5f;
  color: white;
  width: 100%;
}
.service-logo {
  margin-bottom: 24px;
}
</style>

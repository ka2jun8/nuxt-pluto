<template>
  <div class="header-root">
    <hgroup>
      <h1 class="service-logo">REDUX PLUTO</h1>
      <h2 class="corporate-logo">PRODUCED by RECRUIT</h2>
    </hgroup>
    <nav>
      <ul class="items">
        <li 
          v-for="(link, index) in links" 
          :key="index"
          class="item">
          <nuxt-link 
            v-if="link.to === location"
            :to="link.to"
            class="link-selected">
            {{ link.label }}
          </nuxt-link>
          <nuxt-link
            v-else
            :to="link.to"
            class="link">
            {{ link.label }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: $nuxt.$route.path,
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
  watch: {
    $route: function() {
      this.location = $nuxt.$route.path;
    },
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

.items {
  display: flex;
  justify-content: space-around;
  overflow: hidden;
}

.item {
  flex-grow: 1;
}

.link {
  display: block;
  padding: 12px 0;
  background-color: lightgray;
  &:hover {
    background-color: darkgray;
  }
}

.link-selected {
  display: block;
  padding: 12px 0;
  background-color: grey;
  &:hover {
    background-color: darkgray;
  }
}
</style>

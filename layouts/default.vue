<template>
  <div>
    <div class="header">
      <Header/>
    </div>
    <div class="main">
      <nuxt/>
    </div>
    <div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from "~/containers/Header";
import Footer from "~/components/Footer";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.header {
  z-index: 1;
}
</style>

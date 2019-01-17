<template>
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
</template>

<script>
export default {
  name: "NavLinks",
  props: {
    links: {
      type: Array,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
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

<template>
  <div id="app">
    <LinkBar :items="Json.link_bar" :logo="Json.img_project" />
  </div>
</template>

<script>
import json from "./data/data-project.json";
import LinkBar from "./components/LinkBar.vue";
export default {
  name: "App",
  components: {
    LinkBar,
  },
  data() {
    return {
      Json: json,
    };
  },
};
</script>

<style lang="scss">
#app {
}
</style>

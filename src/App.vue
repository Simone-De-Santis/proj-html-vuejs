<template>
  <div id="app">
    <Navbar :items="dataJson.link_bar" />
  </div>
</template>

<script>
import json from "./data/data-project.json";
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {
      dataJson: json,
    };
  },
};
</script>

<style lang="scss">
#app {
}
</style>

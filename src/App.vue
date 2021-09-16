<template>
  <div id="app">
    <Jumbotron
      :description="Json.dataa_component.jumbo"
      :link_bar="Json.link_bar"
      :logo="Json.img_project.img_link_bar"
    />
    <ShopWindow
      :description="Json.dataa_component.our_product"
      :slider_image="Json.img_project.slider_mini"
    />
    <Special
      :description="Json.dataa_component.corporate_wedding"
      :dataimg="Json.img_project.corporatewedding_img"
    />
  </div>
</template>

<script>
import json from "./data/data-project.json";
import Jumbotron from "./components/Jumbotron.vue";
import ShopWindow from "./components/ShopWindow.vue";
import Special from "./components/Special.vue";

export default {
  name: "App",
  components: {
    Jumbotron,
    ShopWindow,
    Special,
  },
  data() {
    return {
      Json: json,
    };
  },
};
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  .container {
    max-width: 1450px;
    margin: 0 auto;
  }
  .section {
    margin-top: 50px;
  }
}
</style>

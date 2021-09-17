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
    <ShopWindow
      :description="Json.dataa_component.freshly_baked"
      :slider_image="Json.img_project.slider_mini"
    />
    <MultiSection
      :data_multi_section="Json.dataa_component.data_multi_section"
    />
    <Location :data="Json.dataa_component.stores" />
    <Social :data="Json.dataa_component.social" />
    <JumboFooter :data="Json.dataa_component.jumbo_footer" />
    <Footer
      :link_bar="Json.link_bar"
      :logo="Json.img_project.img_link_bar"
      :newsletter="Json.dataa_component.newsletter"
      :copyright="Json.dataa_component.copyright"
      :iconsocials="Json.dataa_component.icon_social"
    />
  </div>
</template>

<script>
import json from "./data/data-project.json";
import Jumbotron from "./components/Jumbotron.vue";
import ShopWindow from "./components/ShopWindow.vue";
import Special from "./components/Special.vue";
import MultiSection from "./components/MultiSection.vue";
import Location from "./components/Location.vue";
import Social from "./components/Social.vue";
import Footer from "./components/Footer.vue";
import JumboFooter from "./components/JumboFooter.vue";

export default {
  name: "App",
  components: {
    Jumbotron,
    ShopWindow,
    Special,
    MultiSection,
    Location,
    Social,
    Footer,
    JumboFooter,
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
  .section {
    margin-top: 50px;
  }
}
</style>

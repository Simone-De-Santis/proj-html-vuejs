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
body {
  font-family: "Roboto Slab", serif;
}
#app {
  .section {
    margin-top: 100px;
  }
}
.up-title {
  text-transform: uppercase;
  font-size: 12px;
  color: $manatee;
}
.title {
  text-transform: capitalize;
  font-size: 3rem;
  color: $daisy-bush;
  font-weight: 800;
}
.title-slider {
  font-size: 1.8rem;
}
.color-multi-slide {
  color: $white;
}
.paragraph {
  font-size: 16px;
  color: $manatee;
}
.btn {
  padding: 12px 20px;
  border-radius: 10px;
  border: 0;
  background-color: white;
  color: $daisy-bush;
  font-weight: 600;
}
.btn-alternative {
  background-color: $daisy-bush;
  color: white;
}
.style-number {
  font-weight: 200;
  font-size: 5rem;
}
</style>

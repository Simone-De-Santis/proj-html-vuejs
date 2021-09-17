<template>
  <div class="container section">
    <div class="row">
      <div class="col-4">
        <p class="up-title margin-t-b-1">{{ description.up_title }}</p>
        <h2 class="title title-slider margin-t-b-1">{{ description.title }}</h2>
        <p>{{ description.sub_title }}</p>
        <button type="submit" class="btn btn-alternative margin-t-b-1">
          {{ description.text_button }}
        </button>
      </div>

      <div class="col-8">
        <Slider />
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";
export default {
  name: "ShopWindow",
  components: { Slider },
  props: ["slider_image", "description"],
};
</script>

<style lang="scss" scoped>
</style>
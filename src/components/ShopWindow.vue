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
        sezione slider 2/3 colonne Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Excepturi, dolorum quae sint sunt nisi laboriosam,
        assumenda nobis blanditiis deleniti, eveniet dolores labore. Quod et
        iste doloribus laudantium voluptatem natus Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Explicabo, odio. Est eveniet quisquam eos
        aut et, incidunt amet nam sit quia consequuntur tenetur corrupti
        nostrum? Quo ullam expedita voluptatibus amet.
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
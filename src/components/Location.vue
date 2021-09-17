<template>
  <section class="container section">
    <p class="up-title">{{ data.up_title }}</p>
    <h2 class="title title-slider">{{ data.title }}</h2>
    <div class="row margin-t-50">
      <div class="col-6">
        <Storre :data="data.store_new_york" :isYork="true" />
      </div>
      <div class="col-6">
        <Storre :data="data.store_london" :isLondon="true" />
      </div>
    </div>
  </section>
</template>

<script>
import Storre from "./components_stores/Storre.vue";
export default {
  name: "Location",
  components: { Storre },
  props: ["data"],
};
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}
</style>
<template>
  <div class="container">
    <p>{{ data.up_title }}</p>
    <h2>{{ data.title }}</h2>
    <div class="d-flex">
      <div class="col">
        <Storre :data="data.store_new_york" />
      </div>
      <div class="col">
        <Storre :data="data.store_london" />
      </div>
    </div>
  </div>
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
.d-flex {
  display: flex;
  .col {
    width: 50%;
  }
}
</style>
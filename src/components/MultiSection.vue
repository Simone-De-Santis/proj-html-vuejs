<template>
  <div class="container">
    <MiniJumbo :data="data_multi_section.section_one" />
    <div class="row">
      <div class="col">
        <MiniJumbo :data="data_multi_section.section_two" />
      </div>
      <div class="col">
        <DoubleSlide :data="data_multi_section.section_two.next_two" />
      </div>
    </div>
    <MiniJumbo :data="data_multi_section.section_three" />
  </div>
</template>

<script>
import MiniJumbo from "./components_multisection/MiniJumbo.vue";
import DoubleSlide from "./components_multisection/DoubleSlide.vue";
export default {
  name: "MultiSection",
  components: {
    MiniJumbo,
    DoubleSlide,
  },
  props: ["data_multi_section"],
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  .col {
    max-width: 50%;
  }
}
</style>
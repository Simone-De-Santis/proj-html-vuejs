<template>
  <div class="container">
    <MiniJumbo :data="data_multi_section.section_one" :isOffset="true" />
    <div class="row">
      <div class="col pd-right-15">
        <MiniJumbo :data="data_multi_section.section_two" :isCol_8="true" />
      </div>
      <div class="col pd-left-15">
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
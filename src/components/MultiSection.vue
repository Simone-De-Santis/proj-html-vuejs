<template>
  <div class="container">
    <h1>componente per multisezione</h1>
    <hr />
    <MiniJumbo :data="data_multi_section.section_one" />
    <DoubleSlide :data="data_multi_section.section_two" />
    <MiniJumbo :data="data_multi_section.section_three" />
    <hr />
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

<style>
</style>
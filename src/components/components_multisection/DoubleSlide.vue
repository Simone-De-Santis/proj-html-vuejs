<template>
  <div class="container margin-t-b-1">
    <h2 class="up-title margin-t-b-1">{{ data.up_title }}</h2>
    <h2 class="title title-slider margin-t-b-1">{{ data.title }}</h2>
    <p class="up-title margin-t-b-1">{{ data.sub_title }}</p>
  </div>
</template>

<script>
export default {
  name: "DoubleSlide",
  props: ["data"],
};
</script>

<style lang="scss" scoped>
.container {
  background-color: $pearl-bush;
  height: 700px;
  padding: 100px;
  .title-slider {
    font-size: 35px;
  }
}
</style>
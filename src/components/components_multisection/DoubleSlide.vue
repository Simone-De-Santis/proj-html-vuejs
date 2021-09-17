<template>
  <div class="container">
    <h2>{{ data.up_title }}</h2>
    <h1>{{ data.title }}</h1>
    <p>{{ data.sub_title }}</p>
  </div>
</template>

<script>
export default {
  name: "DoubleSlide",
  props: ["data"],
};
</script>

<style lang="scss" scoped>
div {
  background-color: red;
  min-height: 600px;
}
</style>
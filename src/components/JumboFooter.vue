<template>
  <div
    class="container-fluid"
    :style="{ backgroundImage: 'url(' + SrcImg + ')' }"
  >
    <div class="mini-container">
      <p>{{ data.up_title }}</p>
      <h2>{{ data.title }}</h2>
      <button type="submit">{{ data.text_button }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "JumboFooter",
  props: ["data"],
  computed: {
    SrcImg() {
      return require(`../assets/img/${this.data.backgroud_image}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.mini-container {
  max-width: 1200px;
  margin: 0 auto;
}
.container-fluid {
  min-height: 200px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
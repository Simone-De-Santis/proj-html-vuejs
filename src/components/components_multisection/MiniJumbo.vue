<template>
  <div class="container" :style="{ backgroundImage: 'url(' + SrcImg + ')' }">
    <div class="row">
      <div class="col">
        <h2>{{ data.title }}</h2>
      </div>
      <div class="col">
        <h2>{{ data.number }}</h2>
      </div>
    </div>
    <div class="row">
      <p>{{ data.up_title }}</p>
      <p>{{ data.paragraph }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniJumbo",
  props: ["data"],

  computed: {
    SrcImg() {
      return require(`../../assets/img/${this.data.img_background}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-size: cover;
  min-height: 600px;
}
</style>
<template>
  <div class="container">
    <p>{{ description.up_title }}</p>
    <h1>{{ description.title }}</h1>
    <section class="imageContainer">
      <div>
        <img :src="printUrlImg(dataimg.corporate)" alt="" />
      </div>
      <div>
        <img :src="printUrlImg(dataimg.wedding)" alt="" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Special",
  props: ["description", "dataimg"],
  data() {
    return {
      searchPath: "../assets/img/",
    };
  },
  computed: {},
  methods: {
    printUrlImg(nameImage) {
      return require(`../assets/img/${nameImage}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.imageContainer {
  @include flex("");
}
img {
  width: 100%;
}
</style>
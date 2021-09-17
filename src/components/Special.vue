<template>
  <div class="container">
    <p class="up-title margin-t-b-1">{{ description.up_title }}</p>
    <h2 class="title title-slider margin-t-b-1">{{ description.title }}</h2>
    <section class="row margin-t-50">
      <div class="col-6 pd-right-50">
        <img :src="printUrlImg(dataimg.corporate)" alt="" />
      </div>
      <div class="col-6 pd-left-50">
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
.container {
  text-align: center;
}
img {
  width: 100%;
}
</style>
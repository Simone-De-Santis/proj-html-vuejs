<template>
  <div class="container section">
    <div class="row align-center">
      <div class="col-3">
        <img :src="printUrlImg(data.img_one)" alt="" />
      </div>
      <div class="col-6 bg-color">
        <div class="content">
          <p class="up-title">{{ data.up_title }}</p>
          <h2 class="title">{{ data.title }}</h2>
          <button type="submit" class="btn btn-alternative">
            <a href="#">{{ data.text_button }} </a>
          </button>
        </div>
      </div>
      <div class="col-3">
        <img :src="printUrlImg(data.img_two)" alt="" />
      </div>
    </div>
    <div class="row">
      <div
        v-for="(item, index) in data.img_second_row"
        :key="index"
        class="col-3"
      >
        <img :src="printUrlImg(item)" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Social",
  props: ["data"],
  methods: {
    printUrlImg(nameImage) {
      return require(`../assets/img/${nameImage}`);
    },
  },
};
</script>
<style lang="scss" scoped>
img {
  max-width: 100%;
  padding: 20px;
}
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.bg-color {
  background-color: $pearl-bush;
}
.content {
  height: 350px;
  @include center("");
  flex-direction: column;
}
</style>
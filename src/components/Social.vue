<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <img :src="printUrlImg(data.img_one)" alt="" />
      </div>
      <div class="col">
        <p>{{ data.up_title }}</p>
        <h2>{{ data.title }}</h2>
        <button type="submit">{{ data.text_button }}</button>
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
.col-4 {
  flex-basis: calc(100% / 12 * 4);
  max-width: calc(100% / 12 * 4);
}
.col-3 {
  flex-basis: calc(100% / 12 * 3);
  max-width: calc(100% / 12 * 3);
}
img {
  max-width: 100%;
}
.col {
  flex-grow: 1;
}
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
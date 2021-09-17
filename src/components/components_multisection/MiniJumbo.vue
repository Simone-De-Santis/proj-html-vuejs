<template>
  <div
    class="container margin-t-b-1"
    :style="{ backgroundImage: 'url(' + SrcImg + ')' }"
  >
    <div class="content">
      <div class="row between">
        <div class="col-4" :class="{ col_8: isCol_8 }">
          <h2 class="title color-multi-slide">{{ data.title }}</h2>
        </div>
        <div class="col-1">
          <h2 class="title color-multi-slide style-number">
            {{ data.number }}
          </h2>
        </div>
      </div>
      <div class="row paragraph color-multi-slide">
        <div class="col-5" :class="{ offset_8: isOffset }">
          <p class="up-title margin-t-b-1">{{ data.up_title }}</p>
          <p class="color-multi-slide">{{ data.paragraph }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniJumbo",
  props: ["data", "isOffset", "isCol_8"],
  data() {
    return {};
  },
  methods: {},

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
  background-position: center;
  .content {
    height: 700px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.45);
  }
}
.offset_8 {
  margin-left: calc(100% / 12 * 8);
}
.col_8 {
  flex-basis: calc(100% / 12 * 8);
  max-width: calc(100% / 12 * 8);
}
</style>
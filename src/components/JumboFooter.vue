<template>
  <div
    class="container-fluid"
    :style="{ backgroundImage: 'url(' + SrcImg + ')' }"
  >
    <div class="mini-container pd-50-0">
      <div class="col-5">
        <p class="up-title">{{ data.up_title }}</p>
        <h2 class="title color-multi-slide pd-25-0">{{ data.title }}</h2>
        <button type="submit" class="btn btn-aletrnative">
          {{ data.text_button }}
        </button>
      </div>
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
.title {
  font-size: 30px;
}
</style>
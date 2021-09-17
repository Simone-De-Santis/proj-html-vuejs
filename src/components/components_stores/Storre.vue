<template>
  <div>
    <img :src="SrcImg" alt="" />
    <div
      class="content_info"
      :class="{ bg_color_york: isYork, bg_color_london: isLondon }"
    >
      <div class="row center">
        <h3 class="title title-slider">{{ data.name }}</h3>
      </div>
      <div class="row margin-t-20">
        <div class="col">
          <ul>
            <li class="up-title margin-b-5">Call us</li>
            <li class="up-title up-title-second">{{ data.phone }}</li>
          </ul>
        </div>
        <div class="col">
          <ul>
            <li class="up-title margin-b-5">open all week</li>
            <li class="up-title up-title-second">{{ data.opening_time }}</li>
          </ul>
        </div>
        <div class="col">
          <button type="submit" class="btn">{{ data.text_button }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Storre",
  props: ["data", "isYork", "isLondon"],
  computed: {
    SrcImg() {
      return require(`../../assets/img/${this.data.image}`);
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
@include modlist();
li {
  a {
    font-size: 12px;
    font-weight: 600;
  }
}
.content_info {
  padding: 20px;
}
.bg_color_york {
  background-color: #f1f9fb;
}
.bg_color_london {
  background-color: #f9f3e3;
}
.up-title-second {
  font-size: 14px;
}
</style>
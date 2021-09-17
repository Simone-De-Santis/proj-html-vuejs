<template>
  <div class="jumbotron" :style="{ backgroundImage: 'url(' + SrcImg + ')' }">
    <LinkBar :items="link_bar" :logo="logo" />
    <section class="container margin-t-100">
      <div class="row">
        <div class="col-4">
          <p class="up-title">{{ description.up_title }}</p>
          <h1 class="title margin-t-b-1">{{ description.title }}</h1>
          <p class="paragraph margin-t-b-1">{{ description.paragraph }}</p>
          <button class="btn" type="submit">
            <a href="#"> {{ description.text_button }} </a>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LinkBar from "./LinkBar.vue";

export default {
  name: "Jumbotron",
  props: ["description", "link_bar", "logo"],
  components: {
    LinkBar,
  },
  computed: {
    SrcImg() {
      return require(`../assets/img/${this.description.backgroud_image}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.jumbotron {
  height: 700px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
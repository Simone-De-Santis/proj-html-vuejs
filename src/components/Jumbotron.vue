<template>
  <div class="jumbotron" :style="{ backgroundImage: 'url(' + SrcImg + ')' }">
    <LinkBar :items="link_bar" :logo="logo" />
    <section class="container">
      <div class="row">
        <div class="col-4">
          <p class="up-title">{{ description.up_title }}</p>
          <h1 class="title">{{ description.title }}</h1>
          <p class="paragraph">{{ description.paragraph }}</p>
          <button class="btn" type="submit">
            {{ description.text_button }}
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
  height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
<template>
  <div class="jumbotron">
    <LinkBar :items="link_bar" :logo="logo" />
    <section class="container">
      <p>{{ description.up_title }}</p>
      <h1>{{ description.title }}</h1>
      <p>{{ description.paragraph }}</p>
      <button type="submit">
        {{ description.text_button }}
      </button>
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
};
</script>

<style lang="scss" scoped>
.jumbotron {
  height: 500px;
  background-image: url("../assets/img/hero-header-bakery.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
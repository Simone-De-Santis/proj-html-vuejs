<template>
  <div>
    <div class="row">
      <div class="col-6">
        <LinkBar :items="link_bar" :logo="logo" />
      </div>
      <div class="col-6">
        <NewsLetter :data="newsletter" />
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <p>{{ copyright.info }}</p>
      </div>
      <div class="col-6">
        <ul>
          <li>
            <a href="#">{{ iconsocials.insta }}</a>
          </li>
          <li>
            <a href="#">{{ iconsocials.twitter }}</a>
          </li>
          <li>
            <a href="#">{{ iconsocials.facebook }}</a>
          </li>
          <li>
            <a href="#">{{ iconsocials.printer }}</a>
          </li>
          <li>
            <a href="#">{{ iconsocials.facebook }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import LinkBar from "./LinkBar.vue";
import NewsLetter from "./NewsLetter.vue";
export default {
  name: "Footer",
  props: ["newsletter", "link_bar", "logo", "copyright", "iconsocials"],
  components: {
    NewsLetter,
    LinkBar,
  },
};
</script>

<style lang="scss" scoped>
</style>
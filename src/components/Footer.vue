<template>
  <div>
    <div class="row">
      <div class="col-6">
        <LinkBar :items="link_bar" :logo="logo" />
      </div>
      <div class="col-6 d-flex letter">
        <NewsLetter :data="newsletter" />
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <p>{{ copyright.info }}</p>
      </div>
      <div class="col-1 col-offset-5">
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
.row {
  @include center();
}

ul {
  @include center(space);
  @include modlist();
  li {
    a {
      font-size: 12px;
      font-weight: 600;
    }
  }
}
.letter {
  justify-content: flex-end;
  padding: 20px;
}
</style>
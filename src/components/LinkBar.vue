<template>
  <div class="linkBar">
    <div class="row">
      <div class="col-12">
        <img :src="printUrlImg(logo)" alt="" />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <ul>
          <li v-for="(item, index) in items" :key="index">
            <a :href="item.src">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "linkBar",
  props: ["items", "logo"],
  data() {
    return {
      baseSrcImg: "@/assets/img/",
    };
  },
  computed: {},
  methods: {
    printUrlImg(nameImage) {
      return require(`../assets/img/${nameImage}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.linkBar {
  padding: 10px;
  @include center(space);
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
}
</style>
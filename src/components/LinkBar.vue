<template>
  <div class="linkBar">
    <img :src="printUrlImg(logo)" alt="" />
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <a :href="item.src">{{ item.name }}</a>
      </li>
    </ul>
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
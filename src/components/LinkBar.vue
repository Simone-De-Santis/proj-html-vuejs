<template>
  <div>
    <hr />
    <img :src="printUrlImg(logo.img_link_bar)" alt="" />
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <a :href="item.src">{{ item.name }}</a>
      </li>
    </ul>
    <hr />
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
      return require(`@/assets/img/${nameImage}`);
    },
  },
};
</script>

<style>
</style>
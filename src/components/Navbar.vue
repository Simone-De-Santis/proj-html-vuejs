<template>
  <div>
    <img src="" alt="" />
    <section v-for="(link, index) in items" :key="index">
      <h1>{{ link.name }}</h1>
    </section>
    <p>ciao2</p>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: { items: Array },
  data() {},
};
</script>

<style lang="scss" scoped>
</style>
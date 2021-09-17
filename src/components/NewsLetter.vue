<template>
  <div>
    <h2>{{ data.title }}</h2>
    <input type="text" placeholder="enter email address*" />
    <button type="submit">{{ data.text_button }}</button>
  </div>
</template>

<script>
export default {
  name: "NewsLetter",
  props: ["data"],
  data() {
    return {};
  },
  computed: {},
};
</script>

<style>
</style>
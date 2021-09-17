<template>
  <div>
    <img :src="SrcImg" alt="" />
    <div class="row">
      <h3>{{ data.name }}</h3>
    </div>
    <div class="row">
      <div class="col">
        <ul>
          <li>Call us</li>
          <li>{{ data.phone }}</li>
        </ul>
      </div>
      <div class="col">
        <ul>
          <li>open all week</li>
          <li>{{ data.opening_time }}</li>
        </ul>
      </div>
      <div class="col">
        <button type="submit">{{ data.text_button }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Storre",
  props: ["data"],
  computed: {
    SrcImg() {
      return require(`../../assets/img/${this.data.image}`);
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>
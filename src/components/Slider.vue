<template>
  <div class="row">
    <div class="col-6">
      <img src="@/assets/img/blackberry-stuffed-bread-400x510.jpg" alt="" />
    </div>
    <div class="col-6">
      <img src="" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    isActive(index) {
      return this.currentIndex === index ? "active" : "";
    },
    increaseIndex() {
      if (
        this.currentIndex === this.linkImage.length - 1 ||
        this.currentIndex > this.linkImage.length - 1
      ) {
        this.currentIndex = 0;
      } else this.currentIndex++;
    },
    decreaseIndex() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.linkImage.length - 1;
      } else this.currentIndex--;
    },
  },
};
</script>

<style>
</style>
<template>
  <div class="d-flex">
    <h2 class="title pd-30-0">{{ data.title }}</h2>
    <div>
      <input type="text" placeholder="enter email address*" class="input" />
      <button type="submit" class="btn btn-alternative">
        <a href="#">{{ data.text_button }} </a>
      </button>
    </div>
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

<style lang="scss" scoped>
.title {
  font-size: 25px;
}
.input {
  width: 300px;
  height: 40px;
  font-size: 13px;
  border-radius: 10px;
  margin: 10px 10px;
  padding: 10px;
}
.d-flex {
  flex-direction: column;
  align-items: flex-end;
}
</style>
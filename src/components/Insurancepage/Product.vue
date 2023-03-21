<!-- eslint-disable vue/valid-v-for -->
<template>
  <section class="">
    <div class="container mx-auto"></div>
  </section>
</template>

<script>
export default {
  name: "Product",
  components: {},
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
h2 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  color: #17171f;
  letter-spacing: 0.1px;
}
h3 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  color: #d50000;
}
.carousel__item {
  min-height: 300px;
  width: 80%;
  background-color: #eeebe5;
  color: var(--vc-clr-white);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 4px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>

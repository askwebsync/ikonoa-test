<template>
  <section class="">
    <div
      class="relative overflow-hidden bg-no-repeat bg-cover"
      style="
        background-position: 50%;
        background-image: url('/assets/img/about-hero.jpg');
        height: 300px;
      "
    >
      <div
        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style="background-color: rgba(0, 0, 0, 0.75)"
      >
        <div class="flex flex-col justify-center items-center h-full gap-4">
          <div class="text-center center">
            <h1
              class="text-2xl sm:text-3xl md:text-5xl xl:text-6xl mb-5 md:mb-7 hover:text-red-600 max-w-5xl uppercase leading-8"
            >
              ABOUT IKONOA
            </h1>
            <h2
              class="md:text-lg max-w-xs md:max-w-lg capitalize hover:text-yellow-300 tracking-tighter"
            >
              "We provide services and solutions that assist you"
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
h1 {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #fdfdff;
}

h2 {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #ffff00;
}
p {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #17171f;
}
</style>

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
        <div class="flex flex-col justify-center items-center h-full">
          <div class="text-center center flex flex-col gap-6">
            <h1
              class="text-2xl sm:text-3xl md:text-5xl hover:text-red-600 max-w-5xl uppercase"
            >
              ABOUT IKONOA
            </h1>
            <h2
              class="text-lg max-w-xxs hover:text-yellow-300 md:text-xl md:max-w-2xl lg:text-3xl lg:max-w-3xl"
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
  letter-spacing: 0, 5px;
}
p {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #17171f;
}
</style>

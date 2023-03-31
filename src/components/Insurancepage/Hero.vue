<template>
  <section>
    <div
      class="relative overflow-hidden bg-no-repeat bg-cover"
      style="
        background-position: 50%;
        background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp');
        height: 500px;
      "
    >
      <div
        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style="background-color: rgba(0, 0, 0, 0.65)"
      >
        <div
          class="flex flex-col justify-center items-center h-full text-center center px-6"
        >
          <h1
            class="text-2xl sm:text-3xl md:text-5xl mb-5 md:mb-7 hover:text-red-600 max-w-5xl uppercase"
          >
            OUR SERVICE & SOLUTIONS
          </h1>
          <h2
            class="text-lg max-w-xxs hover:text-yellow-300 md:text-xl md:max-w-2xl lg:text-3xl lg:max-w-3xl"
          >
            “We can help you choose the type of insurance policy that suits your
            needs”
          </h2>
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
  font-weight: 800;
  color: #fdfdff;
  letter-spacing: 1.5px;
}
h2 {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #ffff00;
  letter-spacing: 0.5px;
}
p {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #17171f;
}
</style>

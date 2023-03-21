<template>
  <section>
    <div
      class="relative overflow-hidden bg-no-repeat bg-cover pb-2"
      style="
        background-position: 50%;
        background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp');
        height: 500px;
      "
    >
      <div
        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style="background-color: rgba(0, 0, 0, 0.75)"
      >
        <div class="flex justify-center items-center h-full gap-12 py-2">
          <div class="text-center center px-6">
            <h1
              class="text-2xl sm:text-3xl md:text-5xl xl:text-6xl mb-5 md:mb-7 hover:text-red-600 max-w-5xl uppercase leading-8"
            >
              Maintain Your Peace of Mind by Resolving Insurance <br /><span
                >Claims Easily and Safely</span
              >
            </h1>
            <h2
              class="md:text-lg max-w-xs md:max-w-lg capitalize hover:text-yellow-300 tracking-tight"
            >
              “Claim is the moment of truth when you buy an insurance policy”
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
/* .background-custom-hero {
  background: linear-gradient(
    93.66deg,
    rgba(253, 253, 255, 0.6) 0%,
    rgba(253, 253, 255, 0.2) 170%
  );

  border-radius: 8px;
} */
p {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #17171f;
  letter-spacing: 0.1px;
}
</style>

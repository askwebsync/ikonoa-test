<template>
  <section>
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
      <div class="flex flex-col gap-4 md:gap-2 text-center">
        <h3 class="text-xl md:text-2xl lg:text-3xl">
          {{ $t("home.achievment-header") }}
        </h3>
        <h2 class="text-lg md:text-xl lg:text-2xl">
          {{ $t("home.achievment-subheader") }}
        </h2>
      </div>
    </div>
    <div class="py-4">
      <div class="background-product">
        <div class="container mx-auto px-4 py-6 md:px-8 lg:px-24">
          <div
            class="grid grid-cols-1 md:grid-cols-3 justify-items-center divide-y-2 md:divide-x-2 md:divide-y-0 divide-black text-center"
          >
            <div
              class="flex flex-col justify-center items-center px-10 py-5 mb-3 md:mb-0 h-full w-full"
            >
              <h1 class="text-3xl lg:text-5xl">98%</h1>
              <p class="text-sm text-gray-500">
                {{ $t("home.achievment-card1-text") }}
              </p>
            </div>
            <div
              class="flex flex-col justify-center items-center px-10 py-5 mb-3 md:mb-0 h-full w-full"
            >
              <h1 class="text-3xl lg:text-5xl">USD 250+M</h1>
              <p class="text-sm text-gray-500">
                {{ $t("home.achievment-card2-text") }}
              </p>
            </div>
            <div
              class="flex flex-col justify-center items-center px-10 py-5 h-full w-full"
            >
              <h1 class="text-3xl lg:text-5xl">7,500+</h1>
              <p class="text-sm text-gray-500">
                {{ $t("home.achievment-card3-text") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Achievment",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
h1 {
  font-style: normal;
  font-weight: 700;
  color: #17171f;
}
</style>

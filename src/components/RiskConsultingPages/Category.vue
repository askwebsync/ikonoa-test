<template>
  <div class="container mx-auto px-4 py-8 md:px-8 lg:px-12">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-12 lg:gap-16"
    >
      <div class="flex flex-col items-center text-center gap-5 p-2">
        <div
          class="flex justify-center items-center p-6 rounded-full background-category"
        >
          <img
            src="/assets/img/Services/property.png"
            alt="property"
            class="w-12 h-12"
          />
        </div>
        <p class="text-lg hover:text-red-600">
          {{ $t("risk-consulting.card1-header") }}
        </p>
      </div>
      <div class="flex flex-col items-center text-center gap-5 p-2">
        <div
          class="flex justify-center items-center p-6 rounded-full background-category"
        >
          <img
            src="/assets/img/Services/car.png"
            alt="logo car insurance"
            class="w-12 h-12"
          />
        </div>
        <p class="text-lg hover:text-red-600">
          {{ $t("risk-consulting.card2-header") }}
        </p>
      </div>
      <div class="flex flex-col items-center text-center gap-5 p-2">
        <div
          class="flex justify-center items-center p-6 rounded-full background-category"
        >
          <img
            src="/assets/img/Services/marine.png"
            alt="marine"
            class="w-12 h-12"
          />
        </div>
        <p class="text-lg hover:text-red-600">
          {{ $t("risk-consulting.card3-header") }}
        </p>
      </div>
      <div class="flex flex-col items-center text-center gap-5 p-2">
        <div
          class="flex justify-center items-center p-6 rounded-full background-category"
        >
          <img
            src="/assets/img/Services/home.png"
            alt="logo home insurance"
            class="w-12 h-12"
          />
        </div>
        <p class="text-lg hover:text-red-600">
          {{ $t("risk-consulting.card4-header") }}
        </p>
      </div>
      <div class="flex flex-col items-center text-center gap-5 p-2">
        <div
          class="flex justify-center items-center p-6 rounded-full background-category"
        >
          <img
            src="/assets/img/Services/health.png"
            alt="logo health insurance"
            class="w-12 h-12"
          />
        </div>
        <p class="text-lg hover:text-red-600">
          {{ $t("risk-consulting.card5-header") }}
        </p>
      </div>
      <div class="flex flex-col items-center text-center gap-5 p-2">
        <div
          class="flex justify-center items-center p-6 rounded-full background-category"
        >
          <img
            src="/assets/img/Services/liability.png"
            alt="liability"
            class="w-12 h-12"
          />
        </div>
        <p class="text-lg hover:text-red-600">
          {{ $t("risk-consulting.card6-header") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  color: #d50000;
  letter-spacing: 0.5px;
}
</style>

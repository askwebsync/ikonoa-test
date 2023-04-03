<template>
  <section>
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-12">
      <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-12">
        <div class="flex flex-col items-center text-center gap-5 py-2 px-4">
          <div
            class="flex justify-center items-center px-3 py-4 rounded-full background-custom-category"
          >
            <img
              src="/assets/img/risk-consulting/life-insurance.png"
              alt="logo life insurance"
              class="w-auto h-auto"
            />
          </div>
          <p class="text-lg hover:text-red-600">Life Insurance</p>
        </div>
        <div class="flex flex-col items-center text-center gap-5 py-2 px-4">
          <div
            class="flex justify-center items-center px-3 py-4 rounded-full background-custom-category"
          >
            <img
              src="/assets/img/risk-consulting/car-insurance.png"
              alt="logo car insurance"
              class="w-auto h-auto"
            />
          </div>
          <p class="text-lg hover:text-red-600">Car Insurance</p>
        </div>
        <div class="flex flex-col items-center text-center gap-5 py-2 px-4">
          <div
            class="flex justify-center items-center px-3 py-4 rounded-full background-custom-category"
          >
            <img
              src="/assets/img/risk-consulting/job-insurance.png"
              alt="logo job insurance"
              class="w-auto h-auto"
            />
          </div>
          <p class="text-lg hover:text-red-600">Job Insurance</p>
        </div>
        <div class="flex flex-col items-center text-center gap-5 py-2 px-4">
          <div
            class="flex justify-center items-center px-3 py-4 rounded-full background-custom-category"
          >
            <img
              src="/assets/img/risk-consulting/home-insurance.png"
              alt="logo home insurance"
              class="w-auto h-auto"
            />
          </div>
          <p class="text-lg hover:text-red-600">Home Insurance</p>
        </div>
        <div class="flex flex-col items-center text-center gap-5 py-2 px-4">
          <div
            class="flex justify-center items-center px-3 py-4 rounded-full background-custom-category"
          >
            <img
              src="/assets/img/risk-consulting/health-insurance.png"
              alt="logo health insurance"
              class="w-auto h-auto"
            />
          </div>
          <p class="text-lg hover:text-red-600">Health Insurance</p>
        </div>
        <div class="flex flex-col items-center text-center gap-5 py-2 px-4">
          <div
            class="flex justify-center items-center px-3 py-4 rounded-full background-custom-category"
          >
            <img
              src="/assets/img/risk-consulting/wedding-insurance.png"
              alt="logo wedding insurance"
              class="w-auto h-auto"
            />
          </div>
          <p class="text-lg hover:text-red-600">Wedding Insurance</p>
        </div>
      </div>
    </div>
  </section>
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

<style>
p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  color: #d50000;
  letter-spacing: 0.5px;
}
</style>

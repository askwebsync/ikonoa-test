<template>
  <section>
    <div class="container mx-auto px-4 pt-6 pb-12 md:px-8 lg:px-12">
      <div
        class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-12 lg:gap-16"
      >
        <div class="flex flex-col items-center text-center gap-5 p-2">
          <div
            class="flex justify-center items-center p-6 rounded-full background-category"
          >
            <img
              src="/assets/img/Services/life.png"
              alt="logo life insurance"
              class="w-auto h-auto"
            />
          </div>
          <p class="text-lg hover:text-red-600">Life Insurance</p>
        </div>
        <div class="flex flex-col items-center text-center gap-5 p-2">
          <div
            class="flex justify-center items-center p-6 rounded-full background-category"
          >
            <img
              src="/assets/img/Services/car.png"
              alt="logo car insurance"
              class="w-auto h-auto"
            />
          </div>
          <p class="text-lg hover:text-red-600">Car Insurance</p>
        </div>
        <div class="flex flex-col items-center text-center gap-5 p-2">
          <div
            class="flex justify-center items-center p-6 rounded-full background-category"
          >
            <img
              src="/assets/img/Services/job.png"
              alt="logo job insurance"
              class="w-auto h-auto"
            />
          </div>
          <p class="text-lg hover:text-red-600">Job Insurance</p>
        </div>
        <div class="flex flex-col items-center text-center gap-5 p-2">
          <div
            class="flex justify-center items-center p-6 rounded-full background-category"
          >
            <img
              src="/assets/img/Services/home.png"
              alt="logo home insurance"
              class="w-auto h-auto"
            />
          </div>
          <p class="text-lg hover:text-red-600">Home Insurance</p>
        </div>
        <div class="flex flex-col items-center text-center gap-5 p-2">
          <div
            class="flex justify-center items-center p-6 rounded-full background-category"
          >
            <img
              src="/assets/img/Services/health.png"
              alt="logo health insurance"
              class="w-auto h-auto"
            />
          </div>
          <p class="text-lg hover:text-red-600">Health Insurance</p>
        </div>
        <div class="flex flex-col items-center text-center gap-5 p-2">
          <div
            class="flex justify-center items-center p-6 rounded-full background-category"
          >
            <img
              src="/assets/img/Services/wedding.png"
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

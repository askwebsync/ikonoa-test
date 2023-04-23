<template>
  <section>
    <div class="container mx-auto px-4 py-14 md:px-8 lg:px-24">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="flex flex-col items-start p-5 gap-5 custom-shadow-card">
          <img src="/assets/img/Services/academy1.png" alt="w-auto h-auto" />
          <div class="flex flex-col items-center gap-5">
            <div class="flex self-start">
              <h6 class="text-xl md:text-2xl lg:text-3xl">Health Insurance</h6>
            </div>

            <div class="flex flex-col items-center gap-5">
              <p class="text-lg lg:text-xl xl:text-2xl text-gray-600">
                Health insurance training will help you to understand better
                about the benefits and conditions of health insurance.
              </p>
              <hr />
              <div class="w-full flex justify-between">
                <div class="text-lg lg:text-xl font-semibold">
                  Platform:
                  <span class="text-lg lg:text-xl font-semibold text-red-600"
                    >Zoom</span
                  >
                </div>
                <div class="text-lg lg:text-xl font-semibold">
                  Time:
                  <span class="text-lg lg:text-xl font-semibold text-red-600"
                    >01/01/2023</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-start p-5 gap-5 custom-shadow-card">
          <img src="/assets/img/Services/academy1.png" alt="w-auto h-auto" />
          <div class="flex flex-col items-center gap-5">
            <div class="flex self-start">
              <h6 class="text-xl md:text-2xl lg:text-3xl">Health Insurance</h6>
            </div>

            <div class="flex flex-col items-center gap-5">
              <p class="text-lg lg:text-xl xl:text-2xl text-gray-600">
                Health insurance training will help you to understand better
                about the benefits and conditions of health insurance.
              </p>
              <hr />
              <div class="w-full flex justify-between">
                <div class="text-lg lg:text-xl font-semibold">
                  Platform: <span class="text-red-600">Zoom</span>
                </div>
                <div class="text-lg lg:text-xl font-semibold">
                  Time: <span class="text-red-600">01/01/2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Meeting",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
h6 {
  letter-spacing: 0.5px;
  color: #3b3b3b;
}
hr {
  width: 100%;
  height: 0px;
  border: 1px solid #787878;
}
</style>

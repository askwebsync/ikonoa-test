<template>
  <section class="">
    <div class="container mx-auto px-4 py-14 md:px-8 lg:px-24">
      <div class="flex flex-col gap-14">
        <div class="flex flex-col gap-2 text-center">
          <h3 class="text-2xl lg:text-3xl">Risk Management Process</h3>
          <h2 class="text-xl md:text-2xl">
            Our risk management process consists of two key components
          </h2>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 items-center gap-11 h-full w-full"
        >
          <div class="flex flex-col items-center self-center gap-4">
            <div
              class="w-12 h-12 rounded-full flex justify-center items-center background-number"
            >
              <p class="text-lg">1</p>
            </div>
            <div
              class="flex flex-col px-7 py-6 gap-8 md:gap-9 xl:gap-12 rounded-xl border-custom h-56 md:h-80"
            >
              <h2 class="text-black text-center text-xl md:text-3xl">
                Risk Survey
              </h2>
              <p class="text-md text-gray-500 md:text-lg xl:text-xl">
                We can carry out a risk survey according to your needs,
                including unusual and complex risks. Our team can work and
                conduct surveys wherever these risks are located.
              </p>
            </div>
          </div>
          <div class="flex flex-col items-center self-center gap-4">
            <div
              class="w-12 h-12 rounded-full flex justify-center items-center background-number"
            >
              <p class="text-lg">2</p>
            </div>
            <div
              class="flex flex-col px-7 py-6 gap-8 md:gap-9 xl:gap-12 rounded-xl border-custom h-56 md:h-80"
            >
              <h2 class="text-black text-center text-xl md:text-3xl">
                Risk Improvement
              </h2>
              <p class="text-md text-gray-500 md:text-lg xl:text-xl">
                One of the principles of risk management is continuous
                improvement. Of course apart from conducting a risk survey, we
                will also help you to get the best recommendations in the risk
                improvement program that will be implemented.
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
  name: "Why",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
h2 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  color: #3b3b3b;
}
p {
  font-weight: 400;
  letter-spacing: -0.1px;
}
hr {
  width: 120px;
  height: 0px;
  border: 2px solid #3b3b3b;
}
.background-number {
  background-color: #ffe5e5;
  border: 1px solid #d50000;
}
.border-custom {
  border: 1.5px solid #d50000;
  border-radius: 8px;
}
</style>

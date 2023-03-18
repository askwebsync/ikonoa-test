<template>
  <section>
    <div class="container mx-auto px-4 py-7 md:px-8 lg:px-12 md:py-12 lg:py-16">
      <div class="flex flex-col gap-2 mb-6 items-center text-center">
        <h3 class="text-xl md:text-2xl lg:text-3xl">Training</h3>
        <p class="text-sm md:text-lg tracking-tight max-w-xs lg:max-w-lg">
          Ikonoa will provide better knowledge and understanding of the types of
          insurance, benefits and conditions of each type of insurance.
        </p>
      </div>
      <div class="flex justify-center my-12">
        <div
          class="flex flex-wrap justify-center md:flex-row gap-8 md:gap-12 space-y-4 px-2 lg:px-3 md:grid md:grid-cols-2 lg:grid-cols-3 md:space-y-0"
        >
          <div
            class="max-w-md background-custom-misi px-5 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
          >
            <div class="relative">
              <img
                class="w-full rounded-xl"
                src="/assets/img/academy1.png"
                alt="Colors"
              />
            </div>
            <h6 class="mt-4 text-2xl cursor-pointer">Health Insurance</h6>
            <div class="flex flex-col gap-6 my-6">
              <p class="text-sm sm:text-base md:text-lg text-gray-500">
                Health insurance training will help you to understand better
                about the benefits and conditions of health insurance.
              </p>
              <hr />
              <div class="flex justify-between gap-2">
                <div class="flex gap-2">
                  <p class="custom-p-color">Platform:</p>
                  <p class="cursor-pointer text-red-600 hover:text-red-700">
                    Zoom
                  </p>
                </div>
                <div class="flex gap-2">
                  <p class="custom-p-color">Time:</p>
                  <p class="text-red-600">01/01/2023</p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="max-w-md background-custom-misi px-5 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
          >
            <div class="relative">
              <img
                class="w-full rounded-xl"
                src="/assets/img/academy1.png"
                alt="Colors"
              />
            </div>
            <h6 class="mt-4 text-2xl cursor-pointer">Health Insurance</h6>
            <div class="flex flex-col gap-6 my-6">
              <p class="text-sm sm:text-base md:text-lg text-gray-500">
                Health insurance training will help you to understand better
                about the benefits and conditions of health insurance.
              </p>
              <hr />
              <div class="flex justify-between gap-2">
                <div class="flex gap-2">
                  <p class="custom-p-color">Platform:</p>
                  <p class="cursor-pointer text-red-600 hover:text-red-700">
                    Zoom
                  </p>
                </div>
                <div class="flex gap-2">
                  <p class="custom-p-color">Time:</p>
                  <p class="text-red-600">01/01/2023</p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="max-w-md background-custom-misi px-5 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
          >
            <div class="relative">
              <img
                class="w-full rounded-xl"
                src="/assets/img/academy1.png"
                alt="Colors"
              />
            </div>
            <h6 class="mt-4 text-2xl cursor-pointer">Health Insurance</h6>
            <div class="flex flex-col gap-6 my-6">
              <p class="text-sm sm:text-base md:text-lg text-gray-500">
                Health insurance training will help you to understand better
                about the benefits and conditions of health insurance.
              </p>
              <hr />
              <div class="flex justify-between gap-2">
                <div class="flex gap-2">
                  <p class="custom-p-color">Platform:</p>
                  <p class="cursor-pointer text-red-600 hover:text-red-700">
                    Zoom
                  </p>
                </div>
                <div class="flex gap-2">
                  <p class="custom-p-color">Time:</p>
                  <p class="text-red-600">01/01/2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-12">
        <a
          href="#_"
          class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-red-500 rounded-full shadow-md group"
        >
          <span
            class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span
            class="absolute flex items-center justify-center w-full h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease"
            >Learn More</span
          >
          <span class="relative invisible">Learn More</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Academy",
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
  font-weight: 700;
  color: #17171f;
  letter-spacing: 0.1px;
}
h3 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  color: #d50000;
}
h6 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #17171f;
}

p {
  font-family: "Roboto";
}
.custom-p-color {
  color: #17171f;
}
hr {
  border: 1px solid black;
}
</style>

<template>
  <section class="backgrund-product">
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-12 lg:py-16">
      <div class="flex flex-col md:flex-row gap-12 items-center">
        <div class="w-1/2">
          <img src="/assets/img/gambar2.png" alt="gambar" class="" />
        </div>
        <div
          class="w-1/2 flex flex-col gap-6 md:gap-12 self-center md:self-start md:ml-6"
        >
          <div class="flex flex-col gap-1 max-w-lg">
            <h3 class="text-xl md:text-2xl lg:text-3xl">ABOUT</h3>
            <h2 class="text-xl md:text-2xl lg:text-3xl">What is IKONOA</h2>
            <p class="text-sm md:text-lg tracking-tight">
              We provide services & solutions that assist you in managing and
              claiming your insurance policy. Our services cover various types
              of insurance policies, such as health insurance, vehicle
              insurance, property insurance, engineering insurance, marine
              insurance
            </p>
          </div>

          <div class="my-5 lg:my-6">
            <ul class="list-none">
              <li class="flex items-center mb-3 md: mb-4">
                <img src="/assets/img/check-mark.png" class="mr-2 md:mr-3" />
                <p class="flex-1 font-semibold text-sm md:text-base">
                  Integrity
                </p>
              </li>
              <li class="flex items-center mb-3 md: mb-4">
                <img src="/assets/img/check-mark.png" class="mr-2 md:mr-3" />
                <p class="flex-1 font-semibold text-sm md:text-base">
                  Knowledgeable
                </p>
              </li>
              <li class="flex items-center mb-3 md: mb-4">
                <img src="/assets/img/check-mark.png" class="mr-2 md:mr-3" />
                <p class="flex-1 font-semibold text-sm md:text-base">
                  Professional
                </p>
              </li>
              <li class="flex items-center mb-3 md: mb-4">
                <img src="/assets/img/check-mark.png" class="mr-2 md:mr-3" />
                <p class="flex-1 font-semibold text-sm md:text-base">Honesty</p>
              </li>
              <li class="flex items-center mb-3 md: mb-4">
                <img src="/assets/img/check-mark.png" class="mr-2 md:mr-3" />
                <p class="flex-1 font-semibold text-sm md:text-base">Focus</p>
              </li>
              <li class="flex items-center mb-3 md: mb-4">
                <img src="/assets/img/check-mark.png" class="mr-2 md:mr-3" />
                <p class="flex-1 font-semibold text-sm md:text-base">
                  Partnership
                </p>
              </li>
            </ul>
          </div>
          <div class="">
            <a
              href="#_"
              class="relative inline-flex items-center justify-center px-4 py-2 lg:px-5 lg:py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-red-500 rounded-lg shadow-md group"
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
h3 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  color: #d50000;
}
h2 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  color: #17171f;
}
p {
  font-family: "Roboto";
  font-style: normal;
  color: #000000;
}
</style>

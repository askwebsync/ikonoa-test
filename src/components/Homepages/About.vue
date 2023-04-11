<template>
  <section class="background-product">
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
      <div class="flex flex-col md:flex-row gap-12 items-center">
        <div class="w-1/2">
          <img
            src="/assets/img/Home/about.webp"
            style="max-height: 600px"
            alt="about-us"
          />
        </div>
        <div
          class="w-1/2 flex flex-col gap-12 md:gap-9 self-center md:self-start md:ml-6"
        >
          <div class="flex flex-col gap-2">
            <h3 class="text-xl md:text-2xl lg:text-3xl">ABOUT US</h3>
            <h2 class="text-xl md:text-2xl lg:text-3xl">What is IKONOA</h2>
            <p class="text-sm md:text-lg">
              We provide services & solutions that assist you in managing and
              claiming your insurance policy. Our services cover various types
              of insurance policies, such as health insurance, vehicle
              insurance, property insurance, engineering insurance, marine
              insurance
            </p>
          </div>

          <div class="flex flex-col gap-12 md:gap-10">
            <ul class="list-none space-y-5">
              <li class="flex items-center gap-4">
                <img
                  src="/assets/img/Home/check-mark.png"
                  alt="check-mark"
                  class="w-6 h-6"
                />
                <p class="flex-1 font-semibold text-lg">
                  <span class="text-red-600">I</span>ntegrity
                </p>
              </li>
              <li class="flex items-center gap-4">
                <img
                  src="/assets/img/Home/check-mark.png"
                  alt="check-mark"
                  class="w-6 h-6"
                />
                <p class="flex-1 font-semibold text-lg">
                  <span class="text-red-600">K</span>nowledgeable
                </p>
              </li>
              <li class="flex items-center gap-4">
                <img
                  src="/assets/img/Home/check-mark.png"
                  alt="check-mark"
                  class="w-6 h-6"
                />
                <p class="flex-1 font-semibold text-lg">
                  Pr<span class="text-red-600">o</span>fessional
                </p>
              </li>
              <li class="flex items-center gap-4">
                <img
                  src="/assets/img/Home/check-mark.png"
                  alt="check-mark"
                  class="w-6 h-6"
                />
                <p class="flex-1 font-semibold text-lg">
                  Ho<span class="text-red-600">n</span>esty
                </p>
              </li>
              <li class="flex items-center gap-4">
                <img
                  src="/assets/img/Home/check-mark.png"
                  alt="check-mark"
                  class="w-6 h-6"
                />
                <p class="flex-1 font-semibold text-lg">
                  F<span class="text-red-600">o</span>cus
                </p>
              </li>
              <li class="flex items-center gap-4">
                <img
                  src="/assets/img/Home/check-mark.png"
                  alt="check-mark"
                  class="w-6 h-6"
                />
                <p class="flex-1 font-semibold text-lg">
                  P<span class="text-red-600">a</span>rtnership
                </p>
              </li>
            </ul>
            <div class="text-left">
              <button
                class="px-10 py-3 md:px-14 border-button-custom font-medium button-shadow"
              >
                <router-link
                  :to="{ name: 'about' }"
                  aria-label="Learn More about our company"
                  >Learn More</router-link
                >
              </button>
            </div>
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
p {
  color: #17171f;
  font-weight: 400;
  letter-spacing: 0.5px;
}
</style>

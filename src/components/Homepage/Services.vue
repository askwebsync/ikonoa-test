<template>
  <section>
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-12 lg:py-16">
      <div
        class="grid md:grid-cols-3 gap-8 justify-items-center text-center md:justify-items-start md:text-left"
      >
        <div class="flex flex-col gap-1 md:self-center max-w-lg">
          <h3 class="text-xl md:text-2xl lg:text-3xl uppercase mb-1">
            Services & Solution
          </h3>
          <h2 class="text-xl md:text-2xl lg:text-3xl tracking-tight">
            We will assist you in managing your assets, risks and insurance
            needs, including in claim settlements to be faster, precise and
            accurate
          </h2>
          <!-- <p class="text-sm md:text-lg tracking-tight max-w-xs lg:max-w-lg">
            We provide services that assist you in managing and claiming your
            insurance policy
          </p> -->
        </div>
        <div class="flex flex-col mt-4 gap-8 md:gap-10 md:mt-8">
          <div
            class="flex flex-col max-w-sm p-6 background-card custom-shadow-card"
          >
            <div class="self-center md:self-start">
              <img src="/assets/img/consulting.png" class="w-12 h-12 mb-4" />
            </div>
            <a href="#">
              <h1 class="text-xl md:text-2xl lg:text-3xl mb-2">
                Risk Consulting
              </h1>
            </a>
            <h6 class="my-3 text-base sm:text-base md:text-lg tracking-tight">
              We can carry out a risk survey according to your needs, including
              unusual and complex risks. Our team can work and conduct surveys
              wherever these risks are located.
            </h6>
          </div>
          <div
            class="flex flex-col max-w-sm p-6 background-card custom-shadow-card"
          >
            <div class="self-center md:self-start">
              <img src="/assets/img/insurance.png" class="w-12 h-12 mb-4" />
            </div>
            <a href="#">
              <h1 class="text-xl md:text-2xl lg:text-3xl mb-2">
                Insurance Policy
              </h1>
            </a>
            <h6 class="my-3 text-base sm:text-base md:text-lg tracking-tight">
              We provide the best and most trusted insurance companies with the
              right premiums as well support the insurance claim process.
            </h6>
          </div>
        </div>
        <div class="flex flex-col gap-8 md:gap-10">
          <div
            class="flex flex-col max-w-sm p-6 background-card custom-shadow-card"
          >
            <div class="self-center md:self-start">
              <img src="/assets/img/warning.png" class="w-12 h-12 mb-4" />
            </div>

            <a href="#">
              <h1 class="text-xl md:text-2xl lg:text-3xl mb-2">
                Risk Management
              </h1>
            </a>
            <h6 class="my-3 text-base sm:text-base md:text-lg tracking-tight">
              We identify and analyze loss exposures and take steps to minimize
              the financial impact of the risks involved.
            </h6>
          </div>

          <div
            class="flex flex-col max-w-sm p-6 background-card custom-shadow-card"
          >
            <div class="self-center md:self-start">
              <img src="/assets/img/academy.png" class="w-12 h-12 mb-4" />
            </div>

            <a href="#">
              <h1 class="text-xl md:text-2xl lg:text-3xl mb-2">Academy</h1>
            </a>
            <h6 class="my-3 text-base sm:text-base md:text-lg tracking-tight">
              We have training programs aimed at enhancing the skills and
              knowledge of professionals in the insurance industry.
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Services",
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
h1 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;

  color: #17171f;
}

h6 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  color: #787878;
}
</style>

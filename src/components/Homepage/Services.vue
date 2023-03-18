<template>
  <section>
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-12 lg:py-16">
      <div
        class="grid md:grid-cols-3 gap-8 justify-items-center text-center md:justify-items-start md:text-left"
      >
        <div class="flex flex-col gap-1 md:self-center max-w-lg">
          <h3 class="text-xl md:text-2xl lg:text-3xl">Services</h3>
          <h2 class="text-xl md:text-2xl lg:text-3xl">
            Services we will can help you with
          </h2>
          <p class="text-sm md:text-lg tracking-tight max-w-xs lg:max-w-lg">
            We provide services that assist you in managing and claiming your
            insurance policy
          </p>
        </div>
        <div class="flex flex-col mt-4 gap-6 md:gap-8 md:mt-8">
          <div
            class="flex flex-col max-w-sm p-6 background-card custom-shadow-card"
          >
            <div class="self-center md:self-start">
              <img src="/assets/img/consulting.png" class="mb-4" />
            </div>
            <a href="#">
              <h1 class="mb-2 text-2xl">Ikonoa Risk Consulting</h1>
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
              <img src="/assets/img/insurance.png" class="mb-4" />
            </div>
            <a href="#">
              <h1 class="mb-2 text-2xl">Ikonoa Agency</h1>
            </a>
            <h6 class="my-3 text-base sm:text-base md:text-lg tracking-tight">
              We provide the best and most trusted insurance companies with the
              right premiums as well support the insurance claim process.
            </h6>
          </div>
        </div>
        <div class="flex flex-col gap-6 md:gap-8">
          <div
            class="flex flex-col max-w-sm p-6 background-card custom-shadow-card"
          >
            <div class="self-center md:self-start">
              <img src="/assets/img/warning.png" class="mb-4" />
            </div>

            <a href="#">
              <h1 class="mb-2 text-2xl">Ikonoa Risk Management</h1>
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
              <img src="/assets/img/Academy.png" class="mb-4" />
            </div>

            <a href="#">
              <h1 class="mb-2 text-2xl">Ikonoa Academy</h1>
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

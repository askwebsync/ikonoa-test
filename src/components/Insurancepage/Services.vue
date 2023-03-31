<!-- eslint-disable vue/valid-v-for -->
<template>
  <section>
    <div
      class="container mx-auto px-4 py-12 md:px-8 lg:px-24 flex flex-col gap-5"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div class="background-services-card flex flex-col">
          <div class="flex flex-col gap-8 p-12 text-center">
            <h1 class="text-lg md:text-xl lg:text-3xl">Risk Consulting</h1>
            <p class="text-xs sm:text-sm md:text-base">
              We can carry out a risk survey according to your needs, including
              unusual and complex risks. Our team can work and conduct surveys
              wherever these risks are located.
            </p>
          </div>
          <div>
            <img
              src="../../../public/assets/img/risk-consulting.png"
              alt="risk-consulting"
              class="w-full rounded-lg"
            />
          </div>
        </div>

        <div class="background-services-card flex flex-col">
          <div class="flex flex-col gap-8 p-12 text-center">
            <h1 class="text-lg md:text-xl lg:text-3xl">Risk Consulting</h1>
            <p class="text-xs sm:text-sm md:text-base">
              We can carry out a risk survey according to your needs, including
              unusual and complex risks. Our team can work and conduct surveys
              wherever these risks are located.
            </p>
          </div>
          <div>
            <img
              src="../../../public/assets/img/risk-consulting.png"
              alt="risk-consulting"
              class="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div class="background-services-card flex flex-col">
          <div class="flex flex-col gap-8 p-12 text-center">
            <h1 class="text-lg md:text-xl lg:text-3xl">Risk Consulting</h1>
            <p class="text-xs sm:text-sm md:text-base">
              We can carry out a risk survey according to your needs, including
              unusual and complex risks. Our team can work and conduct surveys
              wherever these risks are located.
            </p>
          </div>
          <div>
            <img
              src="../../../public/assets/img/risk-consulting.png"
              alt="risk-consulting"
              class="w-full rounded-lg"
            />
          </div>
        </div>

        <div class="background-services-card flex flex-col">
          <div class="flex flex-col gap-8 p-12 text-center">
            <h1 class="text-lg md:text-xl lg:text-3xl">Risk Consulting</h1>
            <p class="text-xs sm:text-sm md:text-base">
              We can carry out a risk survey according to your needs, including
              unusual and complex risks. Our team can work and conduct surveys
              wherever these risks are located.
            </p>
          </div>
          <div>
            <img
              src="../../../public/assets/img/risk-consulting.png"
              alt="risk-consulting"
              class="w-full rounded-lg"
            />
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

  methods: {},
};
</script>

<style scoped>
h1 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  color: #3b3b3b;
  letter-spacing: 0.5px;
}

p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  color: #787878;
  letter-spacing: -0.05px;
}
</style>

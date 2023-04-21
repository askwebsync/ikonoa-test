<template>
  <section class="background-product">
    <div class="container mx-auto px-4 py-14 md:px-8 lg:px-24">
      <div class="flex flex-col lg:flex-row gap-10 items-center">
        <div class="self-center w-full lg:w-1/2 md:self-start">
          <h2 class="text-4xl mb-3 uppercase">What is risk management ?</h2>
          <hr />
          <p class="mt-10 md:mt-12 md:text-lg max-w-xl">
            Ikonoa risk management is divided into 2 processes is the practice
            of identifying and analyzing loss exposures and taking steps to
            minimize the financial impact of the risks that will arise.
            traditional risk management, sometimes called "insurance risk
            management", focuses on "pure risk" (that is, the probability of
            loss incidental or accidental) but are not business risks (that is,
            risks that could give rise to the possibility loss or gain).
          </p>
        </div>
        <div class="flex w-full lg:w-1/2 self-start lg:justify-center">
          <img src="/assets/img/Services/solution.jpg" alt="solution" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "What",
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
</style>

<template>
  <section class="container mx-auto px-4 py-10 md:px-8 lg:px-24">
    <div class="bg-category py-8 px-6">
      <div
        class="max-w-screen-lg mx-auto flex flex-col lg:flex-row justify-between items-center gap-11"
      >
        <div class="lg:w-1/2">
          <h2 class="text-4xl uppercase">Risk Management Solution</h2>
          <hr class="w-16 h-1 mb-6 bg-primary" />
          <p class="text-md md:text-lg">
            Secure your business's future with Ikonoa's Risk Management
            Solutions. Our experts use a two-step process to identify and
            analyze potential loss exposures, then take proactive steps to
            minimize any financial impact. Whether you're dealing with pure
            risks or broader business risks, we have the knowledge and
            experience to protect your business from potential losses.
          </p>
        </div>
        <div class="lg:w-1/2">
          <img src="/assets/img/Services/solution.jpg" alt="solution" />
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
  color: #3b3b3b;
  letter-spacing: -0.1px;
}
hr {
  width: 120px;
  height: 0px;
  border: 2px solid #3b3b3b;
}
</style>

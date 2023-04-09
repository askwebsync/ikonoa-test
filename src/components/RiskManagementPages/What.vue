<template>
  <section class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
    <div class="background-product py-8 px-6">
      <div class="flex flex-col flex-start items-center gap-11 md:flex-row">
        <div class="p-2 self-center md:w-1/2 md:self-start">
          <h2 class="text-4xl mb-3 uppercase">Risk Management Solutions</h2>
          <hr />
          <p class="mt-10 md:mt-12">
            Secure your business's future with Ikonoa's Risk Management
            Solutions. We use a two-step process to identify and analyze
            potential loss exposures, then take proactive steps to minimize any
            financial impact. Whether you're dealing with pure risks or broader
            business risks, our experts have the knowledge and experience to
            protect your business from potential losses.
          </p>
        </div>
        <div class="md:w-1/2">
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

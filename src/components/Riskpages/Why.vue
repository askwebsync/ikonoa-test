<template>
  <section class="background-product">
    <div class="container mx-auto px-4 py-14 md:px-8">
      <div
        class="flex flex-col flex-start items-center gap-11 md:flex-row md:p-12 lg:p-24"
      >
        <div class="md:w-1/2">
          <img src="/assets/img/detail-services/why.png" alt="Why" class="" />
        </div>
        <div class="p-2 self-center md:w-1/2 md:self-start">
          <h2 class="text-4xl mb-3 uppercase">
            Expert Insurance Advice and Support
          </h2>
          <hr />
          <p class="mt-10 md:mt-12">
            When something unexpected damages your assets, filing an insurance
            claim can help you get compensation. But if you've never done it
            before, the process can be really tough. That's where an insurance
            claims consultant comes in. They'll help you get all the right
            documents, figure out how much you've lost, and submit your claim
            quickly and accurately. With their help, you can get the money you
            deserve from your insurance policy without the stress and confusion
            of doing it all on your own.
          </p>
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

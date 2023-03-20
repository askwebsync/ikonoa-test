<template>
  <section>
    <div class="container mx-auto px-4 py-14 md:px-8 lg:px-12">
      <div class="text-center">
        <div class="flex flex-col gap-2 my-6">
          <h3 class="text-xl md:text-2xl lg:text-3xl">Achievment</h3>
          <h2 class="text-xl md:text-2xl lg:text-3xl">
            Provide client with the best experience
          </h2>
        </div>
      </div>
    </div>
    <div class="backgrund-product">
      <div class="flex justify-between gap-4 px-4 py-10 xl:px-12 mx-auto">
        <div class="flex flex-col">
          <h1 class="text-xl md:text-2xl lg:text-3xl text-black">98%</h1>
          <p class="text-sm">Satisfied Client</p>
        </div>
        <div class="flex flex-col">
          <h1 class="text-xl md:text-2xl lg:text-3xl text-black">USD 250+M</h1>
          <p class="text-sm">Claim Paid</p>
        </div>
        <div class="flex flex-col">
          <h1 class="text-xl md:text-2xl lg:text-3xl text-black">7,500+</h1>
          <p class="text-sm">Claim Handle</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Achievment",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
h1 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  color: #17171f;
}
h2 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  color: #17171f;
}
h3 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  color: #d50000;
}
.backgrund-product {
  background-color: #ffe5e5;
}
p {
  font-family: "Roboto";
  font-style: normal;
  color: #000000;
}
</style>

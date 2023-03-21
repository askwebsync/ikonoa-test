<template>
  <section class="backgrund-product">
    <div
      class="relative overflow-hidden bg-no-repeat bg-cover pb-2"
      style="background-position: 50%; height: 200px"
    >
      <div class="flex flex-col justify-center items-center h-full gap-4 py-2">
        <div class="text-center center px-6 md:px-12">
          <h1 class="text-xl md:text-2xl lg:text-3xl mb-1">Get in touch</h1>
          <h2 class="text-lg text-black tracking-tighter max-w-lg md:max-w-xl">
            Want to get in touch? We'd love to hear from you. Here's how you can
            reach us..
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.center {
  text-align: -webkit-center;
}
h1 {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #d50000;
}
h2 {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}
p {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #17171f;
  letter-spacing: 0.1px;
}
</style>

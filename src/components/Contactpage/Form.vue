<!-- eslint-disable vue/valid-v-for -->
<template>
  <section>
    <div
      class="container mx-auto px-4 py-12 md:px-8 lg:px-24 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10"
    >
      <div
        class="col-span-1 flex flex-col background-custom-misi p-4 items-center text-center shadow-md"
      >
        <i
          class="fas fa-headset text-gray-600 text-2xl smtext-3xl md:text-4xl lg:text-5xl my-2 md:my-3"
        ></i>
        <div class="mb-2 md:mb-4 flex flex-wrap">
          <h2 class="text-xl md:text-2xl tracking-tight">Call</h2>
        </div>

        <div class="flex flex-wrap mt-auto py-3">
          <a
            href="#"
            class="text-base md:text-lg font-semibold text-red-600 hover:underline"
          >
            +62 82122064150
          </a>
        </div>
      </div>
      <div
        class="col-span-1 flex flex-col background-custom-misi p-4 items-center text-center shadow-md"
      >
        <i
          class="fas fa-envelope-open-text text-gray-600 text-2xl smtext-3xl md:text-4xl lg:text-5xl my-2 md:my-3"
        ></i>
        <div class="mb-2 md:mb-4 flex flex-wrap">
          <h2 class="text-xl md:text-2xl tracking-tight">E-Mail</h2>
        </div>

        <div class="flex flex-wrap mt-auto py-3">
          <a
            href="#"
            class="text-base md:text-lg font-semibold text-red-600 hover:underline"
          >
            hallo@ikonoa.com
          </a>
        </div>
      </div>
      <div
        class="col-span-2 md:col-span-1 flex flex-col background-custom-misi p-4 items-center text-center shadow-md"
      >
        <i
          class="fas fa-building text-gray-600 text-2xl smtext-3xl md:text-4xl lg:text-5xl my-2 md:my-3"
        ></i>
        <div class="mb-2 md:mb-4 flex flex-wrap">
          <h2 class="text-xl md:text-2xl tracking-tight">Office</h2>
        </div>

        <div class="flex flex-wrap mt-auto py-3">
          <p class="text-base md:text-lg font-semibold text-red-600">
            Graha Sentana - Jl. Warung Buncit Raya No. 2
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
h2 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  color: #17171f;
  letter-spacing: -0.01px;
}
h3 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  color: #d50000;
}
p {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  letter-spacing: -0.01px;
}
</style>

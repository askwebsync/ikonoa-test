<!-- eslint-disable vue/valid-v-for -->
<template>
  <section>
    <div
      class="container mx-auto px-4 py-12 md:px-8 lg:px-24 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10"
    >
      <div
        class="col-span-1 flex flex-col background-card p-4 items-center text-center shadow-md"
      >
        <i
          class="fas fa-headset text-red-600 text-2xl smtext-3xl md:text-4xl lg:text-5xl my-2 md:my-3"
        ></i>

        <h2 class="text-xl md:text-2xl tracking-tight my-2">
          {{ $t("contact.card1-header") }}
        </h2>

        <div class="flex flex-wrap mt-auto py-3">
          <a
            href="tel:+628119637541"
            class="text-base md:text-lg text-red-600 tracking-tight hover:underline"
          >
            (+62) 811-963-7541
          </a>
        </div>
      </div>
      <div
        class="col-span-1 flex flex-col background-card p-4 items-center text-center shadow-md"
      >
        <i
          class="fas fa-envelope-open-text text-red-600 text-2xl smtext-3xl md:text-4xl lg:text-5xl my-2 md:my-3"
        ></i>

        <h2 class="text-xl md:text-2xl tracking-tight my-2">E-Mail</h2>

        <div class="flex flex-wrap mt-auto py-3">
          <a
            href="mailto:hallo@ikonoa.com"
            class="text-base md:text-lg text-red-600 tracking-tight hover:underline"
          >
            hallo@ikonoa.com
          </a>
        </div>
      </div>
      <div
        class="col-span-2 md:col-span-1 flex flex-col background-card p-4 items-center text-center shadow-md"
      >
        <i
          class="fas fa-building text-red-600 text-2xl smtext-3xl md:text-4xl lg:text-5xl my-2 md:my-3"
        ></i>

        <h2 class="text-xl md:text-2xl tracking-tight my-2">
          {{ $t("contact.card3-header") }}
        </h2>

        <div class="flex flex-wrap mt-auto py-3">
          <a
            href="https://goo.gl/maps/KrHKqrzFiZTRauon8"
            class="text-base md:text-lg text-red-600 tracking-tight"
          >
            Graha Al Badegel, 2nd Floor, Jl. Tutty Alawiyah No. 7 Jakarta
            Selatan – 12740
          </a>
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
  font-weight: 500;
}
</style>

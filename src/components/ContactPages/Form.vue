<!-- eslint-disable vue/valid-v-for -->
<template>
  <div
    class="container mx-auto px-4 py-12 md:px-8 lg:px-24 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10"
  >
    <div
      class="col-span-1 flex flex-col background-card p-3 items-center text-center custom-shadow-card"
    >
      <i
        class="fas fa-headset text-red-600 text-2xl smtext-3xl md:text-4xl lg:text-5xl my-2 md:my-3"
      ></i>

      <h2 class="text-xl md:text-2xl tracking-tight my-1">
        {{ $t("contact.card1-header") }}
      </h2>

      <div class="flex flex-wrap mt-auto">
        <a
          href="tel:+628119637541"
          class="text-base md:text-lg text-red-600 tracking-tight hover:underline"
        >
          (+62) 811-963-7541
        </a>
      </div>
    </div>
    <div
      class="col-span-1 flex flex-col background-card p-3 items-center text-center custom-shadow-card"
    >
      <i
        class="fas fa-envelope-open-text text-red-600 text-2xl smtext-3xl md:text-4xl lg:text-5xl my-2 md:my-3"
      ></i>

      <h2 class="text-xl md:text-2xl tracking-tight my-1">E-Mail</h2>

      <div class="flex flex-wrap mt-auto">
        <a
          href="mailto:hallo@ikonoa.com"
          class="text-base md:text-lg text-red-600 tracking-tight hover:underline"
        >
          hallo@ikonoa.com
        </a>
      </div>
    </div>
    <div
      class="col-span-2 md:col-span-1 flex flex-col background-card p-3 items-center text-center custom-shadow-card"
    >
      <i
        class="fas fa-building text-red-600 text-2xl smtext-3xl md:text-4xl lg:text-5xl my-2 md:my-3"
      ></i>

      <h2 class="text-xl md:text-2xl tracking-tight my-1">
        {{ $t("contact.card3-header") }}
      </h2>

      <div class="flex flex-wrap mt-auto">
        <a
          href="https://goo.gl/maps/KrHKqrzFiZTRauon8"
          class="text-base md:text-lg text-red-600 tracking-tight"
        >
          Graha Al Badegel, 2nd Floor, Jl. Tutty Alawiyah No. 7 Jakarta Selatan
          – 12740
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact Form",
  components: {},
};
</script>

<style scoped>
h2 {
  font-weight: 500;
}
</style>

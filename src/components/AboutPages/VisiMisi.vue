<template>
  <section class="background-product">
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
      <div class="flex flex-col gap-8 text-center">
        <div class="flex flex-col gap-4">
          <h3 class="text-xl md:text-3xl">
            {{ $t("about.visi-header") }}
          </h3>
          <ul class="px-3 py-2 list-disc list-inside marker:text-red-600">
            <li>{{ $t("about.visi-text1") }}</li>
          </ul>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-xl md:text-3xl">{{ $t("about.misi-header") }}</h3>
          <ul
            class="px-3 py-2 space-y-4 list-disc list-inside marker:text-red-600"
          >
            <li>{{ $t("about.misi-text1") }}</li>
            <li>{{ $t("about.misi-text3") }}</li>
            <li>{{ $t("about.misi-text2") }}</li>
            <li>{{ $t("about.misi-text4") }}</li>
            <li>{{ $t("about.misi-text5") }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "VisiMisi",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
h3 {
  font-weight: 500;
}

li {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: #17171f;
}

.background-product {
  font-display: swap; /* Ensures text is user-visible */
}
</style>

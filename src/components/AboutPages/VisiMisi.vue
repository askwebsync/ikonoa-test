<template>
  <div class="background-product">
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
      <div class="flex flex-col gap-8 text-center">
        <div class="flex flex-col gap-4">
          <h3 class="text-xl md:text-3xl">
            {{ $t("about.visi-header") }}
          </h3>
          <ul class="px-3 py-2 list-disc list-inside tracking-tighter marker:text-red-600">
            <li class="mobile-letter-spacing">
              {{ $t("about.visi-text1") }}
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-xl md:text-3xl">{{ $t("about.misi-header") }}</h3>
          <ul
            class="px-3 py-2 space-y-4 list-disc list-inside tracking-tighter marker:text-red-600"
          >
            <li class="mobile-letter-spacing">{{ $t("about.misi-text1") }}</li>
            <li class="mobile-letter-spacing">{{ $t("about.misi-text3") }}</li>
            <li class="mobile-letter-spacing">{{ $t("about.misi-text2") }}</li>
            <li class="mobile-letter-spacing">{{ $t("about.misi-text4") }}</li>
            <li class="mobile-letter-spacing">{{ $t("about.misi-text5") }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VisiMisi",
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

/* Letter-spacing-mobile -0.15px*/
@media screen and (max-width: 640px) {
   .mobile-letter-spacing {
    letter-spacing: -0.15px; 
    }
}
.background-product {
  font-display: swap; /* Ensures text is user-visible */
}
</style>

<template>
  <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
    <div
      class="grid grid-cols-1 text-center gap-12 md:gap-18 lg:gap-24 lg:grid-cols-4 lg:text-left"
    >
      <div class="flex flex-col items-center lg:items-start gap-6">
        <img
          src="/assets/img/Icon/logo.png"
          class="w-28 h-12 object-contain flex-shrink-0"
          alt="logo"
          width="112"
          height="48"
        />

        <p
          class="text-md md:text-lg font-medium text-white max-w-xs md:max-w-xl"
        >
          {{ $t("footer.card1-header") }}
        </p>
      </div>
      <div class="space-y-4">
        <h3 class="text-lg mb-4">{{ $t("footer.card2-header") }}</h3>
        <ul class="space-y-3 text-white">
          <li class="">
            <router-link
              :to="{ name: 'about' }"
              class="text-sm md:text-lg font-medium block w-full"
            >
              {{ $t("footer.card2-option1") }}
            </router-link>
          </li>
          <li class="">
            <router-link
              :to="{ name: 'services' }"
              class="text-sm md:text-lg font-medium block w-full"
            >
              {{ $t("footer.card2-option2") }}
            </router-link>
          </li>
          <li class="">
            <router-link
              :to="{ name: 'insurance-policy' }"
              class="text-sm md:text-lg font-medium block w-full"
            >
              {{ $t("footer.card2-option3") }}
            </router-link>
          </li>
          <li class="">
            <router-link
              :to="{ name: 'claim-experience' }"
              class="text-sm md:text-lg font-medium block w-full"
            >
              {{ $t("footer.card2-option4") }}
            </router-link>
          </li>
          <li class="">
            <router-link
              :to="{ name: 'contact' }"
              class="text-sm md:text-lg font-medium block w-full"
            >
              {{ $t("footer.card2-option5") }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="space-y-4">
        <h3 class="text-lg mb-4">{{ $t("footer.card3-header") }}</h3>
        <ul class="space-y-3 text-white">
          <li class="">
            <router-link
              :to="{ name: 'risk-consulting' }"
              class="text-sm md:text-lg font-medium block w-full"
            >
              {{ $t("footer.card3-option1") }}
            </router-link>
          </li>
          <li class="">
            <router-link
              :to="{ name: 'risk-management' }"
              class="text-sm md:text-lg font-medium block w-full"
            >
              {{ $t("footer.card3-option2") }}
            </router-link>
          </li>
          <li class="">
            <router-link
              :to="{ name: 'insurance-policy' }"
              class="text-sm md:text-lg font-medium block w-full"
            >
              {{ $t("footer.card3-option3") }}
            </router-link>
          </li>
          <li class="">
            <router-link
              :to="{ name: 'academy' }"
              class="text-sm md:text-lg font-medium block w-full"
            >
              {{ $t("footer.card3-option4") }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="space-y-4">
        <h3 class="text-lg mb-4">{{ $t("footer.card4-header") }}</h3>
        <ul class="space-y-3 text-white">
          <li class="">
            <a
              class="text-sm md:text-lg font-medium block w-full"
              href="tel:62811963754"
              >(+62) 811-963754</a
            >
          </li>
          <li class="">
            <a
              class="text-sm md:text-lg font-medium block w-full"
              href="mailto:hallo@ikonoa.com"
              >hallo@ikonoa.com</a
            >
          </li>
          <!-- <li class="">
            <p class="text-sm md:text-lg font-medium block w-full">
              {{ $t("footer.card4-option1") }}
            </p>
          </li>
          <li class="">
            <p class="text-sm md:text-lg font-medium block w-full">
              {{ $t("footer.card4-option2") }}
            </p>
          </li> -->
        </ul>
      </div>
    </div>
  </div>

  <div class="border-t border-gray-100 py-4">
    <p class="text-sm font-medium text-white text-center md:text-lg">
      © 2023 PT.Ikonoa Solusindo Asia. All rights reserved.
    </p>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
li p {
  color: #fdfdff;
}

h3 {
  color: #ffff00;
}
</style>

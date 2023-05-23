<template>
  <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
    <div
      class="grid grid-cols-1 gap-12 md:gap-16 lg:gap-24 text-center lg:grid-cols-4 lg:text-left"
    >
      <div class="flex flex-col items-center lg:items-start gap-6">
        <img
          src="/assets/img/Icon/logo.png"
          class="w-28 h-12 object-contain"
          alt="logo"
          width="112"
          height="48"
        />

        <p class="text-md md:text-lg font-medium max-w-xs text-white">
          {{ $t("footer.card1-header") }}
        </p>
      </div>
      <div>
        <h3 class="text-lg mb-4">{{ $t("footer.card2-header") }}</h3>
        <ul class="space-y-3 text-white">
          <li class="">
            <router-link
              :to="{ name: 'about' }"
              class="text-md md:text-lg font-medium block w-full"
            >
              {{ $t("footer.card2-option1") }}
            </router-link>
          </li>
          <li class="">
            <router-link
              :to="{ name: 'services' }"
              class="text-md md:text-lg font-medium block w-full"
            >
              {{ $t("footer.card2-option2") }}
            </router-link>
          </li>
          <li class="">
            <router-link
              :to="{ name: 'insurance-policy' }"
              class="text-md md:text-lg font-medium block w-full"
            >
              {{ $t("footer.card2-option3") }}
            </router-link>
          </li>
          <li class="">
            <router-link
              :to="{ name: 'claim-experience' }"
              class="text-md md:text-lg font-medium block w-full"
            >
              {{ $t("footer.card2-option4") }}
            </router-link>
          </li>
          <li class="">
            <router-link
              :to="{ name: 'contact' }"
              class="text-md md:text-lg font-medium block w-full"
            >
              {{ $t("footer.card2-option5") }}
            </router-link>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-lg mb-4">{{ $t("footer.card3-header") }}</h3>
        <ul class="space-y-3 text-white">
          <li class="">
            <router-link
              :to="{ name: 'risk-consulting' }"
              class="text-md md:text-lg font-medium block w-full"
            >
              {{ $t("footer.card3-option1") }}
            </router-link>
          </li>
          <li class="">
            <router-link
              :to="{ name: 'risk-management' }"
              class="text-md md:text-lg font-medium block w-full"
            >
              {{ $t("footer.card3-option2") }}
            </router-link>
          </li>
          <li class="">
            <router-link
              :to="{ name: 'insurance-policy' }"
              class="text-md md:text-lg font-medium block w-full"
            >
              {{ $t("footer.card3-option3") }}
            </router-link>
          </li>
          <li class="">
            <router-link
              :to="{ name: 'academy' }"
              class="text-md md:text-lg font-medium block w-full"
            >
              {{ $t("footer.card3-option4") }}
            </router-link>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-lg mb-4">{{ $t("footer.card4-header") }}</h3>
        <ul class="space-y-3 text-white">
          <li class="">
            <a class="text-md md:text-lg font-medium block w-full" href="#"
              >(+62) 811-963754</a
            >
          </li>
          <li class="">
            <a class="text-md md:text-lg font-medium block w-full" href="#"
              >hallo@ikonoa.com</a
            >
          </li>
          <li class="">
            <p class="text-md md:text-lg font-medium block w-full">
              {{ $t("footer.card4-option1") }}
            </p>
          </li>
          <li class="">
            <p class="text-md md:text-lg font-medium block w-full">
              {{ $t("footer.card4-option2") }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="mt-12 border-t border-gray-100 py-4">
    <p class="text-sm text-center text-white">
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
  letter-spacing: -0.25px;
}

footer a {
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
}
</style>

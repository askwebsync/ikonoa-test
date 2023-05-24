<template>
  <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
    <div
      class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 justify-items-center text-center md:justify-items-start md:text-left"
    >
      <div class="flex flex-col gap-2 md:self-center max-w-lg">
        <h3 class="text-xl md:text-2xl lg:text-3xl">
          {{ $t("home.service-header") }}
        </h3>
        <h2 class="text-xl md:text-2xl lg:text-3xl max-w-lg md:max-w-xs">
          {{ $t("home.service-subheader") }}
        </h2>
      </div>
      <div class="flex flex-col gap-10">
        <div
          class="flex flex-col lg:w-72 w-80 xl:w-auto px-5 py-6 gap-6 background-card hover:bg-white hover:shadow-md"
        >
          <div class="self-center md:self-start">
            <img
              src="/assets/img/Home/analysis.webp"
              alt="Risk Consulting"
              width="64"
              height="64"
            />
          </div>
          <div class="flex flex-col gap-8">
            <router-link
              :to="{ name: 'risk-consulting' }"
              aria-label="{{ $t('home.service-card1-header') }}"
            >
              <h1
                class="text-xl md:text-2xl lg:text-3xl uppercase hover:text-red-600"
              >
                {{ $t("home.service-card1-header") }}
              </h1>
            </router-link>
            <ul class="list-decimal list-outside space-y-2 md:space-y-1 px-6">
              <li class="text-base sm:text-base md:text-lg tracking-tighter">
                {{ $t("home.service-card1-text1") }}
              </li>
              <li class="text-base sm:text-base md:text-lg tracking-tighter">
                {{ $t("home.service-card1-text2") }}
              </li>
              <li class="text-base sm:text-base md:text-lg tracking-tighter">
                {{ $t("home.service-card1-text3") }}
              </li>
              <li class="text-base sm:text-base md:text-lg tracking-tighter">
                {{ $t("home.service-card1-text4") }}
              </li>
            </ul>
          </div>
        </div>
        <div
          class="flex flex-col lg:w-72 w-80 xl:w-auto px-5 py-6 gap-6 background-card hover:bg-white hover:shadow-md"
        >
          <div class="self-center md:self-start">
            <img
              src="/assets/img/Home/insurance.webp"
              alt="Insurance Policy"
              width="64"
              height="64"
            />
          </div>
          <div class="flex flex-col gap-8">
            <router-link
              :to="{ name: 'insurance-policy' }"
              aria-label="{{ $t('home.service-card2-header') }}"
            >
              <h1 class="text-xl md:text-2xl lg:text-3xl uppercase">
                {{ $t("home.service-card2-header") }}
              </h1>
            </router-link>
            <ul class="list-decimal list-outside space-y-2 md:space-y-1 px-6">
              <li class="text-base sm:text-base md:text-lg tracking-tighter">
                {{ $t("home.service-card2-text1") }}
              </li>
              <li class="text-base sm:text-base md:text-lg tracking-tighter">
                {{ $t("home.service-card2-text2") }}
              </li>
              <li class="text-base sm:text-base md:text-lg tracking-tighter">
                {{ $t("home.service-card2-text3") }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-10 mt-6 lg:mt-20">
        <div
          class="flex flex-col lg:w-72 w-80 xl:w-auto px-5 py-6 gap-6 background-card hover:bg-white hover:shadow-md"
        >
          <div class="self-center md:self-start">
            <img
              src="/assets/img/Home/risk.webp"
              alt="Risk Management"
              width="64"
              height="64"
            />
          </div>
          <div class="flex flex-col gap-8">
            <router-link
              :to="{ name: 'risk-management' }"
              aria-label="{{ $t('home.service-card3-header') }}"
            >
              <h1
                class="text-xl md:text-2xl lg:text-3xl uppercase hover:text-red-600"
              >
                {{ $t("home.service-card3-header") }}
              </h1>
            </router-link>
            <ul class="list-decimal list-outside space-y-2 md:space-y-1 px-6">
              <li class="text-base sm:text-base md:text-lg tracking-tighter">
                {{ $t("home.service-card3-text2") }}
              </li>
              <li class="text-base sm:text-base md:text-lg tracking-tighter">
                {{ $t("home.service-card3-text1") }}
              </li>
            </ul>
          </div>
        </div>

        <div
          class="flex flex-col lg:w-72 w-80 xl:w-auto px-5 py-6 gap-6 background-card hover:bg-white hover:shadow-md"
        >
          <div class="self-center md:self-start">
            <img
              src="/assets/img/Home/academy.webp"
              alt="Academy"
              width="64"
              height="64"
            />
          </div>
          <div class="flex flex-col gap-8">
            <router-link
              :to="{ name: 'academy' }"
              aria-label="{{ $t('home.service-card4-header') }}"
            >
              <h1
                class="text-xl md:text-2xl lg:text-3xl uppercase hover:text-red-600"
              >
                {{ $t("home.service-card4-header") }}
              </h1>
            </router-link>
            <ul class="list-decimal list-outside space-y-2 md:space-y-1 px-6">
              <li class="text-base sm:text-base md:text-lg">
                {{ $t("home.service-card4-text1") }}
              </li>
              <li class="text-base sm:text-base md:text-lg">
                {{ $t("home.service-card4-text2") }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
};
</script>

<style scoped>
h1 {
  font-weight: 700;
  color: #17171f;
}

ul li {
  font-family: "Roboto";
  font-style: normal;
  color: #505050;
  font-weight: 400;
  letter-spacing: -0.25px;
}
</style>

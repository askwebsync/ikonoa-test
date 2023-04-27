<template>
  <section>
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
      <div
        class="grid md:grid-cols-3 gap-8 md:gap-10 justify-items-center text-center md:justify-items-start md:text-left"
      >
        <div class="flex flex-col gap-2 md:self-center max-w-lg">
          <h3 class="text-xl md:text-2xl lg:text-3xl">
            {{ $t("home.service-header") }}
          </h3>
          <h2 class="text-xl md:text-2xl lg:text-3xl">
            {{ $t("home.service-subheader") }}
          </h2>
        </div>
        <div class="flex flex-col gap-10">
          <div
            class="flex flex-col w-80 mx-auto px-5 py-6 md:px-5 gap-6 background-card hover:bg-white hover:shadow-md"
          >
            <div class="self-center md:self-start">
              <img src="/assets/img/Home/analysis.png" alt="Risk Consulting" />
            </div>
            <div class="flex flex-col gap-6">
              <router-link :to="{ name: 'risk-consulting' }">
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
            class="flex flex-col w-80 mx-auto px-5 py-6 md:px-5 gap-6 background-card hover:bg-white hover:shadow-md"
          >
            <div class="self-center md:self-start">
              <img
                src="/assets/img/Home/insurance.png"
                alt="Insurance Policy"
              />
            </div>
            <div class="flex flex-col gap-6">
              <router-link :to="{ name: 'insurance-policy' }">
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
        <div class="flex flex-col gap-10 mt-6 md:mt-20">
          <div
            class="flex flex-col w-80 mx-auto px-5 py-6 md:px-5 gap-6 background-card hover:bg-white hover:shadow-md"
          >
            <div class="self-center md:self-start">
              <img src="/assets/img/Home/risk.png" alt="Risk Management" />
            </div>
            <div class="flex flex-col gap-6">
              <router-link :to="{ name: 'risk-management' }">
                <h1
                  class="text-xl md:text-2xl lg:text-3xl uppercase hover:text-red-600"
                >
                  {{ $t("home.service-card3-header") }}
                </h1>
              </router-link>
              <ul class="list-decimal list-outside space-y-2 md:space-y-1 px-6">
                <li class="text-base sm:text-base md:text-lg tracking-tighter">
                  {{ $t("home.service-card3-text1") }}
                </li>
                <li class="text-base sm:text-base md:text-lg tracking-tighter">
                  {{ $t("home.service-card2-text2") }}
                </li>
              </ul>
            </div>
          </div>

          <div
            class="flex flex-col w-80 mx-auto px-5 py-6 md:px-5 gap-6 background-card hover:bg-white hover:shadow-md"
          >
            <div class="self-center md:self-start">
              <img src="/assets/img/Home/academy.png" alt="Academy" />
            </div>
            <div class="flex flex-col gap-6">
              <router-link :to="{ name: 'academy' }">
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
  </section>
</template>

<script>
export default {
  name: "Services",
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
  letter-spacing: 1px;
}

ul li {
  font-family: "Roboto";
  font-style: normal;
  color: #505050;
  font-weight: 400;
  letter-spacing: 0.5px;
}
</style>

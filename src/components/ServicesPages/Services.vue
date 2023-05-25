<template>
  <div class="container mx-auto px-4 py-12 md:px-8 lg:p-24">
    <div class="flex flex-col gap-10 md:gap-12 px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <router-link :to="{ name: 'risk-consulting' }">
          <div
            class="background-card flex flex-col rounded-lg card-hover shadow-md"
          >
            <div
              class="flex flex-col gap-7 md:gap-10 p-8 md:p-6 text-center md:h-72 xl:h-64"
            >
              <h1
                class="text-xl md:text-xl lg:text-3xl hover:text-red-600 focus:outline-none"
              >
                {{ $t("services.card1-header") }}
              </h1>

              <p class="text-sm md:text-base xl:text-lg">
                {{ $t("services.card1-subheader") }}
              </p>
            </div>
            <div class="bg-white">
              <img
                src="/assets/img/LP_Service/risk-consulting.png"
                alt="risk-consulting"
                class="w-full rounded-lg h-full"
              />
            </div>
          </div>
        </router-link>
        <router-link :to="{ name: 'risk-management' }">
          <div
            class="background-card flex flex-col rounded-lg card-hover shadow-md"
          >
            <div
              class="flex flex-col gap-7 md:gap-10 p-8 md:p-6 text-center md:h-72 xl:h-64"
            >
              <h1
                class="text-xl md:text-xl lg:text-3xl hover:text-red-600 focus:outline-none"
              >
                {{ $t("services.card2-header") }}
              </h1>

              <p class="text-sm md:text-base xl:text-lg">
                {{ $t("services.card2-subheader") }}
              </p>
            </div>
            <div class="bg-white">
              <img
                src="/assets/img/LP_Service/risk-management.png"
                alt="risk-management"
                class="w-full rounded-lg"
              />
            </div>
          </div>
        </router-link>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <router-link :to="{ name: 'insurance-policy' }">
          <div
            class="background-card flex flex-col rounded-lg card-hover shadow-md"
          >
            <div
              class="flex flex-col gap-7 md:gap-10 p-8 md:p-6 text-center md:h-72 xl:h-64"
            >
              <h1
                class="text-xl md:text-xl lg:text-3xl hover:text-red-600 focus:outline-none"
              >
                {{ $t("services.card3-header") }}
              </h1>

              <p class="text-sm md:text-base xl:text-lg">
                {{ $t("services.card2-subheader") }}
              </p>
            </div>
            <div class="bg-white">
              <img
                src="/assets/img/LP_Service/insurance-policy.png"
                alt="insurance-policy"
                class="w-full rounded-lg"
              />
            </div>
          </div>
        </router-link>
        <router-link :to="{ name: 'academy' }">
          <div
            class="background-card flex flex-col rounded-lg card-hover shadow-md"
          >
            <div
              class="flex flex-col gap-7 md:gap-10 p-8 md:p-6 text-center md:h-72 xl:h-64"
            >
              <h1
                class="text-xl md:text-xl lg:text-3xl hover:text-red-600 focus:outline-none"
              >
                {{ $t("services.card4-header") }}
              </h1>
              <p class="text-sm md:text-base xl:text-lg">
                {{ $t("services.card4-subheader") }}
              </p>
            </div>
            <div class="bg-white">
              <img
                src="/assets/img/LP_Service/academy.png"
                alt="academy"
                class="w-full rounded-lg"
              />
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
  components: {},
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
h1 {
  color: #3b3b3b;
}
p {
  font-weight: 400;
  color: #787878;
  letter-spacing: -0.05px;
}
.card-hover:hover {
  background-color: #ffe5e5;
}
</style>

<template>
  <section>
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
      <div class="flex flex-col gap-12">
        <div class="flex flex-col gap-2 self-center text-center max-w-4xl">
          <h3 class="text-xl md:text-2xl lg:text-3xl lg:text-3xl">
            {{ $t("home.academy-header") }}
          </h3>
          <h2 class="text-xl md:text-2xl lg:text-3xl lg:text-3xl">
            {{ $t("home.academy-subheader") }}
          </h2>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 self-center">
          <div
            class="background-product custom-shadow-card flex flex-col rounded-lg max-h-md max-w-md"
          >
            <div>
              <img
                src="/assets/img/Home/webinar.webp"
                alt="webinar"
                class="w-full rounded"
              />
            </div>
            <div
              class="flex flex-col gap-8 p-6 text-center h-80 sm:h-64 md:h-80 lg:96"
            >
              <h6 class="text-2xl lg:text-3xl">
                {{ $t("home.academy-card1-header") }}
              </h6>
              <p class="lg:text-lg">
                {{ $t("home.academy-card1-text") }}
              </p>
            </div>
          </div>
          <div
            class="background-product custom-shadow-card flex flex-col rounded-lg max-h-md max-w-md"
          >
            <div>
              <img
                src="/assets/img/Home/seminar.webp"
                alt="seminar"
                class="w-full rounded"
              />
            </div>
            <div
              class="flex flex-col gap-8 p-6 text-center h-80 sm:h-64 md:h-80 lg:96"
            >
              <h6 class="text-2xl lg:text-3xl">
                {{ $t("home.academy-card2-header") }}
              </h6>
              <p class="lg:text-lg">
                {{ $t("home.academy-card2-text") }}
              </p>
            </div>
          </div>
        </div>

        <div class="text-center mt-4">
          <button
            class="px-7 py-3 border-button-custom font-medium button-shadow"
          >
            <router-link
              :to="{ name: 'academy' }"
              aria-label="Check our services full explanation"
            >
              {{ $t("home.button") }}</router-link
            >
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Academy",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
p {
  font-weight: 400;
  line-height: 1.3em;
}
h2 {
  letter-spacing: -1px;
}
</style>

<template>
  <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
    <div class="flex flex-col gap-12">
      <div class="flex flex-col gap-2 self-center text-center max-w-4xl">
        <h3 class="text-xl md:text-2xl lg:text-3xl">
          {{ $t("home.academy-header") }}
        </h3>
        <h2 class="text-xl md:text-2xl lg:text-3xl">
          {{ $t("home.academy-subheader") }}
        </h2>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 self-center">
        <div
          class="background-product custom-shadow-card flex flex-col rounded-lg max-w-xs md:max-w-md"
        >
          <div>
            <img
              src="/assets/img/Home/webinar.webp"
              alt="webinar"
              class="w-full rounded"
              width="1504"
              height="1004"
            />
          </div>
          <div class="flex flex-col gap-6 p-6 text-center h-full">
            <h6 class="text-2xl lg:text-3xl font-semibold">
              {{ $t("home.academy-card1-header") }}
            </h6>
            <p class="text-base md:text-lg leading-6">
              {{ $t("home.academy-card1-text") }}
            </p>
          </div>
        </div>
        <div
          class="background-product custom-shadow-card flex flex-col rounded-lg max-w-xs md:max-w-md"
        >
          <div>
            <img
              src="/assets/img/Home/seminar.webp"
              alt="seminar"
              class="w-full rounded"
              width="1276"
              height="851"
            />
          </div>
          <div class="flex flex-col gap-6 p-6 text-center h-full">
            <h6 class="text-2xl lg:text-3xl font-semibold">
              {{ $t("home.academy-card2-header") }}
            </h6>
            <p class="text-base md:text-lg leading-6">
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
            aria-label="Check our academy section"
          >
            {{ $t("home.button") }}
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Academy",
  components: {},
};
</script>

<style scoped>
p {
  letter-spacing: -0.25px;
}
</style>

<template>
  <section>
    <div class="container mx-auto px-4 py-14 md:px-8 lg:px-24">
      <div class="flex flex-col gap-12 px-5 md:px-0">
        <div class="flex flex-col gap-4 md:gap-2 text-center">
          <h3 class="text-xl md:text-2xl lg:text-3xl">
            {{ $t("academy.webinar-explanation-header") }}
          </h3>
          <h2 class="text-xl md:text-2xl lg:text-3xl">
            {{ $t("academy.webinar-explanation-subheader") }}
          </h2>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center"
        >
          <div
            class="flex flex-col items-start p-5 gap-5 custom-shadow-card max-w-lg"
          >
            <img src="/assets/img/Services/academy1.png" alt="w-auto h-auto" />
            <div class="flex flex-col items-center gap-7">
              <div class="flex self-start">
                <h6 class="text-2xl lg:text-3xl">
                  {{ $t("academy.webinar-card1-title") }}
                </h6>
              </div>

              <div class="flex flex-col items-center gap-5">
                <p class="lg:text-xl text-gray-600">
                  {{ $t("academy.webinar-card1-text") }}
                </p>
                <hr />
                <div class="w-full flex justify-between">
                  <div class="lg:text-xl font-semibold">
                    {{ $t("academy.webinar-card1-platform") }}
                    <span class="lg:text-xl font-semibold text-red-600"
                      >Zoom</span
                    >
                  </div>
                  <div class="lg:text-xl font-semibold">
                    {{ $t("academy.webinar-card1-time") }}
                    <span class="lg:text-xl font-semibold text-red-600"
                      >01/01/2023</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col items-start p-5 gap-5 custom-shadow-card max-w-lg"
          >
            <img src="/assets/img/Services/academy1.png" alt="w-auto h-auto" />
            <div class="flex flex-col items-center gap-7">
              <div class="flex self-start">
                <h6 class="text-2xl lg:text-3xl">
                  {{ $t("academy.webinar-card2-title") }}
                </h6>
              </div>

              <div class="flex flex-col items-center gap-5">
                <p class="lg:text-xl text-gray-600">
                  {{ $t("academy.webinar-card2-text") }}
                </p>
                <hr />
                <div class="w-full flex justify-between">
                  <div class="lg:text-xl font-semibold">
                    {{ $t("academy.webinar-card2-platform") }}
                    <span class="text-red-600">Zoom</span>
                  </div>
                  <div class="lg:text-xl font-semibold">
                    {{ $t("academy.webinar-card2-time") }}
                    <span class="text-red-600">01/01/2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Meeting",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
h6 {
  letter-spacing: 0.5px;
  color: #3b3b3b;
}
hr {
  width: 100%;
  height: 0px;
  border: 1px solid #787878;
}
</style>

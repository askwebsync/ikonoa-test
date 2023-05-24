<template>
  <div class="background-product">
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
      <div
        class="grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-x-2 md:divide-y-0 divide-black gap-2"
      >
        <div class="flex flex-col items-center px-6 py-4 gap-6">
          <div class="flex flex-col items-center gap-5">
            <img src="/assets/img/Services/offline.png" alt="w-auto h-auto" />
            <h5 class="text-xl md:text-2xl lg:text-3xl">
              {{ $t("academy.card1-header") }}
            </h5>
          </div>
          <p class="text-center">
            {{ $t("academy.card1-explanation") }}
          </p>
        </div>
        <div class="flex flex-col items-center px-6 py-4 gap-6">
          <div class="flex flex-col items-center gap-5">
            <img src="/assets/img/Services/online.png" alt="w-auto h-auto" />
            <h5 class="text-xl md:text-2xl lg:text-3xl">
              {{ $t("academy.card2-header") }}
            </h5>
          </div>
          <p class="text-center">
            {{ $t("academy.card2-explanation") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "What",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
p {
  color: #4f4f4f;
  letter-spacing: 0.5px;
}

h5 {
  font-weight: 500;
  color: #17171f;
}
</style>

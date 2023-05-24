<template>
  <div class="container mx-auto px-4 py-14 md:px-8 lg:px-24">
    <div class="flex flex-col gap-14">
      <div class="flex flex-col gap-2 text-center">
        <h3 class="text-2xl lg:text-3xl">
          {{ $t("risk-management.claim-procces-header") }}
        </h3>
        <h2 class="text-xl md:text-2xl">
          {{ $t("risk-management.claim-procces-subheader") }}
        </h2>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 items-center gap-11 h-full w-full"
      >
        <div class="flex flex-col items-center self-center gap-6">
          <div
            class="w-12 h-12 rounded-full flex justify-center items-center background-number"
          >
            <p class="text-lg">1</p>
          </div>
          <div
            class="flex flex-col p-6 gap-8 lg:gap-12 background-card-detail rounded-xl border-custom h-72 md:h-96 lg:h-80 xl:h-72"
          >
            <h2 class="text-black text-center text-xl md:text-3xl">
              {{ $t("risk-management.claim-procces-card1-header") }}
            </h2>
            <p class="text-md text-gray-500 md:text-lg">
              {{ $t("risk-management.claim-procces-card1-explanation") }}
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center self-center gap-6">
          <div
            class="w-12 h-12 rounded-full flex justify-center items-center background-number"
          >
            <p class="text-lg">2</p>
          </div>
          <div
            class="flex flex-col p-6 gap-8 lg:gap-12 background-card-detail rounded-xl border-custom h-72 md:h-96 lg:h-80 xl:h-72"
          >
            <h2 class="text-black text-center text-xl md:text-3xl">
              {{ $t("risk-management.claim-procces-card2-header") }}
            </h2>
            <p class="text-md text-gray-500 md:text-lg">
              {{ $t("risk-management.claim-procces-card2-explanation") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {};
  },
};
</script>

<style scoped>
h2 {
  font-weight: 500;
  color: #3b3b3b;
}
p {
  font-weight: 400;
  letter-spacing: -0.1px;
}
hr {
  width: 120px;
  height: 0px;
  border: 2px solid #3b3b3b;
}
.background-number {
  background-color: #ffe5e5;
  border: 1px solid #d50000;
}
.border-custom {
  border: 1.5px solid #17171f;
  border-radius: 8px;
}
.background-card-detail {
  background-color: #f2f2f2;
}
</style>

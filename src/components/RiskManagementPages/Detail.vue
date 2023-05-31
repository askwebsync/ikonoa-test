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
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="flex flex-col items-center justify-between gap-6">
          <div
            class="w-12 h-16 rounded-full flex justify-center items-center background-number"
          >
            <p class="text-lg">1</p>
          </div>
          <div
            class="flex flex-col p-5 xl:p-6 gap-4 lg:gap-6 background-card-detail rounded-xl border-custom h-full"
          >
            <h2
              class="text-black text-center text-base md:text-xl lg:text-2xl overflow-hidden"
            >
              {{ $t("risk-management.claim-procces-card1-header") }}
            </h2>
            <p
              class="text-sm text-gray-500 md:text-md lg:text-lg overflow-hidden"
            >
              {{ $t("risk-management.claim-procces-card1-explanation") }}
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center justify-between gap-6">
          <div
            class="w-12 h-16 rounded-full flex justify-center items-center background-number"
          >
            <p class="text-lg">2</p>
          </div>
          <div
            class="flex flex-col p-5 xl:p-6 gap-4 lg:gap-6 background-card-detail rounded-xl border-custom h-full"
          >
            <h2
              class="text-black text-center text-base md:text-xl lg:text-2xl overflow-hidden"
            >
              {{ $t("risk-management.claim-procces-card2-header") }}
            </h2>
            <p
              class="text-sm text-gray-500 md:text-md lg:text-lg overflow-hidden"
            >
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

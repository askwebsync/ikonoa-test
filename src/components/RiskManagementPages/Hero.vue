<template>
  <section>
    <div
      class="relative overflow-hidden bg-no-repeat bg-cover"
      style="height: 460px"
    >
      <div
        class="flex flex-col justify-center items-center h-full text-center gap-6 container mx-auto px-4 md:px-8 lg:px-24"
      >
        <h1
          class="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl hover:text-red-600 uppercase md:leading-snug"
        >
          {{ $t("risk-management.banner-header") }}
        </h1>
        <h4 class="text-lg md:text-xl lg:text-2xl xl:text-3xl">
          {{ $t("risk-management.banner-subheader") }}
        </h4>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
h4 {
  color: #787878;
  letter-spacing: -0.15px;
}
h1 {
  color: #3b3b3b;
  line-height: normal;
}
hr {
  width: 150px;
  height: 0px;
  border: 1px solid #787878;
}
</style>

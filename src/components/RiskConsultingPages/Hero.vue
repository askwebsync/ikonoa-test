<template>
  <section>
    <div
      class="relative overflow-hidden bg-no-repeat bg-cover"
      style="height: 380px"
    >
      <div
        class="flex flex-col justify-center items-center h-full text-center gap-10 p-12"
      >
        <h1
          class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl hover:text-red-600 max-w-5xl uppercase md:leading-snug"
        >
          {{ $t("risk-consulting.banner-header") }}
        </h1>
        <div class="flex flex-col gap-4 items-center">
          <hr />
          <h4 class="text-lg max-w-xxs md:text-xl md:max-w-2xl lg:max-w-6xl">
            {{ $t("risk-consulting.banner-subheader") }}
          </h4>
          <hr />
        </div>
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

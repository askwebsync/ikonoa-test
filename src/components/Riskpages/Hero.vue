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
          class="text-2xl sm:text-3xl md:text-5xl hover:text-red-600 max-w-5xl uppercase md:leading-snug"
        >
          RISK CONSULTING
        </h1>
        <div class="flex flex-col gap-4 items-center">
          <hr />
          <h4
            class="text-lg max-w-xxs hover:text-yellow-300 md:text-xl md:max-w-2xl lg:text-3xl lg:max-w-6xl"
          >
            We provide advisory on not only conventional insurance, but also on
            topics like self-insurance, claims management, loss prevention and
            project advisory.
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

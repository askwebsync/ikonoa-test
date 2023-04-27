<template>
  <section>
    <div
      class="relative overflow-hidden bg-no-repeat bg-cover"
      style="
        background-position: 50%;
        background-image: url('/assets/img/LP_Service/services.png');
        height: 500px;
      "
    >
      <div
        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style="background-color: rgba(0, 0, 0, 0.65)"
      >
        <div
          class="flex flex-col justify-center items-center h-full text-center gap-6 p-6"
        >
          <h1
            class="text-2xl sm:text-3xl md:text-5xl hover:text-red-600 max-w-5xl uppercase md:leading-snug"
          >
            OUR SERVICES & SOLUTIONS
          </h1>
          <h4
            class="text-lg max-w-xxs md:text-xl md:max-w-2xl lg:text-3xl lg:max-w-6xl"
          >
            "Let us guide you to the insurance policy that perfectly fits your
            unique needs. We offer a wide range of insurance solutions that
            provide maximum protection for you and your assets.""
          </h4>
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

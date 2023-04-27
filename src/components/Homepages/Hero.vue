<template>
  <section>
    <div
      class="relative overflow-hidden bg-no-repeat bg-cover"
      style="
        background-position: 50%;
        background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp');
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
            {{ $t("home.banner-header") }}<br /><span>{{
              $t("home.banner-header-span")
            }}</span>
          </h1>
          <h4
            class="text-lg max-w-xxs md:text-xl md:max-w-2xl lg:text-3xl lg:max-w-5xl"
          >
            {{ $t("home.banner-subheader") }}
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

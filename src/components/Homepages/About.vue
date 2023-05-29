<template>
  <div class="background-product">
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
      <div
        class="flex flex-col gap-9 items-center px-3 md:px-0 lg:flex-row lg:gap-12"
      >
        <div class="flex w-full md:self-start lg:w-1/2">
          <img
            src="/assets/img/Home/about.webp"
            alt="about-us"
            class="lg:object-contain w-full"
          />
        </div>
        <div
          class="lg:w-1/2 flex flex-col gap-12 xl:gap-14 self-center md:self-start"
        >
          <div class="flex flex-col gap-2 xl:gap-3">
            <!-- <h3 class="text-xl md:text-2xl lg:text-3xl">
              {{ $t("home.about-header") }}
            </h3> -->
            <h3 class="text-xl md:text-2xl lg:text-3xl">
              {{ $t("home.about-subheader") }}
            </h3>
            <p class="text-sm md:text-lg">{{ $t("home.about-description") }}</p>
          </div>

          <div class="grid grid-cols-1 gap-4 lg:gap-5">
            <div class="flex items-center gap-3 md:gap-4 lg:gap-2">
              <img
                src="/assets/img/Home/check-mark.png"
                alt="check-mark"
                class="w-6 h-6"
              />
              <h6 class="font-semibold text-base md:text-lg">
                <span class="red-uppercase">I</span>ntegrity
              </h6>
            </div>
            <h6 class="flex items-center gap-3 md:gap-4 lg:gap-2">
              <img
                src="/assets/img/Home/check-mark.png"
                alt="check-mark"
                class="w-6 h-6"
              />
              <div class="font-semibold text-lg">
                <span class="red-uppercase">K</span>nowledgeable
              </div>
            </h6>
            <h6 class="flex items-center gap-3 md:gap-4 lg:gap-2">
              <img
                src="/assets/img/Home/check-mark.png"
                alt="check-mark"
                class="w-6 h-6"
              />
              <div class="font-semibold text-lg">
                Professi<span class="red-uppercase">O</span>nal
              </div>
            </h6>
            <h6 class="flex items-center gap-3 md:gap-4 lg:gap-2">
              <img
                src="/assets/img/Home/check-mark.png"
                alt="check-mark"
                class="w-6 h-6"
              />
              <div class="font-semibold text-lg">
                Ho<span class="red-uppercase">N</span>esty
              </div>
            </h6>
            <h6 class="flex items-center gap-3 md:gap-4 lg:gap-2">
              <img
                src="/assets/img/Home/check-mark.png"
                alt="check-mark"
                class="w-6 h-6"
              />
              <div class="font-semibold text-lg">
                F<span class="red-uppercase">O</span>cus
              </div>
            </h6>
            <h6 class="flex items-center gap-3 md:gap-4 lg:gap-2">
              <img
                src="/assets/img/Home/check-mark.png"
                alt="check-mark"
                class="w-6 h-6"
              />
              <div class="font-semibold text-lg">
                P<span class="red-uppercase">A</span>rtnership
              </div>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
img {
  max-height: 540px;
}
p {
  color: #17171f;
  font-weight: 400;
  letter-spacing: -0.25px;
}

ul li {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.25px;
}
.red-uppercase {
  color: red;
  text-transform: uppercase;
}

h6 {
  font-weight: 500x;
}
</style>

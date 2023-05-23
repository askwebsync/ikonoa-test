<template>
  <section class="background-product">
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
      <div
        class="flex flex-col md:flex-row gap-10 md:gap-9 lg:gap-12 items-center px-5 md:px-0"
      >
        <div class="flex md:self-start md:w-1/2">
          <div class="aspect-w-16 aspect-h-9">
            <img
              src="/assets/img/Home/about.webp"
              alt="about-us"
              class="object-cover"
              width="505"
              height="575"
            />
          </div>
        </div>
        <div
          class="md:w-1/2 flex flex-col gap-12 md:gap-9 self-center md:self-start md:ml-6"
        >
          <div class="flex flex-col gap-2">
            <h3 class="text-xl md:text-2xl lg:text-3xl">
              {{ $t("home.about-header") }}
            </h3>
            <h2 class="text-xl md:text-2xl lg:text-3xl">
              {{ $t("home.about-subheader") }}
            </h2>
            <p class="text-sm md:text-lg">{{ $t("home.about-description") }}</p>
          </div>

          <div class="flex flex-col gap-12 md:gap-10">
            <ul class="list-none space-y-5">
              <li class="flex items-center gap-4">
                <img
                  src="/assets/img/Home/check-mark.png"
                  alt="check-mark"
                  class="w-6 h-6"
                  width="24"
                  height="24"
                />
                <div class="font-semibold text-lg">
                  <span class="red-uppercase">I</span>ntegrity
                </div>
              </li>
              <li class="flex items-center gap-4">
                <img
                  src="/assets/img/Home/check-mark.png"
                  alt="check-mark"
                  class="w-6 h-6"
                  width="24"
                  height="24"
                />
                <div class="font-semibold text-lg">
                  <span class="red-uppercase">K</span>nowledgeable
                </div>
              </li>
              <li class="flex items-center gap-4">
                <img
                  src="/assets/img/Home/check-mark.png"
                  alt="check-mark"
                  class="w-6 h-6"
                  width="24"
                  height="24"
                />
                <div class="font-semibold text-lg">
                  Professi<span class="red-uppercase">O</span>nal
                </div>
              </li>
              <li class="flex items-center gap-4">
                <img
                  src="/assets/img/Home/check-mark.png"
                  alt="check-mark"
                  class="w-6 h-6"
                  width="24"
                  height="24"
                />
                <div class="font-semibold text-lg">
                  Ho<span class="red-uppercase">N</span>esty
                </div>
              </li>
              <li class="flex items-center gap-4">
                <img
                  src="/assets/img/Home/check-mark.png"
                  alt="check-mark"
                  class="w-6 h-6"
                  width="24"
                  height="24"
                />
                <div class="font-semibold text-lg">
                  F<span class="red-uppercase">O</span>cus
                </div>
              </li>
              <li class="flex items-center gap-4">
                <img
                  src="/assets/img/Home/check-mark.png"
                  alt="check-mark"
                  class="w-6 h-6"
                  width="24"
                  height="24"
                />
                <div class="font-semibold text-lg">
                  P<span class="red-uppercase">A</span>rtnership
                </div>
              </li>
            </ul>
            <div class="text-left">
              <button
                class="px-7 py-3 border-button-custom font-medium button-shadow"
              >
                <router-link
                  :to="{ name: 'about' }"
                  aria-label="Learn More about our company"
                >
                  {{ $t("home.button") }}
                </router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
p {
  color: #17171f;
  font-weight: 400;
  letter-spacing: 0.5px;
}

li {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
}
.red-uppercase {
  color: red;
  text-transform: uppercase;
}
</style>

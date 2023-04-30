<template>
  <footer class="background-footer">
    <div class="container mx-auto px-4 py-14 md:px-8 lg:px-24">
      <div
        class="gap-y-16 flex flex-col justify-between text-center lg:text-left md:gap-x-6 lg:flex-row lg:gap-y-0"
      >
        <div class="lg:w-1/3">
          <div class="flex flex-col items-center lg:items-start gap-2">
            <img
              src="/assets/img/Icon/logo.png"
              class="w-28 h-12 object-contain"
              alt="logo"
            />

            <p class="text-lg font-medium max-w-xs text-white">
              {{ $t("footer.card1-header") }}
            </p>
          </div>
        </div>
        <div
          class="grid grid-cols-2 text-sm mt-3 grid-flow-row-dense md:mt-0 gap-x-2 gap-y-14 md:gap-x-3 lg:w-2/3 lg:ml-3"
        >
          <div class="space-y-4 col-span-1">
            <h3 class="text-lg">{{ $t("footer.card2-header") }}</h3>
            <ul class="space-y-2 text-white">
              <li class="mb-2">
                <router-link
                  :to="{ name: 'about' }"
                  class="text-lg font-medium"
                >
                  {{ $t("footer.card2-option1") }}</router-link
                >
              </li>
              <li class="mb-2">
                <a class="text-lg font-medium" href="#">
                  {{ $t("footer.card2-option2") }}</a
                >
              </li>
              <li class="mb-2">
                <a class="text-lg font-medium" href="#">
                  {{ $t("footer.card2-option3") }}</a
                >
              </li>
              <li class="mb-2">
                <a class="text-lg font-medium" href="#">
                  {{ $t("footer.card2-option4") }}</a
                >
              </li>
              <li class="">
                <router-link
                  :to="{ name: 'contact' }"
                  class="text-lg font-medium"
                >
                  {{ $t("footer.card2-option5") }}</router-link
                >
              </li>
            </ul>
          </div>
          <div class="space-y-4 col-span-1">
            <h3 class="text-lg">{{ $t("footer.card3-header") }}</h3>
            <ul class="space-y-2 text-white">
              <li class="mb-2">
                <router-link
                  :to="{ name: 'risk-consulting' }"
                  class="text-lg font-medium"
                >
                  {{ $t("footer.card3-option1") }}</router-link
                >
              </li>
              <li class="mb-2">
                <router-link
                  :to="{ name: 'risk-management' }"
                  class="text-lg font-medium"
                >
                  {{ $t("footer.card3-option2") }}</router-link
                >
              </li>
              <li class="mb-2">
                <router-link
                  :to="{ name: 'insurance-policy' }"
                  class="text-lg font-medium"
                >
                  {{ $t("footer.card3-option3") }}</router-link
                >
              </li>
              <li class="mb-2">
                <router-link
                  :to="{ name: 'academy' }"
                  class="text-lg font-medium"
                >
                  {{ $t("footer.card3-option4") }}</router-link
                >
              </li>
            </ul>
          </div>
          <div class="space-y-4 col-span-3">
            <h3 class="text-lg">{{ $t("footer.card4-header") }}</h3>
            <ul class="space-y-3 text-white">
              <li class="mb-2">
                <a class="text-lg font-medium" href="#">(+62) 811-963754</a>
              </li>
              <li class="mb-2">
                <a class="text-lg font-medium" href="#">hallo@ikonoa.com</a>
              </li>
              <li class="mb-2">
                <p class="text-lg font-medium">
                  {{ $t("footer.card4-option1") }}
                  <span
                    >Graha Mampang 3rd Floor, Suite 305, Jl. Mampang Prapatan
                    Raya Kav. 100, Jakarta 12760</span
                  >
                </p>
              </li>
              <li class="mb-2">
                <p class="text-lg font-medium">
                  {{ $t("footer.card4-option2") }}
                  <span
                    >Graha Sentana, Jl. Warung Buncit Raya, Jakarta 12740
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="py-8 text-sm text-center text-white border-t">
      © 1968 PT.Ikonoa Solusindo Asia. All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: "Foot",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
li p {
  color: #fdfdff;
}
h3 {
  color: #ffff00;
}
</style>

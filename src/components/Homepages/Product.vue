<template>
  <div class="background-product">
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
      <div class="flex flex-col gap-10">
        <div class="flex flex-col gap-2 text-center">
          <h3 class="text-xl md:text-2xl lg:text-3xl">
            {{ $t("home.product-header") }}
          </h3>
          <h2 class="text-xl md:text-2xl lg:text-3xl">
            {{ $t("home.product-subheader") }}
          </h2>
        </div>
        <div class="flex flex-col gap-5">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div
              class="relative col-span-1 md:col-span-2 bg-gray-1 p-6 h-80 w-full"
            >
              <div class="absolute bottom-0 left-0">
                <div class="flex flex-col gap-4 p-4">
                  <router-link :to="{ name: 'insurance-policy' }">
                    <h6 class="text-lg md:text-2xl hover:text-red-600">
                      {{ $t("home.product-card1-header") }}
                    </h6>
                  </router-link>
                  <p class="text-white text-sm md:text-base lg:text-lg">
                    {{ $t("home.product-card1-text") }}
                  </p>
                </div>
              </div>
            </div>
            <div class="relative bg-gray-2 p-6 h-72 w-full">
              <div class="absolute bottom-0 left-0">
                <div class="flex flex-col gap-4 p-4">
                  <router-link :to="{ name: 'insurance-policy' }">
                    <h6 class="text-lg md:text-2xl hover:text-red-600">
                      {{ $t("home.product-card2-header") }}
                    </h6>
                  </router-link>
                  <p class="text-white text-sm md:text-base lg:text-lg">
                    {{ $t("home.product-card2-text") }}
                  </p>
                </div>
              </div>
            </div>
            <div class="relative bg-gray-3 p-6 h-72 w-full">
              <div class="absolute bottom-0 left-0">
                <div class="flex flex-col gap-4 p-4">
                  <router-link :to="{ name: 'insurance-policy' }">
                    <h6 class="text-lg md:text-2xl hover:text-red-600">
                      {{ $t("home.product-card3-header") }}
                    </h6>
                  </router-link>
                  <p class="text-white text-sm md:text-base lg:text-lg">
                    {{ $t("home.product-card3-text") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-5">
            <button
              class="px-7 py-3 border-button-custom font-medium button-shadow"
            >
              <router-link
                :to="{ name: 'insurance-policy' }"
                aria-label="Learn More about our company insurance product"
              >
                {{ $t("home.button") }}</router-link
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  components: {},
};
</script>

<style scoped>
h6 {
  font-weight: 700;
  color: #fdfdff;
}
p {
  font-weight: 400;
  letter-spacing: 0.5px;
}
.bg-gray-1 {
  background-image: url(/assets/img/Home/property.webp);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
}
.bg-gray-2 {
  background-image: url(/assets/img/Home/engineer.webp);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
}
.bg-gray-3 {
  background-image: url(/assets/img/Home/misce.webp);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
}
</style>

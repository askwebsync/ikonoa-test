<template>
  <section class="background-product">
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
      <div class="flex flex-col gap-10">
        <div class="flex flex-col gap-2 text-center">
          <h3 class="text-xl md:text-2xl lg:text-3xl">product</h3>
          <h2 class="text-xl md:text-2xl lg:text-3xl">
            Get reliable insurance policy for your company
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
                      Property Insurance
                    </h6>
                  </router-link>
                  <p class="text-white text-xs lg:text-lg">
                    Liability insurance is an insurance product that provides
                    protection to the insured against claims resulting from
                    injury and damage to other people or property. Liability
                    insurance policies cover all legal fees and payments that
                    are the responsibility of the insured party if they are
                    found to be legally liable.
                  </p>
                </div>
              </div>
            </div>
            <div class="relative bg-gray-2 p-6 h-72 w-full">
              <div class="absolute bottom-0 left-0">
                <div class="flex flex-col gap-4 p-4">
                  <router-link :to="{ name: 'insurance-policy' }">
                    <h6 class="text-lg md:text-2xl hover:text-red-600">
                      Engineering Insurance
                    </h6>
                  </router-link>
                  <p class="text-white text-xs lg:text-lg">
                    Protect physical assets from hazards and risks that may
                    occur in projects or buildings such as fire, damage due to
                    extreme weather, or damage due to human error.
                  </p>
                </div>
              </div>
            </div>
            <div class="relative bg-gray-3 p-6 h-72 w-full">
              <div class="absolute bottom-0 left-0">
                <div class="flex flex-col gap-4 p-4">
                  <router-link :to="{ name: 'insurance-policy' }">
                    <h6 class="text-lg md:text-2xl hover:text-red-600">
                      Health Insurance
                    </h6>
                  </router-link>
                  <p class="text-white text-xs lg:text-lg">
                    Protect from unexpected and expensive medical expenses, such
                    as hospitalization costs, surgery costs, doctor
                    consultations, medication, and medicines.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-5">
            <button
              class="px-10 py-3 md:px-14 border-button-custom font-medium button-shadow"
            >
              <router-link
                :to="{ name: 'about' }"
                aria-label="Learn More about our company insurance product"
                >Learn More</router-link
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Product",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
h6 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  color: #fdfdff;
  letter-spacing: 0.5px;
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

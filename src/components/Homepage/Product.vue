<template>
  <section class="backgrund-product">
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
      <div class="flex flex-col gap-10">
        <div class="flex flex-col gap-2 text-center">
          <h3 class="text-xl md:text-2xl lg:text-3xl">product</h3>
          <h2 class="text-xl md:text-2xl lg:text-3xl">
            Get reliable insurance policy for your company
          </h2>
        </div>
        <div class="flex flex-col gap-5">
          <div class="grid grid-cols-2 gap-4">
            <div class="relative col-span-2 bg-gray-1 p-6 h-80 w-full">
              <div class="absolute bottom-0 left-0">
                <div class="flex flex-col gap-4 px-4 py-2">
                  <h6 class="text-lg md:text-2xl">Property Insurance</h6>
                  <p class="text-white text-xs md:text-lg">
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
                <div class="flex flex-col gap-4 px-4 py-2">
                  <h6 class="text-lg md:text-2xl">Engineering Insurance</h6>
                  <p class="text-white text-xs md:text-lg">
                    Protect physical assets from hazards and risks that may
                    occur in projects or buildings such as fire, damage due to
                    extreme weather, or damage due to human error.
                  </p>
                </div>
              </div>
            </div>
            <div class="relative bg-gray-3 p-6 h-72 w-full">
              <div class="absolute bottom-0 left-0">
                <div class="flex flex-col gap-4 px-4 py-2">
                  <h6 class="text-lg md:text-2xl">Health Insurance</h6>
                  <p class="text-white text-xs md:text-lg">
                    Health insurance is an insurance product that covers an
                    insured individual's medical and surgical expenses. It
                    reimburses the expenses incurred due to illness or injury or
                    pays the care provider of the insured individual directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-5">
            <button
              class="px-14 py-3 border-button-custom font-medium button-shadow"
            >
              Learn More
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
  background-image: url(/assets/img/homepage/property.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
}
.bg-gray-2 {
  background-image: url(/assets/img/homepage/engineer.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
}
.bg-gray-3 {
  background-image: url(/assets/img/homepage/misce.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
}
</style>

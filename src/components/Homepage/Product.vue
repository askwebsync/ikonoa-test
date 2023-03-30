<template>
  <section class="backgrund-product">
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
      <div class="flex flex-col gap-1 items-center mb-12 text-center">
        <h3 class="text-xl md:text-2xl lg:text-3xl">PRODUCTS</h3>
        <h2 class="text-xl md:text-2xl lg:text-3xl">
          Get reliable insurance policy for your company
        </h2>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="relative col-span-2 bg-gray-1 p-6 h-80 w-full">
          <div class="absolute bottom-0 left-0">
            <div class="flex flex-col gap-4 px-4 py-2">
              <h6 class="text-lg md:text-2xl">Liability Insurance</h6>
              <p class="text-white text-xs md:text-lg">
                Liability insurance is an insurance product that provides
                protection to the insured against claims resulting from injury
                and damage to other people or property. Liability insurance
                policies cover all legal fees and payments that are the
                responsibility of the insured party if they are found to be
                legally liable.
              </p>
            </div>
          </div>
        </div>
        <div class="relative bg-gray-2 p-6 h-72 w-full">
          <div class="absolute bottom-0 left-0">
            <div class="flex flex-col gap-4 px-4 py-2">
              <h6 class="text-lg md:text-2xl">Engineering Insurance</h6>
              <p class="text-white text-xs md:text-lg">
                Protect physical assets from hazards and risks that may occur in
                projects or buildings such as fire, damage due to extreme
                weather, or damage due to human error.
              </p>
            </div>
          </div>
        </div>
        <div class="relative bg-gray-3 p-6 h-72 w-full">
          <div class="absolute bottom-0 left-0">
            <div class="flex flex-col gap-4 px-4 py-2">
              <h6 class="text-lg md:text-2xl">Miscellaneous Insurance</h6>
              <p class="text-white text-xs md:text-lg">
                Type of insurance that provides protection against various
                unexpected risks such as unexpected financial or legal losses.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-12">
        <button class="px-10 py-4 border-button-custom font-medium">
          Learn More
        </button>
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
h2 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  color: #17171f;
  letter-spacing: 0.5px;
}
h3 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  color: #d50000;
  letter-spacing: 1.5px;
}
h6 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  color: #fdfdff;
  letter-spacing: 0.5px;
}
p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.5px;
}

.bg-gray-1 {
  background-image: url(/assets/img/liability.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
}
.bg-gray-2 {
  background-image: url(/assets/img/engineer.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
}
.bg-gray-3 {
  background-image: url(/assets/img/misce.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
}
</style>

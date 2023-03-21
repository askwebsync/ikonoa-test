<template>
  <section class="backgrund-product">
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-12 lg:py-16">
      <div class="flex flex-col gap-1 items-center mb-12 text-center">
        <h3 class="text-xl md:text-2xl lg:text-3xl">Product</h3>
        <h2 class="text-xl md:text-2xl lg:text-3xl">
          Get reliable insurance policy for your company
        </h2>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="relative col-span-2 bg-gray-1 p-6 h-80 w-full">
          <div
            class="flex flex-col gap-4 text-left absolute bottom-0 left-0 p-3"
          >
            <h6 class="text-lg md:text-2xl">Liability Insurance</h6>
            <hr />
            <p class="text-black text-sm md:text-lg tracking-tight">
              Liability insurance is an insurance product that provides
              protection to the insured against claims resulting from injury and
              damage to other people or property. Liability insurance policies
              cover all legal fees and payments that are the responsibility of
              the insured party if they are found to be legally liable.
            </p>
          </div>
        </div>
        <div class="relative bg-gray-2 p-6 h-72 w-full">
          <div
            class="flex flex-col gap-4 text-left absolute bottom-0 left-0 p-3"
          >
            <h6 class="text-lg md:text-2xl">Engineering Insurance</h6>
            <hr />
            <p class="text-black text-sm md:text-lg tracking-tight">
              Protect physical assets from hazards and risks that may occur in
              projects or buildings such as fire, damage due to extreme weather,
              or damage due to human error.
            </p>
          </div>
        </div>
        <div class="relative bg-gray-3 p-6 h-72 w-full">
          <div
            class="flex flex-col gap-4 text-left absolute bottom-0 left-0 p-3"
          >
            <h6 class="text-lg md:text-2xl">Miscellaneous Insurance</h6>
            <hr />
            <p class="text-black text-sm md:text-lg tracking-tight">
              Type of insurance that provides protection against various
              unexpected risks such as unexpected financial or legal losses.
            </p>
          </div>
        </div>
      </div>
      <div class="text-center mt-12">
        <a
          href="#_"
          class="relative inline-flex items-center justify-center px-4 py-2 lg:px-5 lg:py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-red-500 rounded-full shadow-md group"
        >
          <span
            class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span
            class="absolute flex items-center justify-center w-full h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease"
            >Learn More</span
          >
          <span class="relative invisible">Learn More</span>
        </a>
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
}
h3 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  color: #d50000;
}
h6 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  color: #17171f;
}
p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
}
.backgrund-product {
  background-color: #ffe5e5;
}
.bg-gray-1 {
  background-image: url(/assets/img/liability.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-gray-2 {
  background-image: url(/assets/img/engineer.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-gray-3 {
  background-image: url(/assets/img/misce.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
hr {
  width: 100%;
  height: 3px;
  margin-left: auto;
  margin-right: auto;
  background-color: #b7d0e2;
}
</style>

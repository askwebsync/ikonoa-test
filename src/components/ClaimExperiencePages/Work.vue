<template>
  <section>
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-content-center place-items-center gap-10"
      >
        <div class="overflow-hidden rounded-2xl background-product card">
          <div class="relative h-[180px]">
            <img
              src="https://thumbnails.production.thenounproject.com/c4UZhX8RJFowtAoq8OZlUjIFmBg=/fit-in/1000x1000/photos.production.thenounproject.com/photos/D0EE41F3-3CB3-4F1E-B6E5-4CCE5B1DCB17.jpg"
              alt="Hamburger"
              class="object-cover w-full h-full"
            />
            <div
              class="absolute top-0 left-0 flex items-center justify-center w-full h-full"
            >
              <span
                class="text-white text-xl font-bold uppercase bg-black bg-opacity-50 p-2"
                >MARINE HULL</span
              >
            </div>
          </div>
          <div class="p-3">
            <div class="flex flex-col text-center">
              <h2 class="text-lg text-black">2021</h2>
              <h2 class="text-lg text-gray-700">Stranded</h2>
              <h2 class="text-lg font-semibold text-gray-800">
                IDR 783,097,815.00
              </h2>
            </div>
          </div>
        </div>
        <div class="overflow-hidden rounded-2xl background-product card">
          <div class="relative h-[200px]">
            <img
              src="/assets/img/LP_Claim/Experience/inland-transit.jpg"
              alt="inlandtransit"
              class="object-cover w-full h-full"
            />
            <div
              class="absolute top-0 left-0 flex items-center justify-center w-full h-full"
            >
              <span
                class="text-white text-xl font-bold uppercase bg-black bg-opacity-50 p-2"
                >INLAND TRANSIT</span
              >
            </div>
          </div>
          <div class="p-4">
            <div class="flex flex-col text-center">
              <h3 class="text-lg">
                {{ $t("claim-experience.work-card-header") }}
              </h3>
              <h2 class="mt-1 text-lg font-semibold text-gray-800">
                USD 350,000.00
              </h2>
            </div>
          </div>
        </div>
        <div class="overflow-hidden rounded-2xl background-product card">
          <div class="relative h-[200px]">
            <img
              src="/assets/img/LP_Claim/Experience/flooruplift-2020.jpg"
              alt="flooruplift"
              class="object-cover w-full h-full"
            />
            <div
              class="absolute top-0 left-0 flex items-center justify-center w-full h-full"
            >
              <span
                class="text-white text-xl font-bold uppercase bg-black bg-opacity-50 p-2"
                >PROPERTY ALL-RISK</span
              >
            </div>
          </div>
          <div class="p-4">
            <div class="flex flex-col text-center">
              <h3 class="text-lg">
                {{ $t("claim-experience.work-card-header") }}
              </h3>
              <h2 class="mt-1 text-lg font-semibold text-gray-800">
                IDR 5,192,801,630.00
              </h2>
            </div>
          </div>
        </div>
        <div class="overflow-hidden rounded-2xl background-product card">
          <div class="relative h-[200px]">
            <img
              src="/assets/img/LP_Claim/Experience/property-2020.jpg"
              alt="mining"
              class="object-cover w-full h-full"
            />
            <div
              class="absolute top-0 left-0 flex items-center justify-center w-full h-full"
            >
              <span
                class="text-white text-xl font-bold uppercase bg-black bg-opacity-50 p-2"
                >PROPERTY ALL-RISK</span
              >
            </div>
          </div>
          <div class="p-4">
            <div class="flex flex-col text-center">
              <h3 class="text-lg">
                {{ $t("claim-experience.work-card-header") }}
              </h3>
              <h2 class="mt-1 text-lg font-semibold text-gray-800">
                USD 140,000,000.00
              </h2>
            </div>
          </div>
        </div>
        <div class="overflow-hidden rounded-2xl background-product card">
          <div class="relative h-[200px]">
            <img
              src="/assets/img/LP_Claim/Experience/earthquake-2019.jpg"
              alt="earthquake"
              class="object-cover w-full h-full"
            />
            <div
              class="absolute top-0 left-0 flex items-center justify-center w-full h-full"
            >
              <span
                class="text-white text-xl font-bold uppercase bg-black bg-opacity-50 p-2"
                >Earthquake Insurance
              </span>
            </div>
          </div>
          <div class="p-4">
            <div class="flex flex-col text-center">
              <h3 class="text-lg">
                {{ $t("claim-experience.work-card-header") }}
              </h3>
              <h2 class="mt-1 text-lg font-semibold text-gray-800">
                USD 164,046,65
              </h2>
            </div>
          </div>
        </div>
        <div class="overflow-hidden rounded-2xl background-product card">
          <div class="relative h-[200px]">
            <img
              src="/assets/img/LP_Claim/Experience/flooruplift-2018.jpg"
              alt="flooruplift"
              class="object-cover w-full h-full"
            />
            <div
              class="absolute top-0 left-0 flex items-center justify-center w-full h-full"
            >
              <span
                class="text-white text-xl font-bold uppercase bg-black bg-opacity-50 p-2"
                >PROPERTY ALL-RISK</span
              >
            </div>
          </div>
          <div class="p-4">
            <div class="flex flex-col text-center">
              <h3 class="text-lg">
                {{ $t("claim-experience.work-card-header") }}
              </h3>
              <h2 class="mt-1 text-lg font-semibold text-gray-800">
                IDR 4,872,500,000.00
              </h2>
            </div>
          </div>
        </div>
        <div class="overflow-hidden rounded-2xl background-product card">
          <div class="relative h-[200px]">
            <img
              src="/assets/img/LP_Claim/Experience/indemnity-2017.jpg"
              alt="protection indemnity"
              class="object-cover w-full h-full"
            />
            <div
              class="absolute top-0 left-0 flex items-center justify-center w-full h-full"
            >
              <span
                class="text-white text-xl font-bold uppercase bg-black bg-opacity-50 p-2"
                >PROTECTION INDEMNITY</span
              >
            </div>
          </div>
          <div class="p-4">
            <div class="flex flex-col text-center">
              <h3 class="text-lg">
                {{ $t("claim-experience.work-card-header") }}
              </h3>
              <h2 class="mt-1 text-lg font-semibold text-gray-800">
                IDR 17,250,000,000.00
              </h2>
            </div>
          </div>
        </div>
        <div class="overflow-hidden rounded-2xl background-product card">
          <div class="relative h-[200px]">
            <img
              src="/assets/img/LP_Claim/Experience/machinery.jpg"
              alt="machinery insurance"
              class="object-cover w-full h-full"
            />
            <div
              class="absolute top-0 left-0 flex items-center justify-center w-full h-full"
            >
              <span
                class="text-white text-xl font-bold uppercase bg-black bg-opacity-50 p-2"
                >MACHINERY INSURANCE</span
              >
            </div>
          </div>
          <div class="p-4">
            <div class="flex flex-col text-center">
              <h3 class="text-lg">
                {{ $t("claim-experience.work-card-header") }}
              </h3>
              <h2 class="mt-1 text-lg font-semibold text-gray-800">
                USD 2,400,000.00
              </h2>
            </div>
          </div>
        </div>
        <div class="overflow-hidden rounded-2xl background-product card">
          <div class="relative h-[200px]">
            <img
              src="/assets/img/LP_Claim/Experience/property-2014.jpeg"
              alt="property all-risk"
              class="object-cover w-full h-full"
            />
            <div
              class="absolute top-0 left-0 flex items-center justify-center w-full h-full"
            >
              <span
                class="text-white text-xl font-bold uppercase bg-black bg-opacity-50 p-2"
                >PROPERTY ALL-RISK</span
              >
            </div>
          </div>
          <div class="p-4">
            <div class="flex flex-col text-center">
              <h3 class="text-lg">
                {{ $t("claim-experience.work-card-header") }}
              </h3>
              <h2 class="mt-1 text-lg font-semibold text-gray-800">
                IDR 4,302,853,704.00
              </h2>
            </div>
          </div>
        </div>
        <div class="overflow-hidden rounded-2xl background-product card">
          <div class="relative h-[200px]">
            <img
              src="/assets/img/LP_Claim/Experience/property-casava-2014.jpeg"
              alt="property all-risk"
              class="object-cover w-full h-full"
            />
            <div
              class="absolute top-0 left-0 flex items-center justify-center w-full h-full"
            >
              <span
                class="text-white text-xl font-bold uppercase bg-black bg-opacity-50 p-2"
                >PROPERTY ALL-RISK</span
              >
            </div>
          </div>
          <div class="p-4">
            <div class="flex flex-col text-center">
              <h3 class="text-lg">
                {{ $t("claim-experience.work-card-header") }}
              </h3>
              <h2 class="mt-1 text-lg font-semibold text-gray-800">
                IDR 9,145,909,004.00
              </h2>
            </div>
          </div>
        </div>
        <div class="overflow-hidden rounded-2xl background-product card">
          <div class="relative h-[200px]">
            <img
              src="/assets/img/LP_Claim/Experience/fire.jpg"
              alt="fire insurance"
              class="object-cover w-full h-full"
            />
            <div
              class="absolute top-0 left-0 flex items-center justify-center w-full h-full"
            >
              <span
                class="text-white text-xl font-bold uppercase bg-black bg-opacity-50 p-2"
                >FIRE INSURANCE</span
              >
            </div>
          </div>
          <div class="p-4">
            <div class="flex flex-col text-center">
              <h3 class="text-lg">
                {{ $t("claim-experience.work-card-header") }}
              </h3>
              <h2 class="mt-1 text-lg font-semibold text-gray-800">
                USD 941,835.63
              </h2>
            </div>
          </div>
        </div>
        <div class="overflow-hidden rounded-2xl background-product card">
          <div class="relative h-[200px]">
            <img
              src="/assets/img/LP_Claim/Experience/property2010.jpg"
              alt="property all-risk"
              class="object-cover w-full h-full"
            />
            <div
              class="absolute top-0 left-0 flex items-center justify-center w-full h-full"
            >
              <span
                class="text-white text-xl font-bold uppercase bg-black bg-opacity-50 p-2"
                >PROPERTY ALL-RISK</span
              >
            </div>
          </div>
          <div class="p-4">
            <div class="flex flex-col text-center">
              <h3 class="text-lg">
                {{ $t("claim-experience.work-card-header") }}
              </h3>
              <h2 class="mt-1 text-lg font-semibold text-gray-800">
                USD 8,063,353.40
              </h2>
            </div>
          </div>
        </div>
        <div class="overflow-hidden rounded-2xl background-product card">
          <div class="relative h-[200px]">
            <img
              src="/assets/img/LP_Claim/Experience/erection2010.jpg"
              alt="erection all-risk"
              class="object-cover w-full h-full"
            />
            <div
              class="absolute top-0 left-0 flex items-center justify-center w-full h-full"
            >
              <span
                class="text-white text-xl font-bold uppercase bg-black bg-opacity-50 p-2"
                >ERECTION ALL-RISK</span
              >
            </div>
          </div>
          <div class="p-4">
            <div class="flex flex-col text-center">
              <h3 class="text-lg">
                {{ $t("claim-experience.work-card-header") }}
              </h3>
              <h2 class="mt-1 text-lg font-semibold text-gray-800">
                IDR 2,882,294,055.00
              </h2>
            </div>
          </div>
        </div>
        <div class="overflow-hidden rounded-2xl background-product card">
          <div class="relative h-[200px]">
            <img
              src="/assets/img/LP_Claim/Experience/fire-2010.jpg"
              alt="fire insurance"
              class="object-cover w-full h-full"
            />
            <div
              class="absolute top-0 left-0 flex items-center justify-center w-full h-full"
            >
              <span
                class="text-white text-xl font-bold uppercase bg-black bg-opacity-50 p-2"
                >FIRE INSURANCE</span
              >
            </div>
          </div>
          <div class="p-4">
            <div class="flex flex-col text-center">
              <h3 class="text-lg">
                {{ $t("claim-experience.work-card-header") }}
              </h3>
              <h2 class="mt-1 text-lg font-semibold text-gray-800">
                IDR 2,048,241,305.00
              </h2>
            </div>
          </div>
        </div>
        <div class="overflow-hidden rounded-2xl background-product card">
          <div class="relative h-[200px]">
            <img
              src="/assets/img/LP_Claim/Experience/property-2009.jfif"
              alt="property all-risk"
              class="object-cover w-full h-full"
            />
            <div
              class="absolute top-0 left-0 flex items-center justify-center w-full h-full"
            >
              <span
                class="text-white text-xl font-bold uppercase bg-black bg-opacity-50 p-2"
                >PROPERTY ALL-RISK</span
              >
            </div>
          </div>
          <div class="p-4">
            <div class="flex flex-col text-center">
              <h3 class="text-lg">
                {{ $t("claim-experience.work-card-header") }}
              </h3>
              <h2 class="mt-1 text-lg font-semibold text-gray-800">
                USD 985,812.45
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Work",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.card {
  max-height: 300px;
  width: 300px;
  border-radius: 8px;
}
</style>

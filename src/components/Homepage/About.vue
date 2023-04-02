<template>
  <section class="backgrund-product">
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
      <div class="flex flex-col md:flex-row gap-12 items-center">
        <div class="w-1/2">
          <img
            src="/assets/img/gambar2.png"
            style="max-height: 600px"
            alt="gambar"
            class="h-auto object-contain"
          />
        </div>
        <div
          class="w-1/2 flex flex-col gap-9 self-center md:self-start md:ml-6"
        >
          <div class="flex flex-col gap-2">
            <h3 class="text-xl md:text-2xl lg:text-3xl">ABOUT US</h3>
            <h2 class="text-xl md:text-2xl lg:text-3xl">What is IKONOA</h2>
            <p class="text-sm md:text-lg">
              We provide services & solutions that assist you in managing and
              claiming your insurance policy. Our services cover various types
              of insurance policies, such as health insurance, vehicle
              insurance, property insurance, engineering insurance, marine
              insurance
            </p>
          </div>

          <div class="my-3">
            <ul class="list-none space-y-4">
              <li class="flex items-center">
                <img src="/assets/img/check-mark.png" class="mr-2 md:mr-3" />
                <p class="flex-1 font-semibold text-lg">Integrity</p>
              </li>
              <li class="flex items-center">
                <img src="/assets/img/check-mark.png" class="mr-2 md:mr-3" />
                <p class="flex-1 font-semibold text-lg">Knowledgeable</p>
              </li>
              <li class="flex items-center">
                <img src="/assets/img/check-mark.png" class="mr-2 md:mr-3" />
                <p class="flex-1 font-semibold text-lg">Professional</p>
              </li>
              <li class="flex items-center">
                <img src="/assets/img/check-mark.png" class="mr-2 md:mr-3" />
                <p class="flex-1 font-semibold text-lg">Honesty</p>
              </li>
              <li class="flex items-center">
                <img src="/assets/img/check-mark.png" class="mr-2 md:mr-3" />
                <p class="flex-1 font-semibold text-lg">Focus</p>
              </li>
              <li class="flex items-center">
                <img src="/assets/img/check-mark.png" class="mr-2 md:mr-3" />
                <p class="flex-1 font-semibold text-lg">Partnership</p>
              </li>
            </ul>
          </div>
          <div class="text-left">
            <button class="px-10 py-4 border-button-custom font-medium">
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
  name: "About",
  components: {},
  data() {
    return {};
  },
};
</script>

<style></style>

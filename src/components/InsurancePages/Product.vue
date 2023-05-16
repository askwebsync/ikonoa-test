<template>
  <section>
    <div class="container mx-auto px-4 py-10 md:px-8 lg:px-24">
      <div class="flex flex-col items-center justify-center gap-6">
        <div class="flex justify-center mt-4">
          <button
            v-if="currentIndex > 0"
            class="mx-2 text-red-600 hover:text-red-700"
            @click="prevButton"
          >
            <i class="fas fa-arrow-left"></i>
            <!-- Replace with the appropriate icon class -->
          </button>
          <div class="relative">
            <div class="button-group flex flex-row justify-center">
              <button
                v-for="button in visibleButtons"
                :key="button.id"
                class="flex justify-center items-center w-full md:w-auto h-full rounded px-6 py-2 font-bold hover:text-red-700 transition duration-300 ease-in-out text-gray-400"
                :class="{
                  'bg-red-100 border border-red-600 text-red-600':
                    activeButton === button.id,
                }"
                @click="setActiveButton(button.id)"
              >
                {{ button.label }}
              </button>
            </div>
          </div>
          <button
            v-if="currentIndex + numVisibleButtons < buttons.length"
            class="mx-2 text-red-600 hover:text-red-700"
            @click="nextButton"
          >
            <i class="fas fa-arrow-right"></i>
            <!-- Replace with the appropriate icon class -->
          </button>
        </div>

        <div
          v-if="activeButton === 1"
          class="bg-white shadow-lg overflow-hidden mt-8"
        >
          <div class="relative">
            <img
              src="/assets/img/LP_Insurance/liability.png"
              alt="liability"
              class="object-cover w-full h-48 md:h-full"
            />
          </div>
          <div class="p-6 md:p-7">
            <div class="flex flex-col gap-6 md:gap-8">
              <h3 class="text-2xl font-bold">
                {{ $t("insurance.product-card1-header") }}
              </h3>
              <h2 class="text-lg md:text-xl leading-normal">
                {{ $t("insurance.product-card1-subheader") }}
              </h2>
              <ul
                class="space-y-3 md:space-y-2 list-disc list-inside text-md lg:text-lg leading-relaxed md:leading-normal my-6"
              >
                <li>{{ $t("insurance.product-card1-text1") }}</li>
                <li>{{ $t("insurance.product-card1-text2") }}</li>
                <li>{{ $t("insurance.product-card1-text3") }}</li>
                <li>{{ $t("insurance.product-card1-text4") }}</li>
                <li>{{ $t("insurance.product-card1-text5") }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          v-if="activeButton === 2"
          class="bg-white shadow-lg overflow-hidden mt-8"
        >
          <div class="relative">
            <img
              src="/assets/img/LP_Insurance/engineer.png"
              alt="engineering"
              class="object-cover w-full h-48 md:h-full"
            />
          </div>
          <div class="p-6 md:p-7">
            <div class="flex flex-col gap-6 md:gap-8">
              <h3 class="text-2xl font-bold">
                {{ $t("insurance.product-card2-header") }}
              </h3>
              <h2 class="text-lg md:text-xl leading-normal">
                {{ $t("insurance.product-card2-subheader") }}
              </h2>
              <ul
                class="space-y-3 md:space-y-2 list-disc list-inside text-md lg:text-lg leading-relaxed md:leading-normal my-6"
              >
                <li>{{ $t("insurance.product-card2-text1") }}</li>
                <li>{{ $t("insurance.product-card2-text2") }}</li>
                <li>{{ $t("insurance.product-card2-text3") }}</li>
                <li>{{ $t("insurance.product-card2-text4") }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          v-if="activeButton === 3"
          class="bg-white shadow-lg overflow-hidden mt-8"
        >
          <div class="relative">
            <img
              src="/assets/img/LP_Insurance/health.png"
              alt="health"
              class="object-cover w-full h-48 md:h-full"
            />
          </div>
          <div class="p-6 md:p-7">
            <div class="flex flex-col gap-6 md:gap-8">
              <h3 class="text-2xl font-bold">
                {{ $t("insurance.product-card3-header") }}
              </h3>
              <h2 class="text-lg md:text-xl leading-normal">
                {{ $t("insurance.product-card3-subheader") }}
              </h2>
              <ul
                class="space-y-3 md:space-y-2 list-disc list-inside text-md lg:text-lg leading-relaxed md:leading-normal my-6"
              >
                <li>{{ $t("insurance.product-card3-text1") }}</li>
                <li>{{ $t("insurance.product-card3-text2") }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div
          v-if="activeButton === 4"
          class="bg-white shadow-lg overflow-hidden mt-8"
        >
          <div class="relative">
            <img
              src="/assets/img/LP_Insurance/marine.png"
              alt="marine"
              class="object-cover w-full h-48 md:h-full"
            />
          </div>
          <div class="p-6 md:p-7">
            <div class="flex flex-col gap-6 md:gap-8">
              <h3 class="text-2xl font-bold">
                {{ $t("insurance.product-card4-header") }}
              </h3>
              <h2 class="text-lg md:text-xl leading-normal">
                {{ $t("insurance.product-card4-subheader") }}
              </h2>
              <ul
                class="space-y-3 md:space-y-2 list-disc list-inside text-md lg:text-lg leading-relaxed md:leading-normal my-6"
              >
                <li>{{ $t("insurance.product-card4-text1") }}</li>
                <li>{{ $t("insurance.product-card4-text2") }}</li>
                <li>{{ $t("insurance.product-card4-text3") }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          v-if="activeButton === 5"
          class="bg-white shadow-lg overflow-hidden mt-8"
        >
          <div class="relative">
            <img
              src="/assets/img/LP_Insurance/proper.png"
              alt="property"
              class="object-cover w-full h-48 md:h-full"
            />
          </div>
          <div class="p-6 md:p-7">
            <div class="flex flex-col gap-6 md:gap-8">
              <h3 class="text-2xl font-bold">
                {{ $t("insurance.product-card5-header") }}
              </h3>
              <h2 class="text-lg md:text-xl leading-relaxed md:leading-normal">
                {{ $t("insurance.product-card5-subheader") }}
              </h2>
            </div>
          </div>
        </div>
        <div
          v-if="activeButton === 6"
          class="bg-white shadow-lg overflow-hidden mt-8"
        >
          <div class="relative">
            <img
              src="/assets/img/LP_Insurance/automobi.png"
              alt="auto-mobile"
              class="object-cover w-full h-48 md:h-full"
            />
          </div>
          <div class="p-6 md:p-7">
            <div class="flex flex-col gap-6 md:gap-8">
              <h3 class="text-2xl font-bold">
                {{ $t("insurance.product-card6-header") }}
              </h3>
              <h2 class="text-lg md:text-xl leading-normal">
                {{ $t("insurance.product-card6-subheader") }}
              </h2>
              <ul
                class="space-y-3 md:space-y-2 list-disc list-inside text-md lg:text-lg leading-relaxed md:leading-normal my-6"
              >
                <li>{{ $t("insurance.product-card6-text1") }}</li>
                <li>{{ $t("insurance.product-card6-text2") }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        { id: 1, label: this.$t("insurance.button1-header") },
        { id: 2, label: this.$t("insurance.button2-header") },
        { id: 3, label: this.$t("insurance.button3-header") },
        { id: 4, label: this.$t("insurance.button4-header") },
        { id: 5, label: this.$t("insurance.button5-header") },
        { id: 6, label: this.$t("insurance.button6-header") },
      ],
      currentIndex: 0,
      activeButton: 1,
      screenWidth: window.innerWidth,
    };
  },
  computed: {
    visibleButtons() {
      return this.buttons.slice(
        this.currentIndex,
        this.currentIndex + this.numVisibleButtons
      );
    },
    numVisibleButtons() {
      if (this.screenWidth >= 1024) {
        return 4; // Show 3 buttons on laptop or larger screens
      } else if (this.screenWidth >= 768) {
        return 3; // Show 2 buttons on tablets
      } else {
        return 2; // Show 1 button on mobile
      }
    },
    showDiv() {
      return this.activeButton === 1;
    },
  },
  methods: {
    setActiveButton(buttonId) {
      this.activeButton = buttonId;
    },
    prevButton() {
      this.currentIndex = Math.max(this.currentIndex - 1, 0);
    },
    nextButton() {
      this.currentIndex = Math.min(
        this.currentIndex + 1,
        this.buttons.length - this.numVisibleButtons
      );
    },
    handleResize() {
      this.screenWidth = window.innerWidth;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

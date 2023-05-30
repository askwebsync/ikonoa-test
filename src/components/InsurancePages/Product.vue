<template>
  <div class="container mx-auto px-4 py-10 md:px-8 lg:px-24">
    <div class="flex flex-col items-center justify-center gap-6">
      <div class="button-group items-center justify-center">
        <div class="div1">
          <button
            :class="[
              'flex justify-center items-center w-full md:w-auto h-full button-class',
              { active: activeButton === 1 },
            ]"
            @click="setActiveButton(1)"
          >
            {{ $t("insurance.button1-header") }}
          </button>
        </div>
        <div class="div2">
          <button
            :class="[
              'flex justify-center items-center w-full md:w-auto h-full button-class',
              { active: activeButton === 2 },
            ]"
            @click="setActiveButton(2)"
          >
            {{ $t("insurance.button2-header") }}
          </button>
        </div>
        <div class="div3">
          <button
            :class="[
              'flex justify-center items-center w-full md:w-auto h-full button-class',
              { active: activeButton === 3 },
            ]"
            @click="setActiveButton(3)"
          >
            {{ $t("insurance.button3-header") }}
          </button>
        </div>
        <div class="div4">
          <button
            :class="[
              'flex justify-center items-center w-full md:w-auto h-full button-class',
              { active: activeButton === 4 },
            ]"
            @click="setActiveButton(4)"
          >
            {{ $t("insurance.button4-header") }}
          </button>
        </div>
        <div class="div5">
          <button
            :class="[
              'flex justify-center items-center w-full md:w-auto h-full button-class',
              { active: activeButton === 5 },
            ]"
            @click="setActiveButton(5)"
          >
            {{ $t("insurance.button5-header") }}
          </button>
        </div>
        <div class="div6">
          <button
            :class="[
              'flex justify-center items-center w-full md:w-auto h-full button-class',
              { active: activeButton === 6 },
            ]"
            @click="setActiveButton(6)"
          >
            {{ $t("insurance.button6-header") }}
          </button>
        </div>
      </div>

      <div
        v-if="activeButton === 1"
        class="bg-white shadow-lg overflow-hidden mt-8"
      >
        <div class="relative">
          <img
            src="/assets/img/LP_Insurance/liability.webp"
            alt="liability"
            class="object-cover w-full h-48 md:h-full"
          />
        </div>
        <div class="px-5 py-6">
          <div class="flex flex-col gap-8">
            <h2 class="text-lg md:text-xl leading-normal">
              {{ $t("insurance.product-card1-subheader") }}
            </h2>
            <ul
              class="space-y-3 list-disc list-inside text-md lg:text-lg leading-relaxed md:leading-normal my-6"
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
        <div class="px-5 py-6">
          <div class="flex flex-col gap-8">
            <h2 class="text-lg md:text-xl leading-normal">
              {{ $t("insurance.product-card2-subheader") }}
            </h2>
            <ul
              class="space-y-3 list-disc list-inside text-md lg:text-lg leading-relaxed md:leading-normal my-6"
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
        <div class="px-5 py-6">
          <div class="flex flex-col gap-8">
            <h2 class="text-lg md:text-xl leading-normal">
              {{ $t("insurance.product-card3-subheader") }}
            </h2>
            <ul
              class="space-y-3 list-disc list-inside text-md lg:text-lg leading-relaxed md:leading-normal my-6"
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
        <div class="px-5 py-6">
          <div class="flex flex-col gap-8">
            <h2 class="text-lg md:text-xl leading-normal">
              {{ $t("insurance.product-card4-subheader") }}
            </h2>
            <ul
              class="space-y-3 list-disc list-inside text-md lg:text-lg leading-relaxed md:leading-normal my-6"
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
        <div class="px-5 py-6">
          <div class="flex flex-col gap-8">
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
        <div class="px-5 py-6">
          <div class="flex flex-col gap-8">
            <h2 class="text-lg md:text-xl leading-normal">
              {{ $t("insurance.product-card6-subheader") }}
            </h2>
            <ul
              class="space-y-3 list-disc list-inside text-md lg:text-lg leading-relaxed md:leading-normal my-6"
            >
              <li>{{ $t("insurance.product-card6-text1") }}</li>
              <li>{{ $t("insurance.product-card6-text2") }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
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
    };
  },
  methods: {
    setActiveButton(buttonId) {
      this.activeButton = buttonId;
    },
  },
};
</script>

<style scoped>
h2 {
  font-weight: 700;
  letter-spacing: -0.5px;
  color: #3b3b3b;
}
li {
  font-weight: 400;
  letter-spacing: -0.25px;
  color: black;
  line-height: 1.55rem;
}
.button-group {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
.button-class.active {
  /* Add styles for the active button */
  background-color: #d50000;
  color: white;
}

.button-class {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 6px 24px;
  gap: 10px;
  color: #d50000;
  background: #ffe5e5;
  border: 1px solid #d50000;
  box-shadow: 0px 2px 4px rgba(50, 50, 71, 0.08),
    0px 2px 8px rgba(50, 50, 71, 0.06);
  border-radius: 50px;
  min-width: 150px;
  height: 50px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.div1 {
  grid-area: 1 / 1 / 2 / 2;
}
.div2 {
  grid-area: 1 / 2 / 2 / 3;
}
.div3 {
  grid-area: 1 / 3 / 2 / 4;
}
.div4 {
  grid-area: 1 / 4 / 2 / 5;
}
.div5 {
  grid-area: 2 / 2 / 3 / 3;
}
.div6 {
  grid-area: 2 / 3 / 3 / 4;
}

@media (max-width: 767px) {
  /* Mobile styles */
  .button-group {
    grid-template-columns: repeat(
      2,
      minmax(0, 1fr)
    ); /* Set to 1 column for mobile */

    grid-row-gap: 15px; /* Adjust gap for mobile */
  }

  .div1,
  .div2,
  .div3,
  .div4,
  .div5,
  .div6 {
    grid-area: auto; /* Remove grid positioning for div5 in mobile */
  }
}
</style>

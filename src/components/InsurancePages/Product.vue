<template>
  <section>
    <div class="container mx-auto px-4 py-10 md:px-8 lg:px-24">
      <div class="flex flex-col items-center justify-center gap-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            class="flex justify-center items-center w-full h-full rounded px-6 py-2 font-bold hover:text-red-700 transition duration-300 ease-in-out text-gray-400"
            :class="{
              'bg-red-100 border border-red-600 text-red-600':
                activeButton === 1,
            }"
            @click="setActiveButton(1)"
          >
            {{ $t("insurance.button1-header") }}
          </button>
          <button
            class="flex justify-center items-center w-full h-full rounded px-6 py-2 font-bold hover:text-red-700 transition duration-300 ease-in-out text-gray-400"
            :class="{
              'bg-red-100 border border-red-600 text-red-600':
                activeButton === 2,
            }"
            @click="setActiveButton(2)"
          >
            {{ $t("insurance.button2-header") }}
          </button>
          <button
            class="flex justify-center items-center w-full h-full rounded px-6 py-2 font-bold hover:text-red-700 transition duration-300 ease-in-out text-gray-400"
            :class="{
              'bg-red-100 border border-red-600 text-red-600':
                activeButton === 3,
            }"
            @click="setActiveButton(3)"
          >
            {{ $t("insurance.button3-header") }}
          </button>
          <button
            class="flex justify-center items-center w-full h-full rounded px-6 py-2 font-bold hover:text-red-700 transition duration-300 ease-in-out text-gray-400"
            :class="{
              'bg-red-100 border border-red-600 text-red-600':
                activeButton === 4,
            }"
            @click="setActiveButton(4)"
          >
            {{ $t("insurance.button4-header") }}
          </button>
          <button
            class="md:col-start-2 flex justify-center items-center w-full h-full rounded px-6 py-2 font-bold hover:text-red-700 transition duration-300 ease-in-out text-gray-400"
            :class="{
              'bg-red-100 border border-red-600 text-red-600':
                activeButton === 5,
            }"
            @click="setActiveButton(5)"
          >
            {{ $t("insurance.button5-header") }}
          </button>
          <button
            class="md:col-start-3 flex justify-center items-center w-full h-full rounded px-6 py-2 font-bold hover:text-red-700 transition duration-300 ease-in-out text-gray-400"
            :class="{
              'bg-red-100 border border-red-600 text-red-600':
                activeButton === 6,
            }"
            @click="setActiveButton(6)"
          >
            {{ $t("insurance.button6-header") }}
          </button>
        </div>

        <div v-if="showDiv1" class="bg-white shadow-lg overflow-hidden">
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
                class="space-y-3 md:space-y-2 list-disc list-inside text-md lg:text-lg leading-relaxed md:leading-normal my-8"
              >
                <li>
                  Public Liability / Comprehensive General Liability: Protects
                  businesses from personal injuries, property damage, and legal
                  expenses.
                </li>
                <li>
                  Product Liability: Protects businesses from third-party claims
                  of personal injuries, property damage, and legal expenses
                  caused by products sold or supplied.
                </li>
                <li>
                  Environmental Liability: Covers the cost of restoring damage
                  from sudden accidental environmental accidents such as
                  pollution, clean-up costs, third-party liability, and legal
                  costs.
                </li>
                <li>
                  Management Liability / Directors and Officers Liability:
                  Protects management against financial loss from litigation for
                  an alleged wrongful act, negligence, or omission as directors
                  and officers.
                </li>
                <li>
                  Professional Liability / Errors and Omissions: Protects
                  insured against errors, omission, or negligence in relation to
                  advice or services that have been provided.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div v-if="showDiv2" class="bg-white shadow-lg overflow-hidden">
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
              <h2 class="text-lg md:text-xl leading-relaxed md:leading-normal">
                {{ $t("insurance.product-card2-subheader") }}
              </h2>
              <ul
                class="space-y-3 md:space-y-2 list-disc list-inside text-md lg:text-lg leading-relaxed md:leading-normal my-8"
              >
                <li>
                  Contractor’s All Risk is an insurance cover, which gives full
                  protection against loss or damage that might be experienced by
                  a construction project, including a claim from another party
                  which experiences loss caused by the project.
                </li>
                <li>
                  Erection All Risk is an insurance cover, which gives full
                  protection against almost all losses and damages that might be
                  happened during the installation of machinery, including a
                  claim from another party which experiences loss caused by the
                  installation activity.
                </li>
                <li>
                  Machinery Breakdown is an insurance cover, which is full and
                  effective for industry machinery, either when the machines are
                  operating during treatment or when they are not.
                </li>
                <li>
                  Electronic Equipment Insurance covers electronic equipment
                  against loss or damage which might occur suddenly and
                  unexpectedly.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div v-if="showDiv3" class="bg-white shadow-lg overflow-hidden">
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
              <h2 class="text-lg md:text-xl leading-relaxed md:leading-normal">
                {{ $t("insurance.product-card3-subheader") }}
              </h2>
              <ul
                class="space-y-3 md:space-y-2 list-disc list-inside text-md lg:text-lg leading-relaxed md:leading-normal my-8"
              >
                <li>
                  Contractor’s All Risk is an insurance cover, which gives full
                  protection against loss or damage that might be experienced by
                  a construction project, including a claim from another party
                  which experiences loss caused by the project.
                </li>
                <li>
                  Erection All Risk is an insurance cover, which gives full
                  protection against almost all losses and damages that might be
                  happened during the installation of machinery, including a
                  claim from another party which experiences loss caused by the
                  installation activity.
                </li>
                <li>
                  Machinery Breakdown is an insurance cover, which is full and
                  effective for industry machinery, either when the machines are
                  operating during treatment or when they are not.
                </li>
                <li>
                  Electronic Equipment Insurance covers electronic equipment
                  against loss or damage which might occur suddenly and
                  unexpectedly.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div v-if="showDiv4" class="bg-white shadow-lg overflow-hidden">
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
              <h2 class="text-lg md:text-xl leading-relaxed md:leading-normal">
                {{ $t("insurance.product-card4-subheader") }}
              </h2>
              <ul
                class="space-y-3 md:space-y-2 list-disc list-inside text-md lg:text-lg leading-relaxed md:leading-normal my-8"
              >
                <li>
                  Contractor’s All Risk is an insurance cover, which gives full
                  protection against loss or damage that might be experienced by
                  a construction project, including a claim from another party
                  which experiences loss caused by the project.
                </li>
                <li>
                  Erection All Risk is an insurance cover, which gives full
                  protection against almost all losses and damages that might be
                  happened during the installation of machinery, including a
                  claim from another party which experiences loss caused by the
                  installation activity.
                </li>
                <li>
                  Machinery Breakdown is an insurance cover, which is full and
                  effective for industry machinery, either when the machines are
                  operating during treatment or when they are not.
                </li>
                <li>
                  Electronic Equipment Insurance covers electronic equipment
                  against loss or damage which might occur suddenly and
                  unexpectedly.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div v-if="showDiv5" class="bg-white shadow-lg overflow-hidden">
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
              <ul
                class="space-y-3 md:space-y-2 list-disc list-inside text-md lg:text-lg leading-relaxed md:leading-normal my-8"
              >
                <li>
                  Contractor’s All Risk is an insurance cover, which gives full
                  protection against loss or damage that might be experienced by
                  a construction project, including a claim from another party
                  which experiences loss caused by the project.
                </li>
                <li>
                  Erection All Risk is an insurance cover, which gives full
                  protection against almost all losses and damages that might be
                  happened during the installation of machinery, including a
                  claim from another party which experiences loss caused by the
                  installation activity.
                </li>
                <li>
                  Machinery Breakdown is an insurance cover, which is full and
                  effective for industry machinery, either when the machines are
                  operating during treatment or when they are not.
                </li>
                <li>
                  Electronic Equipment Insurance covers electronic equipment
                  against loss or damage which might occur suddenly and
                  unexpectedly.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div v-if="showDiv6" class="bg-white shadow-lg overflow-hidden">
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
              <h2 class="text-lg md:text-xl leading-relaxed md:leading-normal">
                {{ $t("insurance.product-card6-subheader") }}
              </h2>
              <ul
                class="space-y-3 md:space-y-2 list-disc list-inside text-md lg:text-lg leading-relaxed md:leading-normal my-8"
              >
                <li>
                  Contractor’s All Risk is an insurance cover, which gives full
                  protection against loss or damage that might be experienced by
                  a construction project, including a claim from another party
                  which experiences loss caused by the project.
                </li>
                <li>
                  Erection All Risk is an insurance cover, which gives full
                  protection against almost all losses and damages that might be
                  happened during the installation of machinery, including a
                  claim from another party which experiences loss caused by the
                  installation activity.
                </li>
                <li>
                  Machinery Breakdown is an insurance cover, which is full and
                  effective for industry machinery, either when the machines are
                  operating during treatment or when they are not.
                </li>
                <li>
                  Electronic Equipment Insurance covers electronic equipment
                  against loss or damage which might occur suddenly and
                  unexpectedly.
                </li>
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
  name: "Product",
  components: {},
  data() {
    return {
      showDiv1: true,
      showDiv2: false,
      showDiv3: false,
      showDiv4: false,
      showDiv5: false,
      showDiv6: false,
      activeButton: 1,
    };
  },
  methods: {
    showDiv(num) {
      this.showDiv1 = num === 1;
      this.showDiv2 = num === 2;
      this.showDiv3 = num === 3;
      this.showDiv4 = num === 4;
      this.showDiv5 = num === 5;
      this.showDiv6 = num === 6;
    },
    setActiveButton(buttonIndex) {
      this.activeButton = buttonIndex;
      this.showDiv(buttonIndex);
    },
  },
};
</script>

<style scoped>
h3 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #3b3b3b;
  text-transform: capitalize;
}
h2 {
  color: #3b3b3b;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.1px;
}
h1 {
  font-style: normal;
  font-weight: 700;
  color: #3b3b3b;
  letter-spacing: 0.5px;
}
p {
  font-style: normal;
  font-weight: 400;
  color: #787878;
}
li {
  color: #3b3b3b;
  letter-spacing: 0.1px;
}
</style>

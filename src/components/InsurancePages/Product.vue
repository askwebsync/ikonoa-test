<template>
  <section>
    <div class="container mx-auto px-4 py-10 md:px-8 lg:px-24">
      <div class="flex flex-col items-center justify-center gap-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            class="flex justify-center items-center w-full h-full bg-red-100 border border-red-600 shadow-md rounded-full px-6 py-2 text-red-600 font-bold hover:bg-red-600 hover:text-white transition duration-300 ease-in-out"
            @click="showDiv(1)"
          >
            Liability
          </button>
          <button
            class="flex justify-center items-center w-full h-full bg-red-100 border border-red-600 shadow-md rounded-full px-6 py-2 text-red-600 font-bold hover:bg-red-600 hover:text-white transition duration-300 ease-in-out"
            @click="showDiv(2)"
          >
            Property
          </button>
          <button
            class="flex justify-center items-center w-full h-full bg-red-100 border border-red-600 shadow-md rounded-full px-6 py-2 text-red-600 font-bold hover:bg-red-600 hover:text-white transition duration-300 ease-in-out"
            @click="showDiv(3)"
          >
            Health
          </button>
          <button
            class="flex justify-center items-center w-full h-full bg-red-100 border border-red-600 shadow-md rounded-full px-6 py-2 text-red-600 font-bold hover:bg-red-600 hover:text-white transition duration-300 ease-in-out"
            @click="showDiv(4)"
          >
            Marine
          </button>
          <button
            class="md:col-span-2 flex justify-center items-center w-full h-full bg-red-100 border border-red-600 shadow-md rounded-full px-6 py-2 text-red-600 font-bold hover:bg-red-600 hover:text-white transition duration-300 ease-in-out"
            @click="showDiv(5)"
          >
            Engineering
          </button>
          <button
            class="md:col-span-2 flex justify-center items-center w-full h-full bg-red-100 border border-red-600 shadow-md rounded-full px-6 py-2 text-red-600 font-bold hover:bg-red-600 hover:text-white transition duration-300 ease-in-out"
            @click="showDiv(6)"
          >
            Auto Mobile
          </button>
        </div>

        <div v-if="showDiv1">
          <div class="w-full">
            <div class="relative">
              <img
                src="/assets/img/LP_Insurance/liability.png"
                alt="liability"
                class="object-cover w-full h-48 md:h-full"
              />
            </div>
            <div class="py-8">
              <div class="flex flex-col gap-12">
                <h4
                  class="text-md lg:text-lg xl:text-xl leading-snug md:leading-normal"
                >
                  Liability insurance is an insurance product that provides an
                  insured party with protection against claims resulting from
                  injuries and damage to other people or property. Liability
                  insurance policies cover any legal costs and payouts an
                  insured party is responsible for if they are found legally
                  liable.
                </h4>
                <ol
                  class="space-y-3 md:space-y-2 list-decimal list-inside text-left leading-snug md:leading-normal"
                >
                  <li>
                    Public Liability / Comprehensive General Liability Protect
                    businesses from personal injuries, property damage and legal
                    expenses.
                  </li>
                  <li>
                    Product Liability Protect businesses from third-party claims
                    of personal injuries, property damage and legal expenses
                    caused by products sold or supplied.
                  </li>
                  <li>
                    Environmental Liability Covers the cost of restoring damage
                    from sudden accidental environmental accidents such as
                    pollution, clean-up costs, third-party liability and legal
                    costs.
                  </li>
                  <li>
                    Management Liability / Directors and Officers Liability
                    Protect Management against financial loss from litigation
                    for an alleged wrongful act, negligence or omission as
                    directors and officers.
                  </li>
                  <li>
                    Professional Liability / Errors and Omissions Protects
                    insured against errors, omission or negligence in relation
                    to advice or services that have been provided.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div v-if="showDiv2">
          <div class="w-full">
            <div class="relative">
              <img
                src="/assets/img/LP_Insurance/liability.png"
                alt="liability"
                class="object-cover w-full h-48 md:h-full"
              />
            </div>
            <div class="py-8">
              <div class="flex flex-col gap-12">
                <h4
                  class="text-md lg:text-lg xl:text-xl leading-snug md:leading-normal"
                >
                  Engineering Insurance gives protection to users or owners of
                  production machinery and utilities, electronic equipment, and
                  owners and contractors of construction and also installation
                  projects.
                </h4>
                <ol
                  class="space-y-3 md:space-y-2 list-decimal list-inside text-left leading-snug md:leading-normal"
                >
                  <li>
                    Contractor’s All Risk is an insurance cover, which gives
                    full protection against loss or damage that might be
                    experienced by a construction project, including a claim
                    from another party which experiences loss caused by the
                    project.
                  </li>
                  <li>
                    Erection All Risk is an insurance cover, which gives full
                    protection against almost all losses and damages that might
                    be happened during the installation of machinery, including
                    a claim from another party which experiences loss caused by
                    the installation activity.
                  </li>
                  <li>
                    Machinery Breakdown is an insurance cover, which is full and
                    effective for industry machinery, either when the machines
                    are operating during treatment or when they are not.
                  </li>
                  <li>
                    Electronic Equipment Insurance covers electronic equipment
                    against loss or damage which might occur suddenly and
                    unexpectedly.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div v-if="showDiv3">
          <div class="w-full">
            <div class="relative">
              <img
                src="/assets/img/LP_Insurance/liability.png"
                alt="liability"
                class="object-cover w-full h-48 md:h-full"
              />
            </div>
            <div class="py-8">
              <div class="flex flex-col gap-12">
                <h4
                  class="text-md lg:text-lg xl:text-xl leading-snug md:leading-normal"
                >
                  Health insurance policies cover hospitalisation, pre-and
                  post-hospitalisation, daycare and home treatment expenses. You
                  can also avail of financial coverage for expenses against
                  diagnosis and tests suggested by the doctors.
                </h4>
                <ol
                  class="space-y-3 md:space-y-2 list-decimal list-inside text-left leading-snug md:leading-normal"
                >
                  <li>
                    Contractor’s All Risk is an insurance cover, which gives
                    full protection against loss or damage that might be
                    experienced by a construction project, including a claim
                    from another party which experiences loss caused by the
                    project.
                  </li>
                  <li>
                    Erection All Risk is an insurance cover, which gives full
                    protection against almost all losses and damages that might
                    be happened during the installation of machinery, including
                    a claim from another party which experiences loss caused by
                    the installation activity.
                  </li>
                  <li>
                    Machinery Breakdown is an insurance cover, which is full and
                    effective for industry machinery, either when the machines
                    are operating during treatment or when they are not.
                  </li>
                  <li>
                    Electronic Equipment Insurance covers electronic equipment
                    against loss or damage which might occur suddenly and
                    unexpectedly.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div v-if="showDiv4">
          <div class="w-full">
            <div class="relative">
              <img
                src="/assets/img/LP_Insurance/liability.png"
                alt="liability"
                class="object-cover w-full h-48 md:h-full"
              />
            </div>
            <div class="py-8">
              <div class="flex flex-col gap-12">
                <h4
                  class="text-md lg:text-lg xl:text-xl leading-snug md:leading-normal"
                >
                  Marine Insurance is a type of insurance that protects ships,
                  cargo and cargo from loss or damage while at sea or during
                  shipping.
                </h4>
                <ol
                  class="space-y-3 md:space-y-2 list-decimal list-inside text-left leading-snug md:leading-normal"
                >
                  <li>
                    Contractor’s All Risk is an insurance cover, which gives
                    full protection against loss or damage that might be
                    experienced by a construction project, including a claim
                    from another party which experiences loss caused by the
                    project.
                  </li>
                  <li>
                    Erection All Risk is an insurance cover, which gives full
                    protection against almost all losses and damages that might
                    be happened during the installation of machinery, including
                    a claim from another party which experiences loss caused by
                    the installation activity.
                  </li>
                  <li>
                    Machinery Breakdown is an insurance cover, which is full and
                    effective for industry machinery, either when the machines
                    are operating during treatment or when they are not.
                  </li>
                  <li>
                    Electronic Equipment Insurance covers electronic equipment
                    against loss or damage which might occur suddenly and
                    unexpectedly.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div v-if="showDiv5">
          <div class="w-full">
            <div class="relative">
              <img
                src="/assets/img/LP_Insurance/liability.png"
                alt="liability"
                class="object-cover w-full h-48 md:h-full"
              />
            </div>
            <div class="py-8">
              <div class="flex flex-col gap-12">
                <h4
                  class="text-md lg:text-lg xl:text-xl leading-snug md:leading-normal"
                >
                  Provides protection to your property against all damage from
                  any fortuitous cause such as fire, lightning strike,
                  explosion, plane crash, smoke (FLEXAS), hurricane, storm,
                  flood, landslides, earthquakes, strikes, riots, riots, evil
                  actions of others and other risks.
                </h4>
                <ol
                  class="space-y-3 md:space-y-2 list-decimal list-inside text-left leading-snug md:leading-normal"
                >
                  <li>
                    Contractor’s All Risk is an insurance cover, which gives
                    full protection against loss or damage that might be
                    experienced by a construction project, including a claim
                    from another party which experiences loss caused by the
                    project.
                  </li>
                  <li>
                    Erection All Risk is an insurance cover, which gives full
                    protection against almost all losses and damages that might
                    be happened during the installation of machinery, including
                    a claim from another party which experiences loss caused by
                    the installation activity.
                  </li>
                  <li>
                    Machinery Breakdown is an insurance cover, which is full and
                    effective for industry machinery, either when the machines
                    are operating during treatment or when they are not.
                  </li>
                  <li>
                    Electronic Equipment Insurance covers electronic equipment
                    against loss or damage which might occur suddenly and
                    unexpectedly.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div v-if="showDiv6">
          <div class="w-full">
            <div class="relative">
              <img
                src="/assets/img/LP_Insurance/liability.png"
                alt="liability"
                class="object-cover w-full h-48 md:h-full"
              />
            </div>
            <div class="py-8">
              <div class="flex flex-col gap-12">
                <h4
                  class="text-md lg:text-lg xl:text-xl leading-snug md:leading-normal"
                >
                  Provide protection for all types of motorized vehicles such as
                  trucks, four-wheeled vehicles (cars).
                </h4>
                <ol
                  class="space-y-3 md:space-y-2 list-decimal list-inside text-left leading-snug md:leading-normal"
                >
                  <li>
                    Contractor’s All Risk is an insurance cover, which gives
                    full protection against loss or damage that might be
                    experienced by a construction project, including a claim
                    from another party which experiences loss caused by the
                    project.
                  </li>
                  <li>
                    Erection All Risk is an insurance cover, which gives full
                    protection against almost all losses and damages that might
                    be happened during the installation of machinery, including
                    a claim from another party which experiences loss caused by
                    the installation activity.
                  </li>
                  <li>
                    Machinery Breakdown is an insurance cover, which is full and
                    effective for industry machinery, either when the machines
                    are operating during treatment or when they are not.
                  </li>
                  <li>
                    Electronic Equipment Insurance covers electronic equipment
                    against loss or damage which might occur suddenly and
                    unexpectedly.
                  </li>
                </ol>
              </div>
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
  },
};
</script>

<style scoped>
h3 {
  font-style: normal;
  font-weight: 500;
  text-transform: none;
  letter-spacing: -0.15px;
}
h4 {
  color: #3b3b3b;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
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
}
</style>

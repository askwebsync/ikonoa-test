<template>
  <section>
    <div class="container mx-auto px-4 py-12 md:px-8 lg:p-24">
      <div class="flex flex-col gap-10 md:gap-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div class="overflow-hidden rounded-2xl shadow-md card">
            <div class="relative h-[270px]">
              <img
                src="/assets/img/LP_Insurance/liability.png"
                alt="liability"
                class="object-cover w-full h-full"
              />
              <div
                class="absolute top-0 left-0 flex items-center justify-center w-full h-full"
              >
                <span
                  class="text-white text-2xl font-bold uppercase bg-black bg-opacity-70 p-2"
                  >Liability Insurance</span
                >
              </div>
            </div>
            <div class="p-6">
              <div class="flex flex-col gap-6">
                <h3 class="text-lg leading-normal">
                  Liability insurance is an insurance product that provides an
                  insured party with protection against claims resulting from
                  injuries and damage to other people or property. Liability
                  insurance policies cover any legal costs and payouts an
                  insured party is responsible for if they are found legally
                  liable.
                </h3>
                <ol
                  class="max-w-lg space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 text-left"
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
          <div class="overflow-hidden rounded-2xl shadow-md card">
            <div class="relative h-[270px]">
              <img
                src="/assets/img/LP_Insurance/engineering.png"
                alt="engineering"
                class="object-cover w-full h-full"
              />
              <div
                class="absolute top-0 left-0 flex items-center justify-center w-full h-full"
              >
                <span
                  class="text-white text-2xl font-bold uppercase bg-black bg-opacity-70 p-2"
                >
                  Engineering Insurance
                </span>
              </div>
            </div>
            <div class="p-6">
              <div class="flex flex-col gap-6">
                <h3 class="text-lg leading-normal">
                  Engineering Insurance gives protection to users or owners of
                  production machinery and utilities, electronic equipment, and
                  owners and contractors of construction and also installation
                  projects.
                </h3>
                <ol
                  class="max-w-lg space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 text-left"
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
          <div
            class="background-card flex flex-col rounded-lg card-hover shadow-md"
          >
            <div class="flex flex-col gap-8 p-12 text-center h-72">
              <router-link :to="{ name: 'insurance-policy' }">
                <h1 class="text-lg md:text-xl lg:text-3xl">Health Insurance</h1>
              </router-link>
              <p class="text-xs sm:text-sm md:text-base">
                Health insurance policies cover hospitalisation, pre-and
                post-hospitalisation, daycare and home treatment expenses. You
                can also avail of financial coverage for expenses against
                diagnosis and tests suggested by the doctors.
              </p>
            </div>
            <div>
              <img
                src="/assets/img/LP_Insurance/health.png"
                alt="health"
                class="w-full"
              />
            </div>
          </div>
          <div
            class="background-card flex flex-col rounded-lg card-hover shadow-md"
          >
            <div class="flex flex-col gap-8 p-12 text-center h-72">
              <router-link :to="{ name: 'insurance-policy' }">
                <h1
                  class="text-lg md:text-xl lg:text-3xl hover:text-red-600 focus:outline-none"
                >
                  Marine Insurance
                </h1>
              </router-link>
              <p class="text-xs sm:text-sm md:text-base">
                Marine Insurance is a type of insurance that protects ships,
                cargo and cargo from loss or damage while at sea or during
                shipping.
              </p>
            </div>
            <div>
              <img
                src="/assets/img/LP_Insurance/marine.png"
                alt="marine"
                class="w-full"
              />
            </div>
          </div>
          <div
            class="background-card flex flex-col rounded-lg card-hover shadow-md"
          >
            <div class="flex flex-col gap-8 p-12 text-center h-72">
              <router-link :to="{ name: 'insurance-policy' }">
                <h1 class="text-lg md:text-xl lg:text-3xl">
                  Property Insurance
                </h1>
              </router-link>
              <p class="text-xs sm:text-sm md:text-base">
                Provides protection to your property against all damage from any
                fortuitous cause such as fire, lightning strike, explosion,
                plane crash, smoke (FLEXAS), hurricane, storm, flood,
                landslides, earthquakes, strikes, riots, riots, evil actions of
                others and other risks.
              </p>
            </div>
            <div>
              <img
                src="/assets/img/LP_Insurance/property.jpg"
                alt="property"
                class="w-full"
              />
            </div>
          </div>
          <div
            class="background-card flex flex-col rounded-lg card-hover shadow-md"
          >
            <div class="flex flex-col gap-8 p-12 text-center h-72">
              <router-link :to="{ name: 'insurance-policy' }">
                <h1
                  class="text-lg md:text-xl lg:text-3xl hover:text-red-600 focus:outline-none"
                >
                  Automobile Insurance
                </h1>
              </router-link>
              <p class="text-xs sm:text-sm md:text-base">
                Provide protection for all types of motorized vehicles such as
                trucks, four-wheeled vehicles (cars).
              </p>
            </div>
            <div>
              <img
                src="/assets/img/LP_Insurance/mobile.jpg"
                alt="mobile"
                class="w-full"
              />
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
    return {};
  },

  methods: {},
};
</script>

<style scoped>
h3 {
  font-style: normal;
  font-weight: 500;
  text-transform: none;
  letter-spacing: -0.15px;
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
.card {
  height: 100%;
}
.card .p-6 {
  overflow: hidden;
}
.card .p-6 h3 {
  height: 200px; /* adjust the value based on your preference */
  overflow: hidden;
}
</style>

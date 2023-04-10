<template>
  <section>
    <div class="container mx-auto px-4 py-12 md:px-8 lg:p-24">
      <div class="flex flex-col gap-10 md:gap-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div
            class="background-product custom-shadow-card flex flex-col rounded-lg"
          >
            <div class="flex flex-col gap-8 p-12 text-center h-72">
              <router-link :to="{ name: 'insurance-policy' }">
                <h1
                  class="text-lg md:text-xl lg:text-3xl hover:text-red-600 focus:outline-none"
                >
                  Liability Insurance
                </h1>
              </router-link>
              <p class="text-xs sm:text-sm md:text-base">
                Liability insurance is an insurance product that provides an
                insured party with protection against claims resulting from
                injuries and damage to other people or property. Liability
                insurance policies cover any legal costs and payouts an insured
                party is responsible for if they are found legally liable.
              </p>
            </div>
            <div>
              <img
                src="/assets/img/LP_Insurance/liability.png"
                alt="liability"
                class="w-full rounded-lg"
              />
            </div>
          </div>
          <div
            class="background-product custom-shadow-card flex flex-col rounded-lg"
          >
            <div class="flex flex-col gap-8 p-12 text-center h-72">
              <router-link :to="{ name: 'insurance-policy' }">
                <h1
                  class="text-lg md:text-xl lg:text-3xl hover:text-red-600 focus:outline-none"
                >
                  Engineering Insurance
                </h1>
              </router-link>
              <p class="text-xs sm:text-sm md:text-base">
                Protect physical assets from hazards and risks that may occur in
                projects or buildings such as fire, damage due to extreme
                weather, or damage due to human error.
              </p>
            </div>
            <div>
              <img
                src="/assets/img/LP_Insurance/engineering.png"
                alt="engineering"
                class="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div
            class="background-product custom-shadow-card flex flex-col rounded-lg"
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
                class="w-full rounded-lg"
              />
            </div>
          </div>

          <div
            class="background-product custom-shadow-card flex flex-col rounded-lg"
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
                class="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div
            class="background-product custom-shadow-card flex flex-col rounded-lg"
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
                class="w-full rounded-lg"
              />
            </div>
          </div>

          <div
            class="background-product custom-shadow-card flex flex-col rounded-lg"
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
                class="w-full rounded-lg"
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
</style>

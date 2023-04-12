<template>
  <section>
    <div class="container mx-auto px-4 py-12 md:px-8 lg:p-24">
      <div class="flex flex-col gap-10 md:gap-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <router-link :to="{ name: 'risk-consulting' }" class="cursor-pointer">
            <div
              class="background-card flex flex-col rounded-lg card-hover shadow-md"
            >
              <div class="flex flex-col gap-8 py-10 px-12 text-center h-64">
                <h1 class="text-lg md:text-xl lg:text-3xl">Risk Consulting</h1>

                <p class="text-xs sm:text-sm md:text-base">
                  We can carry out a risk survey according to your needs,
                  including unusual and complex risks. Our team can work and
                  conduct surveys wherever these risks are located.
                </p>
              </div>
              <div class="bg-white">
                <img
                  src="/assets/img/landing-services/risk-consulting.png"
                  alt="risk-consulting"
                  class="w-full rounded-lg h-full"
                />
              </div>
            </div>
          </router-link>
          <router-link :to="{ name: 'risk-management' }">
            <div
              class="background-card flex flex-col rounded-lg card-hover shadow-md"
            >
              <div class="flex flex-col gap-8 py-10 px-12 text-center h-64">
                <h1
                  class="text-lg md:text-xl lg:text-3xl hover:text-red-600 focus:outline-none"
                >
                  Risk Management
                </h1>

                <p class="text-xs sm:text-sm md:text-base">
                  Assist our customers in identifying, evaluating, and managing
                  the risks associated with their business, thereby reducing
                  potential losses and increasing business success.
                </p>
              </div>
              <div class="bg-white">
                <img
                  src="/assets/img/landing-services/risk-management.png"
                  alt="risk-management"
                  class="w-full rounded-lg"
                />
              </div>
            </div>
          </router-link>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <router-link :to="{ name: 'insurance-policy' }">
            <div
              class="background-card flex flex-col rounded-lg card-hover shadow-md"
            >
              <div class="flex flex-col gap-8 py-10 px-12 text-center h-64">
                <h1
                  class="text-lg md:text-xl lg:text-3xl hover:text-red-600 focus:outline-none"
                >
                  Insurance Policy
                </h1>

                <p class="text-xs sm:text-sm md:text-base">
                  We provide consultative services and work with clients
                  including business owners and benefits decision-makers to
                  develop the right coverage plans for each client's needs.
                </p>
              </div>
              <div class="bg-white">
                <img
                  src="/assets/img/landing-services/insurance-policy.png"
                  alt="insurance-policy"
                  class="w-full rounded-lg"
                />
              </div>
            </div>
          </router-link>
          <router-link :to="{ name: 'academy' }">
            <div
              class="background-card flex flex-col rounded-lg card-hover shadow-md"
            >
              <div class="flex flex-col gap-8 py-10 px-12 text-center h-64">
                <h1
                  class="text-lg md:text-xl lg:text-3xl hover:text-red-600 focus:outline-none"
                >
                  Academy
                </h1>
                <p class="text-xs sm:text-sm md:text-base">
                  We provide insurance training that suits to your needs, either
                  directly provided by our experienced Staff or in collaboration
                  with third parties. We named it Insurance for Insurance Staff
                  and Insurance for Non-Insurance Staff
                </p>
              </div>
              <div class="bg-white">
                <img
                  src="/assets/img/landing-services/academy.png"
                  alt="academy"
                  class="w-full rounded-lg"
                />
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Services",
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
.card-hover:hover {
  background-color: #ffe5e5;
}
</style>

<template>
  <section>
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
      <div
        class="grid md:grid-cols-3 gap-8 md:gap-10 justify-items-center text-center md:justify-items-start md:text-left"
      >
        <div class="flex flex-col gap-2 md:self-center max-w-lg">
          <h3 class="text-xl md:text-2xl lg:text-3xl">SERVICES & SOLUTIONS</h3>
          <h2 class="text-xl md:text-2xl lg:text-3xl">
            We will assist you in managing your assets, risks and insurance
            needs, including in claim settlements to be faster, precise and
            accurate
          </h2>
        </div>
        <div class="flex flex-col gap-10">
          <div
            class="flex flex-col w-96 md:w-56 lg:w-full px-5 py-6 md:px-4 gap-6 background-card hover:bg-white hover:shadow-md"
          >
            <div class="self-center md:self-start">
              <img src="/assets/img/Home/analysis.png" alt="Risk Consulting" />
            </div>
            <div class="flex flex-col gap-6">
              <router-link :to="{ name: 'risk-consulting' }">
                <h1
                  class="text-xl md:text-2xl lg:text-3xl uppercase hover:text-red-600"
                >
                  Risk-Consulting
                </h1>
              </router-link>
              <ul class="list-decimal list-outside space-y-2 md:space-y-1 px-6">
                <li class="text-base sm:text-base md:text-lg tracking-tighter">
                  Claim consultant to expedite claim settlement.
                </li>
                <li class="text-base sm:text-base md:text-lg tracking-tighter">
                  Review insurance gaps to identify coverage gaps/overlaps,
                  reduce premiums, and assess risk exposure.
                </li>
                <li class="text-base sm:text-base md:text-lg tracking-tighter">
                  Support bid management by selecting brokers/insurance
                  companies and analyzing insurance proposals.
                </li>
                <li class="text-base sm:text-base md:text-lg tracking-tighter">
                  Manage insurance program and advise on renewal process.
                </li>
              </ul>
            </div>
          </div>
          <div
            class="flex flex-col w-96 md:w-56 lg:w-full px-5 py-6 md:px-4 gap-6 background-card hover:bg-white hover:shadow-md"
          >
            <div class="self-center md:self-start">
              <img
                src="/assets/img/Home/insurance.png"
                alt="Insurance Policy"
              />
            </div>
            <div class="flex flex-col gap-6">
              <router-link :to="{ name: 'insurance-policy' }">
                <h1 class="text-xl md:text-2xl lg:text-3xl uppercase">
                  Insurance Policy
                </h1>
              </router-link>
              <ul class="list-decimal list-outside space-y-2 md:space-y-1 px-6">
                <li class="text-base sm:text-base md:text-lg tracking-tighter">
                  Provide the best and trusted Insurance Company
                </li>
                <li class="text-base sm:text-base md:text-lg tracking-tighter">
                  Provide the best terms and conditions at the right premium
                </li>
                <li class="text-base sm:text-base md:text-lg tracking-tighter">
                  Support claim process and settlement
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-10 mt-6 md:mt-20">
          <div
            class="flex flex-col w-96 md:w-56 lg:w-full px-5 py-6 md:px-4 gap-6 background-card hover:bg-white hover:shadow-md"
          >
            <div class="self-center md:self-start">
              <img src="/assets/img/Home/risk.png" alt="Risk Management" />
            </div>
            <div class="flex flex-col gap-6">
              <router-link :to="{ name: 'risk-management' }">
                <h1
                  class="text-xl md:text-2xl lg:text-3xl uppercase hover:text-red-600"
                >
                  Risk-Management
                </h1>
              </router-link>
              <ul class="list-decimal list-outside space-y-2 md:space-y-1 px-6">
                <li class="text-base sm:text-base md:text-lg tracking-tighter">
                  Risk survey
                </li>
                <li class="text-base sm:text-base md:text-lg tracking-tighter">
                  Risk improvement and recommendation
                </li>
              </ul>
            </div>
          </div>

          <div
            class="flex flex-col w-96 md:w-56 lg:w-full px-5 py-6 md:px-4 gap-6 background-card hover:bg-white hover:shadow-md"
          >
            <div class="self-center md:self-start">
              <img src="/assets/img/Home/academy.png" alt="Academy" />
            </div>
            <div class="flex flex-col gap-6">
              <router-link :to="{ name: 'academy' }">
                <h1
                  class="text-xl md:text-2xl lg:text-3xl uppercase hover:text-red-600"
                >
                  Academy
                </h1>
              </router-link>
              <ul class="list-decimal list-outside space-y-2 md:space-y-1 px-6">
                <li class="text-base sm:text-base md:text-lg">
                  Insurance for Insurance Officer
                </li>
                <li class="text-base sm:text-base md:text-lg">
                  Insurance for Non-Insurance Officer
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
  name: "Services",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
h1 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  color: #17171f;
  letter-spacing: 1px;
}

ul li {
  font-family: "Roboto";
  font-style: normal;
  color: #505050;
  font-weight: 400;
  letter-spacing: 0.5px;
}
</style>

<template>
  <section>
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
      <div
        class="grid md:grid-cols-3 gap-8 justify-items-center text-center md:justify-items-start md:text-left"
      >
        <div class="flex flex-col gap-1 md:self-center max-w-lg">
          <h3 class="text-xl md:text-2xl lg:text-3xl">SERVICES & SOLUTIONS</h3>
          <h2 class="text-xl md:text-2xl lg:text-3xl">
            We will assist you in managing your assets, risks and insurance
            needs, including in claim settlements to be faster, precise and
            accurate
          </h2>
        </div>
        <div class="flex flex-col px-2 gap-8 md:gap-10">
          <div
            class="flex flex-col w-80 md:w-56 lg:w-full px-5 py-6 background-card hover:bg-white hover:shadow-md"
          >
            <div class="self-center md:self-start mb-5 mt-2">
              <img src="/assets/img/homepage/analysis.png" class="" />
            </div>

            <h1 class="text-xl md:text-2xl lg:text-3xl mb-2 mb-4">
              <a href="hover:text-red-600">Risk Consulting</a>
            </h1>

            <ul class="list-decimal list-inside px-3 py-2 space-y-2">
              <li class="text-base sm:text-base md:text-lg tracking-tighter">
                Claim consultant to expedite claim settlement.
              </li>
              <li class="text-base sm:text-base md:text-lg tracking-tighter">
                Review insurance gaps to identify coverage gaps/overlaps, reduce
                premiums, and assess risk exposure.
              </li>
              <li class="text-base sm:text-base md:text-lg tracking-tighter">
                Support bid management by selecting brokers/insurance companies
                and analyzing insurance proposals.
              </li>
              <li class="text-base sm:text-base md:text-lg tracking-tighter">
                Manage insurance program and advise on renewal process.
              </li>
            </ul>
          </div>
          <div
            class="flex flex-col w-80 md:w-56 lg:w-full px-5 py-6 background-card hover:bg-white hover:shadow-md"
          >
            <div class="self-center md:self-start mb-5 mt-2">
              <img src="/assets/img/homepage/insurance.png" class="\" />
            </div>

            <h1 class="text-xl md:text-2xl lg:text-3xl mb-4">
              <a href="">Insurance Policy</a>
            </h1>

            <ul class="list-decimal list-inside px-3 py-2 space-y-2">
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
        <div class="flex flex-col mt-8 px-2 gap-8 md:gap-10 md:mt-12">
          <div
            class="flex flex-col w-80 md:w-56 lg:w-full px-5 py-6 background-card hover:bg-white hover:shadow-md"
          >
            <div class="self-center md:self-start mb-5 mt-2">
              <img src="/assets/img/homepage/risk.png" class="w-full" />
            </div>

            <h1 class="text-xl md:text-2xl lg:text-3xl mb-2 mb-4">
              <a href="">Risk Management</a>
            </h1>

            <ul class="list-decimal list-inside px-3 py-2 space-y-2">
              <li class="text-base sm:text-base md:text-lg tracking-tighter">
                Risk survey
              </li>
              <li class="text-base sm:text-base md:text-lg tracking-tighter">
                Risk improvement and recommendation
              </li>
            </ul>
          </div>
          <div
            class="flex flex-col w-80 md:w-56 lg:w-full px-5 py-6 background-card hover:bg-white hover:shadow-md"
          >
            <div class="self-center md:self-start mb-5 mt-2">
              <img src="/assets/img/homepage/academy.png" class="\" />
            </div>

            <h1 class="text-xl md:text-2xl lg:text-3xl mb-2 mb-4">
              <a href="">Academy</a>
            </h1>

            <ul class="list-decimal list-inside px-3 py-2 space-y-2">
              <li class="text-base sm:text-base md:text-lg tracking-tighter">
                Insurance for Insurance Officer
              </li>
              <li class="text-base sm:text-base md:text-lg tracking-tighter">
                Insurance for Non-Insurance Officer
              </li>
              <li class="text-base sm:text-base md:text-lg tracking-tighter">
                Inhouse Insurance Training
              </li>
            </ul>
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
  font-weight: 600;
  color: #17171f;
}

ul li {
  font-family: "Roboto";
  font-style: normal;
  color: #787878;
  font-weight: 400;
}
</style>

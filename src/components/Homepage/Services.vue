<template>
  <section>
    <div class="container mx-auto px-4 py-12 lg:py-16">
      <div
        class="grid md:grid-cols-3 gap-8 justify-items-center text-center md:justify-items-start md:text-left"
      >
        <div class="flex flex-col gap-1 md:self-center max-w-lg">
          <h3 class="text-xl md:text-2xl lg:text-3xl uppercase mb-1">
            Services & Solutions
          </h3>
          <h2 class="text-xl md:text-2xl lg:text-3xl tracking-tight">
            We will assist you in managing your assets, risks and insurance
            needs, including in claim settlements to be faster, precise and
            accurate
          </h2>
          <!-- <p class="text-sm md:text-lg tracking-tight max-w-xs lg:max-w-lg">
            We provide services that assist you in managing and claiming your
            insurance policy
          </p> -->
        </div>
        <div class="flex flex-col mt-4 px-2 gap-8 md:gap-10 md:mt-8">
          <div
            class="flex flex-col w-80 md:w-56 lg:w-full p-4 md:p-6 background-card custom-shadow-card"
          >
            <div class="self-center md:self-start">
              <img src="/assets/img/consulting.png" class="w-12 h-12 mb-4" />
            </div>
            <div>
              <h1 class="text-xl md:text-2xl lg:text-3xl mb-2">
                Risk Consulting
              </h1>
            </div>
            <ul class="list-decimal list-inside m-2 space-y-2">
              <li class="text-base sm:text-base md:text-lg tracking-tight">
                Claim consultant to expedite claim settlement.
              </li>
              <li class="text-base sm:text-base md:text-lg tracking-tight">
                Review insurance gaps to identify coverage gaps/overlaps, reduce
                premiums, and assess risk exposure.
              </li>
              <li class="text-base sm:text-base md:text-lg tracking-tight">
                Support bid management by selecting brokers/insurance companies
                and analyzing insurance proposals.
              </li>
              <li class="text-base sm:text-base md:text-lg tracking-tight">
                Manage insurance program and advise on renewal process.
              </li>
            </ul>
          </div>
          <div
            class="flex flex-col w-80 md:w-56 lg:w-full p-4 md:p-6 background-card custom-shadow-card"
          >
            <div class="self-center md:self-start">
              <img src="/assets/img/insurance.png" class="w-12 h-12 mb-4" />
            </div>
            <div>
              <h1 class="text-xl md:text-2xl lg:text-3xl mb-2">
                Insurance Policy
              </h1>
            </div>
            <ul class="list-decimal list-inside m-2 space-y-2">
              <li class="text-base sm:text-base md:text-lg tracking-tight">
                Provide the best and trusted Insurance Company
              </li>
              <li class="text-base sm:text-base md:text-lg tracking-tight">
                Provide the best terms and conditions at the right premium
              </li>
              <li class="text-base sm:text-base md:text-lg tracking-tight">
                Support claim process and settlement
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col px-2 gap-8 md:gap-10">
          <div
            class="flex flex-col w-80 md:w-56 lg:w-full p-4 md:p-6 background-card custom-shadow-card"
          >
            <div class="self-center md:self-start">
              <img src="/assets/img/warning.png" class="w-12 h-12 mb-4" />
            </div>

            <div>
              <h1 class="text-xl md:text-2xl lg:text-3xl mb-2">
                Risk Management
              </h1>
            </div>
            <ul class="list-decimal list-inside m-2 space-y-2">
              <li class="text-base sm:text-base md:text-lg tracking-tight">
                Risk Survey
              </li>
              <li class="text-base sm:text-base md:text-lg tracking-tight">
                Risk improvement and recommendation
              </li>
            </ul>
          </div>
          <div
            class="flex flex-col w-80 md:w-56 lg:w-full p-4 md:p-6 background-card custom-shadow-card"
          >
            <div class="self-center md:self-start">
              <img src="/assets/img/academy.png" class="w-12 h-12 mb-4" />
            </div>

            <div>
              <h1 class="text-xl md:text-2xl lg:text-3xl mb-2">Academy</h1>
            </div>
            <ul class="list-decimal list-inside m-2 space-y-2">
              <li class="text-base sm:text-base md:text-lg tracking-tight">
                Insurance for Insurance Officer
              </li>
              <li class="text-base sm:text-base md:text-lg tracking-tight">
                Insurance for Non-Insurance Officer
              </li>
              <li class="text-base sm:text-base md:text-lg tracking-tight">
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
h3 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  color: #d50000;
}
h2 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  color: #17171f;
}
h1 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;

  color: #17171f;
}

li {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  color: #787878;
}
</style>

<!-- eslint-disable vue/valid-v-for -->
<template>
  <section>
    <div class="container mx-auto px-4 py-12 md:px-8 lg:p-24">
      <div class="flex flex-col gap-10 md:gap-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div class="background-card flex flex-col rounded-lg">
            <div class="flex flex-col gap-8 p-12 text-center">
              <router-link
                :to="{ name: 'risk-consulting' }"
                class="hover:text-red-600 focus:outline-none"
              >
                <h1 class="text-lg md:text-xl lg:text-3xl">Risk Consulting</h1>
              </router-link>
              <p class="text-xs sm:text-sm md:text-base">
                We can carry out a risk survey according to your needs,
                including unusual and complex risks. Our team can work and
                conduct surveys wherever these risks are located.
              </p>
            </div>
            <div>
              <img
                src="/assets/img/LP_Services/Risk Consulting.png"
                alt="risk-consulting"
                class="w-full rounded-lg"
              />
            </div>
          </div>
          <div class="background-card flex flex-col rounded-lg">
            <div class="flex flex-col gap-8 p-12 text-center">
              <h1 class="text-lg md:text-xl lg:text-3xl">Risk Management</h1>
              <p class="text-xs sm:text-sm md:text-base">
                Assist our customers in identifying, evaluating, and managing
                the risks associated with their business, thereby reducing
                potential losses and increasing business success.
              </p>
            </div>
            <div>
              <img
                src="/assets/img/LP_Services/Risk Management.png"
                alt="risk-management"
                class="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div class="background-card flex flex-col rounded-lg">
            <div class="flex flex-col gap-8 p-12 text-center">
              <h1 class="text-lg md:text-xl lg:text-3xl">Insurance Policy</h1>
              <p class="text-xs sm:text-sm md:text-base">
                We provide consultative services and work with clients including
                business owners and benefits decision-makers to develop the
                right coverage plans for each client's needs.
              </p>
            </div>
            <div>
              <img
                src="/assets/img/LP_Services/Insurance Policy.png"
                alt="insurance-policy"
                class="w-full rounded-lg"
              />
            </div>
          </div>

          <div class="background-card flex flex-col rounded-lg">
            <div class="flex flex-col gap-8 p-12 text-center">
              <h1 class="text-lg md:text-xl lg:text-3xl">Academy</h1>
              <p class="text-xs sm:text-sm md:text-base">
                We provide insurance training that suits to your needs, either
                directly provided by our experienced Staff or in collaboration
                with third parties. We named it Insurance for Insurance Staff
                and Insurance for Non-Insurance Staff
              </p>
            </div>
            <div>
              <img
                src="/assets/img/LP_Services/Academy.png"
                alt="academy"
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
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  color: #3b3b3b;
  letter-spacing: 0.5px;
}
p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  color: #787878;
}
</style>

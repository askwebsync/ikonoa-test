<template>
  <section>
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
      <div class="flex flex-col gap-10 text-center">
        <div>
          <h3 class="text-xl md:text-2xl lg:text-3xl">
            {{ $t("claim-experience.client-header") }}
          </h3>
        </div>
        <div
          class="grid grid-cols-2 gap-6 md:gap-3 md:grid-cols-3 lg:grid-cols-4 self-center"
        >
          <div class="flex justify-center items-center card">
            <img src="/assets/img/LP_Claim/CAREGUARD_INDO.png" alt="logo 1" />
          </div>
          <div class="flex justify-center items-center card">
            <img src="/assets/img/LP_Claim/Kenso_INDO.jpeg" alt="logo 2" />
          </div>
          <div class="flex justify-center items-center card">
            <img
              src="/assets/img/LP_Claim/PT.KUANTAN_GRAHA_INDO.png"
              alt="logo 3"
            />
          </div>
          <div class="flex justify-center items-center card">
            <img
              src="/assets/img/LP_Claim/PT_ASIASINERGISOLUSINDO_INDO.jpeg"
              alt="logo 6"
            />
          </div>
          <div class="flex justify-center items-center card">
            <img
              src="/assets/img/LP_Claim/PT_8Property_INDO.jpeg"
              alt="logo 4"
            />
          </div>
          <div class="flex justify-center items-center card">
            <img src="/assets/img/LP_Claim/PT_ARSA_INDO.jpeg" alt="logo 5" />
          </div>

          <div class="flex justify-center items-center card">
            <img
              src="/assets/img/LP_Claim/PT_Carefast_INDO.jpeg"
              alt="logo 7"
            />
          </div>
          <div class="flex justify-center items-center card">
            <img src="/assets/img/LP_Claim/PT_DNX_INDO.jpeg" alt="logo 8" />
          </div>
          <div class="flex justify-center items-center card">
            <img
              src="/assets/img/LP_Claim/PT_DUAPUTRA_INDO.jpeg"
              alt="logo 9"
            />
          </div>
          <div class="flex justify-center items-center card">
            <img src="/assets/img/LP_Claim/PT_Errai_INDO.jpeg" alt="logo 10" />
          </div>
          <div class="flex justify-center items-center card">
            <img src="/assets/img/LP_Claim/PT_NETIKA_INDO.jpeg" alt="logo 11" />
          </div>
          <div class="flex justify-center items-center card">
            <img
              src="/assets/img/LP_Claim/PT_SHAMROCK_INDO.jpg"
              alt="logo 12"
            />
          </div>
          <div class="flex justify-center items-center card">
            <img src="/assets/img/LP_Claim/PT_SWA_INDO.png" alt="logo 13" />
          </div>
          <div class="flex justify-center items-center card">
            <img
              src="/assets/img/LP_Claim/PT_TIMURTERANG_INDO.jpeg"
              alt="logo 14"
            />
          </div>
          <div class="flex justify-center items-center card">
            <img
              src="/assets/img/LP_Claim/PT_TOPGUARD_INDO.jpeg"
              alt="logo 15"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Client",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
img {
  object-fit: contain;
  box-shadow: none;
  background: none;
  max-width: 80px;
  max-height: 80px;
}
.card {
  width: 170px;
  height: 80px;
}
</style>

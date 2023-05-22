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
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center"
        >
          <div v-for="(logo, index) in logos" :key="index" class="flex card">
            <img
              class="lazy-load-image"
              :data-src="logo"
              :src="placeholder"
              alt="logo {{ index + 1 }}"
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
    return {
      logos: [
        "/assets/img/LP_Claim/CAREGUARD_INDO.png",
        "/assets/img/LP_Claim/Kenso_INDO.jpeg",
        "/assets/img/LP_Claim/PT.KUANTAN_GRAHA_INDO.png",
        "/assets/img/LP_Claim/PT_8Property_INDO.jpeg",
        "/assets/img/LP_Claim/PT_ARSA_INDO.jpeg",
        "/assets/img/LP_Claim/PT_Carefast_INDO.jpeg",
        "/assets/img/LP_Claim/PT_DUAPUTRA_INDO.jpeg",
        "/assets/img/LP_Claim/PT_DNX_INDO.jpeg",
        "/assets/img/LP_Claim/PT_Errai_INDO.jpeg",
        "/assets/img/LP_Claim/PT_SWA_INDO.png",
        "/assets/img/LP_Claim/PT_TIMURTERANG_INDO.jpeg",
        "/assets/img/LP_Claim/PT_TOPGUARD_INDO.jpeg",
        "/assets/img/LP_Claim/PT_ASIASINERGISOLUSINDO_INDO.jpeg",
        "/assets/img/LP_Claim/Netika.jpeg",
        "/assets/img/LP_Claim/DPUM.jpeg",
        "/assets/img/LP_Claim/DuaPutra.jpeg",
        "/assets/img/LP_Claim/Intiland.png",
        "/assets/img/LP_Claim/Jetsons.png",
        "/assets/img/LP_Claim/shamrock.jpg",
        "/assets/img/LP_Claim/ONI.jpg",
        "/assets/img/LP_Claim/PSR.jpg",
        "/assets/img/LP_Claim/Wistara.png",
        "/assets/img/LP_Claim/Jakrelo.png",
      ],
      placeholder: "data:image/gif;base64,R0lGODlhAQABAAAAACw=",
    };
  },
  mounted() {
    let lazyImages = [...document.querySelectorAll(".lazy-load-image")];
    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function (
        entries,
        // eslint-disable-next-line no-unused-vars
        observer
      ) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy-load-image");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });
      lazyImages.forEach(function (lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    }
  },
};
</script>

<style scoped>
img {
  object-fit: contain;
  box-shadow: none;
  background: none;
  max-height: 80px;
}
.flex card {
  width: 170px;
  height: 80px;
}
</style>

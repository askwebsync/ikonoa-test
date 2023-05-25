<template>
  <div class="hero-section">
    <div class="hero-background"></div>
    <div class="hero-content">
      <div class="container mx-auto">
        <div class="max-w-4xl mx-auto text-center px-4">
          <h3 class="text-2xl md:text-4xl lg:text-5xl leading-tight">
            {{ $t("claim-experience.banner-header") }}
          </h3>
          <h4 class="max-w-3xl mx-auto mt-4 text-base md:text-lg lg:text-xl">
            {{ $t("claim-experience.banner-header-span") }}
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Hero",
  components: {},
};
</script>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 430px;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/assets/img/LP_Claim/claim.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -1;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

h3 {
  color: white;
}
</style>

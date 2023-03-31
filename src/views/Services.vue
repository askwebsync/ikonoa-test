<template>
  <HeroSection />
  <ServicesSection />
</template>

<script>
import HeroSection from "@/components/Insurancepage/Hero.vue";
import ServicesSection from "@/components/Insurancepage/Services.vue";

export default {
  name: "Services",
  components: {
    HeroSection,
    ServicesSection,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>

<template>
  <HeroSection />
  <ServicesSection />
</template>

<script>
import HeroSection from "@/components/ServicesPages/Hero.vue";
import ServicesSection from "@/components/ServicesPages/Services.vue";

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

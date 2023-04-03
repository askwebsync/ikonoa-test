<template>
  <HeroSection />
  <ServicesSection />
</template>

<script>
import HeroSection from "@/components/Servicespage/Hero.vue";
import ServicesSection from "@/components/Servicespage/Services.vue";

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

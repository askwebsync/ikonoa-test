<template>
  <section><HeroSection /> <ServicesSection /></section>
</template>

<script>
import HeroSection from "@/components/ServicesPages/Hero.vue";
import ServicesSection from "@/components/ServicesPages/Services.vue";

export default {
  name: "services",
  components: {
    HeroSection,
    ServicesSection,
  },
  data() {
    return {};
  },
};
</script>

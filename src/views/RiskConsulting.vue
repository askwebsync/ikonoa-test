<template>
  <HeroSection />
  <CategorySection />
  <WhySection />
</template>

<script>
import HeroSection from "@/components/Riskpages/Hero.vue";
import CategorySection from "@/components/Riskpages/Category.vue";
import WhySection from "@/components/Riskpages/Why.vue";

export default {
  name: "Risk Consulting",
  components: {
    HeroSection,
    CategorySection,
    WhySection,
  },
  data() {
    return {};
  },
};
</script>

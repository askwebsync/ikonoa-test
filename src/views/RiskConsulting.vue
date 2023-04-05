<template>
  <HeroSection />
  <CategorySection />
  <WhySection />
  <StepSection />
</template>

<script>
import HeroSection from "@/components/Riskpages/Hero.vue";
import CategorySection from "@/components/Riskpages/Category.vue";
import WhySection from "@/components/Riskpages/Why.vue";
import StepSection from "@/components/Riskpages/Step.vue";

export default {
  name: "Risk Consulting",
  components: {
    HeroSection,
    CategorySection,
    WhySection,
    StepSection,
  },
  data() {
    return {};
  },
};
</script>

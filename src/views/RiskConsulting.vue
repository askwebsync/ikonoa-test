<template>
  <HeroSection />
  <CategorySection />
  <WhySection />
  <StepSection />
</template>

<script>
import HeroSection from "@/components/RiskConsultingPages/Hero.vue";
import CategorySection from "@/components/RiskConsultingPages/Category.vue";
import WhySection from "@/components/RiskConsultingPages/Why.vue";
import StepSection from "@/components/RiskConsultingPages/Step.vue";

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

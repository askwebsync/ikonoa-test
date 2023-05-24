<template>
  <section>
    <HeroSection />
    <CategorySection />
    <WhySection />
    <StepSection />
  </section>
</template>

<script>
import HeroSection from "@/components/RiskConsultingPages/Hero.vue";
import CategorySection from "@/components/RiskConsultingPages/Category.vue";
import WhySection from "@/components/RiskConsultingPages/Why.vue";
import StepSection from "@/components/RiskConsultingPages/Step.vue";

export default {
  name: "risk-consulting",
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

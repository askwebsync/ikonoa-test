<template>
  <HeroSection />
  <ProductSection />
  <StepSection />
</template>

<script>
import HeroSection from "@/components/InsurancePages/Hero.vue";
import ProductSection from "@/components/InsurancePages/Product.vue";
import StepSection from "@/components/InsurancePages/Step.vue";

export default {
  name: "Insurance Policy",
  components: {
    HeroSection,
    ProductSection,
    StepSection,
  },
  data() {
    return {};
  },
};
</script>

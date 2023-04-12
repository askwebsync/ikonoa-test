<template>
  <HeroSection />
  <DetailSection />
</template>

<script>
import HeroSection from "@/components/RiskManagementPages/Hero.vue";

import DetailSection from "@/components/RiskManagementPages/Detail.vue";

export default {
  name: "Risk Management",
  components: {
    HeroSection,

    DetailSection,
  },
  data() {
    return {};
  },
};
</script>

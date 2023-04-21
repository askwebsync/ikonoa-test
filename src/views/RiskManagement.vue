<template>
  <HeroSection />
  <WhatSection />
  <DetailSection />
</template>

<script>
import HeroSection from "@/components/RiskManagementPages/Hero.vue";
import WhatSection from "@/components/RiskManagementPages/What.vue";
import DetailSection from "@/components/RiskManagementPages/Detail.vue";

export default {
  name: "Risk Management",
  components: {
    HeroSection,
    WhatSection,
    DetailSection,
  },
  data() {
    return {};
  },
};
</script>

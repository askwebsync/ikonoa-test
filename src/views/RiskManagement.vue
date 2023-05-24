<template>
  <section>
    <HeroSection />
    <WhatSection />
    <DetailSection />
  </section>
</template>

<script>
import HeroSection from "@/components/RiskManagementPages/Hero.vue";
import WhatSection from "@/components/RiskManagementPages/What.vue";
import DetailSection from "@/components/RiskManagementPages/Detail.vue";

export default {
  name: "risk-management",
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

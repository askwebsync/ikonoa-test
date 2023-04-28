<template>
  <HeroSection />
  <WorkSection />
</template>

<script>
import HeroSection from "@/components/ClaimExperiencePages/Hero.vue";
import WorkSection from "@/components/ClaimExperiencePages/Work.vue";

export default {
  name: "Home",
  components: {
    HeroSection,
    WorkSection,
  },
  data() {
    return {};
  },
};
</script>

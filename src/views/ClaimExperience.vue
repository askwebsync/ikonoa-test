<template>
  <HeroSection />
  <WorkSection />
  <ClientSection />
</template>

<script>
import HeroSection from "@/components/ClaimExperiencePages/Hero.vue";
import WorkSection from "@/components/ClaimExperiencePages/Work.vue";
import ClientSection from "@/components/ClaimExperiencePages/Client.vue";

export default {
  name: "Home",
  components: {
    HeroSection,
    WorkSection,
    ClientSection,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <section>
    <HeroSection />
    <WorkSection />
    <ClientSection />
  </section>
</template>

<script>
import HeroSection from "@/components/ClaimExperiencePages/Hero.vue";
import WorkSection from "@/components/ClaimExperiencePages/Work.vue";
import ClientSection from "@/components/ClaimExperiencePages/Client.vue";

export default {
  name: "claim-experience",
  components: {
    HeroSection,
    WorkSection,
    ClientSection,
  },
};
</script>

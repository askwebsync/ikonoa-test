<template>
  <section>
    <HeroSection />
    <VisiMisiSection />
    <TeamSection />
  </section>
</template>

<script>
import HeroSection from "@/components/AboutPages/Hero.vue";
import TeamSection from "@/components/AboutPages/Team.vue";
import VisiMisiSection from "@/components/AboutPages/VisiMisi.vue";

export default {
  name: "about",
  components: {
    HeroSection,
    TeamSection,
    VisiMisiSection,
  },
};
</script>

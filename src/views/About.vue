<template>
  <HeroSection />
  <VisiMisiSection />
  <TeamSection />
</template>

<script>
import HeroSection from "@/components/AboutPages/Hero.vue";
import TeamSection from "@/components/AboutPages/Team.vue";
import VisiMisiSection from "@/components/AboutPages/VisiMisi.vue";

export default {
  name: "Home",
  components: {
    HeroSection,
    TeamSection,
    VisiMisiSection,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <HeroSection />
  <VisiMisiSection />
  <TeamSection />
</template>

<script>
import HeroSection from "@/components/Aboutpage/Hero.vue";
import TeamSection from "@/components/Aboutpage/Team.vue";
import VisiMisiSection from "@/components/Aboutpage/VisiMisi.vue";

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

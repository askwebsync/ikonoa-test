<template>
  <HeroSection />
  <div class="space-y-12 py-12">
    <VisiMisiSection />
    <TeamSection />
  </div>
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

<style scoped></style>

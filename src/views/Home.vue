<template>
  <HeroSection />
  <AboutSection />
  <ServiceSection />
  <ProductSection />
  <AchievmentSection />
  <AcademySection />
</template>

<script>
import HeroSection from "@/components/Homepage/Hero.vue";
import ServiceSection from "@/components/Homepage/Services.vue";
import ProductSection from "@/components/Homepage/Product.vue";
import AchievmentSection from "@/components/Homepage/Achievment.vue";
import AboutSection from "@/components/Homepage/About.vue";
import AcademySection from "@/components/Homepage/Academy.vue";

export default {
  name: "Home",
  components: {
    HeroSection,
    ServiceSection,
    ProductSection,
    AchievmentSection,
    AboutSection,
    AcademySection,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>

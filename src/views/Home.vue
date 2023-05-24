<template>
  <section>
    <HeroSection />
    <AboutSection />
    <ServiceSection />
    <ProductSection />
    <AchievmentSection />
    <AcademySection />
  </section>
</template>

<script>
import HeroSection from "@/components/Homepages/Hero.vue";
import ServiceSection from "@/components/Homepages/Services.vue";
import ProductSection from "@/components/Homepages/Product.vue";
import AchievmentSection from "@/components/Homepages/Achievment.vue";
import AboutSection from "@/components/Homepages/About.vue";
import AcademySection from "@/components/Homepages/Academy.vue";

export default {
  name: "home",
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

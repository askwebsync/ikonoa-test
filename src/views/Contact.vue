<template>
  <HeroSection />
  <FormSection />
  <LocationSection />
</template>

<script>
import HeroSection from "@/components/Contactpage/Hero.vue";
import FormSection from "@/components/Contactpage/Form.vue";
import LocationSection from "@/components/Contactpage/Location.vue";

export default {
  name: "Home",
  components: {
    HeroSection,
    FormSection,
    LocationSection,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>

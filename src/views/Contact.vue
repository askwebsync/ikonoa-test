<template>
  <HeroSection />
  <FormSection />
  <LocationSection />
</template>

<script>
import HeroSection from "@/components/ContactPages/Hero.vue";
import FormSection from "@/components/ContactPages/Form.vue";
import LocationSection from "@/components/ContactPages/Location.vue";

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

<template>
  <section>
    <HeroSection />
    <FormSection />
    <LocationSection />
  </section>
</template>

<script>
import HeroSection from "@/components/ContactPages/Hero.vue";
import FormSection from "@/components/ContactPages/Form.vue";
import LocationSection from "@/components/ContactPages/Location.vue";

export default {
  name: "contact",
  components: {
    HeroSection,
    FormSection,
    LocationSection,
  },
};
</script>

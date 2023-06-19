<template>
  <section>
    <HeroSection />
    <WhatSection />
    <MeetingSection />
  </section>
</template>

<script>
import HeroSection from "@/components/Academy/Hero.vue";
import WhatSection from "@/components/Academy/What.vue";
import MeetingSection from "@/components/Academy/Meeting.vue";

export default {
  name: "academy",
  components: {
    HeroSection,
    WhatSection,
    MeetingSection,
  },
};
</script>

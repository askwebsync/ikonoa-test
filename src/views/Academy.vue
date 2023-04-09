<template>
  <HeroSection />
  <WhatSection />
  <MeetingSection />
</template>

<script>
import HeroSection from "@/components/Academy/Hero.vue";
import WhatSection from "@/components/Academy/What.vue";
import MeetingSection from "@/components/Academy/Meeting.vue";

export default {
  name: "Academy",
  components: {
    HeroSection,
    WhatSection,
    MeetingSection,
  },
  data() {
    return {};
  },
};
</script>

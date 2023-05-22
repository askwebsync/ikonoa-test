<template>
  <div class="app-container">
    <app-header />
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <div :key="route.name">
          <component :is="Component"></component>
        </div>
      </transition>
    </router-view>
    <app-footer />
    <a
      href="https://wa.me/message/OSIGF5SRDOANJ1"
      class="float"
      aria-label="Call US"
      target="_blank"
    >
      <i class="fab fa-whatsapp my-float"></i>
    </a>
  </div>
</template>

<script>
import AppHeader from "@/components/Header.vue";
import AppFooter from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {};
  },
};
</script>

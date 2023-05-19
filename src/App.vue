<template>
  <!-- <div v-if="loading" class="h-screen flex items-center justify-center">
    <div class="spinner w-12 h-12 mx-auto text-gray-600 animate-spin"></div>
  </div> -->
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
    return {
      // loading: true,
    };
  },
  // created() {
  //   setTimeout(() => {
  //     if (this.loading) {
  //       this.loading = false;
  //     }
  //   }, 1000);
  // },
};
</script>

<style></style>

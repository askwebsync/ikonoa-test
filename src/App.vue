<template>
  <div>
    <header class="bg-white border-b-2 sticky top-0 z-10">
      <app-header />
    </header>
    <main class="app-main">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <footer class="app-footer">
      <app-footer />
    </footer>
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

<template>
  <div v-if="loading" class="h-screen flex items-center justify-center">
    <div class="spinner w-12 h-12 mx-auto text-gray-600 animate-spin"></div>
  </div>
  <div class="app-container" v-if="!loading">
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
      href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
      class="float"
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
      loading: true,
    };
  },
  created() {
    setTimeout(() => {
      if (this.loading) {
        this.loading = false;
      }
    }, 1000);
  },
};
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.router-view {
  flex: 1;
}

.app-footer {
  margin-top: auto;
}
.slideFade-enter-active,
.slideFade-leave-active {
  transition: opacity 1s;
}

.slideFade-enter,
.slideFade-leave-to {
  opacity: 0;
}

.spinner {
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-left-color: #3490dc;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 30px;
  right: 30px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
}

.my-float {
  margin-top: 16px;
}
</style>

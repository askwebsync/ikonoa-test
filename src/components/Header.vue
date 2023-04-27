<template>
  <header class="border-b-2">
    <nav
      class="container px-4 md:px-8 lg:px-24 py-2 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between focus:outline-none">
        <router-link :to="{ name: 'home' }">
          <img
            src="/assets/img/Icon/logo.png"
            class="w-28 h-12 lg:w-32 lg:h-16 object-contain"
            alt="logo"
          />
        </router-link>
        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex md:hidden">
          <button
            :class="{ opened: showMenu }"
            type="button"
            class="menu text-red-500 hover:text-red-600 focus:outline-none"
          >
            <svg
              viewBox="0 0 100 100"
              class="h-8 w-8 cursor-pointer md:hidden block"
            >
              <path
                class="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path class="line line2" d="M 20,50 H 80" />
              <path
                class="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
              <title>Menu</title>
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 gap-y-3 items-center text-center md:flex md:gap-y-0 md:flex-row md:gap-x-4 lg:gap-x-4 xl:gap-x-8 md:mt-0 cursor-pointer"
      >
        <li
          @click="showMenu = !showMenu"
          class="text-sm lg:text-base hover:text-red-600 focus:outline-none"
        >
          <router-link :to="{ name: 'about' }" class="font-medium"
            >About</router-link
          >
        </li>
        <li
          @click="showMenu = !showMenu"
          class="text-sm lg:text-base hover:text-red-600 focus:outline-none"
        >
          <router-link :to="{ name: 'services' }" class="font-medium"
            >Services & Solutions</router-link
          >
        </li>
        <li
          @click="showMenu = !showMenu"
          class="text-sm lg:text-base hover:text-red-600 focus:outline-none"
        >
          <router-link :to="{ name: 'insurance-policy' }" class="font-medium"
            >Insurance Policy</router-link
          >
        </li>
        <li
          @click="showMenu = !showMenu"
          class="text-sm lg:text-base hover:text-red-600 focus:outline-none"
        >
          <router-link :to="{ name: 'about' }" class="font-medium"
            >Claim Experience</router-link
          >
        </li>
        <li
          @click="showMenu = !showMenu"
          class="text-sm lg:text-base hover:text-red-600 focus:outline-none"
        >
          <router-link :to="{ name: 'contact' }" class="font-medium"
            >Contact</router-link
          >
        </li>
        <li>
          <div
            @click="changeLanguage"
            class="flex flex-row items-center place-content-center mt-2 ml-0 md:ml-1 md:mt-0 lg:ml-6 xl:ml-10 focus:outline-none"
          >
            <img
              class="w-6 h-6 mr-1 focus:outline-none"
              :src="flagImage"
              :alt="flagAltText"
            />
            <a
              class="md:py-2 py-3 text-sm lg:text-base hover:text-red-600 focus:outline-none font-bold text-gray-600"
              href="#"
              >{{ language }}</a
            >
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: "AppHeader",
  computed: {
    currentLocale() {
      return this.$i18n.locale === "fr" ? "French" : "English";
    },
  },
  data() {
    return {
      showMenu: false,
      language: "ENG",
      flagImage: "/assets/img/Icon/eng.png",
      flagAltText: "Nation Flag",
    };
  },

  toggleNav: function () {
    this.showMenu = !this.showMenu;
    this.showDiv = !this.showDiv;
  },
  methods: {
    changeLanguage() {
      if (this.language === "ENG") {
        this.language = "ID";
        this.$i18n.locale = "id";
        this.flagImage = "/assets/img/Icon/ind.png";
        this.flagAltText = "Indonesia Flag";
      } else {
        this.language = "ENG";
        this.$i18n.locale = "en";
        this.flagImage = "/assets/img/Icon/eng.png";
        this.flagAltText = "English Flag";
      }
    },
  },
};
</script>
<style>
.menu {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
}
.line {
  fill: none;
  stroke: indianred;
  stroke-width: 67;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 7;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 7;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 7;
}
.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 7;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 7;
}

li .a {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  letter-spacing: 0.1px;
  color: #17171f;
}
</style>

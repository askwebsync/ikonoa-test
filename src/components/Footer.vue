<template>
  <footer class="background-footer">
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
      <div
        class="gap-y-16 flex flex-col justify-between text-center lg:text-left md:gap-x-6 lg:flex-row lg:gap-y-0"
      >
        <div class="lg:w-1/3">
          <div class="flex flex-col items-center lg:items-start gap-2">
            <img
              src="/assets/img/Icon/logo.png"
              class="w-28 h-12 object-contain"
              alt="logo"
              width="112"
              height="48"
            />

            <p class="text-md md:text-lg font-medium max-w-xs text-white">
              {{ $t("footer.card1-header") }}
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:w-2/3 lg:ml-3">
          <div class="space-y-4">
            <h3 class="text-lg">{{ $t("footer.card2-header") }}</h3>
            <ul class="space-y-2 text-white">
              <!-- List items here -->
            </ul>
          </div>
          <div class="space-y-4">
            <h3 class="text-lg">{{ $t("footer.card3-header") }}</h3>
            <ul class="space-y-2 text-white">
              <!-- List items here -->
            </ul>
          </div>
          <div class="space-y-4">
            <h3 class="text-lg">{{ $t("footer.card4-header") }}</h3>
            <ul class="space-y-3 text-white">
              <!-- List items here -->
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="py-8 text-sm text-center text-white border-t">
      © 2023 PT.Ikonoa Solusindo Asia. All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
li p {
  color: #fdfdff;
}

h3 {
  color: #ffff00;
}

footer a {
  padding: 8px;
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
}

footer a:hover {
  background-color: #333;
}

footer {
  height: 450px; /* Adjust the height as needed */
}
</style>

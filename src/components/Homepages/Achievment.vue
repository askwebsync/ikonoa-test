<template>
  <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
    <div class="flex flex-col gap-4 md:gap-2 text-center">
      <h3 class="text-xl md:text-2xl lg:text-3xl">
        {{ $t("home.achievment-header") }}
      </h3>
      <h2 class="text-xl md:text-2xl lg:text-3xl">
        {{ $t("home.achievment-subheader") }}
      </h2>
    </div>
  </div>
  <div class="py-4">
    <div class="background-product">
      <div class="container mx-auto px-4 py-6 md:px-8 lg:px-24">
        <div
          class="grid grid-cols-1 md:grid-cols-3 justify-items-center divide-y-2 md:divide-x-2 md:divide-y-0 divide-black text-center"
        >
          <div
            class="flex flex-col justify-center items-center px-10 py-5 mb-3 md:mb-0 h-full w-full"
          >
            <h1 class="text-3xl lg:text-5xl intersecting-number mb-1">98%</h1>
            <p class="text-sm card-text-color">
              {{ $t("home.achievment-card1-text") }}
            </p>
          </div>
          <div
            class="flex flex-col justify-center items-center px-10 py-5 mb-3 md:mb-0 h-full w-full"
          >
            <h1 class="text-3xl lg:text-5xl intersecting-number mb-1">
              USD 250+M
            </h1>
            <p class="text-sm card-text-color">
              {{ $t("home.achievment-card2-text") }}
            </p>
          </div>
          <div
            class="flex flex-col justify-center items-center px-10 py-5 h-full w-full"
          >
            <h1 class="text-3xl lg:text-5xl intersecting-number mb-1">
              7,500+
            </h1>
            <p class="text-sm card-text-color">
              {{ $t("home.achievment-card3-text") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Achievment",
  mounted() {
    const intersectingNumbers = document.querySelectorAll(
      ".intersecting-number"
    );

    const observerOptions = {
      threshold: 0.8, // Percentage of element visibility required to trigger the intersection callback
    };

    const intersectionCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-counter"); // Add a CSS class to animate the numbers
          observer.unobserve(entry.target); // Stop observing once the animation has been triggered
        }
      });
    };

    const observer = new IntersectionObserver(
      intersectionCallback,
      observerOptions
    );

    intersectingNumbers.forEach((number) => {
      observer.observe(number);
    });
  },
};
</script>

<style scoped>
h1 {
  font-weight: 700;
  color: #17171f;
}

.animate-counter {
  animation: animateCounter 2s ease-in-out forwards;
}

@keyframes animateCounter {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

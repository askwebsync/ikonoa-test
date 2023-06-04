<template>
  <div class="container mx-auto px-4 py-14 md:px-8 lg:px-24">
    <div class="flex flex-col gap-10 md:gap-12 lg:gap-14">
      <div class="flex flex-col gap-2 text-center">
        <h3 class="text-xl md:text-2xl lg:text-3xl">
          {{ $t("insurance.buy-procces-header") }}
        </h3>
        <h2 class="text-lg md:text-xl lg:text-2xl text-gray-300">
          {{ $t("insurance.buy-procces-subheader") }}
        </h2>
      </div>

      <Carousel :settings="settings" :breakpoints="breakpoints">
        <Slide v-for="(slide, index) in slides" :key="index">
          <div class="carousel__item">
            <div class="flex flex-col gap-10 px-4 items-center justify-center">
              <h3 class="text-xl md:text-2xl lg:text-3xl">
                {{ getSlideTitle(index) }}
              </h3>
              <div
                class="flex items-center justify-center px-6 py-5 border-step"
              >
                <img
                  :src="`/assets/img/Services/${slide.image}`"
                  alt="step-step"
                  class="h-12 w-12 lg:h-14 lg:w-14 object-cover object-center"
                />
              </div>
              <p class="text-sm sm:text-md md:text-lg lg:text-xl max-w-md">
                {{ getSlideDescription(index) }}
              </p>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      slides: [
        {
          title: "insurance.buy-procces-card1-header",
          image: "step-1.png",
          description: "insurance.buy-procces-card1-explanation",
        },
        {
          title: "insurance.buy-procces-card2-header",
          image: "step-2.png",
          description: "insurance.buy-procces-card2-explanation",
        },
        {
          title: "insurance.buy-procces-card3-header",
          image: "step-3.png",
          description: "insurance.buy-procces-card3-explanation",
        },
        {
          title: "insurance.buy-procces-card4-header",
          image: "step-4.png",
          description: "insurance.buy-procces-card4-explanation",
        },
        {
          title: "insurance.buy-procces-card5-header",
          image: "step-5.png",
          description: "insurance.buy-procces-card5-explanation",
        },
      ],
      settings: {
        itemsToShow: 1,
        snapAlign: "start",
      },
      breakpoints: {
        700: {
          itemsToShow: 1,
          snapAlign: "start",
        },
      },
    };
  },
  methods: {
    getSlideTitle(index) {
      return this.$t(this.slides[index].title);
    },
    getSlideDescription(index) {
      return this.$t(this.slides[index].description);
    },
  },
};
</script>

<style scoped>
h2 {
  font-weight: 700;
  color: #3b3b3b;
}
p {
  color: #4f4f4f;
}
.border-step {
  border: 2px solid #17171f;
  border-radius: 100px;
}
.carousel__item {
  background-color: #f2f2f2 !important;
  color: var(--vc-clr-white);
  border: 2px solid #17171f;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 530px;
  width: 80%;
}

@media only screen and (min-width: 768px) {
  /* For desktop: */
  .carousel__item {
    width: 75% !important;
  }
}

@media only screen and (min-width: 992px) {
  .carousel__item {
    width: 70% !important;
  }
}
@media only screen and (min-width: 1280px) {
  .carousel__item {
    width: 65% !important;
  }
}
</style>

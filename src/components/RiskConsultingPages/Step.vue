<template>
  <div class="container mx-auto px-4 py-14 md:px-8 lg:px-24">
    <div class="flex flex-col gap-10 md:gap-12 lg:gap-12">
      <div class="flex flex-col gap-2 text-center">
        <h3 class="text-2xl lg:text-3xl">
          {{ $t("risk-consulting.claim-procces-header") }}
        </h3>
        <h2 class="text-xl md:text-2xl">
          {{ $t("risk-consulting.claim-procces-subheader") }}
        </h2>
      </div>
      <Carousel :settings="settings" :breakpoints="breakpoints">
        <Slide v-for="(slide, index) in slides" :key="index">
          <div class="carousel__item">
            <div class="flex flex-col gap-10 p-4 items-center justify-center">
              <h3 class="text-xl lg:text-2xl">
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
              <div class="md:mt-5 md:h-48">
                <p
                  class="text-sm sm:text-md md:text-lg lg:text-xl max-w-xs md:max-w-md"
                >
                  {{ getSlideDescription(index) }}
                </p>
              </div>
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
          title: "risk-consulting.claim-procces-card1-header",
          image: "step-1.png",
          description: "risk-consulting.claim-procces-card1-explanation",
        },
        {
          title: "risk-consulting.claim-procces-card2-header",
          image: "step-2.png",
          description: "risk-consulting.claim-procces-card2-explanation",
        },
        {
          title: "risk-consulting.claim-procces-card3-header",
          image: "step-3.png",
          description: "risk-consulting.claim-procces-card3-explanation",
        },
        {
          title: "risk-consulting.claim-procces-card4-header",
          image: "step-4.png",
          description: "risk-consulting.claim-procces-card4-explanation",
        },
        {
          title: "risk-consulting.claim-procces-card5-header",
          image: "step-5.png",
          description: "risk-consulting.claim-procces-card5-explanation",
        },
      ],
      settings: {
        itemsToShow: 1,
        snapAlign: "start",
      },
      breakpoints: {
        700: {
          itemsToShow: 1,
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

h2 {
  font-weight: 700;
  color: #3b3b3b;
}
p {
  color: #4f4f4f;
  letter-spacing: -0.25px;
  line-height: 25px;
}
.border-step {
  border: 2px solid #17171f;
  border-radius: 100px;
}
</style>

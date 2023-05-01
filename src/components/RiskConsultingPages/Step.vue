<template>
  <section>
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
              <div
                class="flex flex-col gap-8 lg:gap-10 xl:gap-12 px-4 items-center justify-center"
              >
                <h3 class="text-xl md:text-2xl lg:text-3xl">
                  {{ getSlideTitle(index) }}
                </h3>
                <div
                  class="flex items-center justify-center px-6 py-5 border-step"
                >
                  <img
                    :src="`/assets/img/Services/${slide.image}`"
                    alt="step-step"
                    class="w-full h-12 w-12 lg:h-14 lg:w-14 object-cover object-center"
                  />
                </div>
                <div class="md:mt-5 md:h-48">
                  <p class="text-md md:text-lg xl:text-xl max-w-xs md:max-w-md">
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
  </section>
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
        snapAlign: "center",
      },
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 2,
          snapAlign: "start",
        },
      },
    };
  },

  methods: {
    next() {
      this.activeIndex = (this.activeIndex + 1) % this.teamMembers.length;
      this.offset += 300;
    },
    prev() {
      this.activeIndex =
        (this.activeIndex - 1 + this.teamMembers.length) %
        this.teamMembers.length;
      this.offset -= 300;
    },
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
  height: 580px;
  width: 85% !important;
  background-color: white;
  color: var(--vc-clr-white);
  border: 1.5px solid #17171f;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  color: #3b3b3b;
}
p {
  color: #4f4f4f;
  letter-spacing: -0.05px;
  line-height: 25px;
}
.border-step {
  border: 2px solid #17171f;
  border-radius: 100px;
}
/* .claim-card {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 140px;
  height: 140px;
  border: 2px solid #17171f;
  border-radius: 100px;
} */
</style>

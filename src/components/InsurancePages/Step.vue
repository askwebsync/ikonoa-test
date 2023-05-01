<template>
  <section class="background-product">
    <div class="container mx-auto px-4 py-14 md:px-8 lg:px-24">
      <div class="flex flex-col gap-10 md:gap-12 lg:gap-14">
        <div class="flex flex-col gap-2 text-center">
          <h3 class="text-xl md:text-2xl lg:text-3xl">HOW TO BUY</h3>
          <h2 class="text-lg md:text-xl lg:text-2xl text-gray-300">
            A step-by-step guide to buy insurance policy product
          </h2>
        </div>

        <Carousel :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="slide in slides" :key="slide">
            <div class="carousel__item">
              <div
                class="flex flex-col gap-8 lg:gap-10 xl:gap-12 px-4 items-center justify-center"
              >
                <h3 class="text-xl lg:text-2xl">{{ slide.title }}</h3>
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
                  <p class="text-md md:text-lg lg:text-xl max-w-xs md:max-w-md">
                    {{ slide.description }}
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
          title: "1. Risk Survey",
          image: "step-1.png",
          description:
            "Our risk survey is a comprehensive evaluation of your unique risk profile. By answering a series of questions, we'll be able to identify the specific risks you face and determine the coverage you need to protect yourself, your family, and your assets.",
        },
        {
          title: "2. Risk Placement",
          image: "step-2.png",
          description:
            "Risk placement involves selecting the most appropriate insurance policy for the prospective policyholder, based on their specific risk profile and coverage needs.",
        },
        {
          title: "3. Personalized Coverage Offer",
          image: "step-3.png",
          description:
            "After completing the risk survey and having your risk placed into an insurance policy, our team will offer you a personalized coverage plan that takes into account your unique needs and characteristics. This plan will include a detailed quotation of premium prices and coverage options, so you can make an informed decision about which policy is right for you.",
        },
        {
          title: "4. Cover Note & Policy Issue",
          image: "step-4.png",
          description:
            "Once the premium has been paid and the coverage offer has been accepted, the insurance company issues a cover note and insurance policy to the policyholder. The cover note provides temporary coverage until the policy is issued and also serves as proof of insurance. The policy outlines the terms and conditions of the insurance coverage and should be kept in a safe place for future reference.",
        },
        {
          title: "5. Premium Payment",
          image: "step-5.png",
          description:
            "The payment of the agreed-upon premium by the policyholder to the insurance company, allowing for the activation and continuation of their coverage.",
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
  font-weight: 700;
  letter-spacing: -0.25px;
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
</style>

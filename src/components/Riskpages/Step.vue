<!-- eslint-disable vue/valid-v-for -->
<template>
  <section>
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
      <div class="flex flex-col gap-10">
        <div class="flex flex-col gap-2 text-center">
          <h3 class="text-xl md:text-2xl lg:text-3xl">HOW TO CLAIM</h3>
          <h2 class="text-lg md:text-xl lg:text-2xl text-gray-300">
            Steps to claim your insurances
          </h2>
        </div>

        <Carousel :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="slide in slides" :key="slide">
            <div class="carousel__item">
              <div
                class="flex flex-col gap-8 px-6 py-8 items-center justify-center"
              >
                <h3 class="text-xl">{{ slide.title }}</h3>
                <div class="flex items-center justify-center p-4 border-step">
                  <img
                    :src="`/assets/img/Detail-Services/${slide.image}`"
                    alt="xx"
                  />
                </div>
                <p class="text-lg max-w-xs mt-5">
                  {{ slide.description }}
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
          title: "1. Report & Survey",
          image: "step-1.png",
          description:
            "The first step involves reporting your claim. You can report your claim online through whatsapp application",
        },
        {
          title: "2. Documentation",
          image: "https://via.placeholder.com/150",
          description:
            "Complete supporting documents as evidence to verify claims submitted by policy holders.",
        },
        {
          title: "3. Evaluation",
          image: "https://via.placeholder.com/150",
          description:
            "Ensure that claims are processed correctly and compensation provided is in accordance with the provisions of the policy.",
        },
        {
          title: "4. Policy Adjusment",
          image: "https://via.placeholder.com/150",
          description:
            "determine whether the losses experienced by the policyholder can be covered by the policy that has been purchased or not.",
        },
        {
          title: "5. Settlement",
          image: "https://via.placeholder.com/150",
          description:
            "Payments made by insurance companies to policyholders as compensation for losses that have been suffered in accordance with the provisions of the policy.",
        },
      ],
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 2,
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
  min-height: 345px;
  width: 80%;
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
  letter-spacing: 0.5px;
  color: #3b3b3b;
}
p {
  color: #4f4f4f;
}
.border-step {
  border: 2px solid #17171f;
  border-radius: 100px;
}
</style>

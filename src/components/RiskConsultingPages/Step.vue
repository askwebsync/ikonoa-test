<template>
  <section>
    <div class="container mx-auto px-4 py-14 md:px-8 lg:px-24">
      <div class="flex flex-col gap-10 md:gap-12 lg:gap-12">
        <div class="flex flex-col gap-2 text-center">
          <h3 class="text-2xl lg:text-3xl">HOW TO CLAIM</h3>
          <h2 class="text-xl md:text-2xl">
            A step-by-step guide to making an insurance claim with ease
          </h2>
        </div>
        <Carousel :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="slide in slides" :key="slide">
            <div class="carousel__item">
              <div class="flex flex-col gap-8 items-center justify-center">
                <h3 class="text-xl lg:text-2xl xl:text-3xl">
                  {{ slide.title }}
                </h3>
                <div
                  class="flex items-center justify-center px-6 py-5 border-step"
                >
                  <img
                    :src="`/assets/img/Services/${slide.image}`"
                    alt="step-step"
                  />
                </div>
                <p class="text-lg max-w-xs mt-5 px-5 md:max-w-md">
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
            "The first step in the claim process is reporting your claim. You can report your claim easily through our website or WhatsApp. Our team will then conduct a survey to assess the damage and provide you with further instructions.",
        },
        {
          title: "2. Documentation",
          image: "step-2.png",
          description:
            "During the second step of the claims process, our team will work with you to gather all the necessary documentation to support your claim. From photographs to receipts and other relevant documents, we'll ensure that you have everything you need to file a successful claim.",
        },
        {
          title: "3. Evaluation",
          image: "step-3.png",
          description:
            "During the third step of the claim process, our team will review and evaluate your claim to ensure that it is processed accurately. We understand that fair compensation is essential, and we will ensure that you receive the compensation you are entitled to according to the provisions of your policy.",
        },
        {
          title: "4. Policy Liability Assessment",
          image: "step-4.png",
          description:
            "During the fourth step of the claim process, our team will adjust your claim to determine whether the losses experienced can be covered by the policy you have purchased. We will provide you with all the necessary information to help you understand your policy liability.",
        },
        {
          title: "5. Claim Settlement",
          image: "step-5.png",
          description:
            "The fifth and final step of the claim process involves finalizing your claim and providing you with compensation for the losses you have suffered. Our team will ensure that the settlement is made promptly and efficiently in accordance with the provisions of your policy.",
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
  height: 500px;
  width: 85%;
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
</style>

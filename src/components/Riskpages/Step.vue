<!-- eslint-disable vue/valid-v-for -->
<template>
  <section>
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
      <div class="flex flex-col gap-10">
        <div class="flex self-center items-center text-center">
          <h2 class="text-2xl md:text-3xl">Claim Process</h2>
        </div>

        <Carousel :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="slide in slides" :key="slide">
            <div class="carousel__item">
              <div class="flex flex-col gap-8 p-8 items-center justify-center">
                <h3 class="text-xl">Step 1 - Report & Survey</h3>
                <div class="flex items-center justify-center p-4 border-step">
                  <img src="/assets/img/Detail-Services/step-1.png" alt="xx" />
                </div>
                <p class="text-lg max-w-xs">
                  The first step involves reporting your claim. You can report
                  your claim online through whatsapp application
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
          name: "John Doe",
          title: "CEO",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Jane Smith",
          title: "CTO",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Bob Johnson",
          title: "CFO",
          image: "https://via.placeholder.com/150",
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

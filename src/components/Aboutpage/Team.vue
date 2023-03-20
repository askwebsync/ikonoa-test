<!-- eslint-disable vue/valid-v-for -->
<template>
  <section class="">
    <div class="container mx-auto">
      <div class="flex flex-col">
        <div class="flex mb-6 self-center items-center text-center">
          <h3 class="text-xl md:text-2xl">Our Team</h3>
        </div>

        <Carousel :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="slide in slides" :key="slide">
            <div class="carousel__item">
              <div class="flex flex-col gap-5 items-center justify-center">
                <img
                  :src="slide.image"
                  class="w-32 h-32 rounded-md object-cover transition duration-200 hover:scale-110"
                />

                <div class="text-gray-900 text-lg font-bold">
                  {{ slide.name }}
                </div>

                <div class="text-black">{{ slide.title }}</div>

                <div
                  class="flex items-center justify-center gap-3 mt-2 w-auto h-5 text-gray-600"
                >
                  <i
                    class="fab fa-twitter fa-lg cursor-pointer transition duration-200 hover:text-gray-400"
                  ></i>
                  <i
                    class="fab fa-linkedin fa-lg cursor-pointer transition duration-200 hover:text-gray-400"
                  ></i>
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
          itemsToShow: 3,
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
h2 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  color: #17171f;
  letter-spacing: 0.1px;
}
h3 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  color: #d50000;
}
.carousel__item {
  min-height: 300px;
  width: 80%;
  background-color: #eeebe5;
  color: var(--vc-clr-white);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 4px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>

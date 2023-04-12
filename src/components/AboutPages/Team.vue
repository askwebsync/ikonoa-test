<!-- eslint-disable vue/valid-v-for -->
<template>
  <section>
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
      <div class="flex flex-col gap-10">
        <div class="flex self-center items-center text-center">
          <h3 class="text-xl md:text-3xl">Our Team</h3>
        </div>

        <Carousel :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="slide in slides" :key="slide">
            <div class="carousel__item">
              <div class="flex flex-col gap-5 items-center justify-center">
                <img
                  :src="slide.image"
                  class="w-44 h-44 rounded-md object-cover transition duration-200 hover:scale-110"
                />
                <div class="flex flex-col gap-6">
                  <div>
                    <h2 class="text-xl">
                      {{ slide.name }}
                    </h2>
                    <p class="text-gray-400">{{ slide.title }}</p>
                  </div>
                  <div
                    class="flex items-center justify-center gap-3 w-auto h-5 text-gray-600"
                  >
                    <i
                      class="fab fa-twitter fa-lg cursor-pointer transition duration-200 text-black hover:text-gray-400"
                    ></i>
                    <i
                      class="fab fa-linkedin fa-lg cursor-pointer transition duration-200 text-black hover:text-gray-400"
                    ></i>
                  </div>
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

<style></style>

<template>
  <section class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
    <div class="flex flex-col items-center justify-center gap-10 space-y-8">
      <div class="flex flex-col gap-2 text-center">
        <h3 class="text-xl md:text-2xl lg:text-3xl">MEET THE TEAM</h3>
        <h2 class="text-lg md:text-xl lg:text-2xl text-gray-300">
          Some of the people you'll be working with
        </h2>
      </div>
      <div class="flex flex-wrap justify-center gap-4">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="flex flex-col justify-center mx-2 text-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
        >
          <div
            class="flex items-center justify-center self-center w-24 h-24 mb-2 rounded-full bg-center bg-cover dark:bg-gray-500"
          >
            <img
              alt="image"
              class="w-full h-full rounded-full"
              :src="slide.image"
            />
          </div>
          <p class="mt-1 text-base font-semibold">{{ slide.name }}</p>
          <p class="mt-1 text-gray-500 dark:text-gray-400">{{ slide.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          name: "Jerry Firsonia, AIIS, CIIB",
          title: "President Director",
          image: "/assets/img/LP_About/jerry.jpeg",
        },
        {
          name: "Dr. Yutrizal Jacoub, SE, MM",
          title: "Senior Associate",
          image: "/assets/img/LP_About/yutrizal.jpg",
        },
        {
          name: "Antonius Tobing, Sr. Assoc. ANZIIF",
          title: "Marketing Director",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Dan Sudira, Sr. Assoc. ANZIIF",
          title: "Senior Consultant",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Bagus. S, SH ",
          title: "Senior Consultant",
          image: "https://via.placeholder.com/150",
        },
      ],
    };
  },
  methods: {
    next() {
      this.activeIndex = (this.activeIndex + 1) % this.slides.length;
      this.carousel.style.transform = `translateX(-${
        this.activeIndex * this.itemWidth
      }px)`;
    },

    prev() {
      this.activeIndex =
        (this.activeIndex - 1 + this.slides.length) % this.slides.length;
      this.carousel.style.transform = `translateX(-${
        this.activeIndex * this.itemWidth
      }px)`;
    },
  },
};
</script>

<style scoped>
h2 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.25px;
  color: #3b3b3b;
}
</style>

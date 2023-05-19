<template>
  <section class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
    <div class="flex flex-col items-center justify-center gap-10 space-y-8">
      <div class="flex flex-col gap-2 text-center">
        <h3 class="text-xl md:text-2xl lg:text-3xl">OUR TEAM</h3>
        <h2 class="text-lg md:text-xl lg:text-2xl text-gray-300">
          Some of the people you'll be working with
        </h2>
      </div>
      <div class="flex flex-wrap justify-center">
        <!-- Member -->
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-6 px-6 sm:px-6 lg:px-4"
        >
          <div class="flex flex-col gap-5">
            <!-- Avatar -->

            <div class="aspect-w-1 aspect-h-1 self-center">
              <img
                class="object-fit rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                :src="slide.image"
                alt="Avatar"
                style="width: 160px; height: 180px"
              />
            </div>

            <!-- Details -->
            <div class="text-center mt-6">
              <!-- Name -->
              <h1 class="text-gray-900 text-xl font-bold mb-1">
                {{ slide.name }}
              </h1>

              <!-- Title -->
              <div class="text-gray-700 font-light mb-2">
                {{ slide.title }}
              </div>
            </div>
          </div>
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
          name: "Antonius Tobing, Sr. Assoc. ANZIIF",
          title: "Marketing Director",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Bagus. S, SH ",
          title: "Senior Consultant",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Dan Sudira, Sr. Assoc. ANZIIF",
          title: "Senior Consultant",
          image: "/assets/img/LP_About/dan.jpg",
        },
        {
          name: "Dr. Yutrizal Jacoub, SE, MM",
          title: "Senior Associate",
          image: "/assets/img/LP_About/yutrizal.jpg",
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

<template>
  <section class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
    <div class="flex flex-col items-center justify-center gap-10 space-y-8">
      <div class="flex flex-col gap-2 text-center">
        <h3 class="text-xl md:text-2xl lg:text-3xl">OUR TEAM</h3>
        <h2 class="text-lg md:text-xl lg:text-2xl text-gray-300">
          Some of the people you'll be working with
        </h2>
      </div>
      <div class="flex flex-wrap justify-center gap-3">
        <!-- Member -->
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="w-full w-1/2 md:w-1/3 lg:w-1/4 mb-6 px-6 sm:px-6 lg:px-4"
        >
          <div class="flex flex-col items-center gap-5 h-full">
            <!-- Avatar -->
            <div class="avatar">
              <div
                class="avatar-inner"
                :style="{ backgroundImage: `url(${slide.image})` }"
              ></div>
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
          image: "/assets/img/LP_About/placeholder.png",
        },
        {
          name: "Bagus. S, SH ",
          title: "Senior Consultant",
          image: "/assets/img/LP_About/placeholder.png",
        },
        {
          name: "Dan Soedira, Sr. Assoc. ANZIIF",
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

.avatar {
  width: 100%;
  height: 0;
  padding-bottom: 100%; /* Menyamakan aspek rasio 1:1 */
  position: relative;
  overflow: hidden;
  border-radius: 40%;
}

.avatar-inner {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

@media (min-width: 640px) {
  .avatar {
    border-radius: 50%; /* Mengubah border-radius menjadi lingkaran pada layar yang lebih besar */
  }
}
</style>

<template>
  <section class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
    <div class="flex flex-col items-center justify-center gap-12 space-y-8">
      <div class="flex flex-col gap-2 text-center">
        <h3 class="text-xl md:text-2xl lg:text-3xl">OUR TEAM</h3>
        <h2 class="text-lg md:text-xl lg:text-2xl text-gray-300">
          Some of the people you'll be working with
        </h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
        <!-- Member -->
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="mb-6 px-6 sm:px-6"
        >
          <div class="flex flex-col items-center gap-5 h-full">
            <!-- Avatar -->
            <div class="avatar">
              <img :src="slide.image" :alt="slide.name" class="avatar-inner" />
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
          image: "/assets/img/LP_About/jerry.jpg",
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
  padding-bottom: 100%; /* Maintain 1:1 aspect ratio */
  position: relative;
  overflow: hidden;
  border-radius: 10%;
}

.avatar-inner {
  position: absolute;
  height: -webkit-fill-available;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
}

@media (max-width: 339px) {
  .avatar {
    width: 84%;
  }
}

@media (min-width: 340px) and (max-width: 599px) {
  .avatar {
    width: 70%;
  }
}

@media (min-width: 600px) {
  .avatar {
    width: 78%;
  }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  .avatar {
    width: 73%;
  }
}
</style>

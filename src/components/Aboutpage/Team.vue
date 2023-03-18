<!-- eslint-disable vue/valid-v-for -->
<template>
  <section class="">
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-12">
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-2 mb-6 items-center text-center">
          <h3 class="text-xl md:text-2xl">Our Team</h3>
        </div>

        <div class="flex flex-col md:flex-row gap-6 self-center">
          <div v-for="(member, index) in teamMembers" :key="index">
            <div
              class="flex items-center justify-center flex-col gap-3 p-5 w-full w-60 sm:w-72 xl:w-96 h-full bg-gray-100 border rounded-2xl"
            >
              <img
                :src="member.image"
                class="w-28 h-28 rounded-full object-cover transition duration-200 hover:scale-110"
              />

              <div class="text-gray-900 text-lg font-bold">
                {{ member.name }}
              </div>

              <div class="text-purple-600">{{ member.role }}</div>

              <div
                class="flex items-center justify-center gap-3 mt-2 w-auto h-5 text-gray-600"
              >
                <i
                  class="fab fa-twitter fa-lg cursor-pointer transition duration-200 hover:text-gray-400"
                ></i>
                <i
                  class="fab fa-linkedin fa-lg cursor-pointer transition duration-200 hover:text-gray-400"
                ></i>
                <i
                  class="fab fa-dribbble fa-lg cursor-pointer transition duration-200 hover:text-gray-400"
                ></i>
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
      activeIndex: 0,
      offset: 0,
      angle: 45,
      z: 100,
      teamMembers: [
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
</style>

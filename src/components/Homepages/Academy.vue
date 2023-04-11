<template>
  <section>
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
      <div class="flex flex-col gap-12">
        <div class="flex flex-col gap-2 self-center text-center max-w-2xl">
          <h3 class="text-xl md:text-2xl lg:text-3xl lg:text-3xl">Academy</h3>
          <h2 class="text-xl md:text-2xl lg:text-3xl lg:text-3xl">
            Ikonoa will provide better knowledge and understanding of the types
            of insurance, benefits and conditions of each type of insurance.
          </h2>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div
            class="background-product custom-shadow-card flex flex-col rounded-lg"
          >
            <div>
              <img
                src="/assets/img/Home/webinar.webp"
                alt="webinar"
                class="w-full rounded"
              />
            </div>
            <div
              class="flex flex-col gap-8 p-6 text-center h-72 sm:h-64 md:h-96 xl:h-80"
            >
              <h6 class="text-2xl lg:text-3xl">Online Training</h6>
              <p class="text-sm md:text-base lg:text-lg">
                We provide online webinars on insurance for both Insurance
                Officers and Non-Insurance Officers. Our webinars cover policy
                options, claims processes, and risk management strategies.
                Expert instructors lead each session and answer your questions.
              </p>
            </div>
          </div>
          <div
            class="background-product custom-shadow-card flex flex-col rounded-lg"
          >
            <div>
              <img
                src="/assets/img/Home/seminar.webp"
                alt="seminar"
                class="w-full rounded"
              />
            </div>
            <div
              class="flex flex-col gap-8 py-12 px-6 text-center h-80 sm:h-64 md:h-80 lg:96 xl:h-80"
            >
              <h6 class="text-2xl lg:text-3xl">Offline Training</h6>
              <p class="text-sm md:text-base lg:text-lg">
                Elevate your team's insurance knowledge with our customized
                in-house training solutions. Our expert instructors will work
                with you to develop a tailored program covering relevant topics
                such as policy changes and risk management. We offer flexibility
                in the location of your training, whether at your company's
                office or at a venue of your choice, such as a hotel ballroom.
                Contact us to learn more about our customized in-house training
                options
              </p>
            </div>
          </div>
        </div>

        <div class="text-center mt-4">
          <button
            class="px-10 py-3 md:px-14 border-button-custom font-medium button-shadow"
          >
            <router-link
              :to="{ name: 'academy' }"
              aria-label="Check our services full explanation"
              >Learn More</router-link
            >
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Academy",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
p {
  font-weight: 400;
}
</style>

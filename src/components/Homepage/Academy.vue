<template>
  <section class="backgrund-product">
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
      <div class="flex flex-col gap-12">
        <div class="flex flex-col gap-2 self-center text-center max-w-2xl">
          <h3 class="text-xl md:text-2xl lg:text-3xl">Academy</h3>
          <h2 class="text-xl md:text-2xl lg:text-3xl">
            Ikonoa will provide better knowledge and understanding of the types
            of insurance, benefits and conditions of each type of insurance.
          </h2>
        </div>

        <div class="flex flex-col justify-center md:flex-row gap-10">
          <div
            class="bg-custom-academy flex flex-col max-w-md px-6 py-4 gap-4 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
          >
            <div class="relative">
              <img
                class="w-full rounded"
                src="/assets/img/homepage/webinar.jpg"
                alt="webinar"
              />
            </div>
            <div class="flex flex-col gap-6 text-center">
              <h6 class="text-2xl">Online Training</h6>
              <p
                class="text-sm sm:text-base md:text-lg text-gray-600 text-justify"
              >
                We provide online webinars on insurance for both Insurance
                Officers and Non-Insurance Officers. Our webinars cover policy
                options, claims processes, and risk management strategies.
                Expert instructors lead each session and answer your questions.
              </p>
            </div>
          </div>
          <div
            class="bg-custom-academy max-w-md px-6 py-4 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
          >
            <div class="relative">
              <img
                class="w-full rounded"
                src="/assets/img/homepage/seminar.jpg"
                alt="seminar"
              />
            </div>
            <h6 class="mt-4 mb-3 text-2xl cursor-pointer text-center">
              Offline Training
            </h6>
            <div class="p-3">
              <p
                class="text-sm sm:text-base md:text-lg text-gray-600 text-justify"
              >
                We offer customized in-house insurance training for companies,
                addressing their unique challenges and opportunities. Our expert
                instructors work with you to develop a tailored program covering
                relevant topics, such as policy changes and risk management.
                Contact us to learn more about our in-house training options.
              </p>
            </div>
          </div>
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
  letter-spacing: -1px;
}
</style>

<template>
  <section>
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
      <div class="flex flex-col gap-2 mb-6 items-center text-center">
        <h3 class="text-xl md:text-2xl lg:text-3xl">Academy</h3>
        <h2 class="text-xl md:text-2xl lg:text-3xl">
          Ikonoa will provide better knowledge and understanding of the types of
          insurance, benefits and conditions of each type of insurance.
        </h2>
      </div>
      <div class="flex justify-center my-12">
        <div
          class="flex flex-wrap justify-center md:flex-row gap-8 md:gap-10 space-y-4 px-2 lg:px-3 md:grid md:grid-cols-2 md:space-y-0"
        >
          <div
            class="bg-custom-academy custom-shadow-box-academy max-w-md px-6 py-4 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
          >
            <div class="relative">
              <img class="w-full" src="/assets/img/webinar.jpg" alt="webinar" />
            </div>
            <h6 class="mt-4 mb-3 text-2xl cursor-pointer text-center">
              Online Training
            </h6>
            <div class="p-3">
              <p
                class="text-sm sm:text-base md:text-lg text-gray-600 font-medium text-justify tracking-tighter"
              >
                We provide online webinars on insurance for both Insurance
                Officers and Non-Insurance Officers. Our webinars cover policy
                options, claims processes, and risk management strategies.
                Expert instructors lead each session and answer your questions.
              </p>
            </div>
          </div>
          <div
            class="bg-custom-academy custom-shadow-box-academy max-w-md px-6 py-4 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
          >
            <div class="relative">
              <img class="w-full" src="/assets/img/seminar.jpg" alt="seminar" />
            </div>
            <h6 class="mt-4 mb-3 text-2xl cursor-pointer text-center">
              Inhouse Training
            </h6>
            <div class="p-3">
              <p
                class="text-sm sm:text-base md:text-lg text-gray-600 font-medium text-justify tracking-tighter"
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
      <!-- <div class="text-center my-12">
        <a
          href="#_"
          class="inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-red-500 rounded-full shadow-md group"
        >
          <span
            class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span
            class="absolute flex items-center justify-center w-full h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease"
            >Learn More</span
          >
          <span class="invisible">Learn More</span>
        </a>
      </div> -->
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
h2 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  color: #17171f;
  letter-spacing: 0.5px;
}
h3 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  color: #d50000;
  letter-spacing: 1.5px;
}
h6 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  color: #17171f;
}

p {
  font-family: "Roboto";
}

.custom-shadow-box-academy {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
}
.bg-custom-academy {
  background: #fdfdff;
}
</style>

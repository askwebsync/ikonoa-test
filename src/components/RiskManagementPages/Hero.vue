<template>
  <div
    class="relative overflow-hidden bg-no-repeat bg-cover"
    style="background-position: 50%; height: 500px"
  >
    <div
      class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed container mx-auto px-4 py-12 md:px-8 lg:px-24"
    >
      <div class="text-left mb-5">
        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <a
                href="/"
                class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-red-600"
              >
                <svg
                  aria-hidden="true"
                  class="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg
                  aria-hidden="true"
                  class="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <a
                  href="/services"
                  class="ml-1 text-md font-medium text-gray-700 hover:text-red-600 md:ml-2"
                  >Services</a
                >
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg
                  aria-hidden="true"
                  class="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  class="ml-1 text-md font-medium text-gray-500 md:ml-2 text-red"
                  >Risk Management</span
                >
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div class="flex justify-center items-center h-full">
        <div class="flex flex-col gap-6 md:gap-10 text-center">
          <h1
            class="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl hover:text-red-600 uppercase md:leading-snug"
          >
            {{ $t("risk-management.banner-header") }}
          </h1>
          <div class="flex flex-col items-center justify-center">
            <hr class="border-t-2 border-gray-500 flex-grow m-3" />
            <h4 class="max-w-4xl text-lg md:text-xl lg:text-2xl xl:text-3xl">
              {{ $t("risk-management.banner-subheader") }}
            </h4>
            <hr class="border-t-2 border-gray-500 flex-grow m-3" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {};
  },
};
</script>

<style scoped>
h4 {
  font-weight: 400;
  color: #787878;
}
h1 {
  color: #3b3b3b;
  font-weight: 700;
}

hr {
  width: 150px;
  height: 0px;
  border: 1px solid #787878;
}
</style>

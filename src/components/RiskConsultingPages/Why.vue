<template>
  <div class="background-product">
    <div class="container mx-auto px-4 py-14 md:px-8 lg:px-12">
      <div class="flex flex-col lg:flex-row gap-10 items-center">
        <div class="flex w-full lg:w-1/2 self-start lg:justify-center">
          <img
            src="/assets/img/Services/reason.png"
            alt="why"
            class="object-contain"
          />
        </div>
        <div class="self-center w-full lg:w-1/2 md:self-start">
          <h2 class="text-4xl mb-3 uppercase">
            {{ $t("risk-consulting.explanation-header") }}
          </h2>
          <hr />
          <p class="mt-10 md:mt-12 md:text-lg max-w-xl">
            {{ $t("risk-consulting.explanation-text") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Why",

  data() {
    return {};
  },
};
</script>

<style scoped>
h2 {
  font-weight: 500;
  color: #3b3b3b;
}
p {
  color: #3b3b3b;
  letter-spacing: -0.25px;
}
hr {
  width: 120px;
  height: 0px;
  border: 2px solid #3b3b3b;
}
</style>

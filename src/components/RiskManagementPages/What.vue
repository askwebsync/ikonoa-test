<template>
  <div class="background-product">
    <div class="container mx-auto px-4 py-14 md:px-8 lg:px-24">
      <div class="flex flex-col lg:flex-row gap-12 items-center">
        <div class="self-center w-full lg:w-1/2 md:self-start">
          <h2 class="text-4xl mb-3 uppercase">
            {{ $t("risk-management.explanation-header") }}
          </h2>
          <hr />
          <p class="mt-4 md:text-lg max-w-xl">
            {{ $t("risk-management.explanation-text") }}
          </p>
        </div>
        <div class="flex w-full lg:w-1/2 self-start lg:justify-center">
          <img src="/assets/img/Services/solution.jpg" alt="solution" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "What",
  component: {},
};
</script>

<style scoped>
h2 {
  font-weight: 500;
}
p {
  font-weight: 400;
  color: #3b3b3b;
}
hr {
  width: 120px;
  height: 0px;
  border: 2px solid #3b3b3b;
}
</style>

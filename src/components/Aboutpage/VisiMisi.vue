<template>
  <section>
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
      <div class="background-custom-misi flex flex-col p-6">
        <div class="text-center mb-1">
          <h3 class="text-xl md:text-2xl">Vision</h3>
          <ul class="px-3 py-2 list-disc list-inside marker:text-red-600">
            <li>The most trusted risk and management consulting in Asia</li>
          </ul>
        </div>
        <div class="text-center my-3">
          <h3 class="text-xl md:text-2xl">Mission</h3>
          <ul
            class="px-3 py-2 space-y-3 list-disc list-inside marker:text-red-600"
          >
            <li>Providing risk advisory and transfer</li>
            <li>
              Providing effective and efficient claim management solutions
            </li>
            <li>Expanding insurance market share and premium</li>
            <li>
              Educate customer through insurance literation to increase
              knowledge and trust
            </li>
            <li>
              Providing insurance services to stack-holders through human
              resource development and digital solutions
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
h2 {
  font-weight: 500;
}
li {
  font-style: normal;
  font-weight: 400;
  color: #17171f;
  letter-spacing: 0.2px;
}
</style>

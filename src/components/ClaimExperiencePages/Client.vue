<template>
  <section>
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
      <div class="flex flex-col gap-10 text-center">
        <div class="">
          <h3 class="text-xl md:text-3xl">Our Client</h3>
        </div>
        <div
          class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-content-center"
        >
          <div class=""><img src="" alt="" /></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Client",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.card {
  height: 300px;
  border-radius: 8px;
}
</style>

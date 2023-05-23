<template>
  <section>
    <div class="container mx-auto px-4 pt-12 pb-12 md:px-8 lg:px-24">
      <div class="flex flex-col gap-2 text-center">
        <h3 class="text-xl md:text-2xl lg:text-3xl">LOCATION</h3>
        <h2 class="text-xl md:text-2xl lg:text-3xl">Find Us on Google Map</h2>
      </div>
      <div class="relative m-12 rounded">
        <div class="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7931.962574497798!2d106.82478594107462!3d-6.266191024889744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f38e575183bd%3A0xbffac3daf2cfe981!2sGraha%20Al%20Badegel!5e0!3m2!1sen!2sid!4v1684310944531!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Location",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped></style>

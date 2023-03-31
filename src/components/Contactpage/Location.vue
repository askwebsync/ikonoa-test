<template>
  <section>
    <div class="container mx-auto px-4 pt-12 pb-20 md:px-8 lg:px-24">
      <div class="flex flex-col gap-2 text-center">
        <h3 class="text-xl md:text-2xl lg:text-3xl">LOCATION</h3>
        <h2 class="text-xl md:text-2xl lg:text-3xl">Find Us on Google Map</h2>
      </div>
      <div class="google-map my-5 rounded">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.025742450736!2d106.82690381452953!3d-6.260339363033278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f22d79f5dec7%3A0x4e7478b43056d766!2sGraha%20Sentana!5e0!3m2!1sen!2sid!4v1679370838375!5m2!1sen!2sid"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
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

<style scoped>
h2 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
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
  font-style: normal;
  font-weight: 400;
  color: #17171f;
}

.google-map {
  padding-bottom: 50%;
  position: relative;
}

.google-map iframe {
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: absolute;
}
</style>

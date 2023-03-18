<template>
  <section class="">
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-12">
      <div class="rounded-lg p-6 md:p-8">
        <h4 class="text-2xl font-bold mb-2 text-center">
          Find Us on Google Map
        </h4>

        <div class="m-8 rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5631094339!2d88.04952462217592!3d22.6757520733225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1596988408134!5m2!1sen!2sin"
            width="100%"
            height="450"
            frameborder="0"
            style="border: 0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
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
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  color: #17171f;
  letter-spacing: -0.25px;
}
h3 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  color: #d50000;
}
h6 {
  font-style: normal;
  font-weight: 400;
  color: #17171f;
  letter-spacing: 0.2px;
}
.background-custom-misi {
  background-color: #eeebe5;
}
</style>

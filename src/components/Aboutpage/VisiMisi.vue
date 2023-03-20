<template>
  <section class="">
    <div class="container mx-auto px-4 md:px-8 lg:px-12">
      <div class="flex flex-col md:flex-row gap-12">
        <div class="w-full md:w-1/2 mission">
          <div class="flex flex-col gap-1 mb-6 items-center text-center">
            <h3 class="text-xl md:text-2xl">Mission</h3>
            <h2 class="md:text-xl max-w-md">
              Managing & Claiming Customer Insurance Policy
            </h2>
          </div>
          <div class="p-6 background-custom-misi">
            <ul class="pl-5 space-y-3 list-disc marker:text-red-600">
              <li class="">
                <h6>Providing risk advisory and transfer</h6>
              </li>
              <li>
                <h6>
                  Providing effective and efficient claim management solutions
                </h6>
              </li>
              <li><h6>Expanding insurance market share and premium</h6></li>
              <li>
                <h6>
                  Educate customer through insurance literation to increase
                  knowledge and trust
                </h6>
              </li>
              <li>
                <h6>
                  Providing insurance services to stack-holders through human
                  resource development and digital solutions
                </h6>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full md:w-1/2 vision">
          <div class="flex flex-col gap-1 mb-6 items-center text-center">
            <h3 class="text-xl md:text-2xl">Vision</h3>
            <h2 class="md:text-xl max-w-md">
              Sevices With Honesty, Speed, and Security
            </h2>
          </div>
          <div class="p-6 background-custom-misi">
            <ul class="pl-5 space-y-3 list-disc marker:text-red-600">
              <li class="">
                <h6>The most trusted risk and management consulting in Asia</h6>
              </li>
            </ul>
          </div>
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
</style>

<template>
  <section>
    <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
      <div class="background-custom-misi flex flex-col p-6">
        <div class="text-center mb-1">
          <h3 class="text-xl md:text-2xl">Vision</h3>
          <ul class="p-2 list-disc list-inside marker:text-red-600">
            <li class="">
              The most trusted risk and management consulting in Asia
            </li>
          </ul>
        </div>
        <div class="text-center my-3">
          <h3 class="text-xl md:text-2xl">Mission</h3>
          <ul class="p-2 space-y-3 list-disc list-inside marker:text-red-600">
            <li class="">Providing risk advisory and transfer</li>
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
      <!-- <div class="flex flex-col md:flex-row gap-12">
        <div class="w-full md:w-1/2 flex flex-col gap-10 mission">
          <div class="flex flex-col gap-2 items-center text-center"></div>
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
        <div class="w-full md:w-1/2 flex flex-col gap-10 vision">
          <div class="flex flex-col gap-2 items-center text-center">
            <h3 class="text-xl md:text-2xl">Vision</h3>
          </div>
          <div class="p-6 background-custom-misi">
            <ul class="pl-5 space-y-3 list-disc marker:text-red-600">
              <li class="">
                <h6>The most trusted risk and management consulting in Asia</h6>
              </li>
            </ul>
          </div>
        </div>
      </div> -->
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
  letter-spacing: 0.5px;
}
h3 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  color: #d50000;
  letter-spacing: 0.5px;
}
h6 {
  font-style: normal;
  font-weight: 400;
  color: #17171f;
  letter-spacing: 0.2px;
}
</style>

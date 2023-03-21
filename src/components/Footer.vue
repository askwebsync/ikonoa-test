<template>
  <footer class="px-4 xl:px-6 divide-y background-footer">
    <div
      class="container mx-auto flex flex-col justify-between text-center lg:text-left py-12 md:gap-x-6 gap-y-12 lg:flex-row lg:gap-y-0"
    >
      <div class="lg:w-1/3">
        <div class="flex flex-col items-center lg:items-start gap-2">
          <img
            src="../assets/Image.png"
            class="w-28 h-12 object-contain"
            alt="logo"
          />

          <a class="text-base max-w-xs text-gray-300"
            >Ikonoa is trusted and secure insurance platform</a
          >
        </div>
      </div>
      <div
        class="grid grid-cols-2 text-sm mt-2 grid-flow-row-dense md:mt-0 gap-x-3 gap-y-12 lg:w-2/3 lg:ml-3"
      >
        <div class="space-y-4 col-span-1">
          <h3 class="tracking-wide text-lg uppercase text-gray-300">
            Quicklinks
          </h3>
          <ul class="space-y-2 text-white">
            <li class="mb-2">
              <router-link :to="{ name: 'about' }" class="text-sm font-medium"
                >About</router-link
              >
            </li>
            <li class="mb-2">
              <a class="text-sm font-medium" href="#">Services & Solutions</a>
            </li>
            <li class="mb-2">
              <a class="text-sm font-medium" href="#">Insurance Policy</a>
            </li>
            <li class="mb-2">
              <a class="text-sm font-medium" href="#">Claims Experience</a>
            </li>
            <li class="">
              <router-link :to="{ name: 'contact' }" class="text-sm font-medium"
                >Contact</router-link
              >
            </li>
          </ul>
        </div>
        <div class="space-y-4 col-span-1">
          <h3 class="tracking-wide text-lg uppercase text-gray-300">
            Services & Solutions
          </h3>
          <ul class="space-y-2 text-white">
            <li class="mb-2">
              <a class="text-sm font-medium" href="#">Risk Consulting</a>
            </li>
            <li class="mb-2">
              <a class="text-sm font-medium" href="#">Risk Management</a>
            </li>
            <li class="mb-2">
              <a class="text-sm font-medium" href="#">Insurance Policy</a>
            </li>
            <li class="mb-2">
              <a class="text-sm font-medium" href="#">Academy</a>
            </li>
          </ul>
        </div>
        <div class="space-y-4 col-span-3">
          <h3 class="text-lg uppercase text-gray-300">Get In Touch</h3>
          <ul class="space-y-3 text-white px-2">
            <li class="mb-2">
              <a class="text-sm font-medium" href="#">(+62) 811-963754</a>
            </li>
            <li class="mb-2">
              <a class="text-sm font-medium" href="#">hallo@ikonoa.com</a>
            </li>
            <li class="mb-2">
              <p class="text-sm font-medium">
                Registration Office:
                <span
                  >Graha Mampang 3rd Floor, Suite 305, Jl. Mampang Prapatan Raya
                  Kav. 100, Jakarta 12760</span
                >
              </p>
            </li>
            <li class="mb-2">
              <p class="text-sm font-medium">
                Operational Office:
                <span
                  >Graha Sentana, Jl. Warung Buncit Raya, Jakarta 12740
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="py-6 text-sm text-center dark:text-gray-400">
      © 1968 PT.Ikonoa Solusindo Asia. All rights reserved.
    </div>
  </footer>
</template>

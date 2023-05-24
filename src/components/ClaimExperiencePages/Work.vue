<template>
  <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-content-center place-items-center gap-10"
    >
      <div v-for="card in cards" :key="card.header">
        <div class="overflow-hidden rounded-2xl background-product card">
          <div class="relative h-[200px]">
            <img
              :src="card.img"
              :alt="card.alt"
              class="object-cover w-full h-full"
            />
            <div
              class="absolute top-0 left-0 flex items-center justify-center w-full h-full"
            >
              <span
                class="text-white text-xl font-bold uppercase bg-black bg-opacity-50 p-2"
              >
                {{ card.category }}
              </span>
            </div>
          </div>
          <div class="p-3">
            <div class="flex flex-col text-center">
              <h1 class="text-lg text-black mb-4 font-bold">
                {{ card.year }}
              </h1>
              <h2 class="text-lg text-gray-700">{{ card.header }}</h2>
              <h3 class="text-lg">{{ card.amount }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work",
  components: {},
  data() {
    return {
      cards: [
        {
          img: "/assets/img/LP_Claim/Experience/straded-2021.jpg",
          alt: "Ship Stranded",
          category: "MARINE HULL",
          year: "2021",
          header: this.$t("claim-experience.card1-header"),
          amount: "IDR 783,097,815.00",
        },
        {
          img: "/assets/img/LP_Claim/Experience/inland-transit.jpg",
          alt: "inlandtransit",
          category: "INLAND TRANSIT",
          year: "2020",
          header: this.$t("claim-experience.card2-header"),
          amount: "USD 350,000.00",
        },
        {
          img: "/assets/img/LP_Claim/Experience/flooruplift-2020.jpg",
          alt: "flooruplift",
          category: "PROPERTY ALL-RISK",
          year: "2020",
          header: this.$t("claim-experience.card3-header"),
          amount: "IDR 5,192,801,630.00",
        },
        {
          img: "/assets/img/LP_Claim/Experience/property-2020.jpeg",
          alt: "mining",
          category: "PROPERTY ALL-RISK",
          year: "2020",
          header: this.$t("claim-experience.card4-header"),
          amount: "USD 140,000,000.00",
        },
        {
          img: "/assets/img/LP_Claim/Experience/earthquake-2019.jpg",
          alt: "Earthquake Insurance",
          category: "Earthquake Insurance",
          year: "2019",
          header: this.$t("claim-experience.card5-header"),
          amount: "USD 164,046,65",
        },
        {
          img: "/assets/img/LP_Claim/Experience/flooruplift-2018.jpg",
          alt: "flooruplift",
          category: "PROPERTY ALL-RISK",
          year: "2018",
          header: this.$t("claim-experience.card6-header"),
          amount: "IDR 4,872,500,000.00",
        },
        {
          img: "/assets/img/LP_Claim/Experience/indemnity-2017.jpg",
          alt: "protection indemnity",
          category: "PROTECTION INDEMNITY",
          year: "2017",
          header: this.$t("claim-experience.card7-header"),
          amount: "IDR 17,250,000,000.00",
        },
        {
          img: "/assets/img/LP_Claim/Experience/machinery.jpeg",
          alt: "machinery insurance",
          category: "MACHINERY INSURANCE",
          year: "2016",
          header: this.$t("claim-experience.card8-header"),
          amount: "USD 2,400,000.00",
        },
        {
          img: "/assets/img/LP_Claim/Experience/property-2014.jpeg",
          alt: "property all-risk",
          category: "PROPERTY ALL-RISK",
          year: "2014",
          header: this.$t("claim-experience.card9-header"),
          amount: "IDR 4,302,853,704.00",
        },
        {
          img: "/assets/img/LP_Claim/Experience/property-casava-2014.jpeg",
          alt: "property all-risk",
          category: "PROPERTY ALL-RISK",
          year: "2014",
          header: this.$t("claim-experience.card10-header"),
          amount: "IDR 9,145,909,004.00",
        },
        {
          img: "/assets/img/LP_Claim/Experience/fire.jpg",
          alt: "fire insurance",
          category: "FIRE INSURANCE",
          year: "2011",
          header: this.$t("claim-experience.card11-header"),
          amount: "USD 941,835.63",
        },
        {
          img: "/assets/img/LP_Claim/Experience/property2010.jpg",
          alt: "property all-risk",
          category: "PROPERTY ALL-RISK",
          year: "2010",
          header: this.$t("claim-experience.card12-header"),
          amount: "USD 8,063,353.40",
        },
        {
          img: "/assets/img/LP_Claim/Experience/erection2010.jpg",
          alt: "erection all-risk",
          category: "ERECTION ALL-RISK",
          year: "2010",
          header: this.$t("claim-experience.card13-header"),
          amount: "IDR 2,882,294,055.00",
        },
        {
          img: "/assets/img/LP_Claim/Experience/fire-2010.jpg",
          alt: "fire insurance",
          category: "FIRE INSURANCE",
          year: "2010",
          header: this.$t("claim-experience.card14-header"),
          amount: "IDR 2,048,241,305.00",
        },
        {
          img: "/assets/img/LP_Claim/Experience/property-2009.jfif",
          alt: "property all-risk",
          category: "PROPERTY ALL-RISK",
          year: "2009",
          header: this.$t("claim-experience.card15-header"),
          amount: "USD 985,812.45",
        },
      ],
    };
  },
  mounted() {
    const images = document.querySelectorAll(".lazy");
    const options = {
      rootMargin: "100px", // load images 100px before they come into view
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          observer.unobserve(img);
        }
      });
    }, options);

    images.forEach((img) => observer.observe(img));
  },
  methods: {
    preloadImages() {
      const images = this.imageUrls;
      images.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    },
  },
};
</script>

<style scoped>
.card {
  max-height: 320px;
  width: 310px;
  border-radius: 8px;
}
h1 {
  letter-spacing: -0.25px;
}
h2 {
  font-weight: 500;
  color: #3b3b3b;
  letter-spacing: -0.25px;
}

h3 {
  font-weight: 800;
  letter-spacing: -0.25px;
}
</style>

<template>
  <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
    <div class="flex flex-col items-center justify-center gap-12 space-y-8">
      <div class="flex flex-col gap-2 text-center">
        <h3 class="text-xl md:text-2xl lg:text-3xl">
          {{ $t("about.team-header") }}
        </h3>
        <h2 class="text-lg md:text-xl lg:text-2xl text-gray-300">
          {{ $t("about.team-subheader") }}
        </h2>
      </div>
      <div class="parent justify-center text-center">
        <div class="div1 our-team">
          <div class="pic rounded-full overflow-hidden">
            <img
              src="/assets/img/LP_About/jerry.jpg"
              alt="slide.name"
              class="object-cover object-center h-48 w-full"
            />
          </div>
          <div class="team-prof">
            <h3 class="post-title">Jerry Firsonia, AIIS, CIIB</h3>
            <h2 class="post">{{ $t("about.team-card1-header") }}</h2>
          </div>
        </div>
        <div class="div2 our-team">
          <div class="pic rounded-full overflow-hidden">
            <img
              src="/assets/img/LP_About/placeholder.png"
              alt="slide.name"
              class="object-cover object-center h-48 w-full"
            />
          </div>
          <div class="team-prof">
            <h3 class="post-title">Antonius Tobing, Sr. Assoc. ANZIIF</h3>
            <h2 class="post">{{ $t("about.team-card2-header") }}</h2>
          </div>
        </div>
        <div class="div3 our-team">
          <div class="pic rounded-full overflow-hidden">
            <img
              src="/assets/img/LP_About/placeholder.png"
              alt="slide.name"
              class="object-cover object-center h-48 w-full"
            />
          </div>
          <div class="team-prof">
            <h3 class="post-title">Bagus. S, SH</h3>
            <h2 class="post">{{ $t("about.team-card3-header") }}</h2>
          </div>
        </div>
        <div class="div4 our-team">
          <div class="pic rounded-full overflow-hidden">
            <img
              src="/assets/img/LP_About/dan.jpg"
              alt="slide.name"
              class="object-cover object-center h-48 w-full"
            />
          </div>
          <div class="team-prof">
            <h3 class="post-title">Dan Soedira, Sr. Assoc. ANZIIF</h3>
            <h2 class="post">{{ $t("about.team-card3-header") }}</h2>
          </div>
        </div>
        <div class="div5 our-team">
          <div class="pic rounded-full overflow-hidden">
            <img
              src="/assets/img/LP_About/yutrizal.jpg"
              alt="slide.name"
              class="object-cover object-center h-48 w-full"
            />
          </div>
          <div class="team-prof">
            <h3 class="post-title">Dr. Yutrizal Jacoub, SE, MM</h3>
            <h2 class="post">{{ $t("about.team-card5-header") }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          name: "Jerry Firsonia, AIIS, CIIB",
          title: "about.team-card1-header",
          image: "/assets/img/LP_About/jerry.jpg",
        },
        {
          name: "Antonius Tobing, Sr. Assoc. ANZIIF",
          title: "about.team-card2-header",
          image: "/assets/img/LP_About/placeholder.png",
        },
        {
          name: "Bagus. S, SH",
          title: "about.team-card3-header",
          image: "/assets/img/LP_About/placeholder.png",
        },
        {
          name: "Dan Soedira, Sr. Assoc. ANZIIF",
          title: "about.team-card3-header",
          image: "/assets/img/LP_About/dan.jpg",
        },
        {
          name: "Dr. Yutrizal Jacoub, SE, MM",
          title: "about.team-card5-header",
          image: "/assets/img/LP_About/yutrizal.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
h2 {
  font-weight: 700;
  color: #3b3b3b;
}
.our-team {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;
  text-align: center;
}
.our-team .pic {
  position: relative;
  height: 180px; /* Adjust the height as needed */
  width: 180px; /* Adjust the width as needed */
}
.our-team .pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.our-team .pic-bottom {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: all 0.3s ease 0s;
}

.our-team .post-title {
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 5px;
  letter-spacing: -0.25px;
}

.our-team .post {
  margin-bottom: 10px;
  display: block;
  color: black;
  font-size: 16px;
}

@media screen and (max-width: 990px) {
  .our-team {
    margin-bottom: 30px;
  }
}

@media screen and (min-width: 750px) {
  .parent {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }

  .div1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .div2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .div3 {
    grid-area: 1 / 3 / 2 / 4;
  }
  .div4 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .div5 {
    grid-area: 2 / 3 / 3 / 4;
  }
}
</style>

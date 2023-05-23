<template>
  <div class="container mx-auto px-4 py-12 md:px-8 lg:px-24">
    <div class="flex flex-col items-center justify-center gap-12 space-y-8">
      <div class="flex flex-col gap-2 text-center">
        <h3 class="text-xl md:text-2xl lg:text-3xl">OUR TEAM</h3>
        <h2 class="text-lg md:text-xl lg:text-2xl text-gray-300">
          Some of the people you'll be working with
        </h2>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 justify-center"
      >
        <div
          class="our-team self-center max-w-md"
          v-for="(slide, index) in slides"
          :key="index"
        >
          <div class="pic aspect-w-1 aspect-h-1 rounded-full overflow-hidden">
            <img
              :src="slide.image"
              :alt="slide.name"
              class="object-cover object-center"
            />
          </div>
          <div class="team-prof">
            <h3 class="post-title">
              {{ slide.name }}
            </h3>
            <h2 class="post">{{ slide.title }}</h2>
            <ul class="team_social">
              <li>
                <a href="#"><i class="fab fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-linkedin"></i></a>
              </li>
            </ul>
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
          title: "President Director",
          image: "/assets/img/LP_About/jerry.jpg",
        },
        {
          name: "Antonius Tobing, Sr. Assoc. ANZIIF",
          title: "Marketing Director",
          image: "/assets/img/LP_About/placeholder.png",
        },
        {
          name: "Bagus. S, SH",
          title: "Senior Consultant",
          image: "/assets/img/LP_About/placeholder.png",
        },
        {
          name: "Dan Soedira, Sr. Assoc. ANZIIF",
          title: "Senior Consultant",
          image: "/assets/img/LP_About/dan.jpg",
        },
        {
          name: "Dr. Yutrizal Jacoub, SE, MM",
          title: "Senior Associate",
          image: "/assets/img/LP_About/yutrizal.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
h2 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.25px;
  color: #3b3b3b;
}

.our-team {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
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
  line-height: 27px;
  margin-bottom: 5px;
  letter-spacing: -0.25px;
}

.our-team .post-title a {
  color: #232a34;
  transition: all 0.3s ease 0s;
}

.our-team .post-title a:hover {
  color: #727cb6;
  text-decoration: none;
}

.our-team .post {
  margin-bottom: 10px;
  display: block;
  color: black;
  font-size: 16px;
}

.our-team .team_social {
  list-style: none;
  padding: 0;
}

.our-team .team_social > li {
  display: inline-block;
}

.our-team .team_social > li > a {
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 50%;
  display: block;
  color: #727cb6;
  background: #efefef;
  transition: all 0.3s ease 0s;
}

.our-team .team_social > li > a:hover {
  background: #727cb6;
  color: #fff;
}

@media screen and (max-width: 990px) {
  .our-team {
    margin-bottom: 30px;
  }
}
</style>

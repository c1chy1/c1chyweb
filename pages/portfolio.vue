<template>
  <section class="h-screen w-full absolute z-10">

    <header
        class="container  relative p-24 w-full flex flex-col justify-center grid grid-cols-1 justify-items-center h-112 max-w-full lg:max-w-max  mx-auto relative overflow-hidden">


      <light class="overflow-hidden filter-shadow-black"/>
      <div class="title uppercase top-2">
        <h1 class="text-8xl font-semibold text-center uppercase">Portfolio
        </h1>
      </div>
      <div class="title_dividers w-1/2 h-4 mx-auto my-10 relative inline-block">
        <span class="w-full h-0.5 absolute left-2/4 transform -translate-x-1/2"></span>
        <span class="w-full h-0.5 top-2 absolute left-2/4 transform -translate-x-1/2"></span>
        <span class="w-full h-0.5 top-4 absolute left-2/4 transform -translate-x-1/2"></span>
      </div>

      <figure class="relative flex items-center justify-center filter-shadow-black z-10">


        <img

            :data-src="require('~/assets/graphic/ribbon.png?webp')"

            alt="ribbon"
            class="lazyload w-full h-20 my-auto z-1 filter-shadow-black">
        <figcaption class="absolute block mx-auto mt-5 text-white text-3xl text-center">
          <NuxtLink to="/" class="cursor-pointer">Home</NuxtLink>
          > Portfolio
        </figcaption>
      </figure>


    </header>
    <div
        class="page-spacing w-full h-20 absolute left-0 bg-repeat bg-center"
    >


    </div>

    <section class="portfolio  min-h-screen pb-8 overflow-hidden">

      <div class="portfolio_case w-3/4 h-28  items-center flex  mx-auto mt-20">
        <span class="w-full inline-block relative"></span>
        <h2 class="font-bold text-3xl mt-4  text-center lg:w-full 2xl:w-9/12 2xl:mt-8"

        >MEANINGFUL <br>CREATIVE WORK</h2>
        <span class="w-full inline-block relative"></span>


      </div>
      <h1



          class="leading-none mt-16 mb-24 text-10xl font-semibold text-center xl:text-7xl xl:mt-2 xl:mb-5 2xl:text-14xl 2xl:mt-20 2xl:mb-24 ">
        CASE STUDIES</h1>

      <div class="w-full  flex flex-col justify-center items-center overflow-hidden"



           data-aos-anchor="#panel"
           data-aos-easing="ease-in-sine"
           data-aos-anchor-placement="center-bottom"
           data-aos="flip-down"

           data-aos-delay="500">
        <transition :name="currentTransition" mode="out-in">
          <component

              class="w-1/2 h-3/4  flex items-center justify-center bg-repeat-round  bg-cover text-3xl text-white font-sans"
              :is="slides[currentSlide]"></component>
        </transition>

        <div id="panel" class="w-full h-1/3 flex justify-center items-center font-sans text-white">
          <button

              class="draw-border m-4 px-12 py-6  inline bg-none border-none text-2xl font-bold font-sans uppercase cursor-pointer leading-normal"
              :class="{disabled: currentSlide === 0}" @click="changeSlide('prev')"
          >prev
          </button>

          <p class="w-1/3 text-center text-5xl font-sans">{{ currentSlide + 1 }} of {{ slides.length }}</p>

          <button

              class="btn draw-border m-4 px-12 py-6  inline bg-none border-none text-2xl font-bold font-sans uppercase cursor-pointer leading-normal"
              :class="{disabled: currentSlide === slides.length - 1}"
              @click="changeSlide('next')"
          >next
          </button>
        </div>

      </div>

    </section>

    <section id="my_projects" class="lg:-mb-8 overflow-x-hidden flex flex-col justify-between">

      <div class="title-container flex flex-col justify-center items-center mt-0">

        <h1 class="title text-9xl font-semibold text-center uppercase mb-8">My Projects
        </h1>

        <div>
          <span class="filter px-4 py-2 rounded-2xl text-4xl font-medium font-sans transition-all cursor-pointer"
                :class="{ active: currentFilter === 'ALL' }"
                v-on:click="setFilter('ALL')">ALL</span>
          <span class="filter px-4 py-2 rounded-2xl text-4xl font-medium font-sans transition-all cursor-pointer"
                :class="{ active: currentFilter === 'WEBPACK' }" v-on:click="setFilter('WEBPACK')">WEBPACK</span>
          <span class="filter px-4 py-2 rounded-2xl text-4xl font-medium font-sans transition-all cursor-pointer"
                :class="{ active: currentFilter === 'ES6' }"
                v-on:click="setFilter('ES6')">ES6</span>
          <span class="filter px-4 py-2 rounded-2xl text-4xl font-medium font-sans transition-all cursor-pointer"
                :class="{ active: currentFilter === 'PURECSS' }" v-on:click="setFilter('PURECSS')">PURE CSS</span>
          <span class="filter px-4 py-2 rounded-2xl text-4xl font-medium font-sans transition-all cursor-pointer"
                :class="{ active: currentFilter === 'DATABASE' }"
                v-on:click="setFilter('DATABASE')">DATABASE</span>
          <span class="filter px-4 py-2 rounded-2xl text-4xl font-medium font-sans transition-all cursor-pointer"
                :class="{ active: currentFilter === 'REACT' }" v-on:click="setFilter('REACT')">REACT</span>
          <span class="filter px-4 py-2 rounded-2xl text-4xl font-medium font-sans transition-all cursor-pointer"
                :class="{ active: currentFilter === 'VUE' }"
                v-on:click="setFilter('VUE')">VUE</span>

        </div>
      </div>


      <div class="container_projects w-full h-full  mt-8 pb-10 flex justify-center items-center flex-col">
        <transition-group class="projects w-11/12  mb-8 mt-1 flex flex-wrap justify-around" name="projects">
          <div class="card w-116 h-52 mb-1 mt-5 flex-wrap justify-center overflow-hidden"
               v-if="currentFilter === project.category || currentFilter === 'ALL'"
               v-bind:key="project.title" v-for="project in projects">

            <div class="project-image-wrapper relative">
              <h2 class="project-title absolute bottom-0 right-28 text-4xl font-sans font-bold z-50">{{
                  project.title
                }}</h2>
              <i class="card-arrow w-8 h-12 absolute bottom-1 right-4 bg-no-repeat cursor-pointer z-50"></i>
              <p class="absolute top-2 right-12 text-2xl opacity-70">{{ project.secondTechnology }}</p>

              <img class="lazyload pic w-10/12 h-56  z-50" :src="project.image" :alt="project.alt"

              >
              <ul class="absolute list-none z-50">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div class="social w-52 h-8 absolute top-2 left-4 flex justify-around items-center">
                <i class="text-5xl bg-black p-2 rounded-2xl z-50 ">{{ project.technology }}</i>
                <i class="text-5xl bg-black p-2 rounded-2xl z-50">{{ project.thirdTechnology }}</i>
                <i class="text-5xl"></i>
                <i class="text-5xl"></i>
              </div>
              <a :href="`${project.link}`" target="_blank" rel="noopener">
                <button class="w-8 h-8 absolute bottom-4 right-4 border-none outline-none cursor-pointer "
                        aria-label="Project">
                </button>
              </a>
            </div>

          </div>
        </transition-group>
      </div>

      <stickyFooter

          class="opacity-100"
          data-aos="slide-left"
          data-aos-duration="1000"
      />
    </section>

  </section>


</template>

<script>



export default {


  components: {

    light: () => import(/* webpackPrefetch: true */ '~/components/light.vue'),
    stickyFooter: () => import('~/components/stickyFooter.vue'),
    slideA : () => import('~/components/slideA.vue'),
    slideB : () => import('~/components/slideB.vue'),
    slideC : () => import('~/components/slideC.vue'),

  },

  layout: 'desktop',


  transition: {
    name: 'slots',
    mode: 'out-in',
  },


  data() {

    return {

      slides: ['slideA', 'slideB', 'slideC'],

      currentSlide: 0,
      currentTransition: '',
      currentFilter: 'ALL',
      projects: [
        {
          title: "Pizza",
          image: "https://c1chy.lima-city.de/graphic/Food.png",
          link: "https://c1chy.lima-city.de/Food/index.html",
          technology: "ES6",
          secondTechnology: "WEBPACK",
          thirdTechnology: "JQUERY",
          category: 'WEBPACK',
          alt: 'Pizza Website'
        },
        {
          title: "Cube",
          image: "https://c1chy.lima-city.de/graphic/Portfoliode2.png",
          link: "https://c1chy.lima-city.de/Portfolio2/index.html",
          technology: "ES6",
          secondTechnology: "WEBPACK",
          thirdTechnology: "ANIMATE",
          category: 'WEBPACK',
          alt: 'Cube Website'
        },
        {
          title: "Bookstore",
          image: "https://c1chy.lima-city.de/graphic/bookstore.png",
          link: "https://bookstorec1chy.herokuapp.com/",
          technology: "FIREBASE",
          secondTechnology: "REACT",
          thirdTechnology: "DATABASE",
          category: 'REACT',
          alt: 'React Bookstore Website'
        },
        {
          title: "Paper Game",
          image: "https://c1chy.lima-city.de/graphic/paperGame.png",
          link: "https://c1chy.lima-city.de/PaperGame/index.html",
          technology: "ES6",
          secondTechnology: "PURE CSS",
          thirdTechnology: "PURE JS",
          category: 'ES6',
          alt: 'Paper Game Website'
        },
        {
          title: "Avenue",
          image: "https://c1chy.lima-city.de/graphic/avenuefasion.png",
          link: "https://c1chy.lima-city.de/psdtohtml1/index.html",
          technology: "PURE",
          secondTechnology: "CSS GRID",
          thirdTechnology: "CSS",
          category: 'PURECSS',
          alt: 'Pure css layout example'
        },
        {
          title: "Orders",
          image: "https://c1chy.lima-city.de/graphic/OrderFirebase.png",
          link: "https://c1chy.lima-city.de/FirebaseOrder/index.html",
          technology: "FIREBASE",
          secondTechnology: "DATABASE",
          thirdTechnology: "ES6",
          category: 'DATABASE',
          alt: 'Firebase example'
        },
        {
          title: "Panel",
          image: "https://c1chy.lima-city.de/graphic/bootstrap_4.png",
          link: "https://c1chy.lima-city.de/Bootstrap_4/index.html",
          technology: "PURE",
          secondTechnology: "BOOTSTRAP 4",
          thirdTechnology: "CSS",
          category: 'PURECSS',
          alt: 'Bootstrap 4 Panel'
        },
        {
          title: "Old Portfolio",
          image: "https://c1chy.lima-city.de/graphic/c1chy_old.png",
          link: "https://web300421.roc130.rockinghoster.cloud/c1chy.old/index.html",
          technology: "PURE",
          secondTechnology: "ES 6",
          thirdTechnology: "CSS",
          category: 'WEBPACK',
          alt: 'Old c1chy portfolio'
        },
        {
          title: "API",
          image: "https://c1chy.lima-city.de/graphic/Blogc1chy.png",
          link: "https://c1chy.lima-city.de/Webcomponent/dist/index.html",
          technology: "GITHUB",
          secondTechnology: "WEB COMPONENTS",
          thirdTechnology: "API",
          category: 'ES6',
          alt: 'Api Example'
        },
        {
          title: "New Portfolio",
          image: "https://c1chy.lima-city.de/graphic/nuxtportfolio.png",
          link: "https://c1chy.eu",
          technology: "TAILWIND",
          secondTechnology: "PWA NUXT",
          thirdTechnology: "VELOCITY",
          category: 'VUE',
          alt: 'New c1chy portfolio'
        },

        {
          title: "Configurator",
          image: "https://c1chy.lima-city.de/graphic/ConfiguratorVuex.png",
          link: "https://c1chyweb.de/dist/index.html",
          technology: "ROUTER",
          secondTechnology: "VUEX EXPRESS",
          thirdTechnology: "AXIOS",
          category: 'VUE',
          alt: 'Configurator VueX'
        },


        {
          title: "Quiz",
          image: "https://c1chy.lima-city.de/graphic/quizVuex.png",
          link: "https://web300421.roc130.rockinghoster.cloud/dist/index.html",
          technology: "ROUTER",
          secondTechnology: "VUEX EXPRESS",
          thirdTechnology: "AXIOS",
          category: 'VUE',
          alt: 'Quiz VueX'
        },

      ]

    }

  },


  methods: {
    setFilter: function (filter) {
      this.currentFilter = filter;
    },

    changeSlide: function (dir) {
      this.currentSlide = dir === 'next' ? this.currentSlide + 1 : this.currentSlide - 1;
      this.currentTransition = dir;
    }

  },

  beforeMount() {


    fullpage_api.destroy('all')


  }


}
</script>

<style scoped lang="scss">



$bg-color: #E6E5E1;
$orange: #DA4D1D;
$blue: #2b26c3;


section {
  background-color: #faebd7;
  background-image: url('~assets/graphic/exclusive-paper.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000&format=webp');

}

#my_projects {

  background-color: #faebd7;

}

header {

  h1 {
    color: #224a49;
    filter: drop-shadow(5px 6px 0 #a9c9bb);
    font-family: Barlow Condensed, sans-serif;

  }

  div:nth-child(1) {


    width: 100vw;
    position: absolute;
    top: 50%;
    height: 100vh;
    left: 50%;
    transform: translate(-50%,-50%);
    margin: 0;
    overflow: hidden;
  }


  img.light {

    height: 100vmax;
    width: 100%;
    animation: rotate 120s linear infinite;
    z-index: -1;
    object-fit: cover;
    overflow: hidden;


  }


  .title {

    font-family: Barlow Condensed, sans-serif;
    color: #4f7b70;
    line-height: initial;

    h1 {

      -webkit-text-stroke-width: 3px;
      filter: drop-shadow(4px 5px 0 #224a49);
      -webkit-text-stroke-color: #e4ddd3;

      background-image: url('~assets/graphic/green-dust-and-scratches.png');
      background-color: #4f7b70;
      -webkit-font-smoothing: antialiased;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

    }
  }


  .title_dividers {


    span {

      background: -webkit-linear-gradient(right, rgba(255, 255, 255, .01), #E9E4DD, #E9E4DD, rgba(255, 255, 255, .01));
      background: -o-linear-gradient(right, rgba(255, 255, 255, .01), #E9E4DD, #E9E4DD, rgba(255, 255, 255, .01));
      background: linear-gradient(to left, rgba(255, 255, 255, .01), #E9E4DD, #E9E4DD, rgba(255, 255, 255, .01));

    }


  }

  figure {


    figcaption {


      font-family: Satisfy, sans-serif;
      letter-spacing: 10px;


      a {
        transition: all 0.2s ease;

        &:hover {


          color: #224a49;

        }

      }


    }

  }


}


.filter.active {
  box-shadow: 1px 1px 3px 1px #00000026;
}

.filter:hover {
  background: lightgray;
}


.projects-enter {
  transform: scale(0.5) translatey(-80px);
  opacity: 0;
}

.projects-leave-to {
  transform: translatey(30px);
  opacity: 0;
}

.projects-leave-active {
  position: absolute;
  z-index: -1;
}

.project-image-wrapper {
  background-color: #4f7b70;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  opacity: 0.09;
  background: linear-gradient(to bottom, rgba(0, 210, 247, 0.65) 0%, rgba(0, 210, 247, 0.64) 1%, rgba(0, 0, 0, 0) 100%),
  linear-gradient(to top, rgba(247, 0, 156, 0.65) 0%, rgba(247, 0, 156, 0.64) 1%, rgba(0, 0, 0, 0) 100%);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.project-image {
  width: 100%;
  height: 150px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}


.page-title {


  .title {

    font-family: Barlow Condensed, sans-serif;
    color: #4f7b70;

    line-height: initial;

    h1 {


      -webkit-text-stroke-width: 3px;
      filter: drop-shadow(4px 5px 0 #224a49);
      -webkit-text-stroke-color: #e4ddd3;
      background-image: url('~assets/graphic/green-dust-and-scratches.png');
      background-color: #4f7b70;
      -webkit-font-smoothing: antialiased;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

    }
  }


  .title_dividers {

    span {


      background: -webkit-linear-gradient(right, rgba(255, 255, 255, .01), #E9E4DD, #E9E4DD, rgba(255, 255, 255, .01));
      background: -o-linear-gradient(right, rgba(255, 255, 255, .01), #E9E4DD, #E9E4DD, rgba(255, 255, 255, .01));
      background: linear-gradient(to left, rgba(255, 255, 255, .01), #E9E4DD, #E9E4DD, rgba(255, 255, 255, .01));


    }


  }

  figure {


    figcaption {


      font-family: Satisfy, sans-serif;
      letter-spacing: 10px;


      a {
        transition: all 0.2s ease;

        &:hover {


          color: #224a49;

        }

      }
    }

  }


}

.portfolio {
  background-image: url('~assets/graphic/green-dust-and-scratches.png');
  background-color: #da7f58;

  h1 {

    filter: drop-shadow(5px 6px 0 #b3603b);
    color: #e9e4dd;
    font-family: "Barlow Condensed",sans-serif;
    font-weight: 800;
  }

  span {

    &:before {

      background-color: #224a49;
      content: '';
      position: absolute;
      left: 0;
      width: 85%;
      height: 3px;
      top: 0;
    }

    &:after {
      top: 14px;
      height: 8px;
      position: absolute;
      left: 0;
      width: 85%;
      content: "";
      display: block;
      background: url('~assets/graphic/star.svg') repeat-x top left;
    }

  }

}

.page-spacing {


  background-image: url(~assets/graphic/15percent.png?webp);
  background-color: #f7ebd5;

}

.title-container h1 {

  -webkit-text-stroke-width: 3px;
  filter: drop-shadow(4px 5px 0 #224a49);
  -webkit-text-stroke-color: #e4ddd3;

  background-image: url('~assets/graphic/green-dust-and-scratches.png');
  background-color: #4f7b70;
  -webkit-font-smoothing: antialiased;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Barlow Condensed", sans-serif;

}

.portfolio_case {

  color: #224a49;


  span {


    &:before {

      background-color: #224a49;
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 3px;
      top: 0;
    }

    &:after {
      top: 14px;
      height: 8px;
      position: absolute;
      left: 0;
      width: 100%;
      content: "";
      display: block;
      background: url('~assets/graphic/star.svg') repeat-x top left;
    }

  }

  h1 {

    font-family: "Barlow Condensed", sans-serif;
    font-weight: 800;
  }


  h2 {

    font-family: Righteous, sans-serif;


  }
}


#panel {


  button {
    background-color: rgba(0, 0, 0, 0.25);
    background-image: url('~assets/graphic/green-dust-and-scratches.png');
    background-color: #4f7b70;
    font-family:   Barlow Condensed, sans-serif;

    &.disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }

}

.slide {

  border: 3px solid darken(rebeccapurple, 25);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
  background-position: initial;
  height: 60vh;
}


.next-enter {
  opacity: 0;
  transform: scale3d(2, 0.5, 1) translate3d(400px, 0, 0);
}

.next-enter-to {
  transform: scale3d(1, 1, 1);
}

.next-enter-active,
.next-leave-active {
  transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.next-leave {
  transform: scale3d(1, 1, 1);
}

.next-leave-to {
  opacity: 0;
  transform: scale3d(2, 0.5, 1) translate3d(-400px, 0, 0);
}

.prev-enter {
  opacity: 0;
  transform: scale3d(2, 0.5, 1) translate3d(-400px, 0, 0);
}

.prev-enter-to {
  transform: scale3d(1, 1, 1);
}

.prev-enter-active,
.prev-leave-active {
  transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.prev-leave {
  transform: scale3d(1, 1, 1);
}

.prev-leave-to {
  opacity: 0;
  transform: scale3d(2, 0.5, 1) translate3d(400px, 0, 0);
}

@media screen and (prefers-reduced-motion: reduce) {
  .next-enter {
    opacity: 0;
    transform: translate3d(100px, 0, 0);
  }
  .next-enter-active,
  .next-leave-active {
    transition: 0.5s;
  }
  .next-leave-to {
    opacity: 0;
    transform: translate3d(-100px, 0, 0);
  }

  .prev-enter {
    opacity: 0;
    transform: translate3d(-100px, 0, 0);
  }
  .prev-enter-active,
  .prev-leave-active {
    transition: 0.5s;
  }
  .prev-leave-to {
    opacity: 0;
    transform: translate3d(100px, 0, 0);
  }
}


@mixin btn-border-drawing($color: #ccc, $hover: black, $width: 2px, $vertical: top, $horizontal: left, $duration: 0.25s) {

  color: $color;
  transition: color $duration $duration/3;
  position: relative;

  &::before,
  &::after {
    border: 0 solid transparent;
    box-sizing: border-box;
    content: '';
    pointer-events: none;
    position: absolute;
    width: 0;
    height: 0;

    #{$vertical}: 0;
    #{$horizontal}: 0;
  }

  &::before {
    $h-side: if($horizontal == 'left', 'right', 'left');

    border-#{$vertical}-width: $width;
    border-#{$h-side}-width: $width;
  }

  &::after {
    $v-side: if($vertical == 'top', 'bottom', 'top');

    border-#{$v-side}-width: $width;
    border-#{$horizontal}-width: $width;
  }

  &:hover {
    color: $hover;

    &::before,
    &::after {
      border-color: $hover;
      transition: border-color 0s, width $duration, height $duration;
      width: 100%;
      height: 100%;
    }

    &::before {
      transition-delay: 0s, 0s, $duration;
    }

    &::after {
      transition-delay: 0s, $duration, 0s;
    }
  }
}

.draw-border {
  @include btn-border-drawing(white, white, 3px, bottom, right);
}

.btn {

  &:focus {
    outline: 2px dotted #55d7dc;
  }
}


.container_projects {


  i {
    opacity: 0;
    font-size: 22px;
    color: #DA4D1D;
    will-change: transform;
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }


  .card {

    transition: all .35s ease-in-out;

    &:before {
      content: "";
      z-index: 99;
      position: absolute;
      display: block;
      width: 16px;
      height: 16px;
      margin-left: 32px;
      margin-top: -10px;
      border-radius: 16px;
      background-color: #e9ddcc;
    }

    &:after {
      content: "";
      z-index: 99;
      position: absolute;
      margin-left: 32px;
      margin-top: -10px;
      display: block;
      width: 16px;
      height: 16px;
      border-radius: 16px;
      background-color: #e9ddcc;

    }

    .card-arrow {

      background-image: url("~assets/graphic/arrow-right-solid.svg");

    }

    ul {

      left: 39px;
      top: 3px;

      li {
        width: 2px;
        height: 3px;
        border-radius: 2px;
        margin: 6px 0;
        background-color: $bg-color;
      }
    }

    h2 {

      color: #DA4D1D;
    }


    p {
      color: #333;
      letter-spacing: 1px;
      writing-mode: vertical-lr;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
    }

    .pic {

      background-size: 100% 100%;
      filter: grayscale(0%) opacity(100%);
      transition: all 0.3s ease;
    }

    .social {

    }

    .social i:nth-of-type(1) {
      -webkit-transition-delay: 0.4s;
      transition-delay: 0.4s;

    }

    .social i:nth-of-type(2) {
      -webkit-transition-delay: 0.3s;
      transition-delay: 0.3s;
    }

    .social i:nth-of-type(3) {
      -webkit-transition-delay: 0.2s;
      transition-delay: 0.2s;
    }

    .social i:nth-of-type(4) {
      -webkit-transition-delay: 0.1s;
      transition-delay: 0.1s;
    }

    &:hover i {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    button {

      background-color: #6eb8b3;
      border-radius: 30px;
      transition: all 0.3s ease;
      mix-blend-mode: hard-light;

    }

    &:hover button {
      transform: scale(16.5);
    }

    &:hover p {
      color: #fff;
    }

    &:hover .pic {
      filter: grayscale(100%) opacity(80%);

    }
  }


}


</style>

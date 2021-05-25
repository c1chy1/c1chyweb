<template>

  <section class="h-screen w-full absolute z-10">


    <header class="container  relative p-24 w-full flex flex-col justify-center grid grid-cols-1 justify-items-center h-112 max-w-full lg:max-w-max  mx-auto filter-shadow-black relative overflow-hidden">


<div class="overflow-hidden absolute">
        <img

            :data-src="require('~/assets/graphic/light_background.png?webp')"
            :light="light.src"
            :srcSet="light.srcSet"
            class="lazyload light overflow-hidden "
            alt="light"
        >

</div>
          <div class="title uppercase top-2">
<h1 class="text-8xl font-semibold text-center uppercase">About Me
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
            <figcaption class="absolute block mx-auto mt-5 text-white text-3xl text-center ">
              <NuxtLink to="/">Home</NuxtLink>
              > About Me
            </figcaption>
          </figure>





    </header>

    <div
        class="page-spacing w-full h-20 absolute left-0 bg-repeat bg-center"
    ></div>

    <section class="w-full h-108 bg-black relative">

      <div class="about_me w-3/4 h-28  items-center flex  mx-auto mt-20">
        <span class="w-full inline-block relative 2xl:w-1/2"></span>
        <h2 class=" lg:w-1/2 2xl:w-3/12 font-bold text-3xl mt-4 text-center 2xl:mt-8"

        >WHAT I DO</h2>
        <span class="w-full inline-block relative 2xl:w-1/2"></span>


      </div>

      <div>

        <h1
            class="text-11xl font-bold text-center leading-tight uppercase filter-shadow-green"
        >WINNING DESIGN</h1>
      </div>


    </section>

    <section class="about_gallery h-auto grid grid-rows-2 grid-cols-3  gap-x-0  gap-y-16 justify-items-center  2xl:pb-20">

        <article class="bg-center bg-no-repeat">

          <div class="pic w-11/12"

           data-aos="slide-left"

          >
            <img


                :data-src="require('~/assets/graphic/about_gallery_1.jpg?webp')" class="lazyload"
                 alt="website design">


            <h2 class="w-1/2 relative m-auto p-2 mt-6 flex justify-center text-2xl font-semibold uppercase">
              Website Design
            </h2>

          </div>

        </article>
        <article class="bg-center bg-no-repeat">





          <div class="pic w-11/12"

               data-aos="rotate"
               data-aos-delay="300"


          >

            <img


                :data-src="require('~/assets/graphic/about_gallery_2.jpg?webp')" class="lazyload"

                alt="digital design">


            <h2 class="w-1/2 relative m-auto p-2 mt-6 flex justify-center text-2xl font-semibold uppercase">
              Digital Design
            </h2>
          </div>


        </article>
        <article class="bg-center bg-no-repeat">
          <div class="pic w-11/12"

               data-aos="slide-right"

          >
            <img
                :data-src="require('~/assets/graphic/about_gallery_3.jpg?webp')" class="lazyload"
                 alt="branding">

            <h2 class="w-1/2 relative m-auto p-2 mt-6 flex justify-center text-2xl font-semibold uppercase">
              Branding
            </h2>
          </div>

        </article>
        <article class="bg-center bg-no-repeat">
          <div class="pic w-11/12"
               data-aos="slide-left"

          >
            <img

                :data-src="require('~/assets/graphic/about_gallery_4.jpg?webp')" class="lazyload"
                alt="graphic design">
            <h2 class="w-1/2 relative m-auto p-2 mt-6 flex justify-center text-2xl font-semibold uppercase"



            >
              Graphic Design
            </h2>

          </div>

        </article>
        <article class="bg-center bg-no-repeat">
          <div class="pic w-11/12"
               data-aos="rotate"
               data-aos-delay="300"
          >
            <img

                :data-src="require('~/assets/graphic/about_gallery_5.jpg?webp')" class="lazyload"

                alt="mobile apps">

            <h2 class="w-1/2 relative m-auto p-2 mt-6 flex justify-center text-2xl font-semibold uppercase">
              Mobile Apps
            </h2>
          </div>

        </article>



        <article class="bg-center bg-no-repeat">

          <div class="pic w-11/12"

               data-aos="slide-right"
          >


            <img

                :data-src="require('~/assets/graphic/about_gallery_6.jpg?webp')" class="lazyload"
                alt="design concept"


            >
            <h2 class="w-1/2 relative m-auto p-2  mt-6 flex justify-center text-2xl font-semibold uppercase">
              Design Concept
            </h2>

          </div>

        </article>

    </section>
    <section  class="mission h-auto flex   lg:pt-12 lg:mt-16  lg:pb-32  2xl:mt-0  2xl:pb-12">


      <transition name="fade">
        <div

            v-if="isShowing" ref="modal" class="modal flex w-full z-40 xl:mt-10 xl:ml-2"  >

          <img

              :data-src="require('~/assets/graphic/vintage_cigarrettes.jpg?webp')"
              :src="marlboro.src"
              :srcSet="marlboro.srcSet"

          >

          <article class="flex flex-col justify-center leading-snug">
            <button
                ref="button"
                id="icon"
                class="Icon relative self-end mt-6 right-4"
                @click="closeModal">


              <span></span>
              <span></span>
              <span></span>

            </button>

            <h1 class="vectro px-3"><span class="vectro-body">TRY</span></h1>
            <h1 class="vectro px-3"><span class="vectro-body">IDEAS</span><span class="vectro-red">I</span></h1>
            <h1 class="vectro px-3 "><span class="vectro-body">PLANS</span><span class="vectro-red">I</span><span class="vectro-green">I</span></h1>
            <h1 class="vectro px-3"><span class="vectro-body">PROGRESS</span><span class="vectro-red">I</span><span class="vectro-green">I</span><span class="vectro-blue">I</span></h1>


          </article>

        </div>

      </transition>

      <div class="mission_left  w-1/2  lg:pl-16  2xl:pl-24 2xl:pt-16  z-20">
        <div class="flex"

        >
          <h3 class="w-1/3 font-bold text-3xl mt-4 ml-2 text-left"

          >CORE PRINCIPLES</h3>
          <span class="w-10/12 inline-block relative self-center"></span>
        </div>
        <h1 class="text-10xl font-semibold leading-none uppercase">MISSION</h1>
        <p class="w-10/12 text-2xl text-left mt-12 mb-8 z-10"
           v-bind:class="[isShowing ? blurClass : '', bkClass]"

        >Das Internet ist groß und bunt. Hier gibt es keine Standard-Lösung, sondern es sind immer individuelle Ansätze gefragt. Ich finde für meine Kunden neue Ideen und Konzepte, die wir engagiert und mit dem nötigen Know-how umsetzen.Websites, die nicht auf Smartphones oder Tablets angezeigt werden können, sperren sich einem stetig wachsenden Markt. Mit Responsive Design mache ich Webseiten fit für den Einsatz immer und überall.</p>

        <button
           class="button_red fade lg:hidden 2xl:block"
                @click="toggleModal">
        <span v-if="isShowing">HIDE</span>
        <span v-else>SHOW</span>
        MY APPROACH

        </button>
      </div>

      <div class="mission_right w-1/2 grid grid-cols-2 grid-rows-2 gap-x-0"

      >
        <div class="h-72 w-72 m-auto cursor-pointer">
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="lightbulb"
               class="svg-inline--fa fa-lightbulb fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 352 512">
            <path fill="#e9e4dc"
                  d="M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"></path>
          </svg>
          <h2 class=" relative justify-center m-auto top-4 p-1 lg:w-2/3 lg:text-2xl xl2:text-4xl 2xl:w-full text-center font-semibold uppercase z-0 ">
            DRIVEN CREATIVE
          </h2>
        </div>
        <div class="h-72 w-72 m-auto cursor-pointer">
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="handshake"
               class="h-3/5 svg-inline--fa fa-handshake fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 640 512">
            <path fill="#e9e4dc"
                  d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"></path>
          </svg>
          <h2 class="w-full relative justify-center m-auto top-4 p-1 lg:w-2/3 lg:text-2xl xl2:text-4xl 2xl:w-full text-center font-semibold uppercase z-0 ">
            HONEST WORK
          </h2>
        </div>
        <div class="h-72 w-72 m-auto cursor-pointer">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="laptop-house"
               class="svg-inline--fa fa-laptop-house fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 24 695 537">
            <path fill="#e9e4dc"
                  d="M272,288H208a16,16,0,0,1-16-16V208a16,16,0,0,1,16-16h64a16,16,0,0,1,16,16v37.12C299.11,232.24,315,224,332.8,224H469.74l6.65-7.53A16.51,16.51,0,0,0,480,207a16.31,16.31,0,0,0-4.75-10.61L416,144V48a16,16,0,0,0-16-16H368a16,16,0,0,0-16,16V87.3L263.5,8.92C258,4,247.45,0,240.05,0s-17.93,4-23.47,8.92L4.78,196.42A16.15,16.15,0,0,0,0,207a16.4,16.4,0,0,0,3.55,9.39L22.34,237.7A16.22,16.22,0,0,0,33,242.48,16.51,16.51,0,0,0,42.34,239L64,219.88V384a32,32,0,0,0,32,32H272ZM629.33,448H592V288c0-17.67-12.89-32-28.8-32H332.8c-15.91,0-28.8,14.33-28.8,32V448H266.67A10.67,10.67,0,0,0,256,458.67v10.66A42.82,42.82,0,0,0,298.6,512H597.4A42.82,42.82,0,0,0,640,469.33V458.67A10.67,10.67,0,0,0,629.33,448ZM544,448H352V304H544Z"></path>
          </svg>
          <h2 class="w-full relative justify-center m-auto top-4 p-1 lg:w-2/3 lg:text-2xl xl2:text-4xl 2xl:w-full text-center font-semibold uppercase z-0 ">
            MAKE AN IMPACT
          </h2>
        </div>
        <div class="h-72 w-72 m-auto cursor-pointer">
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="save"
               class="svg-inline--fa fa-save fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 -15 420 585">
            <path fill="#e9e4dc"
                  d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM272 80v80H144V80h128zm122 352H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h42v104c0 13.255 10.745 24 24 24h176c13.255 0 24-10.745 24-24V83.882l78.243 78.243a6 6 0 0 1 1.757 4.243V426a6 6 0 0 1-6 6zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 128c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z"></path>
          </svg>
          <h2 class="w-full relative justify-center m-auto top-4 p-1 lg:w-2/3 lg:text-2xl xl2:text-4xl 2xl:w-full text-center font-semibold uppercase z-0 ">
            HUMBLE COURAGE
          </h2></div>

      </div>


    </section>


    <section class="overflow-x-hidden">

      <div class="about_me w-3/4 h-28  items-center flex  mx-auto mt-8  2xl:mt-0">
        <span class="w-full inline-block relative 2xl:w-2/3"></span>
        <h3 class="w-1/2 font-bold text-3xl mt-4 text-center 2xl:mt-8"

        >WHAT I'M WORKING ON</h3>
        <span class="w-full inline-block relative 2xl:w-2/3"></span>


      </div>

      <div>
        <h1
            class="text-9xl font-bold text-center leading-tight mb-20 filter-shadow-green"

        >CORE PRINCIPLES</h1>

      </div>
      <div class="principles  w-full flex pb-16 items-end text-center mb-8  2xl:pb-16 2xl:mb-0 ">

        <article class="h-full w-1/3"


                   data-aos="fade-left"
                   data-aos-delay="1750"
                   data-aos-anchor="#site-footer"
          >

            <h2 class="w-1/3 relative m-auto p-1 flex justify-center lg:text-2xl 2xl:text-3xl font-semibold uppercase">
              Verstehen
            </h2>
            <img class="lazyload m-auto"

                 :data-src="require('~/assets/graphic/principles_01.png?webp')"
                 alt="Verstehen Frontend"
            >

            <p class="w-2/3 m-auto text-2xl">Mein erster Schritt in jedem Projekt: Ihre Bedürfnisse, Wünsche und Erwartungen nachvollziehen – und die Ihrer User.</p>
            <a href="#"
               class="button_red inline-block fade uppercase"
            >Lern Mehr

            </a>

          </article>
          <article class="h-full w-1/3 "

                   data-aos-delay="1250"
                   data-aos="fade-up"
                   data-aos-anchor="#site-footer">

            <h2 class="w-1/3 relative m-auto p-1 flex justify-center lg:text-2xl 2xl:text-3xl font-semibold uppercase">
              Entwickeln
            </h2>
            <img class="lazyload m-auto"
                 :data-src="require('~/assets/graphic/principles_02.png?webp')"
                 alt="Entwickeln Frontend">
            <p class="w-2/3 m-auto text-2xl">Auf dieser Grundlage ermittle ich mögliche Lösungswege und entwerfe erste konkrete Ansätze. </p>
            <a href="#"
               class="button_red inline-block fade uppercase"

            >Lern Mehr</a>


          </article>
          <article class="h-full w-1/3"

                   data-aos="fade-right"
                   data-aos-delay="1750"
                   data-aos-anchor="#site-footer">

            <h2 class="w-1/3 relative m-auto p-1 flex justify-center lg:text-2xl 2xl:text-3xl font-semibold uppercase">
              Umsetzen
            </h2>
            <img class="lazyload m-auto"
                 :data-src="require('~/assets/graphic/principles_03.png?webp')"
                 alt="Umsetzen Frontend"
            >
            <p class="w-2/3 m-auto mb-4 text-2xl">Ich stimme meine Ideen mit Ihnen ab. Ich übertrage den geplanten Maßnahmen und beginne mit der technischen Umsetzung.</p>
            <a href="#"
               class="button_red inline-block fade uppercase"

            >Lern Mehr</a>

          </article>
        </div>
      <stickyFooter  class="opacity-100"
                     data-aos="slide-right"
                     data-aos-duration="1000"
      />

    </section>
  </section>

</template>

<script>


const light = require('~/assets/graphic/light_background.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000&format=webp');
const marlboro = require('~/assets/graphic/vintage_cigarrettes.jpg?resize&sizes[]=300&sizes[]=600&format=webp');



import stickyFooter from "@/components/stickyFooter";



export default {

  components: {stickyFooter},


  layout: 'desktop',




  data() {

    return {


      light,marlboro,



      animate: true,
      isShowing: false,
      bkClass: 'bk',
      blurClass: 'blur',
      show: false,


    }

  },


  transition: {
    name: 'spotlight',
    mode: 'out-in',
  },



  methods: {


    toggleModal() {
      document.querySelector('.mission').scrollIntoView({behavior: 'smooth'});

      setTimeout(() => { this.isShowing = !this.isShowing;

        if (!this.isShowing) {

          this.$refs.modal.classList.add('out')

        }

        }, 500 )

    },

    closeModal() {


      this.$refs.button.classList.add('close')

      setTimeout(() => {

        this.$refs.modal.classList.add('out')

      }, 500)



      setTimeout(() => {

        this.isShowing = false

      }, 500)


    },


  },





  beforeMount() {

   fullpage_api.destroy('all')

  }
}
</script>

<style scoped lang="scss">


$titleColor: #224a49;

[data-aos="rotate"] {
  transform: rotate(720deg);
  opacity: 0;
  transition-property: transform, opacity;
  &.aos-animate {
    transform: rotate(0);
    opacity: 1;
  }
}

section {

  background-color: antiquewhite;
  background-image: url('~assets/graphic/exclusive-paper.png');
}

h1 {

  color:$titleColor;
}

.button_red {

  background-color: transparent;
  color: #e53e26;
  border-color: #e53e26;
  width: 15rem;
  margin-top: 30px;
  border-width: 4px 0;
  border-style: solid;
  font-weight: 700;
  font-size: 30px;
  padding: 10px;
  line-height: 1;
  text-align: center;
  position: relative;
  font-family: Barlow Condensed, sans-serif;
  transition: all 0.2s ease;


  &:before, &:after {
    background-color: #e53e26;
    content: '';
    position: absolute;
    top: 50%;
    width: 7px;
    height: 7px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: background-color .2s ease, transform .2s ease;
    transition: background-color .2s ease, transform .2s ease;

  }


  &:before {


    left: 0;
  }

  &:after {


    right: 0;
  }

  &:hover {

    color: #e6c8a0

  }
}



.bk {
  transition: all 0.05s ease-out;
}

.blur {
  filter: blur(1px);
  opacity: 0.4;
}




div.modal {
  height: 75px;
  width: 75px;
  border-radius: 40px;
  overflow: hidden;
  position: absolute;
  background-color: black;

  animation: bondJamesBond 1.5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;

  h1, p, li, button, img , .vectro{
    opacity: 0;
    position: relative;
    animation: modalContentFadeIn .5s 1.4s linear forwards;
  }


  &.out {
    animation: slowFade  1.5s ;



    > h1, p, li, button, img, .vectro {
      animation: modalContentFadeOut 0.7s ;
    }

  }

  @keyframes slowFade {
    0% {
      width:50%;
      height: 66%;
      border-radius:45px;
    }
    80% {
      height: 10%;
      width:5%;
    }
    90% {
      transform:translateX(0px);

      height:75px;
      width: 75px;
    }
    100% {
      width:0;
      transform:translateX(1000px);
    }
  }


  @keyframes modalContentFadeIn {
    0% {
      opacity:0;
      top:-20px;


    }
    100% {
      opacity:1;
      top:0;
      border-radius:45px;
    }
  }


  @keyframes modalContentFadeOut {
    0% {
      opacity:1;
      top:0;
    }
    100% {
      opacity:0;
      top:-20px;
    }
  }


  @keyframes bondJamesBond {
    0% {
      transform:translateX(1000px);

    }
    80% {
      transform:translateX(0px);

      height:75px;
      width:75px;
    }
    90% {
      height:60%;

    }
    100% {

      height:66%;
      width:50%;
    }
  }




  .vectro {
    position: relative;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 0.1px #f1f1f1;
    font-family: 'Righteous', cursive;
    font-size: 4vw;
    background-color: black;
  }

  .vectro:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 0, rgba(255,255,255,0) 1px, rgba(255,255,255,0) 2px);
  }



 .vectro {
    -webkit-text-stroke: 1px #f1f1f1;
  }

  .vectro-body {
    -webkit-background-clip: text;
    background-image: -webkit-linear-gradient(#C3BFB4 0%, #FDFCFA 50%, #E8E7E5 51%, #757172 52%, #E8E9DB 100%);
    -webkit-filter: drop-shadow(2px 2px 15px #3F59F4);
  }

  .vectro-red {
    color: #F10C20;
    -webkit-text-fill-color: #F10C20;
    -webkit-text-stroke: 0;
    -webkit-filter: drop-shadow(2px 2px 15px #F10C20);
    font-style: italic;
    padding-right: 20px;
  }

  .vectro-red {
    padding-right: 30px;
  }

  .vectro-green {
    color: #6BFF2B;
    -webkit-text-fill-color: #6BFF2B;
    -webkit-filter: drop-shadow(2px 2px 15px #6BFF2B);
    -webkit-text-stroke: 0;
    font-style: italic;
    padding-right: 20px;
    margin-left: -20px;
  }

 .vectro-green {
    padding-right: 30px;
    margin-left: -30px;
  }

  .vectro-blue {
    color: #3F59F4;
    -webkit-text-fill-color: #3F59F4;
    -webkit-filter: drop-shadow(2px 2px 15px #3F59F4);
    -webkit-text-stroke: 0;
    font-style: italic;
    padding-right: 20px;
    margin-left: -20px;
  }

 .vectro-blue {
    padding-right: 30px;
    margin-left: -30px;
  }

  .Icon {
    width: 50px;
    height: 50px;
    position: absolute;

    transform: rotate(0deg);
    transition: .5s ease-in-out;
    cursor: pointer;
  }

  .Icon span {
    display: block;
    position: absolute;
    left: 0;
    top: 23px;
    height: 8px;
    width: 100%;
    background: #fff;
    border-radius: 4px;
    transform: rotate(0deg);
    transition: .2s ease-in-out;
  }

  .Icon span:nth-child(1),
  .Icon span:nth-child(3) {
    width: 50%;
    transform: rotate(45deg);
  }

  .Icon span:nth-child(1) {
    left: 3px;
    top: 15px;
  }

  .Icon span:nth-child(2) {
    transform: rotate(-45deg);
  }

  .Icon span:nth-child(3) {
    left: 20px;
    top: 31px;
  }

  .close span:nth-child(1),
  .close span:nth-child(3) {
    left: -1px;
  }

  .close span:nth-child(1) {
    top: 15px;
    transform: rotate(135deg);
  }

  .close span:nth-child(2) {
    transform: rotate(0deg);
  }

  .close span:nth-child(3) {
    top: 31px;
    transform: rotate(45deg);
  }




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
    left: 50%;
    transform: translate(-50%, -50%);
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

.about_gallery {

  article {


    .pic {

      position: relative;
      display: block;
      --ratio: 10 / 16;
      --width: 98vmin;
      --height: calc(var(--width) * var(--ratio));

      width:100%;
      height: var(--height);
      overflow: hidden;

      &:before {


        position: absolute;
        top: 0;
        left: -75%;
        z-index: 2;
        display: block;
        content: '';
        width: 50%;
        height: 80%;
        background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);
        background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);
        -webkit-transform: skewX(-25deg);
        transform: skewX(-25deg);
        cursor: pointer;

      }

      &:hover::before {

        animation: shine .75s;

      }


      img {

        border: 25px solid rgb(194, 213, 180);
        padding: 5px;
        border-image: url(~assets/graphic/portfolio-points.png?webp) 20% round;
        cursor: pointer;
      }
    }


    h2 {

      background-image: url(~assets/graphic/green-dust-and-scratches.png);
      background-color: #4f7b70;
      color: #f7ebd5;
      box-shadow: -10px 0 0 #4f7b70;
      white-space: revert;

    }

  }
}







.page-spacing {


  background-image: url(~assets/graphic/15percent.png?webp);
  background-color: #f7ebd5;
}


.about_me {

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


  h3 {

    font-family: Barlow Condensed, sans-serif;


  }
}


article {

  background-size: 115% 250%;
}

.mission {
  background-image: url('~assets/graphic/green-dust-and-scratches.png');
  background-color: #da7f58;


  .mission_left {

    h1 {

      filter: drop-shadow(5px 6px 0 #b3603b);
      color: #e9e4dd;
    }


    p {
      font-family: monospace, sans-serif;
      color: #e9e4dd;
      font-size: 1.3vw;

    }


    div span {


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
        height: 14px;
        position: absolute;
        left: 0;
        width: 85%;
        content: "";
        display: block;
        background: url('~assets/graphic/star.svg') repeat-x top left;
      }


    }

  }

  .mission_right {


    div {

      background-color: rgba(218, 127, 88, 0.9);
      border-radius: 50%;
      border: 15px solid white;
      transition: all .25s linear;

      &:hover {

        background-color: #4f7b70;


        svg {

          background-color: #e9e4dd;

          path {

            fill: #4f7b70;
          }

        }
      }

      svg {
        height: 60%;
        width: 60%;
        margin: 50px auto;
        padding: 30px;
        background-color: #4f7b70;
        border-radius: 50%;
        transition: all .25s linear;

      }


    }

    h2 {


      background-image: url(~assets/graphic/green-dust-and-scratches.png);
      background-color: #e53e26;
      box-shadow: -6px 0 0 #e53e26;
      color: #f7ebd5;
      white-space: revert;

    }

  }


   h3 {

    font-family: Barlow Condensed, sans-serif;
    color: #224a49;
  }


}

.principles {

  h2 {

    background-image: url(~assets/graphic/green-dust-and-scratches.png);
    background-color: #4f7b70;
    color: #f7ebd5;
    white-space: revert;
  }

  p {

    color: #333333;

  }


  .button_red {



    &:hover {


      color: #224a49;

    }

  }
}

</style>


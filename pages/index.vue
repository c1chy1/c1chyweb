<script src="../../../portfolio/portfolio/nuxt.config.js"></script>
<template>




    <full-page id="fullpage" class="w-screen h-screen  absolute z-10 cursor-default container px-0 md:px-0  max-w-full lg:max-w-max  mx-auto"  :options="options">



      <section  class="fp-section w-full overflow-hidden bg-no-repeat bg-cover bg-center opacity-100  xl:rounded-4xl  filter-shadow-black z-10 ">


        <light/>
        <div
            class="w-full h-screen relative fill-40 flex flex-col   justify-between    sm:justify-end "
            style="background-image:radial-gradient(transparent, rgba(0, 0, 0, 0.5));">



          <div
              class="lazyload circle_bg circle1 absolute w-2 px-4 py-2 ml-12 bg-white hidden   2xl:block 2xl:w-20 2xl:p-5 z-50"
           ></div>
          <div class="lazyload circle_bg  circle2 absolute w-4 px-3 py-2 ml-6 bg-white hidden  2xl:block 2xl:w-16 2xl:p-4  z-40"

          ></div>
          <div class="lazyload circle_bg circle3  absolute w-8 px-2 py-1   bg-white hidden   2xl:block 2xl:p-2 z-30"

          ></div>
   <img

       :data-src="require('~/assets/graphic/logo.png?webp')"
       :srcSet="logo.srcSet"
       :src="logo.src"

       alt="c1chy"
       class="logo lazyload  self-center relative w-10/12 sm:w-1/3 md:w-40 portrait:w-1/2 lg:w-1/3 xl:w-1/4


        xl:top-12 relative z-50"
       :class="'animate__animated animate__tada animate__delay-8s animate__repeat-2'">


          <img

              :data-src="require('~/assets/graphic/hat.png?webp')"
              :srcSet="hat.srcSet"
              :src="hat.src"
              alt="rainbow balloon"
               class="hat lazyload relative self-center w-3/5 sm:w-32  md:1/2 portrait:w-1/2 lg:w-1/4  xl:top-12 xl:w-1/5 z-20"
          >
          <img


              :data-src="require('~/assets/graphic/body.png?webp')"
              :srcSet="body.srcSet"
              :src="body.src"

              alt="vintage body"
              class="body lazyload self-center w-full h-1/3 sm:w-2/5 sm:h-auto md:w-2/3 lg:w-5/12



                xl:w-1/2 2xl:w-1/3 filter-shadow-black ">

          <figure class="ribbon flex bottom-20 absolute w-8/12 sm:justify-center  xl:w-2/5 2xl:w-1/3  self-center   filter-shadow-black z-10 ">


            <img
                :data-src="require('~/assets/graphic/ribbon.png?webp')"
                alt="ribbon"
                class="lazyload absolute  sm:w-1/2 md:w-2/3 lg:w-full 2xl:w-full filter-shadow-black z-10">
            <figcaption class="mx-auto mt-2   text-xs text-white text-center my-auto  md:text-xl lg:text-xl  xl:mt-4 xl:tracking-wider    2xl:mt-5 z-20">
              Visually Striking Design </figcaption>
          </figure>

        </div>


        <div class="hidden sm:block bottom-0 right-2 absolute lg:pr-2 2xl:block 2xl:right-0 2xl:absolute 2xl:bottom-0 2xl:mb-3 2xl:mr-3 text-center tracking-widest md:text-left z-10">
          <div class="classic sm:mb-3 md:absolute  lg:text-center 2xl:block 2xl:relative 2xl:right-1/3 ">
            <span class="intro intro--the block text-3xl">The</span>
            <span class="intro intro--num block text inline-block absolute font-semibold sm:hidden lg:inline">first #1</span>
            <span class="intro block  sm:text-xl 2xl:text-4xl">classic style</span>
          </div>
          <div class="vintage__container block md:absolute lg:relative 2xl:relative ">
            <p class="vintage vintage__top  m-0 text-6xl leading-none sm:hidden md:absolute md:text-5xl lg:absolute 2xl:absolute 2xl:block 2xl:text-center 2xl:w-full">VINTAGE</p>
            <p class="vintage vintage__bot  m-0 text-6xl leading-none sm:hidden md:absolute md:text-5xl lg:absolute 2xl:relative 2xl:block 2xl:text-center">VINTAGE</p>

          </div>
          <div class="sm:hidden md:hidden 2xl:block 2xl:right-0 2xl:mt-2 2xl:tracking-wide">
            <span class="outro pt-4 text-white text-xl ">NO.01</span>
            <span class="outro  text-white text-3xl font-sans">OLDSCHOOL RECREATED</span>
            <span class="outro text-white text-xl">BEST</span>
            <span class="outro block text-white text-xl 2xl:text-center">c1chy.web</span>
          </div>
        </div>


      </section>

      <section class="fp-section w-full  relative bg-repeat bg-scroll opacity-100 overflow-hidden z-10 xl:rounded-4xl  ">

        <div class="welcome_studio w-full pt-4 flex flex-col justify-content-between items-center text-center box-border leading-tight">
          <div class="w-full h-28  items-center flex  mx-auto 2xl:mt-16">
            <span class="w-11/12 inline-block relative"></span>
            <h1 class="w-full font-bold text-2xl mt-2 sm:w-full sm:text-2xl md:w-full md:mt-0 md:text-5xl  xl:text-2xl  2xl:text-4xl   "

            >WELCOME TO STUDIO</h1>
            <span class="w-11/12 inline-block relative"></span>

          </div>

          <article class="bg-center bg-no-repeat leading-none ">
            <h1
                class="hidden inline text-5xl font-bold uppercase 2xl:block 2xl:text-11xl 2xl:mt-4 "


            >c1chy's studio</h1>
            <figure
                class="h-full w-8/12 relative m-auto flex items-center filter-shadow-black z-10 hidden sm:flex sm:w-1/2 sm:mt-4 md:w-1/2 lg:w-full xl:w-2/3 2xl:w-2/3 2xl:mt-0 2xl:mb-1 z-20">
              <img

                  :srcSet="require('../assets/graphic/ribbon.png?webp')"
                  alt="ribbon"

                  class="lazyload xl:text-center filter-shadow-black " >
              <figcaption
                  class="w-full my-auto mt-3 block absolute text-xl text-center text-white sm:text-xl sm:tracking-wide md:sm:tracking-widest xl:tracking-mega xl:mt-4 2xl:tracking-wider 2xl:text-4xl 2xl:mt-6 2xl:ml-2 ">
                ✪ ✪ ✪ ✪ ✪ ✪ ✪
              </figcaption>
            </figure>
          </article>
        </div>
        <div
            class="scumbag w-full flex  flex-col  xl:flex-row  justify-center bg-repeat bg-auto bg-center z-2 xl:rounded-4xl">

          <div

              ref="welcomeStudio"
              class="text-center mt-3 pt-1 xl:w-1/2 lg:w-2/3 2xl:w-1/2">
            <div>
              <h2
                  class="text-xl md:text-4xl lg:text-5xl  2xl:text-2xl 2xl:text-4xl 2xl:font-bold 2xl:text-center">
                Klare Strategie , ausdrucksstarkes <br> Design & moderne Technologie. </h2>
            </div>

            <div

                class="w-full  px-1 pt-5 leading-loose md:w-full xl:text-xl xl:mt-2  2xl:pt-3 2xl:mt-4 2xl:flex ">

              <ul class=" mb-16 text-xs text-center  md:text-2xl lg:text-2xl xl:text-xl xl:border-purple-700 2xl:mb-0 2xl:p-1 2xl:text-xl ">
                <li><h3>APP-Entwicklung</h3></li>
                <li><h3>Responsive Webdesign</h3></li>
                <li><h3>SEO + Sichtbarkeit</h3></li>
              </ul>



              <p class="hidden sm:hidden md:hidden md:block  md:text-2xl lg:hidden xl:text-xl  xl:hidden 2xl:w-1/2 2xl:p-1 2xl:m-auto 2xl:block 2xl:text-xl">
                Webseiten der neuen Generation, die mit dem Ziel erstellt werden, Arbeit durch Innovation zu transformieren. </p>

            </div>


          </div>

          <img


              ref="scumbag"
              :data-src="require('~/assets/graphic/vintage_wolf.jpg?webp')"
              :src="scumbag.src"
              :srcSet="scumbag.srcSet"

              class="wolf lazyload  w-1/2 rounded-4xl sm:hidden md:block xl:w-2/5 2xl:w-1/4 opacity-0  z-10 "
              alt="vintage wolf">

          <div class="background h-2/5 absolute right-0 top-3/4 opacity-70 ">
          </div>
        </div>
      </section>

      <section class="fp-section  w-full relative overflow-hidden box-content xl:rounded-4xl z-0 "  >
        <div class="bg_stars h-full w-full flex flex-col justify-evenly sm:flex-row  md:flex-col xl:flex-row-reverse text-white z-0 ">



<div



    class="w-5/12 self-center lg:w-1/3  lg:h-full lg:flex lg:flex-col lg:justify-evenly">
            <h2
                class="text-center  text-xl xl:text-3xl 2xl:text-5xl ">
              Strategie, Technologie, <br> App & Content </h2>

  <p
                :class="[isShowing ? blurClass : '', bkClass]"
                class="hidden text-xs xl:block xl:text-xl 2xl:text-xl ">
              An der Schnittstelle von Technik entwickle ich digitale Anwendungen,
              die mit durchdachter Benutzerführung und ausgefeilter Funktionalität überzeugen – egal,
              auf welchem Gerät. Dazu erprobe ich neuartige Methoden, beschäftige ich intensiv mit aufregenden Technologien,
              experimentiere mit neuen Herangehensweisen.</p>


            <button
               class="button_red text-center px-4 py-2 relative hidden lg:hidden xl:hidden 2xl:block 2xl:w-1/2 2xl:text-3xl"
               @click="toggleModal"
            >
              <span v-if="isShowing"
              >HIDE HOW !</span>
              <span v-else>SHOW ME HOW !</span>

            </button>

  <transition name="fade">
  <div

      v-if="isShowing" ref="modal" class="lazyload modal flex w-full" >

    <img

        class="lazyload"
        :data-src="require('~/assets/graphic/vintage_walkman.jpg?webp')"
        :src="walkman.src"
        :srcSet="walkman.srcSet"

    >

<article class="lazyload flex flex-row-reverse leading-snug">
    <button
        ref="button"
        id="icon"
        class="Icon relative 2xl:left-16 mt-2"
        @click="closeModal">


      <span></span>
      <span></span>
      <span></span>

    </button>
    <ul class="ml-4">

      <li><p class="fifties">1. Original</p></li>
      <li><p class="fifties">2. Stylish</p></li>
      <li><p class="fifties">3. Modernly</p></li>


    </ul>


</article>

  </div>

  </transition>
</div>


            <img

                ref="vintageMusic"
                class="lazyload opacity-0 w-1/2 self-center rounded-3xl sm:w-1/4 md:w-1/2 lg:w-1/4 "
                :data-src="require('~/assets/graphic/vintage_music.jpg?webp')"
                :src="vintageMusic.src"
                :srcSet="vintageMusic.srcSet"
                 alt="vintage">
        </div>


      </section>
      <section class="fp-section w-full relative box-content flex-col bg-cover overflow-hidden flex xl:rounded-4xl z-0 sm:flex-row md:flex-col lg:flex-col  xl:flex-row  ">

        <article class="show w-full flex flex-col sm:self-center md:h-1/3 2xl:self-start">


          <div
              class="w-full h-28 items-center flex mx-auto xl:mt-16 xl:w-3/4 2xl:w-full">

            <h2
                class="together w-3/5 font-bold text-3xl mt-4 px-2 text-xl  md:text-4xl  lg:w-full lg:text-5xl xl:w-2/5 2xl:text-4xl ">
              LET'S WORK TOGETHER
            </h2>
            <span
                class="w-1/2 inline-block relative "></span>

          </div>
<div class="w-3/4 mx-auto items-center">

  <h1 class="hire hidden font-bold text-10xl filter-shadow-green md:block md:text-6xl   md-landscape:hidden  md-portrait:text-5xl lg:block lg:text-10xl xl:hidden xl:text-4xl 2xl:block 2xl:text-9xl ">
    HIRE ME</h1>


  <figure
      class="lazyload  w-full relative top-8 m-auto flex items-center filter-shadow-black 2xl:h-auto 2xl:top-0 ">
    <img

        :data-src="require('~/assets/graphic/ribbon.png?webp')"
        alt="ribbon"

        class="lazyload md:w-full lg:w-3/4  xl:w-full filter-shadow-black 2xl:h-12 2xl:text-center z-1 ">
    <figcaption
        class="w-full absolute block text-2xl left-0 my-auto mt-2 bg-no-repeat text-center text-white md:ml-3 md:text-3xl md:tracking-widest  lg:text-3xl  2xl:tracking-widest 2xl:text-3xl   z-0 ">
      Let Me Know!
    </figcaption>
  </figure>

  <p class="w-auto h-auto text-xs mt-4 sm:hidden md:text-2xl md:hidden  lg:text-3xl xl:block xl:text-2xl xl:mt-0 2xl:max-w-lg 2xl:block 2xl:text-2xl 2xl:mt-5 ">
    Eine hochwertige und ansprechende Website stellt die Grundlage für jede Online-Präsenz. </p>

</div>
        </article>

        <div class="w-full sm:self-center z-0  2xl:self-end "
        >
          <form

              ref="form"
              id="form"
              class="lazyload opacity-0 w-full h-full flex flex-col justify-start items-center text-xl sm:justify-center md:justify-start lg:justify-center xl:justify-center xl:text-2xl"
              v-on:submit={getFormValues}
          >
            <label for="name" class="w-full text-center">
            <input
                type="text"
                id="name"
                class="w-4/5 h-8 mt-3 pl-1 border-2  text-xl rounded-xl sm:h-8  md:h-16 md:text-4xl  md-landscape:h-12  md-landscape:text-xl lg:text-3xl  xl:h-12 xl:text-2xl"
                placeholder="name"
            >
          </label>
            <label for="email" class="w-full text-center">
            <input type="email" id="email" placeholder="email"
                   class="w-4/5 h-8 mt-3 pl-1 text-xl  border-2 rounded-xl sm:h-8  md:h-16 md:text-4xl md-landscape:h-12  md-landscape:text-xl  lg:mb-5 lg:text-3xl xl:h-12 xl:text-2xl" >
           </label>
            <label for="message" class="w-full text-center">
            <textarea id="message" placeholder="message"
                      class="w-4/5 h-auto mt-3 pl-1  text-xl resize-none border-2 rounded-xl  md:text-4xl  md-landscape:text-xl  lg:h-64 lg:mb-5 lg:text-3xl xl:text-2xl " > </textarea>
            </label>

            <button type ="submit" form="form" value="submit" class="button_red text-center px-4 py-2 mt-4 relative sm:mt-2 sm:ml-10 sm:self-start md:w-20 md:self-center md:text-2xl 2xl:w-40 2xl:self-stretch 2xl:ml-24">SEND</button>

          </form>

        </div>

        <stickyFooter
            class="bottom-0 absolute"
            ref="footer"
        />

      </section>

    </full-page>

</template>

<script>



import stickyFooter from "@/components/stickyFooter"
import light from "@/components/light";



const logo = require('~/assets/graphic/logo.png?resize&sizes[]=150&sizes[]=600&sizes[]=1000&format=webp');
const hat = require('~/assets/graphic/hat.png?resize&sizes[]=150&sizes[]=600&sizes[]=1000&format=webp');
const body =require('~/assets/graphic/body.png?resize&sizes[]=150&sizes[]=600&sizes[]=1000&format=webp');
const vintageMusic = require('~/assets/graphic/vintage_music.jpg?resize&sizes[]=150&sizes[]=600&sizes[]=1000&format=webp');
const scumbag = require('~/assets/graphic/vintage_wolf.jpg?resize&sizes[]=150&sizes[]=600&sizes[]=1000&format=webp');
const walkman = require('~/assets/graphic/vintage_walkman.jpg?resize&sizes[]=150&sizes[]=600&format=webp');




export default {

  components: {light,stickyFooter},


  layout: 'desktop',



 transition: {
   name: 'slots',
   mode: 'out-in',

  },


  data() {


return {

      logo,hat,body,scumbag,vintageMusic,walkman,


      bkClass: 'bk',
      blurClass: 'blur',

      loading: false,
      isShowing: false,
      options: {
        ref: true,
        dragAndMove: true,
        afterLoad: this.afterLoad,
        licenseKey: "MiT",
        navigation: true,
        anchors: ['page1', 'page2', 'page3', 'page4'],
        scrollingSpeed: 1500,
        sectionsColor: ['#e4ddd3', '#e4ddd3', '#1c1716', '#fec401'],
        controlArrows: true,
        verticalCentered: false,
        css3: true,
        slidesNavigation:false,
      },
    }
  },




  methods: {


    toggleModal() {
      document.querySelector('.bg_stars').scrollIntoView({behavior: 'smooth'});
    this.isShowing = !this.isShowing;


    if (!this.isShowing) {

      this.$refs.modal.classList.add('out')

    }

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




    afterLoad: function animation(origin, destination, direction) {


      if (direction === "down" && destination.index === 1 ) {


    Velocity(this.$refs.scumbag,

            {
              opacity: 1,
              transform: ["translateX(0)", "translateX(75%)"],
            },


            {

              easing: "ease-out",
              duration:500,
              delay:2500,
              queue: "test",

              complete: () => {
                Velocity(this.$refs.scumbag,
                    {

                      transform: ["rotate(12deg)","rotate(0)"],

                    },

                    {

                      easing:[400,4],
                      duration: 1000,
                      queue: "test",
                      complete: this.afterLoad,
                    }
                )

              },

              begin: () => {
                Velocity(this.$refs.welcomeStudio,
                    {

             transform: ["translateX(-12%) rotate(8deg)","translateX(0) rotate(0)"]


                    },

                    {
                      easing:"ease-in",
                      queue: false,
                      duration: 400,
                      delay:500,
                      complete: this.afterLoad,
                    },

                )
              }

            })


      }

      else if (direction === "up" && destination.index === 0 ) {

        Velocity(this.$refs.scumbag,

            {
              opacity: 0,
              transform: ["translateX(75%)", "translateX(0)"],
            },

            {

              duration:100,

              complete: () => {
                Velocity(this.$refs.scumbag,
                    {

                      transform: ["rotate(0)","rotate(12deg)"],

                    },

                    {

                      duration: 100,
                      complete: this.afterLoad,
                    }
                )

              },

              begin: () => {
                Velocity(this.$refs.welcomeStudio,
                    {

                      transform: ["translateX(0) rotate(0)","translateX(-12%) rotate(8deg)"]


                    },

                    {
                      complete: this.afterLoad,
                    },

                )
              }

            })



      }




      else if (direction === "down" && destination.index === 2 ) {


        Velocity(this.$refs.vintageMusic,

            {
              opacity: 1,

            },


            {
              easing:"swing",
              duration:550,
              begin: () => {


                this.$refs.vintageMusic.classList.add('animate__animated', 'animate__bounceInLeft','animate__delay-1s','animate__slow')



                setTimeout(() => {


                  this.$refs.vintageMusic.classList.remove('animate__animated', 'animate__bounceInLeft','animate__delay-1s','animate__slow')


                }, 3000);
                Velocity(this.$refs.vintageMusic, {


                  opacity : 1

                },
                    {

                      easing:"swing",
                      delay:3500,
                      complete: ()=> {


                        this.$refs.vintageMusic.classList.add('animate__animated', 'animate__bounce','animate__repeat-2')


                      }
                    }



                )


        }

            })


      }


     else if (direction === "up" && destination.index === 1 ) {


        Velocity(this.$refs.vintageMusic,

            {
              opacity: 0,

            },
            {
              begin: () => {


                this.$refs.vintageMusic.classList.remove('animate__animated', 'animate__bounce','animate__repeat-2')


              }
            }
        )

      }



      else if (direction === "down" && destination.index === 3 ) {


        Velocity(this.$refs.form,

            {
              opacity: 1,

            },
            {
              begin: () => {


                this.$refs.form.classList.add('animate__animated', 'animate__bounceInRight','animate__delay-2s','animate__slow')

                this.$nuxt.$el.children[0].childNodes[0].children[1].children[3].children[2].classList.add('animate__animated', 'animate__slideInLeft','animate__delay-1s')
                this.$nuxt.$el.children[0].childNodes[0].children[1].children[3].children[2].style.opacity = "1"


                this.$nuxt.$el.children[0].children[0].children[1].children[3].children[2].children[2].children[0].classList.add('animate__animated', 'animate__zoomInDown','animate__delay-2s')
                this.$nuxt.$el.children[0].children[0].children[1].children[3].children[2].children[2].children[1].classList.add('animate__animated', 'animate__zoomInDown','animate__delay-3s')
                this.$nuxt.$el.children[0].children[0].children[1].children[3].children[2].children[2].children[2].classList.add('animate__animated', 'animate__zoomInDown','animate__delay-4s')
                this.$nuxt.$el.children[0].children[0].children[1].children[3].children[2].children[2].children[3].classList.add('animate__animated', 'animate__zoomInDown','animate__delay-5s')

              }

            }
        )






      }




      else if (direction === "up" && destination.index === 2 ) {


        Velocity(this.$refs.form,

            {
              opacity: 0,

            },
            {
              begin: () => {


                this.$refs.form.classList.remove('animate__animated', 'animate__bounceInRight','animate__delay-2s','animate__slow')

                this.$nuxt.$el.children[0].childNodes[0].children[1].children[3].children[2].classList.remove('animate__animated', 'animate__slideInLeft','animate__delay-1s')
                this.$nuxt.$el.children[0].childNodes[0].children[1].children[3].children[2].style.opacity = "0"
              }
            }
        )

      }

    },


    getFormValues (submitEvent) {
      this.name = submitEvent.target.elements.name.value
    },


},


  mounted() {


    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
  },



}

</script>

<style scoped lang="scss">

.bk {
  transition: all 0.3s ease-out;
}

.blur {
  filter: blur(1px);
  opacity: 0.4;
}



#fullpage {


  background-color: antiquewhite;
}






.animate__delay-8s {


  animation-delay: 8s!important;
}

div p, li, a {

  font-family: Merriweather , sans-serif;

}


.logo {

  --animate-duration:1.5s;

}

.animate {

  --animate-duration:1.5s;

}

.button_red {

  background-color: transparent;
  color: #e53e26;
  border-color: #e53e26;
  border-width: 4px 0;
  border-style: solid;
  font-weight: 700;
  line-height: 1;
  font-family: Barlow Condensed,sans-serif;
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

.fade {

  opacity: 0;

}

.show {

  opacity: 1;

}

.fp-section.fp-table, .fp-slide.fp-table {

  border-radius: 25px !important;

}

[data-anchor="page1"] {

  background-image: url("~assets/graphic/bg_green.png?webp");

  visibility: inherit;


  .circle_bg {


    background-image: url('~assets/graphic/exclusive-paper.png?size=150');
    border: 5px solid #000000;
    border-radius: 50%;
    opacity: 0

  }


  .intro span {

   color: #e6c8a0

  }

 img:last-child {


  }

  figure {


    figcaption {



      font-family: Satisfy,sans-serif;
    }

    img {

      z-index: -1;

    }

  }

  .intro {
    color: rgb(230, 200, 160);
    font-family: 'Satisfy', cursive;
    text-shadow: 1px 1px black;
    transform: rotate(-10deg);
  }

  .intro--the {
    transform: rotate(-10deg) translate(-20px, 15px);
  }

  .intro--num {
    background: rgb(240, 200, 160);
    border: 1px dotted rgb(20, 60, 80);
    color: rgb(20, 60, 80)!important;
    font-family: sans-serif;
    padding: 4px 6px 2px;
    text-shadow: none;
    transform: rotate(-12deg) translate(18px, -37px)
  }


  .vintage {
    font-family: 'Six Caps', sans-serif;

  }

  .vintage__top {
    background: linear-gradient(rgb(240, 220, 200), rgb(230, 200, 160));
    -webkit-background-clip: text;
    background-clip: text;
    z-index: 1;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
  }

  .vintage__bot {
    text-shadow:
        2px 1px rgb(85, 10, 0),
        4px 2px rgb(90, 15, 5),
        6px 4px rgb(100, 20, 15),
        8px 5px rgb(105, 25, 20),
        10px 6px rgb(110, 30, 25),
        12px 7px rgb(115, 30, 30),
        14px 8px rgb(120, 30, 35),
        16px 9px black,
        18px 10px black,
        20px 11px black,
        22px 12px black,
        24px 13px black,
        28px 14px rgba(0, 0, 0, 0.9),
        30px 15px rgba(0, 0, 0, 0.7),
        32px 16px rgba(0, 0, 0, 0.5),
        34px 17px rgba(0, 0, 0, 0.3),
        36px 18px rgba(0, 0, 0, 0.1),
        40px 20px rgba(0, 0, 0, 0.1);
  }

  .outro {
    font-family: 'Satisfy', cursive;
  }
}


[data-anchor="page2"] {

  vertical-align: top !important;
  background-image: url('~assets/graphic/exclusive-paper.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000&format=webp');

  background-position: 0 0;
  visibility: inherit;


  figure {


    figcaption {

      font-family: Satisfy, sans-serif;
    }

  }

    .scumbag {


    div {


      h2 {


        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 700;
        background-image: url('~assets/graphic/green-dust-and-scratches.png');
        background-color: #4f7b70;
        color: #f7ebd5;
        padding: 5px;

      }


      h3 {

        font-family:'Merriweather', sans-serif;
        font-weight: 700;
      }

      p {
        border: 2px solid black;
        border-radius: 15px;
        font-family:'Merriweather', sans-serif;
        font-weight: 700;
      }
    }

      .button_red {

        &:hover {


          color: #224a49;

        }

      }


    }

ul {


  li {


    padding: 5px 0 5px 0px;
    background-image: -webkit-linear-gradient(left, #D5CDC1 33%, rgba(255, 255, 255, 0) 0%);
    background-image: -o-linear-gradient(left, #D5CDC1 33%, rgba(255, 255, 255, 0) 0%);
    background-image: linear-gradient(to right, #D5CDC1 33%, rgba(255, 255, 255, 0) 0%);
    background-position: top;
    background-size: 8px 2px;
    background-repeat: repeat-x;

    h3 {

      &:before {

        content: "🗲";
        color: #a1362b;
        margin-right: 20px;
        display: inline-block;
        transform: rotate(45deg);

      }

    }
  }

  }

  .welcome_studio {



    font-family: Barlow Condensed,sans-serif;
    color: #224a49;
    .background {
      background-image: url('~assets/graphic/green-dust-and-scratches.png');
      z-index: -1;
      background-color: wheat;
      border-radius: 40px;

    }



div {
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

          color: #224a49;
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

      h2 {
        color: #224a49;
        filter: drop-shadow(5px 6px 0 #a9c9bb);
        font-family: Barlow Condensed,sans-serif;

      }


    }
  }
    article {

      h1 {

        color: #224a49;
        filter: drop-shadow(5px 6px 0 #a9c9bb);
        font-family: Barlow Condensed,sans-serif;
        font-size: 9vw;

      }

    }
  }


[data-anchor="page3"] {


  background-image: url("~assets/graphic/bg_black.png?webp");

  &:before {

    float: left;
    height: 16px;
    position: absolute;
  content: "";
  display: block;
  background: url(~assets/graphic/star_white.png?webp) bottom  repeat-x ;
    border-image-width: 3px;
    border-image-source: url('~assets/graphic/star_white.png?webp');
    border-image-repeat: round;
    border-style: solid;

}


  &:after {

    position: absolute;
    height: 15px;
    content: "";
    display: block;
    background: url(~assets/graphic/star_white.png?webp) top repeat-x ;
    border-image-width: 3px;
    border-image-source: url('~assets/graphic/star_white.png?webp');
    border-image-repeat: repeat;
    border-style: solid;
  }

  .bg_stars {



    h2 {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 700;
      background-image: url('~assets/graphic/green-dust-and-scratches.png');
      background-color: #a1362b;
      color: #eae5de;
      white-space: revert;
      top: 5px;
      left: 6px;

    }
    &:before {



      position: absolute;

      content: "";
      display: block;
      background: url(~assets/graphic/star_white.png?webp) left repeat-y ;
      border-image-width: 3px;
      border-image-source: url('~assets/graphic/star_white.png?webp');
      border-image-repeat: repeat;
      border-style: solid;

    }

    &:after {



      position: absolute;
      content: "";
      display: block;
      background: url(~assets/graphic/star_white.png?webp) right repeat-y ;
      border-image-width: 3px;
      border-image-source: url('~assets/graphic/star_white.png?webp');
      border-image-repeat: repeat;
      border-style: solid;

    }
  }

  p {

   font-family: monospace;
  color:rgba(233,228,221,0.7);

  }




  div.modal {
    height: 75px;
    width: 75px;
    border-radius: 75px;
    overflow: hidden;
    position: absolute;
    background-color: #ffa735;
    background-image: url('~assets/graphic/exclusive-paper.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000&format=webp');

    animation: bondJamesBond 1.5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;

    h2, p, li, button, img {
      opacity: 0;
      position: relative;
      animation: modalContentFadeIn .5s 1.4s linear forwards;
    }

    .fifties {
      font-family: Lobster Two , italic ;
      color: white;
      text-shadow: 0 8px 0 darken(#333, 9);
      font-size: 4vw;

    }



    &.out {
      animation: slowFade  1.5s ;



     > h2, p, li, button, img {
   animation: modalContentFadeOut 1.4s ;
      }

    }

    @keyframes slowFade {
      0% {
        border-radius:3px;
        height:352px;
        width:100%;
      }
      80% {


        border-radius:25px;
        width:80%;
      }
      90% {
        transform:translateX(0px);
        border-radius:75px;
        height:75px;
        width:75px;
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
        border-radius:75px;
        height:75px;
        width:75px;
      }
      90% {
        border-radius:3px;
        height:372px;
        width:80%;
      }
      100% {
        border-radius:3px;
        height:352px;
        width:125%;
      }
    }


  }


  .Icon {
    width: 50px;
    height: 50px;
    position: relative;
    transform: rotate(-90deg);
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
    left: 22px;
    top: 33px;
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

[data-anchor="page4"] {


  background-image: url("~assets/graphic/bg_bottom_home.jpg?webp");
  background-position-x: 80%;

  input, textarea {


    background-image: url("~assets/graphic/exclusive-paper.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000&format=webp");
    background-color: #faebd7;
  }


  figure {

    animation: none;
    right: 33%;

    figcaption {
      font-family: Satisfy, sans-serif;

    }
  }

  article {

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

        color: #224a49;
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

      color: #e9e4dc;
      font-family: cursive;
    }

    h2 {
      color: #224a49;
      font-family: Barlow Condensed, sans-serif;
      filter: drop-shadow(5px 6px 0 #a9c9bb)

    }

  }



}


</style>

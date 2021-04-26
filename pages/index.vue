<template>


    <full-page class="w-screen  absolute z-10 cursor-default container px-0 md:px-0 xl:px-16 max-w-full lg:max-w-max  mx-auto " :options="options">


      <section class="fp-section w-full overflow-hidden bg-no-repeat bg-cover bg-center opacity-100  xl:rounded-4xl  filter-shadow-black z-10">

        <div class="light_background"><img

            :data-src="require('~/assets/graphic/light_background.png?webp')"
            :light="light.src"
            :srcSet="light.srcSet"
            class="lazyload light"
            alt="light">
        </div>
        <div
            class="section-1 h-full w-screen absolute grid fill-40 justify-items-center items-end "
            style="background-image:radial-gradient(transparent, rgba(0, 0, 0, 0.5));">



          <div
              class="circle_bg circle1 hidden w-20   md:w-16  xl:block xl:w-20 2xl:w-20 p-5 absolute  bg-white z-50"
           ></div>
          <div class="circle_bg circle2 hidden w-16  xl:block  md:w-12 xl:w-16  2xl:w-16 p-4 absolute bg-white z-40"

          ></div>
          <div class="circle_bg circle3 hidden  w-8 xl:block md:w-8 p-2 absolute bg-white z-30"

          ></div>


   <img

       :data-src="require('~/assets/graphic/logo.png?webp')"
       :srcSet="logo.srcSet"
       :src="logo.src"

       alt="c1chy"
       class="logo lazyload  2xl:max-w-md  relative z-50"
       :class="'animate__animated animate__tada animate__delay-10s animate__repeat-2 '"
          >


          <img

              :data-src="require('~/assets/graphic/hat.png?webp')"
              :srcSet="hat.srcSet"
              :src="hat.src"
              alt="rainbow balloon"
               class="hat lazyload  z-20"
          >

          <figure class="ribbon absolute bottom-1/20 flex items-center justify-center z-10 sm:top-20  filter-shadow-black ">


            <img
                :data-src="require('~/assets/graphic/ribbon.png?webp')"
                alt="ribbon"
                class="lazyload  filter-shadow-black z-1">
            <figcaption class="mx-auto mt-2 absolute block text-xl text-white text-center my-auto sm:mt-6  md:text-3xl lg:text-4xl xl:mt-8 xl:tracking-wider">
              Visually Striking Design </figcaption>
          </figure>

          <img


              :data-src="require('~/assets/graphic/body.png?webp')"
              :srcSet="body.srcSet"
              :src="body.src"

              alt="vintage body"
              class="body lazyload w-full  2xl:max-w-2xl filter-shadow-black ">
        </div>


        <div class="hidden sm:block bottom-0 right-2 absolute lg:pr-2 2xl:block 2xl:right-0 2xl:absolute 2xl:bottom-0 2xl:mb-5 2xl:mr-5 text-center tracking-widest md:text-left z-10">
          <div class="classic sm:mb-3 md:absolute  lg:text-center 2xl:block 2xl:relative 2xl:right-1/3 ">
            <span class="intro intro--the block text-3xl">The</span>
            <span class="intro intro--num block text inline-block absolute font-semibold sm:hidden lg:inline">first #1</span>
            <span class="intro block text-3xl">classic style</span>
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
                class="hidden inline text-5xl font-bold uppercase 2xl:block 2xl:text-9xl 2xl:mt-4 "
                :class="{'animate__animated animate__swing animate__delay-3s animate' : animate}"

            >c1chy's studio</h1>

  <figure
      class="h-full w-8/12 relative m-auto flex items-center filter-shadow-black z-10 sm:w-10/12 md:w-1/2 lg:w-full 2xl:w-1/2 z-20">
    <img

        :srcSet="require('../assets/graphic/ribbon.png?webp')"
        alt="ribbon"

        class="lazyload  filter-shadow-black " >
    <figcaption
        class="w-full my-auto mt-3 block absolute text-xl text-center text-white sm:text-xl sm:tracking-widest xl:tracking-mega 2xl:text-3xl 2xl:mt-5 ">
      ✪ ✪ ✪ ✪ ✪ ✪ ✪
    </figcaption>
  </figure>
</article>

          </div>

        <div
            class="scumbag w-full flex justify-around bg-repeat bg-auto bg-center z-2 xl:rounded-4xl">
          <div
              class="text-center mt-3 p-1 xl:w-1/2 lg:w-2/3 2xl:w-1/4">

            <div>
              <h2
                  class="text-xl md:text-4xl lg:text-5xl  2xl:text-2xl 2xl:text-4xl 2xl:font-bold 2xl:text-center">
                Klare Strategie , ausdrucksstarkes Design & moderne Technologie. </h2></div>

            <div
                class="h-full w-full px-1 pt-5 leading-loose md:w-full xl:text-xl xl:mt-2   2xl:mt-5">
              <p class="hidden sm:hidden md:hidden md:block  md:text-2xl lg:hidden xl:text-xl  xl:hidden 2xl:block 2xl:text-xl">
                Webseiten der neuen Generation, die mit dem Ziel erstellt werden, Arbeit durch Innovation zu transformieren. </p>
              <ul class=" mb-16 text-xs md:text-2xl lg:text-2xl xl:text-xl  2xl:text-2xl text-center">
                <li><h3>APP-Entwicklung</h3></li>
                <li><h3>Responsive Webdesign</h3></li>
                <li><h3>SEO + Sichtbarkeit</h3></li>
              </ul>

            </div>

          </div>
          <div class="flex items-end  sm:justify-center  sm:w-1/3  md:w-full lg:w-2/3 xl:h-full xl:w-2/6 xl:transform xl:rotate-12 z-0">

            <img
                :data-src="require('~/assets/graphic/vintage_wolf.jpg?webp')"
                :src="scumback.src"
                :srcSet="scumback.srcSet"
                 class="wolf lazyload rounded-4xl z-10 "
            alt="vintage wolf">
          </div>
          <div class="background h-2/5 absolute right-0 top-3/4 opacity-70 ">
          </div>
        </div>
      </section>

      <section class="fp-section  w-full relative overflow-hidden box-content xl:rounded-4xl z-0 "  >
        <div class="bg_stars h-full w-full flex flex-row-reverse text-white z-0 ">

          <section class="w-1/2 ">

<div class=" h-full mx-auto w-2/3 flex flex-col justify-evenly  sm:mr-8 md:mx-auto xl:mr-10">
            <h2
                class="text-xl sm:text-2xl md:text-5xl  lg:text-5xl xl:leading-tight  xl:text-4xl 2xl:text-6xl">
              Strategie, Technologie, Design & Content </h2>

            <p class="hidden text-xs xl:block xl:text-xl 2xl:text-2xl ">
              An der Schnittstelle von Design und Technik entwickeln wir digitale Anwendungen,
              die mit durchdachter Benutzerführung und ausgefeilter Funktionalität überzeugen – egal,
              auf welchem Gerät. Dazu erproben wir kontinuierlich neuartige Methoden, beschäftigen uns intensiv mit aufregenden Technologien,
              experimentieren mit neuen Herangehensweisen.</p>


            <a href="#"
               class="button_red hidden lg:hidden xl:hidden 2xl:block 2xl:w-1/2 2xl:text-3xl"
            >MY STORY</a>
</div>
          </section>

          <section class="w-1/3 h-1/2 p-20 px-2 flex justify-center  md-portrait:h-1/2  md-portrait:w-1/2 md-portrait:p-0">

            <img
                class="lazyload w-full h-4/5 relative   self-center sm:h-1/2  md:w-3/4 md:h-3/4 md-portrait:h-3/4 md-portrait:w-full md-landscape:w-4/5 md-portrait:pl-12 lg:w-1/2 rounded-3xl  "
                :class="{'animate__animated animate__flipInX animate__delay-3s animate__slow show' : show}"

                :data-src="require('~/assets/graphic/vintage_music.jpg?webp')"
                :srcSet="vintageMusic.srcSet"
                :src="vintageMusic.src"
                 alt="vintage">
          </section>

        </div>
      </section>
      <section class="fp-section h-full w-full relative box-content flex-col bg-cover overflow-hidden flex xl:rounded-4xl z-0 sm:flex-row md:flex-col lg:flex-col  xl:flex-row  ">

        <article class="show w-full h-full flex flex-col sm:self-center md:h-1/3 2xl:"

                 :class="{'animate__animated animate__bounceInLeft animate__delay-2s animate__slow fade' : animate}">

          <div
              class="w-full h-28 items-center flex mx-auto xl:mt-16 xl:w-3/4">

            <h2
                class="together w-3/5 font-bold text-3xl mt-4 px-2 text-xl  md:text-4xl  lg:w-full lg:text-5xl xl:w-2/5 2xl:text-4xl ">
              LET'S WORK TOGETHER
            </h2>
            <span
                class="w-full inline-block relative "></span>

          </div>
<div class="w-3/4 mx-auto items-center">

  <h1 class="hire hidden font-bold text-10xl filter-shadow-green md:block md:text-6xl   md-landscape:hidden  md-portrait:text-5xl lg:block lg:text-10xl xl:hidden xl:text-4xl 2xl:block 2xl:text-9xl ">
    HIRE ME</h1>


  <figure
      class="h-full w-full relative top-8 m-auto flex items-center filter-shadow-black 2xl:h-auto 2xl:top-0 ">
    <img

        :data-src="require('~/assets/graphic/ribbon.png?webp')"
        alt="ribbon"

        class="lazyload md-landscape:h-12  md-portrait:h-8 md:w-full lg:w-3/4  xl:w-full filter-shadow-black  z-1 ">
    <figcaption
        class="w-full absolute block text-2xl left-0 my-auto mt-2 bg-no-repeat text-center text-white md:ml-3 md:text-3xl md:tracking-widest  lg:text-3xl  2xl:tracking-widest 2xl:text-4xl   z-0 ">
      Let Me Know!
    </figcaption>
  </figure>

  <p class="w-full h-full mt-5 text-xs sm:hidden md:text-2xl md:hidden  lg:text-3xl xl:block xl:text-2xl xl:mt-0 2xl:block 2xl:text-2xl 2xl:mt-5 ">
    Eine hochwertige und ansprechende Website stellt die Grundlage für jede Online-Präsenz. </p>

</div>
        </article>

        <div class="w-full h-full sm:self-center z-0  "

             :class="{'animate__animated animate__bounceInRight animate__delay-2s animate__slow animate show' : fade}"

        >
          <form
              id="form"
              class="w-full h-full flex flex-col justify-start items-center text-xl sm:justify-center md:justify-start lg:justify-center xl:justify-center xl:text-2xl"
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

            <button type = "submit" form ="form" value="submit" class="button_red  px-4 mt-4 sm:mt-2 sm:ml-10 sm:self-start md:w-20 md:self-center md:text-2xl 2xl:self-stretch 2xl:ml-24 ">SEND</button>

          </form>

        </div>

        <stickyFooter class="bottom-0 absolute"/>

      </section>

    </full-page>

</template>

<script>



import stickyFooter from "@/components/stickyFooter";


const light = require('~/assets/graphic/light_background.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000&format=webp');
const logo = require('~/assets/graphic/logo.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000&format=webp');
const hat = require('~/assets/graphic/hat.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000&format=webp');
const body =require('~/assets/graphic/body.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000&format=webp');
const vintageMusic = require('~/assets/graphic/vintage_music.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000&format=webp');
const scumback =require('~/assets/graphic/vintage_wolf.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000&format=webp');


export default {

  components: {stickyFooter},


  layout: 'desktop',




 transition: {
   name: 'slots',
   mode: 'out-in',

  },


  data() {


    return {

      logo,hat,body,scumback,vintageMusic,light,

      fade:false,
      show:false,
      animate: false,
      options: {
        ref: true,
        dragAndMove: true,
        afterLoad: this.afterLoad,
        navigation: true,
        anchors: ['page1', 'page2', 'page3', 'page4'],
        scrollingSpeed: 1500,
        sectionsColor: ['#40E0D0', '#e4ddd3', '#1c1716', '#fec401'],
        controlArrows: true,
        verticalCentered: false,
        css3: true,
        slidesNavigation:false,
      },
    }
  },

  methods: {

    afterLoad: function (origin, destination, direction) {

      this.animate = false
      this.fade = false
      this.show = false

      if (destination.index === 1 || destination.index === 2 || destination.index === 3  ) {

        this.animate = true
        this.fade = true
        this.show = true
        console.log(this.animate);



      }


      console.log("After load....");
      console.log(destination.index);

    },

    getFormValues (submitEvent) {
      this.name = submitEvent.target.elements.name.value
    },


},

  mounted() {


  }
}

</script>

<style scoped lang="scss">



.section-1 {
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(25% ,1fr)) ;

  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 2;

}



.animate__delay-10s {


  animation-delay: 10s!important;
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
  padding-top: 5px;
  padding-bottom: 8px;
  line-height: 1;
  text-align: center;
  position: relative;
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


  .light_background {

  width: 100vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  overflow: hidden;

  img.light {

    z-index: -1;
    height: 100vmax;
    width: 100%;
    animation: rotate 120s linear infinite;
    object-fit: cover;
    overflow: hidden;
  }


}


  .circle_bg {


    background-image: url('~assets/graphic/exclusive-paper.png?size=150');
    border: 5px solid #000000;
    border-radius: 50%;


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
  background-image: url('~assets/graphic/exclusive-paper.png');

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

        background-image: url('~assets/graphic/green-dust-and-scratches.png');
        background-color: #4f7b70;
        color: #f7ebd5;
        box-shadow: -20px 0 0 #4f7b70;
        white-space: revert;
        top: 5px;
        left: 6px;
      }


      p {

        font-size: 2vh;

      }
    }

      .button_red {

        &:hover {


          color: #224a49;

        }

      }


    }




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

  .welcome_studio {

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
      }

    }
  }


[data-anchor="page3"] {


  background-image: url("~assets/graphic/bg_black.png?webp");

  &:before {

    bottom: 14px;
    float: left;
    width: 97.2%;
    left: 24px;
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
    top: 6px;
    width: 97.6%;
    height: 15px;
    left: 18px;
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

      background-image: url('~assets/graphic/green-dust-and-scratches.png');
      background-color: #a1362b;
      color: #eae5de;
      box-shadow: -20px 0 0 #a1362b;
      white-space: revert;
      top: 5px;
      left: 6px;

    }
    &:before {

      top: 20px;
      width: 15px;
      position: absolute;
      left: 10px;
      height: 95%;
      content: "";
      display: block;
      background: url(~assets/graphic/star_white.png?webp) left repeat-y ;
      border-image-width: 3px;
      border-image-source: url('~assets/graphic/star_white.png?webp');
      border-image-repeat: repeat;
      border-style: solid;

    }

    &:after {

      top: 20px;
      width: 15px;
      position: absolute;
      right: 13px;
      height: 95%;
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

   font-family: Mulish, sans-serif;
  color:rgba(233,228,221,0.7);
    font-size: 1.4vw;

  }

}

[data-anchor="page4"] {


  background-image: url("~assets/graphic/bg_bottom_home.jpg?webp");
  background-position-x: 80%;

  input, textarea {


    background-image: url("~assets/graphic/exclusive-paper.png");
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

    }

    h2 {
      color: #224a49;
      font-family: Barlow Condensed, sans-serif;
      filter: drop-shadow(5px 6px 0 #a9c9bb)

    }

  }

}


</style>

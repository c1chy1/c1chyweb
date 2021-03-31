<template>
  <section class="h-screen w-full absolute z-10">

    <full-page class="cursor-default container px-0 md:px-0 max-w-full lg:max-w-max  mx-auto " :options="options">


      <section class="fp-section w-full h-full overflow-hidden bg-no-repeat bg-cover bg-center opacity-100  rounded-4xl  filter-shadow-black">
        <div
            class="section-1 h-full w-full absolute grid fill-40 justify-items-center items-end ">


<!--          <div
              class="circle1 w-20 sm:w-20 md:w-16  p-5 absolute  bg-white z-40"
           ></div>
          <div class="circle2 w-16 sm:w-16  md:w-12 p-4 absolute bg-white z-30"

          ></div>
          <div class="circle3 w-8 sm:w-12 md:w-8 p-2 absolute bg-white z-20"

          ></div>-->

   <img src="~assets/graphic/logo_c1chy3.png" class="w-max-w-full h-full relative  top-4 sm:w-2/5 z-50 "
        :class="'animate__animated animate__tada animate__delay-10s animate__repeat-2 '"
          >

          <img src="~assets/graphic/hat.png"
               class="hat w-2/3 h-auto relative top-24 self-center sm:w-1/5 sm:top-2   filter-shadow-black z-10"
               style="animation: matrix 3s infinite ease-in"
          >

          <figure class="ribbon relative top-28 flex items-center justify-center z-10 filter-shadow-black">


            <img src="~assets/graphic/ribbon.png" alt="Trulli"
                 class="w-full my-auto  sm:w-1/2 z-1 filter-shadow-black">
            <figcaption class="mx-auto mt-3 absolute block text-xl text-white text-center my-auto tracking-widest">
              Visually Striking Design </figcaption>
          </figure>
          <img src="~assets/graphic/body.png"
               class="h-full w-max-w-full sm:w-2/5 filter-shadow-black ">
        </div>


        <div class="hidden sm:block bottom-0 right-2 absolute lg:pr-2 2xl:right-0 2xl:absolute 2xl:bottom-0 2xl:mb-5 2xl:mr-5 text-center tracking-widest md:text-left">
          <div class="classic  md:absolute lg:hidden 2xl:absolute">
            <span class="intro intro--the block text-3xl">The</span>
            <span class="intro intro--num block text inline-block absolute font-semibold">first #1</span>
            <span class="intro block text-3xl">classic style</span>
          </div>
          <div class="vintage__container block md:absolute lg:relative 2xl:absolute">
            <p class="vintage vintage__top  m-0 text-6xl leading-none sm:hidden md:absolute md:text-5xl lg:absolute 2xl:absolute">VINTAGE</p>
            <p class="vintage vintage__bot  m-0 text-6xl leading-none sm:hidden md:absolute md:text-5xl lg:absolute 2xl:relative">VINTAGE</p>

          </div>
          <div class="sm:hidden md:hidden">
            <span class="outro pt-4 text-white text-1xl ">NO.01</span>
            <span class="outro outro--big text-white text-3xl font-sans">OLDSCHOOL RECREATED</span>
            <span class="outro text-white text-1xl">BEST</span>
            <span class="outro block text-white text-xl">c1chy.web</span>
          </div>
        </div>


      </section>

      <div class="section w-full h-full relative bg-repeat bg-scroll opacity-100 overflow-hidden z-10 rounded-4xl  ">

        <div class="welcome_studio w-full pt-4 flex flex-col justify-content-between items-center text-center box-border leading-tight">
          <div class="w-full h-28  items-center flex  mx-auto ">
            <span class="w-11/12 inline-block relative"></span>
            <h1 class="w-full font-bold text-2xl mt-2 sm:w-full sm:text-2xl md:w-full md:mt-0 "

            >WELCOME TO STUDIO</h1>
            <span class="w-11/12 inline-block relative"></span>

          </div>

          <div>
<article class="bg-center bg-no-repeat">
            <h1
                class="hidden inline text-5xl font-bold uppercase "
                :class="{'animate__animated animate__swing animate__delay-3s animate' : animate}"

            >c1chy's studio</h1>
</article>
            <figure
                class="h-full w-8/12 relative m-auto flex items-center filter-shadow-black z-10 sm:w-10/12 md:w-1/2">
              <img
                  src="~assets/graphic/ribbon.png" alt="Trulli"

                  class="h-8 w-full  sm:h-12 sm:w-1/2 sm:m-auto filter-shadow-black z-1" >
              <figcaption
                  class="w-full my-auto mt-3 block absolute text-xl text-center text-white sm:text-xl sm:tracking-widest">
                ✪ ✪ ✪ ✪ ✪ ✪ ✪
              </figcaption>
            </figure>
          </div>
          <div
              class="background w-7\/12">
          </div>

        </div>
        <section
            class="scumbag w-full h-full flex justify-around bg-repeat bg-auto bg-center z-2 rounded-4xl">
          <div
              class="text-center mt-3 p-1 ">

            <div
                class="">
              <h2
                  class="text-xl">
                Klare Strategie , ausdrucksstarkes Design & moderne Technologie. </h2></div>

            <div
                class="leading-loose p-1">
              <p>Webseiten der neuen Generation, die mit dem Ziel erstellt werden, Arbeit durch Innovation zu transformieren. </p>
              <ul class="mb-16">
                <li><h3>APP-Entwicklung</h3></li>
                <li><h3>Responsive Webdesign</h3></li>
                <li><h3>SEO + Sichtbarkeit</h3></li>
              </ul>


              <a href="#"
                 class="button_red fade hidden sm:hidden lg:hidden 2xl:w-1/2 2xl:text-3xl"
                 :class="{'animate__animated animate__bounceInLeft show' : animate}"
              >MY STORY</a>
            </div>

          </div>
          <div class="h-full flex items-end    sm:w-1/3  lg:w-1/3">

            <img src="~assets/graphic/vintage_wolf.jpg"
                 :class="{'animate__animated animate__jackInTheBox show' : animate}"
                 class="fade w-full relative bottom-1/2 rounded-t-4xl z-1">
          </div>
          <div class="background h-2/5 absolute right-0 top-3/4 opacity-70 ">
          </div>
        </section>
      </div>

      <div class="section h-full w-full relative overflow-hidden box-content rounded-4xl z-0 "  >
        <div class="bg_stars h-full w-full flex flex-row-reverse text-white z-0 ">

          <section class="w-1/2">

<div class=" h-full mx-auto w-2/3 flex flex-col justify-evenly  sm:mr-8">
            <h2
                class="text-xl">
              Strategie, Technologie, Design & Content </h2>

            <p class="text-xs">
              An der Schnittstelle von Design und Technik entwickeln wir digitale Anwendungen,
              die mit durchdachter Benutzerführung und ausgefeilter Funktionalität überzeugen – egal,
              auf welchem Gerät. Dazu erproben wir kontinuierlich neuartige Methoden, beschäftigen uns intensiv mit aufregenden Technologien,
              experimentieren mit neuen Herangehensweisen.</p>


            <a href="#"
               class="button_red hidden lg:hidden 2xl:w-1/2 2xl:text-3xl"
            >MY STORY</a>
</div>
          </section>

          <section class="w-1/2 h-full p-20 px-2 pl-6 flex">

            <img
                class="w-max-w-full h-4/5 relative left-2 mx-auto self-center sm:h-full rounded-3xl  "
                :class="{'animate__animated animate__flipInX animate__delay-3s animate__slow show' : show}"
                 src="~assets/graphic/vintage_music.jpg">
          </section>

        </div>
      </div>
      <div class="section relative box-content flex-col bg-cover overflow-hidden flex rounded-4xl z-0 sm:flex-row ">

        <article class="w-full show h-1/3"

                 :class="{'animate__animated animate__bounceInLeft animate__delay-2s animate__slow fade' : animate}">

          <div
              class="w-full h-28 items-center flex mx-auto ">

            <h2
                class="w-3/5 font-bold text-3xl mt-4 px-2 text-xl w-5/6 ">
              LET'S WORK TOGETHER
            </h2>
            <span
                class="w-full inline-block relative"></span>

          </div>
<div class="w-3/4 mx-auto items-center">

  <h1 class="hidden font-bold text-10xl filter-shadow-green ">HIRE ME</h1>


  <figure
      class="h-full w-full relative m-auto flex items-center filter-shadow-black ">
    <img
        src="~assets/graphic/ribbon.png" alt="Trulli"

        class=" md:h-12 md:w-full  md:w-full  z-1 filter-shadow-black">
    <figcaption
        class="w-full absolute block text-2xl left-0 my-auto mt-2 bg-no-repeat text-center text-white z-0  md:ml-3 md:text-3xl">
      Let Me Know!
    </figcaption>
  </figure>

  <p class="w-full mt-5 text-xs ">Eine hochwertige und ansprechende Website stellt die Grundlage für jede Online-Präsenz. </p>

</div>


        </article>

        <div class="w-full h-full z-0 "

             :class="{'animate__animated animate__bounceInRight animate__delay-2s animate__slow animate show' : fade}"

        >
          <form
              id="form"
              class="w-full h-full flex flex-col justify-start items-center text-xl "
              v-on:submit.prevent={getFormValues}
          >
            <label for="name" class="w-full text-center">
            <input
                type="text"
                id="name"
                class="w-3/4 h-12 mt-3 pl-1 sm:h-8 "
                placeholder="name"
            >
          </label>
            <label for="email" class="w-full text-center">
            <input type="email" id="email" placeholder="email"
                   class="w-3/4 h-12 mt-3 pl-1 sm:h-8 lg:mb-5" >
           </label>
            <label for="message" class="w-full text-center">
            <textarea id="message" placeholder="message"
                      class="w-3/4 h-32 mt-3 pl-1 resize-none sm:h-24 lg:mb-5"> </textarea>
            </label>

            <button type = "submit" form ="form" value="submit" class="button_red  mt-4 sm:mt-2 sm:ml-10 sm:self-start">SEND</button>

          </form>
          <button
              class="next fade "
              :class="{'animate__animated animate__backInRight show' : fade}"
          >Next
          </button>
        </div>

        <stickyFooter class="absolute bottom-0"/>

      </div>

    </full-page>

  </section>

</template>

<script>


import navigation from "~/components/navigation";
import stickyFooter from "@/components/stickyFooter";
export default {

  components: {navigation,stickyFooter},
  head: {
    title: 'c1chy.web',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'Portfolio',
        name: 'c1chy.de',
        content: 'My Frontend experiences'
      }
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
  },

  layout: 'desktop',

 transition: {
    name: 'shutters',
    mode: 'out-in',

  },


  data() {


    return {

      fade:false,
      show:false,
      animate: false,
      options: {
        ref: true,
        dragAndMove: true,
        scrollingSpeed: 1500,
        afterLoad: this.afterLoad,
        navigation: true,
        anchors: ['page1', 'page2', 'page3', 'page4'],

        sectionsColor: ['#40E0D0', '#e4ddd3', '#1c1716', '#fec401'],
        controlArrows: true,
        autoScrolling: true,
        animateAnchor: true,
        passive: true,
        verticalCentered: false,
        lazyLoading: true,
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

/*    var fullPage = document.getElementsByClassName('fp-enabled')*/


    },


    getFormValues (submitEvent) {
      this.name = submitEvent.target.elements.name.value
    },




 /*   toTop() {


      fullpage_api.moveTo('page1',2)

    }*/
},

  mounted() {

  }
}

</script>

<style scoped lang="scss">



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
  padding-left: 27px;
  padding-right: 27px;
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


  background-image: url("~assets/graphic/bg_green.png");
  visibility: inherit;


  .circle1 {
    background-image: url('~assets/graphic/exclusive-paper.png');
    border: 5px solid #000000;
    border-radius: 50%;


  }

  .circle2 {
    background-image: url('~assets/graphic/exclusive-paper.png');
    border: 5px solid #000000;
    border-radius: 50%;


  }


  .circle3 {
    border: 5px solid #000000;
    background-image: url('~assets/graphic/exclusive-paper.png');
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
    transform: rotate(-10deg) translate(18px, -35px);
  }

  .vintage__container {
    margin: 5px auto 15px;
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

    animation: matrix 5s infinite ease-in-out;

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
    }

      .button_red {

        &:hover {


          color: #224a49;

        }

      }


    }

    .background {
      background-image: url('~assets/graphic/green-dust-and-scratches.png');
      z-index: -1;
      background-color: wheat;
      border-radius: 40px;
      filter: blur(20px);
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

      h1 {

        color: #224a49;
        filter: drop-shadow(5px 6px 0 #a9c9bb);
        font-family: Barlow Condensed,sans-serif;
      }
    }

    article {

      background-size: 115% 250%;
    }
  }
  }

[data-anchor="page3"] {


  background-image: url("~assets/graphic/bg_black.png");

  &:before {

    bottom: 14px;
    float: left;
    width: 97.2%;
    left: 24px;
  height: 16px;
    position: absolute;
  content: "";
  display: block;
  background: url(~assets/graphic/star_white.png) bottom  repeat-x ;
    border-image-width: 3px;
    border-image-source: url('~assets/graphic/star_white.png');
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
    background: url(~assets/graphic/star_white.png) top repeat-x ;
    border-image-width: 3px;
    border-image-source: url('~assets/graphic/star_white.png');
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
      background: url(~assets/graphic/star_white.png) left repeat-y ;
      border-image-width: 3px;
      border-image-source: url('~assets/graphic/star_white.png');
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
      background: url(~assets/graphic/star_white.png) right repeat-y ;
      border-image-width: 3px;
      border-image-source: url('~assets/graphic/star_white.png');
      border-image-repeat: repeat;
      border-style: solid;

    }
  }

  p {

   font-family:Helvetica Neue, sans-serif;
  color:rgba(233,228,221,0.7)

  }

}

[data-anchor="page4"] {


  background-image: url("~assets/graphic/bg_bottom_home.jpg");
  background-position-x: 80%;

  input ,textarea{


    background-image: url("~assets/graphic/exclusive-paper.png");
    background-color: #faebd7;
  }


  figure {

    animation: none;
    right: 33%;

    figcaption {
      font-family: Satisfy,sans-serif;

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

      color:#e9e4dc;

    }

    h2 {
      color: #224a49;
      font-family: Barlow Condensed,sans-serif;
      filter:drop-shadow(5px 6px 0 #a9c9bb)

    }

  }

}

[data-anchor="page1"]:before {
  content: "";
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  z-index: -1;
  background-image: url('~assets/graphic/light_background.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  animation: rotation 120s infinite linear;


}


</style>

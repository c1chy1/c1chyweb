<template>

  <section class="h-screen w-full absolute z-10">

    <header class="exclusive-paper container  relative p-24 w-full flex flex-col justify-center grid grid-cols-1 justify-items-center h-112 max-w-full lg:max-w-max  mx-auto filter-shadow-black relative overflow-hidden">


      <div class="filter-shadow-black overflow-hidden absolute">
        <img

            :data-src="require('~/assets/graphic/light_background.png?webp')"
            :light="light.src"
            :srcSet="light.srcSet"
            class="lazyload light overflow-hidden "
            alt="light">

      </div>
      <div class="title uppercase top-2">
        <h1 class="text-8xl font-semibold text-center uppercase">Contact
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
          > Contact
        </figcaption>
      </figure>

    </header>

    <div
        class="page-spacing w-full h-20 absolute left-0 bg-repeat bg-center"
    ></div>

    <section class="section h-full mt-20 relative box-content bg-repeat bg-auto bg-center overflow-hidden z-0">
      <div class="bg_stars w-full h-full flex">

        <section class="w-1/2">

          <div class="h-full mx-auto w-2/3 flex flex-col justify-evenly">
            <h2
                class=" pt-1 pr-5 pl-2 pb-1 relative top-2 left-4 inline text-6xl font-semibold leading-tight">
              MY CULTURE IS TIMELESS AGE IS JUST A NUMBER</h2>

            <p class="text-xl">Menschen zu bewegen, ihnen den Alltag zu erleichtern und sie für Marken zu begeistern, ist meine Mission. Dafür kümmere ich mich mit Hingabe auch um die kleinen Details, ohne das große Ganze aus dem Blick zu verlieren. Ich experimentiere, erfinde, erforsche. Deshalb gehört es für mich zum Alltag, Herangehensweisen immer wieder zu überdenken und mit neuen Technologien alternative Lösungen abseits der ausgetretenen Pfade zu entwickeln.</p>


            <a href="#"
               class="button_red w-4/12 uppercase  lg:hidden 2xl:block 2xl:p-3"
            >Lern Mehr</a>
          </div>
        </section>

        <section class="w-1/2 p-20">

          <img
              class="lazyload mx-auto rounded-3xl"
              :data-src="require('~/assets/graphic/spaceman.png?webp')"
              alt="spaceman"
          >
        </section>

      </div>
    </section>

    <section class="exclusive-paper w-full h-auto bg-black rounded-4xl relative">

      <div class="contact_me w-3/4 h-28  items-center flex  mx-auto pt-20 ">
        <span class="w-full inline-block relative"></span>
        <h2 class="w-7/12 font-bold text-3xl mt-4 text-center"

        >HAVE ANY QUESTIONS</h2>
        <span class="w-full inline-block relative"></span>


      </div>

      <div>
        <h1
            class="text-10xl mb-20 font-bold text-center leading-tight "

        >GET IN TOUCH</h1>

      </div>


      <aside class="w-2/3 flex justify-center m-auto pb-5">


        <article class="w-1/3 p-10 mb-10">
          <h2 class="w-9/12 mb-5 mx-auto p-1 relative flex justify-center lg:text-xl 2xl:text-3xl font-semibold uppercase">CONTACT ME</h2>
          <img  class="lazyload m-auto"
                :data-src="require('~/assets/graphic/woman-phone.png?webp')"
                alt="woman c1chy"
          >
          <span class="w-full"></span>
          <ul class="mt-6  lg:text-xl 2xl:text-3xl text-center ">
            <li>58511 Lüdenscheid,</li>
            <li>Märkischer Kreis, NRW</li>
            <li><a href="mailto:cichy08081987pp@gmail.com" class="inline">cichy08081987pp@gmail.com</a></li>
          </ul>

        </article>


        <article class="h-full flex w-1/3 flex-col p-10 p mb-10 bg-repeat bg-auto border-12 border-solid">
          <h3 class="w-9/12  mb-5 mx-auto p-1 relative flex justify-center  lg:text-xl 2xl:text-3xl font-semibold uppercase">LET ME KNOW!</h3>
          <p class="            lg:text-xl   2xl:text-2xl text-center">Wenn Sie ein konkretes Anliegen haben, eine Idee besprechen möchten oder mich erst kennenlernen wollen, kontaktieren Sie mich einfach.</p>
          <form class="flex flex-col">
            <label>
              <input placeholder="Name*" class="w-full h-12 mt-2 pl-1 text-2xl">
            </label>
            <label>
              <input placeholder="Email*" class="w-full h-12 mt-2 pl-1 text-2xl ">
            </label>
            <label>
              <textarea placeholder="Your message" class="w-full h-32 pl-1 mt-2 block text-2xl resize-none"></textarea>
            </label>
          </form>

          <a href="#"
             class="button_red w-1/3 self-center xl:w-1/2 xl:p-2 "
          >SEND</a>
        </article>

        <article class="w-1/3 p-10 mb-10">
          <h3 class="w-9/12  mb-5 mx-auto p-1 relative flex justify-center lg:text-xl 2xl:text-3xl font-semibold uppercase">OPEN HOURS</h3>
          <img



              :data-src="require('~/assets/graphic/clocks.png?webp')"
              class="lazyload m-auto"
              alt="clocks">
          <span></span>

          <ul class="mt-6 lg:text-xl   2xl:text-3xl text-center">
            <li>Monday - Sunday</li>
            <li>00:00 - 23:59</li>
            <li>Cheers (:</li>
          </ul>
        </article>

      </aside>

      <div
          class="page-spacing"
      ></div>

      <stickyFooter />
    </section>


  </section>

</template>

<script>



import stickyFooter from "@/components/stickyFooter";

const light = require('~/assets/graphic/light_background.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000&format=webp');

export default {


  components: {stickyFooter},

  layout: 'desktop',

  transition: {
    name: 'spotlight',
    mode: 'out-in'
  },

  data() {

    return {

      light

    }


  },


  beforeMount() {

    fullpage_api.destroy('all')
}}
</script>

<style scoped lang="scss">




h1 {
  color: #224a49;
  filter: drop-shadow(5px 6px 0 #a9c9bb);
  font-family: Barlow Condensed, sans-serif;

}
.exclusive-paper {

  background-image: url('~assets/graphic/exclusive-paper.png');
  background-color: antiquewhite;

}


.button_red {

  background-color: transparent;
  color: #e53e26;
  border-color: #e53e26;
  margin-top: 30px;
  border-width: 4px 0;
  border-style: solid;
  font-weight: 700;
  font-size: 30px;
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


header {


  h1 {
    color: #224a49;
    filter: drop-shadow(5px 6px 0 #a9c9bb);
    font-family: Barlow Condensed, sans-serif;

  }

  div:nth-child(1)  {


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


.page-spacing {


  background-image: url(~assets/graphic/15percent.png?webp);
  background-color: #f7ebd5;
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


  .title_dividers {


    span {

      background: -webkit-linear-gradient(right, rgba(255, 255, 255, .01), #E9E4DD, #E9E4DD, rgba(255, 255, 255, .01));
      background: -o-linear-gradient(right, rgba(255, 255, 255, .01), #E9E4DD, #E9E4DD, rgba(255, 255, 255, .01));
      background: linear-gradient(to left, rgba(255, 255, 255, .01), #E9E4DD, #E9E4DD, rgba(255, 255, 255, .01));


    }


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





.contact_me {

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


  h2 {

    font-family: Barlow Condensed, sans-serif;


  }
}


aside {


  article {


    &:nth-child(1), &:nth-child(3) {


      span {


        &:after {

          width: 75%;
          top: 14px;
          height: 8px;
          position: relative;
          content: "";
          display: block;
          background: url('~assets/graphic/star.svg') repeat-x top left;
          margin: 0 auto;

        }
      }

      ul li {

        &:not(:last-child) {

          background-image: linear-gradient(to right, #757575 33%, rgba(255, 255, 255, 0) 0%);
          background-position: bottom;
          background-size: 8px 2px;
          background-repeat: repeat-x;
        }

        a {
          color: rgb(34, 74, 73);
          transition: all 0.2s ease;


          &:hover {

            outline: none;
            color: rgb(229, 62, 38);
          }
        }
      }


    }

    &:nth-child(2) {


      border-image: url(~assets/graphic/border_image.png?webp) 12 round;
      background-image: url("~assets/graphic/bg_border.jpg?webp");
      background-position: left top;
      padding-top: 28px;


      .button_red {

        &:hover {

          color: #4f7b70

        }

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


  input, textarea {

    background-color: rgba(79, 123, 112, .07);

    &::placeholder {

      font-size: 1.3rem;
      color: #333333;
      padding-left: 5px;
    }

  }


}


.section {


  background-image: url("~assets/graphic/bg_black.png?webp");
  background-color: rgb(28, 23, 22);



  &:before {


    bottom: 14px;
    float: left;
    width: 97.8%;
    left: 20px;
    height: 16px;
    position: absolute;
    content: "";
    display: block;
    background: url(~assets/graphic/star_white.png?webp) bottom repeat-x;
    border-image-width: 3px;
    border-image-source: url('~assets/graphic/star_white.png?webp');
    border-image-repeat: round;
    border-style: solid;

  }


  &:after {

    position: absolute;
    top: 6px;
    width: 97.9%;
    height: 15px;
    left: 20px;
    margin: 0 auto;
    content: "";
    display: block;
    background: url(~assets/graphic/star_white.png?webp) top repeat-x;
    border-image-width: 3px;
    border-image-source: url('~assets/graphic/star_white.png?webp');
    border-image-repeat: repeat;
    border-style: solid;
  }

  .bg_stars {


    color: white;




    h2 {


      background-image: url('~assets/graphic/green-dust-and-scratches.png');
      background-color: #a1362b;
      color: #eae5de;
      box-shadow: -20px 0 0 #a1362b;
      white-space: revert;

    }

    &:before {

      top: 18px;
      width: 15px;
      position: absolute;
      left: 10px;
      height: 94.7%;

      content: "";
      display: block;
      background: url(~assets/graphic/star_white.png?webp) left repeat-y;
      border-image-width: 3px;
      border-image-source: url('~assets/graphic/star_white.png?webp');
      border-image-repeat: repeat;
      border-style: solid;

    }

    &:after {

      top: 18px;
      width: 15px;
      position: absolute;
      right: 13px;
      height: 94.7%;

      content: "";
      display: block;
      background: url(~assets/graphic/star_white.png?webp) right repeat-y;
      border-image-width: 3px;
      border-image-source: url('~assets/graphic/star_white.png?webp');
      border-image-repeat: repeat;
      border-style: solid;

    }
  }

  p {
    font-family: monospace;
    color: rgba(233, 228, 221, 0.7)

  }

}


</style>

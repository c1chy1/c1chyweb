<template>

  <section class="h-screen w-full absolute z-10">

    <header class="exclusive-paper container  relative p-24 w-full flex flex-col justify-center grid grid-cols-1 justify-items-center h-112 max-w-full lg:max-w-max  mx-auto relative overflow-hidden">



      <light class="overflow-hidden filter-shadow-black"/>



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

            <p

                class="mt-10 text-xl"

               v-bind:class="[isShowing ? blurClass : '', bkClass]"
            >Menschen zu bewegen, ihnen den Alltag zu erleichtern und sie für Marken zu begeistern, ist meine Mission. Dafür kümmere ich mich mit Hingabe auch um die kleinen Details, ohne das große Ganze aus dem Blick zu verlieren. Ich experimentiere, erfinde, erforsche. Deshalb gehört es für mich zum Alltag, Herangehensweisen immer wieder zu überdenken und mit neuen Technologien alternative Lösungen abseits der ausgetretenen Pfade zu entwickeln.</p>



            <transition name="fade">
              <div

                  v-if="isShowing" ref="modal" class="lazyload modal flex w-full z-40" >

                <img
                    class="lazyload"
                    :data-src="require('~/assets/graphic/vintage_guys.jpg?webp')"
                    :src="sick.src"
                    :srcSet="sick.srcSet"

                >

                <article class="flex flex-row-reverse leading-snug">
                  <button
                      ref="button"
                      id="icon"
                      class="Icon relative right-2"
                      @click="closeModal">


                    <span></span>
                    <span></span>
                    <span></span>

                  </button>

                  <section class="text flex flex-col justify-center text-center">
                    <h3>Hey everyone look at this</h3>
                    <h1>
                      <span>Awesome Vintage Style</span>
                    </h1>
                  </section>

                </article>

              </div>

            </transition>


            <button
                id="aos-space"
                class="button_red w-4/12 uppercase  lg:hidden 2xl:block 2xl:p-3"
               @click="toggleModal"
            >Lern Mehr</button>
          </div>
        </section>

        <section class="w-1/2 p-20">

          <img

              data-aos="rotate-space"
              data-aos-anchor="#aos-space"
              data-aos-easing="ease-in-sine"
              data-aos-anchor-placement="center-bottom"
              class="lazyload mx-auto rounded-3xl"
              :data-src="require('~/assets/graphic/spaceman.png?webp')"
              alt="spaceman"
          >
        </section>

      </div>
    </section>

    <section id="contact_me" class="exclusive-paper w-full h-auto bg-black rounded-4xl relative">

      <div class="contact_me w-3/4 h-28  items-center flex  mx-auto pt-20 ">
        <span class="w-full inline-block relative"></span>
        <h2 class="w-7/12 font-bold text-3xl mt-4 text-center"

        >HAVE ANY QUESTIONS</h2>
        <span class="w-full inline-block relative"></span>


      </div>

      <div>
        <h1
            class="text-11xl mb-20  text-center leading-tight "

        >GET IN TOUCH</h1>

      </div>


      <aside class="w-3/4 flex justify-center m-auto pb-5">


        <article class="w-1/3 p-10 mb-10">
          <h2 class="w-9/12 mb-5 mx-auto p-1 relative flex justify-center lg:text-xl 2xl:text-3xl font-semibold uppercase">
            CONTACT ME</h2>
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


        <article class="h-full flex w-1/3 flex-col p-10 p mb-10 bg-repeat bg-auto border-12 border-solid"

        data-aos="zoom-in"
        data-aos-delay="1500"
                 data-aos-anchor-placement="center-bottom"
                 data-anchor="#footer"
        >
          <h2 class="w-9/12  mb-5 mx-auto p-1 relative flex justify-center  lg:text-xl 2xl:text-3xl font-semibold uppercase">
            LET ME KNOW!</h2>
          <p class="lg:text-xl 2xl:text-2xl text-center">Wenn Sie ein konkretes Anliegen haben, eine Idee besprechen möchten oder mich erst kennenlernen wollen, kontaktieren Sie mich einfach.</p>

          <form

              ref="form"
              class="flex flex-col">
            <label>
              <input
                  type="text"
                  placeholder="Name*"
                  id="name"
                  class="w-full h-12 mt-2 pl-1 text-2xl"
                  v-model="name"
                  :disabled="button"
                  :class="[button ? blurClass : '', bkClass]"
              >
            </label>
            <label>
              <input
                  type="email"
                  placeholder="Email*"
                  name="email"
                  id="email"
                  v-model="email"
                  class="w-full h-12 mt-2 pl-1 text-2xl "
                  :disabled="button"
                  :class="[button ? blurClass : '', bkClass]"
                  required
              >
            </label>


            <transition :leave-active-class="'animate__bounceOutDown'">
         <span
             id="emailErr"

             class="absolute flex "

             :class="{'animate__animated animate__bounceInLeft' : !isShowing}"

             ref="spanEmail"
             v-if="msg.email">

           <b class=" w-full self-center text-center text-2xl">{{msg.email}}</b></span>

            </transition>

            <label>
              <textarea
                  placeholder="Your message"
                  id="message"
                  v-model="message"
                  class="w-full h-32 pl-1 mt-2 block text-2xl resize-none"
                  :disabled="button"
                  :class="[button ? blurClass : '', bkClass]"
              ></textarea>
            </label>
          </form>


          <button
              type ="submit"
              form="form"
              value="submit"
              v-model="button"
              :class="button ? 'is_active' : ''"
              @click.prevent="send"
              v-bind:disabled="button"


              class="button_red text-center w-1/3 self-center xl:w-1/2 xl:p-2 ">






            <span>Submit</span>
            <div class="success">
              <svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  viewBox="0 0 29.756 29.756" style="enable-background:new 0 0 29.756 29.756;" xml:space="preserve">

	<path d="M29.049,5.009L28.19,4.151c-0.943-0.945-2.488-0.945-3.434,0L10.172,18.737l-5.175-5.173   c-0.943-0.944-2.489-0.944-3.432,0.001l-0.858,0.857c-0.943,0.944-0.943,2.489,0,3.433l7.744,7.752   c0.944,0.943,2.489,0.943,3.433,0L29.049,8.442C29.991,7.498,29.991,5.953,29.049,5.009z"/>
 </svg>
            </div></button>






        </article>

        <article class="w-1/3 p-10 mb-10">
          <h2 class="w-9/12  mb-5 mx-auto p-1 relative flex justify-center lg:text-xl 2xl:text-3xl font-semibold uppercase">OPEN HOURS</h2>
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

      <stickyFooter
          id="footer"
          class="opacity-100"/>
    </section>


  </section>

</template>

<script>



const sick = require('~/assets/graphic/vintage_guys.jpg?resize&sizes[]=300&sizes[]=600&format=webp');

export default {


  components: {

    light: () => import(/* webpackPrefetch: true */ '~/components/light.vue'),
    stickyFooter: () => import('~/components/stickyFooter.vue'),
  },

  layout: 'desktop',

  transition: {
    name: 'spotlight',
    mode: 'out-in'
  },

  data() {

    return {

      sick,

      message: '',
      name: '',
      email: '',
      html: '',
      msg: [],


      bkClass: 'bk',
      blurClass: 'blur',
      button : false,
      isShowing: false,
    }


  },


  watch: {
    email(value){

      this.email = value;
      this.validateEmail(value);
    }
  },



  methods: {


    validateEmail(value){
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
      {
        document.querySelector("#email").style.borderColor = "#4f7b70"

        this.msg['email'] = '';

      } else{

        document.querySelector("#email").style.borderColor = "#a1362b"

        this.msg['email'] = "BAD E-MAIL"



      }
    },



    send() {


      this.button = true
      this.$mail.send({
        subject:this.name,
        to:this.email,
        html: `<b>Imię:</b> ${this.name}<br><b>Email:</b> ${this.email}<br><b>Wiadomość:</b> ${this.message}`

      })


    },



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


  },


  beforeMount() {

    fullpage_api.destroy('all')
}}

</script>

<style scoped lang="scss">




#emailErr {


  height: 8%;
  width: 82%;
  background-color: #a1362b;


  b {

    color: #e6c8a0;
    font-family: Merriweather, sans-serif;
  }
}


.success{
  position: absolute;
  box-sizing: content-box;
  border: 3px solid #a1362b;
  top: -2rem;
  left: -0.5rem;
  width: 110%;
  background: #fff;
  border-radius: 50%;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: all .35s;
}

.success svg{
  width: 50%;

  fill: yellowgreen;
  transform-origin: 50% 50%;
  transform: translateY(-50%) rotate(720deg) scale(1);
  transition: all .35s;
  display: inline-flex;
}

.button_red.is_active{
  width: 25%;

}

.button_red.is_active .success{
  opacity: 1;
  visibility: visible;
}

.button_red.is_active .success svg{
  margin-top: 50%;
  transform: translateY(-50%) rotate(720deg) scale(1);
}

.button_red.is_active span{
  opacity: 0;
  visibility: hidden;
}



























[data-aos="rotate-space"] {
  transform: rotate(-540deg);
  transition-property: transform;
}

[data-aos="rotate-space"].aos-animate {
  transform: rotate(0deg);
}

#contact_me {

  background-color: #f7ebd5;

  h1{
      color: #224a49;
      filter: drop-shadow(5px 6px 0 #a9c9bb);
      font-family: Barlow Condensed, sans-serif;
      font-weight: 800;

  }

}

header {

  background-color: #faebd7;
}

.exclusive-paper {

  background-image: url('~assets/graphic/exclusive-paper.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000&format=webp');


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



.bk {
  transition: all 0.3s ease-out;
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
  background-color: #f4dda9;

  animation: bondJamesBond 1.5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;

  h2, p, li, button, img, h1 span,h3 {
    opacity: 0;
    position: relative;
    animation: modalContentFadeIn .5s 1.4s linear forwards;
  }


  &.out {
    animation: slowFade  1.5s ;



    > h2, p, li, button, img ,h1 span,h3 {
      animation: modalContentFadeOut 1s ;
    }

  }

  @keyframes slowFade {
    0% {

      height:375px;
      width:45%;
      border-radius: 0;
    }
    80% {

      border-radius: 40px;
      width:30%;

    }
    90% {
      transform:translateX(0px);
      height:75px;
      width:10%;

    }
    100% {

      height:75px;
      width:  75px;
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
      border-radius:40px;
      height:75px;
      width:75px;
    }
    90% {
      border-radius:3px;
      height:322px;
      width:40%;
    }
    100% {
      border-radius:0;
      height:375px;
      width:45%;
    }
  }



  section.text {
    position: relative;
    width: 100%;
    min-width: 300px;


  }

  h1, h3 {
    font-family: "Oswald", sans-serif;
    color:#121212;
    transform: matrix(1, -0.20, 0, 1, 0, 0);
    -ms-transform: matrix(1, -0.20, 0, 1, 0, 0);
    -webkit-transform: matrix(1, -0.20, 0, 1, 0, 0);
  }

  h1 {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 3.5vw;
    text-shadow: 4px 5px #e6e6d8, 6px 7px #c6a39a;
    filter: none;
  }

  h1 span {
    display: inline-block;
    vertical-align: middle;
  }


  h3 {
    font-family: "Merriweather", sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.8vw;
    letter-spacing: 0.2em;
    margin-bottom: 10px;
    position: relative;
  }

  h3:before, h3:after {
    content: " ";
    position: absolute;
    width: 100px;
    height: 10px;
    border-top: 2px solid #121212;
    border-bottom: 2px solid #121212;
  }

  h3:before {
    margin: 5px 0 0 -110px;
  }

  h3:after {
    margin: 5px 0 0 10px;
  }



}



.Icon {
  width: 50px;
  height: 50px;
  position: relative;
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
  top: 32px;
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

    font-family: Righteous,sans-serif;


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

      font-family: Barlow Condensed, sans-serif;
      color: #f7ebd5;
      box-shadow: -10px 0 0 #4f7b70;
      white-space: revert;

    }
    p {

    font-family: 'Righteous', sans-serif;

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
      font-family: 'Barlow Condensed',sans-serif;
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

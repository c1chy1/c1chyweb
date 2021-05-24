<template>

  <nav class="fixed w-full z-20 mt-3 hidden md:visible lg:hidden  xl:block">

    <button class="toggle m-2 absolute">

      <input type="checkbox" v-model="checked" name="button" id="button" @click="toggle">
      <label class="bevel " for="button">MENU</label>
    </button>

    <div id="nav" class="slidein h-16 w-full w-max z-10 nav text-center flex fixed bg-center bg-repeat 2xl:w-full"
         :class="open ? 'open' : ''">


      <ul class="w-full h-12 px-16 flex justify-evenly self-center flex-wrap ">
        <li @click.prevent="toTop">
          <NuxtLink to="/" class="text-2xl spin circle" prefetch>Home</NuxtLink>
        </li>
        <li @click.prevent="toTop"
        >
          <NuxtLink to="/aboutme" class="text-2xl spin circle cursor-pointer" prefetch>
            About Me
          </NuxtLink>
        </li>
        <li>

          <img
              :srcSet="require('../assets/graphic/logo_nav.png?webp')"

              class="lazyload h-20 w-20 mx-auto"
               alt="c1chy.web">
        </li>

        <li @click.prevent="toTop">
          <NuxtLink to="/portfolio" class="text-2xl spin circle" prefetch>Portfolio</NuxtLink>
        </li>
        <li @click.prevent="toTop">
          <NuxtLink to="/contact" class="text-2xl spin circle" prefetch>Contact</NuxtLink>
        </li>
      </ul>

    </div>


  </nav>


</template>

<script>


export default {


  name: "navigation",

  data() {
    return {

      open: false,
      checked: false

    };
  },

  methods: {
    toggle() {
      this.open = !this.open;
      this.checked = !this.checked;
    },

    toTop() {

      window.scroll(0, 0)
      fullpage_api.moveTo('page1', 2)

    }

  }
};
</script>

<style scoped lang="scss">


$background: #fefefe;
$text: #4b507a;

$cyan: #60daaa;
$yellow: #fbca67;
$orange: #ff8a30;
$purple: #6477b9;
$blue: #0eb7da;

$scrollLength: 100vh;


.spin {

  position: absolute;

  &:hover {
    color: $blue;

  }


  &::before {
    border: 2px solid transparent;
  }

  &:hover::before {
    border-top-color: $blue;
    border-right-color: $blue;
    border-bottom-color: $blue;
    display: inline-table;

    transition: border-top-color 0.15s linear,
    border-right-color 0.15s linear 0.10s,
    border-bottom-color 0.15s linear 0.20s;
  }

  &::after {
    border: 0 solid transparent;
  }

  &:hover::after {
    border-top: 2px solid $blue;
    border-left-width: 2px;
    border-right-width: 2px;
    transform: rotate(270deg);
    transition: transform 0.4s linear 0s,
    border-left-width 0s linear 0.35s;
  }


  &:focus {

    border-top-color: $blue;
    border-right-color: $blue;
    border-bottom-color: $blue;
    display: inline-table;

    transition: border-top-color 0.15s linear,
    border-right-color 0.15s linear 0.10s,
    border-bottom-color 0.15s linear 0.20s;


  }
}

.circle {
  border-radius: 100%;
  box-shadow: none;

  &::before,
  &::after {
    border-radius: 100%;
  }
}


$red: #f33;
$red2: desaturate(darken($red, 15%), 18%);
$buttonHeight: 54;

input {
  display: none;
}

label {
  cursor: pointer;
}

.bevel {
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 26px;
  height: 46px;
  background: #f33 linear-gradient(to bottom, #f33 50%, #d11515 50%);
  border-radius: 0px;
  box-shadow: 0px 15px 25px -10px rgba(0, 0, 0, 0.5), inset 0px 0px 0px 0px rgba(255, 51, 51, 0), inset 0px -27px 0px 0px #d11515;
  font-size: 20px;
  text-align: center;
  text-shadow: 0px 3px 5px #d11515, 0px 5px 10px #d11515, 0px 5px 10px #d11515, 0px 5px 10px #d11515, 0px 5px 10px #d11515;
  color: #fff;
  font-family: Merriweather, sans-serif;
  letter-spacing: 0.4px;
  overflow: hidden;
  outline: 0 !important;
  transform: scale(1.01);
  transition: all 0.2s ease-in-out;

  &:before, &:after {
    content: " ";
    width: #{$buttonHeight/2 + "px"};
    max-width: 50%;
    height: 100%;
    position: absolute;
    top: 0;

    transition-delay: 0.15s;
  }

  &:before {
    left: 0;
    background: linear-gradient(45deg, transparent calc(200% / 3), rgba($red, 1) calc(200% / 3)),
    linear-gradient(-45deg, rgba($red2, 1) calc(100% / 3), transparent calc(100% / 3)),
    linear-gradient(to right, $red, $red2);
  }

  &:after {
    right: 0;
    background: linear-gradient(-45deg, transparent calc(200% / 3), rgba($red, 1) calc(200% / 3)),
    linear-gradient(45deg, rgba($red2, 1) calc(100% / 3), transparent calc(100% / 3)),
    linear-gradient(to left, $red, $red2);
  }

  &:hover {
    transform: scale(1.07);
    box-shadow: 0px 25px 40px -5px rgba(#000, 0.3),
    inset 0px 0px 0px 0px rgba($red, 0),
    inset 0px -27px 0px 0px $red2;
  }

  input:checked ~ & {
    padding: 0 #{$buttonHeight/4 + 5 + "px"};
    background: rgba($red, 0);
    box-shadow: 0px 5px 15px -5px rgba(#000, 0.3),
    inset 0px 0px 0px 4px $red,
    inset 0px 0px 0px 0px $red2;
    border-radius: 10px;
    font-size: 24px;
    font-weight: 700;
    text-shadow: 0px 3px 5px rgba($red2, 0),
    0px 5px 10px rgba($red2, 0),
    0px 5px 10px rgba($red2, 0),
    0px 5px 10px rgba($red2, 0),
    0px 5px 10px rgba($red2, 0);
    color: $red;
    transform: scale(0.7) rotate(-6deg);
    transition-delay: 0.135s;

    &:before, &:after {
      transition-delay: 0s;
    }

    &:before {
      transform: translateX(-100%);
    }

    &:after {
      transform: translateX(100%);
    }

    + span {
      // opacity: 0.15;
      color: rgba($red, 0.1875);
      transform: translateY(56px);
    }
  }
}

span {
  display: block;
  margin-bottom: 10px;
  font-size: 32px;
  font-weight: 700;
  color: #222;
  z-index: -1;
  transition-delay: 0.135s;
}


nav {


  .nav {


    background-image: url('~assets/graphic/exclusive-paper.png?webp');

    background-color: #faebd7;

    ul {

      border-top: 2px solid #6eb8b3;
      border-bottom: 2px solid #6eb8b3;


      li {

        align-self: center;
        width: 10vw;
        height: 100%;
        display: flex;
        align-items: center;

        a {
          font-weight: 700;
          color: #224a49;

          text-transform: uppercase;
          filter: drop-shadow(2px 2px 0px rgba(229, 62, 38, 0.27));
        }

        :hover {


          transition: all 0.3s ease;
          color: #e53e26;
        }

        :focus {

          transition: all 0.3s ease;
          color: #e53e26;
        }

        :focus::after {
          border-top: 2px solid $blue;
          border-left-width: 2px;
          border-right-width: 2px;
          transform: rotate(270deg);
          transition: transform 0.4s linear 0s,
          border-left-width 0s linear 0.35s;
        }


        :focus {

        }


        ::before {
          border: 2px solid transparent;
        }

        :focus::before {
          border-top-color: $blue;
          border-right-color: $blue;
          border-bottom-color: $blue;
          display: inline-table;

          transition: border-top-color 0.15s linear,
          border-right-color 0.15s linear 0.10s,
          border-bottom-color 0.15s linear 0.20s;
        }


        :focus::after {
          border-top: 2px solid $blue;
          border-left-width: 2px;
          border-right-width: 2px;
          transform: rotate(270deg);
          transition: transform 0.4s linear 0s,
          border-left-width 0s linear 0.35s;
        }


        ::before {

          padding-right: 4vw;
          margin-right: 20px;
          content: "★";
          color: #6eb8b3;
        }

        ::before:first-child {

          display: none;

        }
      }

    }

  }

  .slidein {


    right: -100%;

    box-shadow: 1px 1px 10px rgba(0, 0, 0, .5);
    transition: all .5s ease-in-out;

    li {


    }

  }

  .open {
    right: 0;
    z-index: 10;
  }

  .close-btn {
    border: none;
    font-weight: bold;
    font-size: 2em;
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    padding: 0 1em;
  }


  button {

    border-radius: 3em;
    font-size: 1.1em;
  }

  h1 {
    font-weight: 700;
    font-family: "Barlow Condensed", sans-serif;
  }

  p {

    font-family: "Barlow Condensed", sans-serif;

  }
}

</style>

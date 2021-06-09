<template>
<footer
    id="site-footer"
    class="opacity-0 hidden w-full h-24 p-2 flex items-center  justify-start box-border bg-repeat bg-center text-6xl text-center sm:h-24 md:hidden md:h-24 md-landscape:hidden lg:w-full xl:hidden  2xl:flex 2xl:h-40 "
>





  <img

      :data-src="require('~/assets/graphic/footer_logo.png?webp')"

      alt="c1chy logo"

      class="lazyload h-16 w-full relative mt-4 ml-2 mx-auto sm:h-20 sm:w-1/2 sm:mt-2 sm:ml-5 md:h-16 md:w-full md:ml-3 md:mt-4 lg:w-full lg:h-32  lg:ml-6 xl:h-36 xl:w-7/12 xl:mt-5  2xl:ml-6 2xl:mt-3  2xl:h-28 2xl:w-1/12  "
      :class="{'animate__animated animate__pulse animate__infinite  animate__delay-2s ' : animate}"
  >





  <ul class="hidden w-1/2 h-12  pt-2 flex  justify-evenly self-center flex-wrap sm:hidden lg:hidden xl:flex xl:block xl:10/12 2xl:w-1/2">
    <li  @click.prevent="toTop" >
      <NuxtLink to="/" class="box curmudgeon flex justify-center items-center  w-36 h-16 relative  text-xl text-center text-white align-middle cursor-pointer xl:max-w-full xl:text-xs 2xl:text-xl " no-prefetch>
        Home</NuxtLink>
    </li>
    <li @click.prevent="toTop">
      <NuxtLink to="/aboutme" class="box curmudgeon flex justify-center items-center  w-36 h-16 relative  text-xl text-center text-white align-middle cursor-pointer xl:max-w-full xl:text-xs 2xl:text-xl " no-prefetch>
        About Me</NuxtLink>
    </li>


    <li @click.prevent="toTop">
      <NuxtLink to="/portfolio" class="box curmudgeon flex justify-center items-center  w-36 h-16 relative  text-xl text-center text-white align-middle cursor-pointer xl:max-w-full xl:text-xs 2xl:text-xl " no-prefetch>
        Portfolio</NuxtLink>
    </li>
    <li class="flex" @click.prevent="toTop">
      <NuxtLink

          to="/contact"
          class="box curmudgeon flex justify-center items-center  w-36 h-16 relative  text-xl text-center text-white align-middle cursor-pointer xl:max-w-full xl:text-xs 2xl:text-xl " no-prefetch>
        Contact

      </NuxtLink>
    </li>
  </ul>



  <ul class="icon-effect icon-effect-1a w-2/5 h-12 flex justify-end  xl:mt-5 2xl:w-1/2 ">
    <li><a

        href="https://www.github.com/"
        class="icon cursor-pointer"
        aria-label="github" ><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a></li>
    <li><a

        href="https://www.twitter.com/"
        class="icon cursor-pointer"
        aria-label="twitter">
      <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="twitter"
          class="svg-inline--fa fa-twitter fa-w-16"
          role="img" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></a></li>
    <li>
      <a href="https://facebook.com/" class="icon cursor-pointer" aria-label="facebook">
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" class="svg-inline--fa fa-facebook fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg></a></li>
    <li>
      <a href="#top"
         class="back-to-top-link cursor-pointer"
         aria-label="Scroll to Top"
         @click.prevent="toTop"

        >TOP</a>
    </li>
  </ul>

</footer>
</template>

<script>
export default {
  name: "stickyFooter",

  data() {
    return {


      animate:true,

    }
  },



methods : {


  toTop(){


      window.scroll(0,0)
      fullpage_api.moveTo('page1',2)

    }

}


}
</script>

<style scoped lang="scss">




$scrollLength: 100vh;




.back-to-top-wrapper {
  top: $scrollLength;
  right: 0.25rem;
  bottom: -5em;
  width: 3em;
  pointer-events: none;
}

.back-to-top-link {

  position: sticky;
  display: inline-block;
  z-index: 1;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #faebd7;
  font-size: 1.2rem;
  line-height: 52px;
  text-align: center;
  background-color:#1e1e1e;

  pointer-events: all;
  top: calc(100vh - 5rem);
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;

&:after {


  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  content: '';
  box-sizing: content-box;
  top: -7px;
  left: -7px;
  padding: 7px;
  box-shadow: 0 0 0 4px #a1362b;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  -ms-transform: scale(0.8);
  -o-transform: scale(0.8);
  transform: scale(0.8);
  opacity: 0;



}




  &:hover, {
    background-color: #faebd7;
    color:  #a1362b;
  }

  &:focus {
    outline: none;
  }

  &:hover:after {

    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
    opacity: 1;

  }
}

.box {



  transition: all 0.5s;
  border: 2px solid #a1362b;
  -webkit-transition:0.5s;



  &:hover {

    border: 2px solid rgba(0,160,80,0);
    color: #faebd7;



  }

  &:after , &:before {

    width: 100%;
    height: 135%;
    z-index: 3;
    content: '';
    position: absolute;
    top: -20px;
    left:0;
    box-sizing: border-box;
    -webkit-transform: scale(0);
    transition: all 0.5s;

  }


  &:hover::after, &:hover::before {
    transform: scale(1);
  }

}


.curmudgeon {

&:before {

  border-bottom: 3px solid #faebd7;
  border-left: 0;
  -webkit-transform-origin: 0% 100%;

}

  &:after {

    border-top: 0;
    border-right: 0;
    -webkit-transform-origin: 50% 50%;

  }

}



#site-footer {

  -webkit-box-shadow: #000 0 7px 35px 0;
  -moz-box-shadow: #000 0 7px 35px 0;
  box-shadow: #000 0 7px 35px 0;



  font-family: 'Indie Flower',cursive;
  &:after {

    min-height: 20vw;
    background-size: cover;
    background-position: center;
  }

  &:before {

    text-shadow: rgb(0, 0, 0) 5px -6px 2px;

  }
}

footer {


  color: #faebd7;
  background-image: url(~assets/graphic/bg_footer.jpg?webp);
  background-size: initial;
  background-attachment: scroll;
  background-color: #222222;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  text-align: left;
  font: bold 22px sans-serif;
  z-index: 10;

  mask:
      radial-gradient(var(--r1,160%) var(--r2,68.15%) at bottom   ,white 79.5%,transparent 80%) bottom right,
      radial-gradient(var(--r1,160%) var(--r2,68.15%) at top,transparent 79.5%,white 80%) bottom center,
      radial-gradient(var(--r1,160%) var(--r2,68.15%) at bottom   ,white 79.5%,transparent 80%) bottom left;
  -webkit-mask-size:33.4% 140%;
  -webkit-mask-repeat:no-repeat;
  mask-size:33.4% 183%;
  mask-repeat:no-repeat;



  svg {


    background-color: transparent;
  }

  svg:hover {

    background-color: black;

  }

  ul


  {
    list-style: none;
    font-family: Merriweather , sans-serif;



    > li {


      width: 7vmax;



    }

    &:first-of-type li > {

      align-self: center;
      text-transform: uppercase;
    a {

      font-size: 1vw;


     &::after {

        font-size: 1em;
        content: "✬"
      }


    }

    }

  }


  .icon {
    display: inline-block;
    position: relative;
    z-index: 1;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 40px;
    color: #faebd7;

    line-height: 52px;
    text-align: center;
    background-color:#1e1e1e;


    &:after {


      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      content: '';
      box-sizing: content-box;

    }

  }

  .icon-effect .icon {
    transition: all 0.5s;
  }
  .icon-effect .icon:after {
    top: -7px;
    left: -7px;
    padding: 7px;
    box-shadow: 0 0 0 4px #a1362b;
    transition: all 0.5s;
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -ms-transform: scale(0.8);
    -o-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0;
  }
  .icon-effect-1a .icon:hover {
    background-color: #a1362b;
    color: #faebd7;
  }
  .icon-effect-1a .icon:hover:after {
    transform: scale(1);
    opacity: 1;
  }


}


#moveTo {


  transition: all 0.5s;
  border: 2px solid #a1362b;
  -webkit-transition:0.5s;


  &:hover {

    border: 2px solid rgba(0,160,80,0);
    opacity: 1;
    color: #faebd7;

  }

  &:before {

    border-bottom: 3px solid #faebd7;
    border-left: 0;
    -webkit-transform-origin: 0% 100%;
    height: 150%;
    top: -30px;
  }

  &:after {
    height: 150%;
    border-top: 0;
    border-right: 0;
    -webkit-transform-origin: 50% 50%;
    width: 100%;
    font-size: 2rem;
    content: "⮬";
    top: -30px;
  }

  &:hover::after, &:hover::before {
    transform: scale(1);
    opacity: 1;


  }



}



</style>

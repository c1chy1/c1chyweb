<template>
  <section class="h-screen w-screen">

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
        <h1 class="text-8xl font-semibold text-center uppercase">ERROR 404
        </h1>
      </div>
      <div class="title_dividers w-1/5 h-4 mx-auto my-10 relative inline-block">
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
          > Page Not Found
        </figcaption>
      </figure>

    </header>

    <div>

      <div class="banner ">
        <img class="m-auto w-1/3" src="~assets/graphic/404.png?webp">

      </div>

      <p>Sorry<br>
        This page<br>
        doesn't exist. </p>


      <div class="link">
        Please, proceed to our <a href="/">Home page</a></div>
    </div>
  </section>
</template>

<script>

const light = require('~/assets/graphic/light_background.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000&format=webp');


export default {

  data() {

    return {

      light
    }

  }
}
</script>
<style scoped lang="scss">


section {

  background-color: antiquewhite;
  background-image: url('~assets/graphic/exclusive-paper.png');
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


.banner {

  background-color: #224a49;
  margin-left: 25%;
  margin-right: 25%;
  border-radius: 50px;

  img {

    margin-top: 2rem;
    margin-bottom: 1rem;
  }


}

p {

  font-size: 3.333333em;
  color: #224a49;
  line-height: 1.08;
  text-align: center;
  margin: 0;
  padding: 0;
  border: 0;
  font-style: inherit;
  vertical-align: baseline;
  -webkit-text-size-adjust: none;
  text-decoration: none;
  word-spacing: 0.06em;
  letter-spacing: 0.04em;
}

.link {


  font-style: inherit;
  color:black;
  text-align: center;
  font-size: 2.6em;
  line-height: 1;
  margin-top: 1rem;

  a {

    color: #224a49;
    transition: all 0.2s ease;

    &:hover {

    color:rgb(229,62,38)
    }
  }
}


</style>

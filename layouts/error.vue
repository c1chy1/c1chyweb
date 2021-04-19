<template>
  <div class="h-screen w-screen">

    <header class="container px-16 max-w-full lg:max-w-max  mx-auto filter-shadow-black relative overflow-hidden">
      <div
          id="1"
          class="w-full h-112 grid grid-cols-1 justify-items-center header_img_wrap"
      >

        <div class="error flex flex-col justify-center">
          <div class="title"><h1>ERROR 404</h1></div>
          <div class="title_dividers">
            <span></span>
            <span class="top-2"></span>
            <span class="top-4"></span>
          </div>

          <figure class="relative flex items-center justify-center filter-shadow-black">


            <img src="~assets/graphic/ribbon.png" alt="Trulli"
                 class="w-full h-20 my-auto z-1 filter-shadow-black">
            <figcaption class=" mx-auto mt-5 text-3xl">
              <NuxtLink to="/">Home</NuxtLink>
              > Page Not Found
            </figcaption>
          </figure>
        </div>


        <img class="header_image w-full h-112 "
             alt="header_image">
      </div>


    </header>

    <div>

      <div class="banner ">
        <img class="m-auto w-1/3" src="~assets/graphic/404.png">

      </div>

      <p>Sorry<br>
        This page<br>
        doesn't exist. </p>


      <div class="link">
        Please, proceed to our <a href="/">Home page</a></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error', // you can set a custom layout for the error page


}
</script>
<style scoped lang="scss">

.error {

  .title {

    font-family: Barlow Condensed, sans-serif;
    color: #4f7b70;
    top: 20px;
    line-height: initial;

    h1 {

      font-size: 100px;
      font-weight: 600;
      -webkit-text-stroke-width: 3px;
      filter: drop-shadow(4px 5px 0 #224a49);
      -webkit-text-stroke-color: #e4ddd3;
      text-align: center;
      text-transform: uppercase;
      background-image: url('~assets/graphic/green-dust-and-scratches.png');
      background-color: #4f7b70;
      -webkit-font-smoothing: antialiased;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

    }

  }


   a {
     transition: all 0.2s ease;

     &:hover {


       color: #224a49;

     }

   }

  .title_dividers {

    display: inline-block;
    position: relative;
    width: 310px;
    height: 20px;
    margin: 30px auto;

    span {

      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      height: 3px;
      width: 100%;
      background: -webkit-linear-gradient(right, rgba(255, 255, 255, .01), #E9E4DD, #E9E4DD, rgba(255, 255, 255, .01));
      background: -o-linear-gradient(right, rgba(255, 255, 255, .01), #E9E4DD, #E9E4DD, rgba(255, 255, 255, .01));
      background: linear-gradient(to left, rgba(255, 255, 255, .01), #E9E4DD, #E9E4DD, rgba(255, 255, 255, .01));


    }


  }

  figure {

    position: relative;
    z-index: 10;

    figcaption {


      font-family: Satisfy, sans-serif;
      display: block;
      position: absolute;
      text-align: center;
      letter-spacing: 10px;
      color: white;
    }

  }
}


.header_img_wrap .header_image {
  display: flex;
  content: "";
  position: absolute;
  width: 250%;
  height: 400%;
  top: -145%;
  opacity: 0.7;
  left: 0;
  z-index: -1;
  background: url('~assets/graphic/light_background.png?webp') center no-repeat;
  background-size: cover;
  animation: rotate 120s infinite linear;

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

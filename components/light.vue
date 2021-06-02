<template>

  <div  class="light_background md:w-screen px-0">

    <img
        :data-src="require('~/assets/graphic/light_background.png')"
        :test="light.src"
        :srcSet="light.srcSet"
        :width="light.width"
        :height="light.height"
        sizes="(min-width: 768px) 60vw, 95vw"
        class="lazypreload light overflow-hidden "
        alt="light"
        rel="preload"
  >
  </div>


</template>

<script>

const light = require('~/assets/graphic/light_background.png?sizes[]=150,sizes[]=600,sizes[]=1024&format=webp');


export default {
  name: "light",


  data() {


    return {

      light


    }}

    }
</script>

<style scoped lang="scss">


.light_background {

  width: 160vw;
  position: absolute;
  top: 45%;
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

</style>

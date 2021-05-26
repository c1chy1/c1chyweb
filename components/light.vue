<template>

  <div class="light_background md:w-screen px-0">    <img

      :data-src="require('~/assets/graphic/light_background.png')"
      :test="light.src"
      :srcSet="light.srcSet"
      class="lazyload light overflow-hidden "
      alt="light"
  >
  </div>


</template>

<script>

const light = require('~/assets/graphic/light_background.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000&format=webp');


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

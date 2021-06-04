<template>

  <div  class="light_background  overflow-hidden  md:w-screen px-0">





</div>



</template>

<script>

const light = require('~/assets/graphic/light_background_medium.png?sizes[]=600&format=webp');



export default {
  name: "light",



  data() {


    return {

      light


    }}

    }
</script>

<style scoped lang="scss">

.light_background:before {
  content: "";
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  z-index: -1;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  animation: rotate 120s infinite linear;

}

@keyframes rotate {

  to {
    transform: rotate(360deg);
  }
}

</style>

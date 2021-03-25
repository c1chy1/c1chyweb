<template>




  <div class="slide flex items-center text-2xl font-sans text-white">
    <NuxtLink to="/"
              class="spin circle mr-auto pl-2 pb-2 self-end">
      <img
          src="../assets/graphic/logo_nav.png"
           class="h-20 w-20">
    </NuxtLink>
  </div>


</template>

<script>
export default {
  name: "slideA"
}
</script>

<style scoped lang="scss">



.slide {
  background-image: url('~assets/graphic/portfolio_slide_2.jpg') ;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);


  img {

    &:hover {

      animation: rotation 1s ease-in;

    }

  }
}

</style>

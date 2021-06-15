<template >
  <div class="slide flex items-center text-2xl font-sans text-white">

    <div
        class="mr-auto pl-2 pb-2 self-end"

        @click.prevent="toTop">
      <NuxtLink to="/"
                class="spin circle ">
        <img

            :data-src="require('~/assets/graphic/logo_nav.png?webp')"
            class="lazyload h-20 w-20 cursor-pointer"
            alt="c1chy">

      </NuxtLink>
    </div>
  </div>

</template>

<script>
export default {
  name: "slideB",


  methods: {


    toTop() {

      window.scroll(0, 0)

    }


  }
}
</script>

<style scoped lang="scss">

.slide {

  background-image: url('~assets/graphic/portfolio_slide_3.jpg?webp');
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);


  img {

    &:hover {

      animation: rotate 1s ease-in;

    }


    @keyframes rotate {

      to {
        transform: rotate(360deg);
      }
    }
  }
}


</style>

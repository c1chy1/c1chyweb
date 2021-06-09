<template>
<section v-if="loading"
>
  <div id="hola" ref="hola" class="cursor-default">
    <div id="preloader" ref="preloader">
      <span></span>
      <span></span>
    </div>
  </div>

</section>
</template>

<script>




export default {




  data: function () {




    return {

      loading: false,
    }
  },


  methods: {


    start(){

      this.loading = true



      if (process.browser) {


        setTimeout(() => {

          Velocity(this.$refs.preloader,

              {
                opacity: 0.1,
                transform: ["translateY(-80px)", "translateY(0)"],
              },


              {
                duration: 700,
                complete: () => {
                 Velocity(this.$refs.hola,

                      {
                        transform: ["translateY(-100%)", "translateY(0)"],

                      },

                      {
                        duration: 1000,
                        easing: [0.7, 0, 0.3, 1],
                        complete: () => {

                          this.$nuxt.$el.children[1].firstChild.children[1].classList.add('animate-border', 'divide')
                          this.$nuxt.$el.children[1].firstChild.children[1].children[0].children[1].children[0].classList.add('animate__animated', 'animate__bounceInLeft','animate__delay-1s')
                          this.$nuxt.$el.children[1].firstChild.children[1].children[0].children[1].children[1].classList.add('animate__animated', 'animate__bounceInLeft','animate__delay-2s')
                          this.$nuxt.$el.children[1].firstChild.children[1].children[0].children[1].children[2].classList.add('animate__animated', 'animate__bounceInLeft','animate__delay-3s')
                          this.$nuxt.$el.children[1].firstChild.children[1].children[0].children[1].children[0].style.opacity = 1
                          this.$nuxt.$el.children[1].firstChild.children[1].children[0].children[1].children[1].style.opacity = 1
                          this.$nuxt.$el.children[1].firstChild.children[1].children[0].children[1].children[2].style.opacity = 1


                        }

                      },
                  )

                }

              },
          );
        }, 3000 )


      }


    },
    finish() {
      this.loading = false
  },


  },

}
</script>

<style lang="scss">


.opacity {

  opacity: 1;

}

#hola{
  width: 100vw;
  height: 100vh;
  background-color: #252328;
  position: fixed;
  z-index: 999;

}
#preloader {
  position:relative;
  width: 80px;
  height: 80px;
  top: 45%;
  margin: 0 auto;

}
#preloader span {
  position:absolute;
  border: 8px solid #ffe066;
  border-top: 8px solid transparent;
  border-radius:999px;
}

#preloader span:nth-child(1){
  width:80px;
  height:80px;
  animation: spin-1 2s infinite linear;
}
#preloader span:nth-child(2){
  top: 20px;
  left: 20px;
  width:40px;
  height:40px;
  animation: spin-2 1s infinite linear;
}
@keyframes spin-1 {
  0% {transform: rotate(360deg); opacity: 1;}
  50% {transform: rotate(180deg); opacity: 0.5;}
  100% {transform: rotate(0deg); opacity: 1;}
}
@keyframes spin-2 {
  0% {transform: rotate(0deg); opacity: 0.5;}
  50% {transform: rotate(180deg); opacity: 1;}
  100% {transform: rotate(360deg); opacity: 0.5;}
}


.home {
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home:before{
  position: absolute;
  width: 50%;
  height: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  content: '';

}
.home:after{
  position: absolute;
  width: 50%;
  height: 100%;
  z-index: 10;
  top: 0;
  right: 0;
  content: '';

}



@media (min-width: 1280px) {


  .animate-border {
    border-left: 60px solid #252328;
    border-right: 60px solid #252328;
    transition: border .5s .2s ease;
  }
  .home.divide:before {
    transition: all .6s 1.2s cubic-bezier(0.645, 0.045, 0.355, 1.000);
    width: 0;

  }
  .home.divide:after {
    transition: all .6s 1.2s cubic-bezier(0.645, 0.045, 0.355, 1.000);
    width: 0;

  }


}





</style>

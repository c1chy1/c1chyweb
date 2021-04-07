<template>

<client-only>
    <section class="h-screen w-full relative">
      <navigation />
      <Nuxt keep-alive />

    </section>
  </client-only>

</template>

<script>


import navigation from "~/components/navigation";



export default {
  components:  {navigation},



  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 7000)
    })
  }


}


</script>

<style scoped>

section  {

  background-color: transparent;
  width: 100%;
  height: 100vh;

}

</style>

<template>

<client-only>
    <main class="w-full h-full relative">
      <navigation />
      <Nuxt keep-alive />

    </main>
  </client-only>

</template>

<script>


import navigation from "~/components/navigation";



export default {
  components:  {navigation},


  transition(to, from) {
    if (!from) {
      return 'polygon'
    }
    return +to.query.page < +from.query.page ? 'box-wipe' : 'polygon'
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 7000)
    })
  }


}


</script>

<style scoped>



main {
  background-image: url('~assets/graphic/exclusive-paper.png');


}
</style>

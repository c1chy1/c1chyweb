<template>

<client-only>
    <section class="h-full w-full relative">
      <navigation />
      <Nuxt keep-alive />

    </section>
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

section  {

  background-color: transparent;

}

</style>

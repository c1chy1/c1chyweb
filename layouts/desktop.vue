<template lang="html">

<client-only>



    <section  class="w-full h-screen relative cursor-default">



      <navigation />
      <Nuxt  keep-alive />

    </section>
  </client-only>

</template>

<script>





import navigation from "~/components/navigation";

import "default-passive-events";


export default {
  components:  {navigation},

}




</script>

<style scoped >


section  {

  width: 100%;
 background-color:#252328 ;


}

</style>

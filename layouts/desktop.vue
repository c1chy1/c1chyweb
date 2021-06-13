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


data() {


  return {
    structuredData: {
      "@context": "http://schema.org",
      "@type": "LocalBusiness",
      "priceRange": "Euro",
      "name": "c1chyWeb",
      "url": "https://c1chy.de/",
      "image": "https://c1chy.lima-city.de/graphic/imagec1chy.png",
      "email": "cichy08081987pp@gmail.com",
      "description": "Webseite Lüdenscheid Nordrhein-Westfalen kaufen ",
      "openingHours": "24h",

      "review": {

        "@type" : "Review",
        "author": "c1chy",
        "reviewBody" : "Webentwicklung Programmierung "
      },

      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue" : "4.5",
        "ratingCount": "5",
        "reviewCount": "5"
      },
      "address": {
        "addressLocality": "Lüdenscheid",
        "addressRegion": "Nordrhein-Westfalen",
        "postalCode": "58-511",
        "addressCountry": "Lüdenscheid"
      }

    }
  }
},

  head() {
    return {
      script: [{ type: 'application/ld+json', json: this.structuredData }]
    }
  },
  async asyncData(context) {
    // Pre-fetch and return recipe data server-side.
  }

}






</script>

<style scoped >


section  {

  width: 100%;
 background-color:#252328 ;


}

</style>

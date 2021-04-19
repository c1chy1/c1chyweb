<template>

  <section class="relative flex items-center justify-center" v-if="loading">


    <div class="loading">
      <span>Loading</span>
    </div>


  <svg width="300" height="120" id="clackers" class="mt-20">
    <svg>
      <path id="arc-left-up" fill="none" d="M 90 90 A 90 90 0 0 1 0 0"/>
    </svg>
    <svg>
      <path id="arc-right-up" fill="none" d="M 100 90 A 90 90 0 0 0 190 0"/>
    </svg>

y
    <circle cx="15" cy="15" r="15">
      <animateMotion dur="1.5s" repeatCount="indefinite"
                     calcMode="linear"
                     keyPoints="0.0;0.19;0.36;0.51;0.64;0.75;0.84;0.91;0.96;0.99;1.0;0.99;0.96;0.91;0.84;0.75;0.64;0.51;0.36;0.19;0.0;0.0;0.05;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0"
                     keyTimes="0.0;0.025;0.05;0.075;0.1;0.125;0.15;0.175;0.2;0.225;0.25;0.275;0.3;0.325;0.35;0.375;0.4;0.425;0.45;0.475;0.5;0.525;0.55;0.575;0.6;0.625;0.65;0.675;0.7;0.725;0.75;0.775;0.8;0.825;0.85;0.875;0.9;0.925;0.95;0.975;1.0">
        <mpath xlink:href="#arc-left-up"/>
      </animateMotion>
    </circle>
    <circle cx="135" cy="105" r="15" />
    <circle cx="165" cy="105" r="15" />
    <circle cx="95" cy="15" r="15">
      <animateMotion dur="1.5s" repeatCount="indefinite"
                     calcMode="linear"
                     keyPoints="0.0;0.0;0.05;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0.0;0.19;0.36;0.51;0.64;0.75;0.84;0.91;0.96;0.99;1.0;0.99;0.96;0.91;0.84;0.75;0.64;0.51;0.36;0.19;0.0"
                     keyTimes="0.0;0.025;0.05;0.075;0.1;0.125;0.15;0.175;0.2;0.225;0.25;0.275;0.3;0.325;0.35;0.375;0.4;0.425;0.45;0.475;0.5;0.525;0.55;0.575;0.6;0.625;0.65;0.675;0.7;0.725;0.75;0.775;0.8;0.825;0.85;0.875;0.9;0.925;0.95;0.975;1.0">
        <mpath xlink:href="#arc-right-up"/>
      </animateMotion>
    </circle>
  </svg>



  </section>

</template>

<script>
export default {



  data: () => ({
    loading: false,

  }),
  methods: {
    start() {
      this.loading = true

    },
    finish() {
      this.loading = false

    }
  }
}
</script>

<style scoped>


section {

  width: 100%;
  height: 100%;
  z-index: 10000;
  position: absolute;
  background: #231f20;
  transition: all .5s ease-in;
  animation: spiral 3s ease-in;
  animation-delay: 4s;
}



.loading {
  font-family: "Arial Black", "Arial Bold", Gadget, sans-serif;
  text-transform:uppercase;

  width:150px;
  text-align:center;
  line-height:50px;

  left:0;right:0;top:50%;
  margin:auto;
  transform:translateY(-50%);
}

.loading span {
  position:relative;
  z-index:999;
  color:#fff;
  font-size: 0.9rem;
}
.loading:before {
  content:'';
  background:#61bdb6;
  width:128px;
  height:36px;
  display:block;
  position:absolute;
  top:0;left:0;right:0;bottom:0;
  margin:auto;

  animation:2s loadingBefore 8s ease-in-out;
}

@keyframes loadingBefore {
  0%   {transform:translateX(-14px);}
  50%  {transform:translateX(14px);}
  100% {transform:translateX(-14px);}
}


.loading:after {
  content:'';
  background:#ff3600;
  width:14px;
  height:60px;
  display:block;
  position:absolute;
  top:0;left:0;right:0;bottom:0;
  margin:auto;
  opacity:.5;

  animation:3s loadingAfter infinite ease-in-out;
}

@keyframes loadingAfter {
  0%   {transform:translateX(-50px);}
  50%  {transform:translateX(50px);}
  100% {transform:translateX(-50px);}
}



svg {
  position: absolute;
}

circle:nth-of-type(1) { fill: #ffffff; }
circle:nth-of-type(2) { fill: #fcd837; }
circle:nth-of-type(3) { fill: #f9a11f; }
circle:nth-of-type(4) { fill: #f27c21; }

#clackers {
  display: block;


}


@keyframes spiral {
  0% { clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 50%, 50% 50%, 25% 50%, 25% 75%, 75% 75%, 75% 25%, 0% 25%); }
  14.25% { clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 25%, 75% 25%, 75% 75%, 50% 75%, 50% 50%, 50% 50%, 25% 50%, 25% 75%, 75% 75%, 75% 25%, 0% 25%); }
  28.5% { clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 25%, 75% 25%, 75% 50%, 50% 50%, 50% 50%, 50% 50%, 25% 50%, 25% 75%, 75% 75%, 75% 25%, 0% 25%); }
  42.75% { clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 25%, 25% 25%, 25% 50%, 25% 50%, 25% 50%, 25% 50%, 25% 50%, 25% 75%, 75% 75%, 75% 25%, 0% 25%); }
  57% { clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 75%, 25% 75%, 25% 75%, 25% 75%, 25% 75%, 25% 75%, 25% 75%, 25% 75%, 75% 75%, 75% 25%, 0% 25%); }
  71.25% { clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 75% 100%, 75% 75%, 75% 75%, 75% 75%, 75% 75%, 75% 75%, 75% 75%, 75% 75%, 75% 75%, 75% 75%, 75% 25%, 0% 25%); }
  85.5% { clip-path: polygon(0% 0%, 100% 0%, 100% 25%, 75% 25%, 75% 25%, 75% 25%, 75% 25%, 75% 25%, 75% 25%, 75% 25%, 75% 25%, 75% 25%, 75% 25%, 75% 25%, 0% 25%); }
  100% {clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 25%, 0% 25%, 0% 25%, 0% 25%, 0% 25%, 0% 25%, 0% 25%); }
}





</style>

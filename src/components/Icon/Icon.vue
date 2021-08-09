<template>
  <svg :width="width" :height="height" :viewBox="`0 0 ${ view.width } ${view.height}`" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g :fill="iconColor">
      <component :is="icon"/>
    </g>
  </svg>
</template>

<script>
  import Heart from "./types/Heart";
  import FillHeart from "./types/FillHeart";
  import Arrow from "./types/Arrow";
  import Chevron from "./types/Chevron";

  export default {
    name: "Icon",
    props: {
      icon: String,
      height: String,
      width: String,
      iconColor: {
        type: String,
        default: 'currentColor'
      }
    },
    components: {
      Heart,
      FillHeart,
      Arrow,
      Chevron
    },
    computed: {
      view() {
        let view = {
          height: 14,
          width: 16
        };
        switch (this.icon) {
          case 'heart': {
            view.height = 14;
            view.width = 16;
            break;
          }
          case 'fill-heart': {
            view.height = 26;
            view.width = 29;
            break;
          }
          case 'arrow': {
            view.height = 20;
            view.width = 13;
            break;
          }

          case 'chevron': {
            view.height = 9;
            view.width = 5;
            break;
          }
        }

        return view;
      }
    },
  }
</script>

<style scoped>

</style>

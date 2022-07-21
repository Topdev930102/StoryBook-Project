<template>
<div>
   <b-badge class="corner-badge d-flex align-items-center" >
    <div class="px-1">{{label}}</div>
    <div><img src="../../assets/chart.png" width="24" height="24"></div>
    </b-badge>
</div>
</template>

<script>
import './smallcornerbutton.scss';
export default {
  name: 'BadgeButton',
  props: {
    label:{
      type:String,
      required:true
    },
  },

};
</script>

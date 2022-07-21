<template>
<div>
  <b-card>
    <div class="num-card">
      <div class="d-flex">
        <div class="px-2">
          <p class="num-card-label f-3">{{label}}</p>
          <div class="num-card-value f-11">{{value}}</div>
        </div>
        <div>
          <img src="../../assets/card.png" width="80" height="80">
        </div>
      </div>
    </div>
  </b-card>
</div>
</template>

<script>
import './numbercard.scss';
export default {
  name: 'CardElement',
  props:{
    value:{
      type:Number,
      required:true
    },
    label:{
      type:String,
      required:true
    }
    
  },
};
</script>

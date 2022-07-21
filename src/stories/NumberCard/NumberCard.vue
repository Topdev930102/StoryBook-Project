<template>
<div>
  <b-card>
    <div class="number-card">
      <div class="d-flex">
        <div>
          <p class="number-card-label">{{label}}</p>
          <div class="number-card-value">{{value}}</div>
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

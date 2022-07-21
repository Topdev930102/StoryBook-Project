<template>
<div>
  <b-card>
    <div class="snumber-card">
      <div class="d-flex">
        <div class="px-3">
          <div class="snumber-card-value f-6">{{value}}</div>
          <p class="snumber-card-label f-6">{{label}}</p>
        </div>
        <div>
          <img src="../../assets/scard.png" width="66" height="66">
        </div>
      </div>
    </div>
  </b-card>
</div>
</template>

<script>
import './snumbercard.scss';
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

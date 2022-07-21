<template>
<div>
  <b-card>
    <div class="number-card">
      <div class="d-flex">
        <div class="text-end">
         
          <p class="number-card-label">{{title}}</p>
          <div class="number-card-value">ريال{{value}}</div>
           <p class="number-card-label">{{label}}</p>
        </div>
        <div>
          <img src="../../assets/wcard.png" width="80" height="80">
        </div>
      </div>
    </div>
  </b-card>
</div>
</template>

<script>
import './wnumbercard.scss';
export default {
  name: 'CardElement',
  props:{
    value:{
      type:Number,
      required:true
    },
    title:{
      type:String,
      required:true
    },
    label:{
      type:String,
      required:true
    }
    
  },
};
</script>

<template>
<div>
  <b-card>
    <div class="wnumber-card">
      <div class="d-flex">
        <div class="text-end px-1">
          <p class="wnumber-card-label f-3">{{title}}</p>
          <div class="wnumber-card-value f-9">ريال{{value}}</div>
           <p class="wnumber-card-label f-2">{{label}}</p>
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

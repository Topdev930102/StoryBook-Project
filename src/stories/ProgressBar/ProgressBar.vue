<template>
<div>
  <div class="d-flex justify-content-between">
      <div>هذا الأسبوع</div>
      <div class="progress-value">{{value}}</div>
      <div :class="[status?'progress-active':'progress-disable']">100</div>
  </div>

  <b-progress :value="value" variant="info"></b-progress>
</div>
</template>

<script>
import './progressbar.scss';
export default {
  name: 'ProgressBar',
  props: {
    value:{
      type:Number,
      required:true
    },
    status:{
      type:Boolean,
      required:true
    }


    }
};
</script>

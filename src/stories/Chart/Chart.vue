<template>
<div>
  <b-card>
    <div class="chart-card">
    <div class="chart-header">
        <div class="text-end chart-title">{{title}}</div>
    </div>
    <div class="v-center">
       <chart-doughnut class='chart-color' :per="`${value}`" color="#09CED1" color-bg="#D7E1EF" text-size="40" color-fore="#09CED1" />
    </div>
    <div class="chart-footer">
      <div class="chart-item">
        <div>
        غير مؤكدين
        </div>
        <div class="chart-dot bg-grey">
        </div>
      </div>
      <div class="chart-item">
        <div>
          مؤكدين
        </div>
        <div class="chart-dot bg-sky">
        </div>
      </div>
    </div>
    </div>
  </b-card>
</div>
</template>

<script>
import './chart.scss';
import Vue from "vue";
import ChartDoughnut from 'vue-chart-doughnut';
Vue.component('chart-doughnut',ChartDoughnut);
export default {
  name: 'ChartElement',
  props:{
    value:{
      type:Number,
      required:true
    },
    title:{
      type:String,
      required:true
    }, 
  },
   data() {
      return {
        sections: [
          { label: 'Red section', value: 25, color: '#09CED1' },
        ]
      }
    },
  
};
</script>

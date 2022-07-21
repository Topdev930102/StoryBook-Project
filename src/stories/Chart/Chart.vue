<template>
<div>
  <b-card>
    <div class="chart-card h-center">
      <div class="chart-header">
        <div class="text-end chart-title">{{title}}</div>
      </div>
      <vc-donut  background="white" foreground="#F1F6FE"
    :size="156" unit="px" :thickness="15"
    :sections="sections" :total="100">
    <div class="chart-percent">{{value}}%</div>
    </vc-donut>
    <div class="chart-footer px-3">
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
import Vue from "vue";
import './chart.scss';
import Donut from "vue-css-donut-chart";
Vue.use(Donut);

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
    }
};
</script>

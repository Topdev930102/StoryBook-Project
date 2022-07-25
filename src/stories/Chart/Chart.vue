<template>
  <div class="chart-card-body">
    <b-card>
      <div class="chart-card">
        <div class="chart-header">
          <div class="text-end chart-title">{{ title }}</div>
        </div>
        <div class="chart-donut v-center">
          <div class="chart-percent">19%</div>
          <canvas id="myChart" width="156px" height="156px"></canvas>
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
import DonutChart from 'donut-chart-js';
export default {
  name: 'ChartElement',
  props: {
    value: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
  },
  mounted() {
    new DonutChart(document.getElementById('myChart'), {
      data: [
        { label: 'red', value: 19, color: '#09CED1' },
        { label: 'green', value: 81, color: '#F1F6FE' }
      ],
      holeSize: 0.9,
      animationSpeed: 0.5,
    });
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

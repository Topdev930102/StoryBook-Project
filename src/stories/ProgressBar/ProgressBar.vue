<template>
  <div class="progressbar-card" ref="progressbar">
    <div class="d-flex justify-content-between">
      <div class="percentage-limit" :class="[status ? 'percentage-limit-active' : 'percentage-limit-inactive']">500</div>
      <div class="percentage">{{ parseInt(500 * value / 100) }}</div>
      <div>المتعلمين النشطين</div>
    </div>
    <div class="progress-percent">
      <div class="progress-left">
      </div>
      <div class="progress-right">
      </div>
    </div>

  </div>
</template>

<script>
import './progressbar.scss';
export default {
  name: 'ProgressBar',
  props: {
    value: {
      type: Number,
      required: true
    },
    status: {
      type: Boolean,
      required: true
    },
  },
  mounted() {
    const leftElement = document.getElementsByClassName('progress-left');
    const rightElement = document.getElementsByClassName('progress-right');
    for(let i=0;i<leftElement.length;i++){
      leftElement[i].style.width = this.$refs.progressbar.clientWidth * (1 - this.value / 100) + 'px';
      rightElement[i].style.width = this.$refs.progressbar.clientWidth * this.value / 100 + 'px';
    }

    
  }
};
</script>

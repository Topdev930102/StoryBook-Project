<template>
  <div class="corner-badge-card">
    <div class="corner-badge d-flex align-items-center">
      <div class="px-1">{{ label }}</div>
      <div><img src="../../assets/chart.png" width="24" height="24"></div>
    </div>
  </div>
</template>

<script>
import './smallcornerbutton.scss';
export default {
  name: 'BadgeButton',
  props: {
    label: {
      type: String,
      required: true
    },
  },

};
</script>

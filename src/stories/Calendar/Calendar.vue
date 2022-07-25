<template>
  <div class="calendar-card d-flex align-items-center justify-content-between">
    <label v-if="active" class="calendar-mark f-1">{{ label }}</label>
    <span class="datepicker-toggle">
      <span class="datepicker-toggle-button">
      </span>
      <input type="date" class="datepicker-input" @change="selectDate">
    </span>
    <div class="calendar-date f-3" v-if="!active">التاريخ</div>
    <div class="calendar-date f-3" v-else>{{ value }}</div>
  </div>
</template>
<script>
import './calendar.scss';
export default {
  name: 'my-calendar',
  props: {
    label: {
      type: String
    }
  },
  data() {
    return {
      value: '',
      active: false
    }
  },
  mounted() {


  },
  methods: {
    selectDate($event) {
      this.value = $event.target.value;
      if (this.value) {
        this.active = true;
      }
      else {
        this.active = false;
      }
    }
  }
}
</script>

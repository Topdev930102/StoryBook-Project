<template>
  <div class="wnumber-card-body">
    <b-card>
      <div class="wnumber-card">
        <div class="d-flex">
          <div class="text-end px-1">
            <div class="wnumber-card-label f-3">{{ title }}</div>
            <div class="wnumber-card-value f-9">
              <label>ريال</label>
              {{ numberWithCommas(value) }}
            </div>
            <div class="wnumber-card-label f-2">{{ label }}</div>
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
  props: {
    value: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }

  },
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  }
};
</script>

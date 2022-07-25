<template>
  <div class="snumber-card-body">
    <b-card>
      <div class="snumber-card">
        <div class="d-flex">
          <div>
            <div class="snumber-card-value f-6">{{ value }}</div>
            <div class="snumber-card-label f-6">{{ label }}</div>
          </div>
          <div class="snumber-image">
            <img src="../../assets/scard.png" width="66" height="66">
          </div>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import './snumbercard.scss';
export default {
  name: 'CardElement',
  props: {
    value: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      required: true
    }

  },
};
</script>

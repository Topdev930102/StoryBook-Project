<template>
  <div class="button-card">
    <div v-if="type === 'secondary warning'">
      <b-button
        :class="`button-content secondary-warning-btn secondary-warning-${status} ${size} secondary-warning-f-color`"
        @click="onClick">
        <div class="d-flex">
          <div>{{ label }}</div>
          <div v-if="icon != 'none'" class="btn-icon p1-2 pt-1">
            <b-icon font-scale='0.9' :icon="`${icon}`" />
          </div>
        </div>

      </b-button>
    </div>
    <div v-else>
      <b-button :class="`button-content ${type}-btn ${type}-${status} ${size} ${type}-f-color`" @click="onClick">
        <div class="d-flex">
          <div>{{ label }}</div>
          <div v-if="icon != 'none'" class="btn-icon pl-2 pt-1">
            <b-icon font-scale='0.9' :icon="`${icon}`" />
          </div>
        </div>

      </b-button>

    </div>
  </div>
</template>

<script>
import './primarybutton.scss';
export default {
  name: 'my-avatar',
  props: {
    label: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'small',
      validator: function (value) {
        return ['xsmall', 'small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    status: {
      type: String,
      default: 'enabled',
      validator: function (value) {
        return ['enabled', 'hover', 'actived', 'disable'].indexOf(value) !== -1;
      },
    },
    type: {
      type: String,
      default: 'primary',
      validator: function (value) {
        return ['primary', 'secondary', 'warning', 'secondary warning'].indexOf(value) !== -1;
      },
    },
    icon: {
      type: String,
      default: 'none',
      validator: function (value) {
        return ['none', 'power', 'question', 'back', 'book', 'pen'].indexOf(value) !== -1;
      },
    },

  },
  methods: {
    onClick(e) {
      this.$emit('click', e);
    }

  }

};
</script>

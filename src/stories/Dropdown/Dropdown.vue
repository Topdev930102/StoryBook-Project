<template>

  <div>
    <div class="dropdown-card d-flex justify-content-between align-items-center px-3 py-4" :class="`dropdown-${status}`"
      @click="openDropdown">
      <b-icon v-if="!isopen" icon="chevron-down" />
      <b-icon v-if="isopen" icon="chevron-up" />
      <div>
        {{ value }}
      </div>
    </div>
    <div v-if='isopen' class="dropdown-items my-2">
      <div class="dropdown-item" v-for="item in items" @click="selectOption(item)">
        {{ item }}
      </div>
    </div>
  </div>

</template>
<script>
import './dropdown.scss';
export default {
  name: 'my-drop',
  props: {
    status: {
      type: String,
      default: 'default',
      validator: function (value) {
        return ["default", "hover", "disabled", "active"].indexOf(value) !== -1;
      },
    }
  },
  mounted() {
    if (this.status === 'active' || this.status === 'hover') {
      this.value = "placeholder";
    }
  },


  data() {
    return ({
      value: 'Option1',
      items: ['Option1', 'Option2', 'Option3'],
      isopen: false
    })

  },
  methods: {
    selectOption(item) {
      this.value = item;
      this.isopen = !this.isopen;
    },
    openDropdown() {
      this.isopen = !this.isopen;
    }


  }
}
</script>

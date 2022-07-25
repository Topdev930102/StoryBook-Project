<template>

  <div class="textfield">
    <div class="d-flex align-items-center">
      <input type="text" dir='rtl' v-model='value' placeholder="label" class="searchfield searchfield-default"
        @change="searchValue" :class="[!status ? 'search-active' : 'search-inactive']" />
      <div v-if="!status" class="search-icon">
        <b-icon icon="search" />
      </div>
      <div v-else class="search-cancel-icon">
        <b-icon icon="x" @click="Cancel" />
      </div>
    </div>
  </div>
</template>
<script>
import './search.scss';
export default {
  name: 'my-textfield',
  data() {
    return {
      status: false,
      value: ''
    }
  },
  methods: {
    Cancel() {
      this.status = !this.status;
      this.value = '';
    },
    searchValue(e) {
      if (this.value) {
        this.status = !this.status;
      }
    }
  }
}
</script>

<template>
  <div class="overflow-auto" dir="rtl">
    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
  </div>
</template>

<script>
import './pagination.scss';
export default {
  name: 'TabButton',
  props: {
  },
  data() {
    return {
      rows: 50,
      currentPage: 5,
      perPage: 1
    }
  }
};
</script>

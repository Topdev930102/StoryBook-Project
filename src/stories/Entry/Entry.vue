<template>

  <div class="entry-card">
    <div class="d-flex align-items-center justify-content-end my-3">
      <div class="d-flex align-items-center">
        <div class="fc-primary">
          <b-icon icon='pencil-square' @click="isActive" />
        </div>
        <div>مميزات دراسية</div>
      </div>
    </div>
    <div v-if="!active">
      <input type="text" class="entry" dir="rtl" placeholder="ادخل عنصر جديد" disabled>
    </div>
    <div v-else class="d-flex justify-content-between align-items-center">
      <div class="entry-icon">
        <b-icon icon="arrow-return-right" />
        اضغط Enter للإضافة
      </div>
      <input type="text" v-model="value" class="entry entry-active" dir="rtl" @keyup.enter="addItem" />
    </div>
    <div class="my-3">
      <div v-for="item in items" class="entry-item d-flex justify-content-between align-items-center py-2">
        <div v-if="!active">
          <b-icon icon="check-circle" />
        </div>
        <div v-else>
          <b-icon icon="book" />
        </div>
        <div>
          {{ item }}
          <b-icon icon="dash-circle" />
        </div>
      </div>
    </div>

  </div>

</template>
<script>
import './entry.scss';
export default {
  name: 'my-entry',
  props: {
  },
  mounted() {

  },
  data() {
    return ({
      active: false,
      items: ['شهادة معتمدة', 'تناقش مع طلاب الدورة', 'تواصل مباشر مع المعلم'],
      value: ''
    })
  },
  methods: {
    isActive() {
      this.active = !this.active;
    },
    addItem(event) {
      this.items.push(this.value);
      this.value = '';
    }
  }
}
</script>

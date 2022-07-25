<template>

  <div class="textfield">
    <div v-switch="status" class="textentry-card">
      <label :class="`textentry-label-${status}`">abc</label>
      <div class="entry-mark d-flex align-items-center">
        <b-icon icon="arrow-return-right" />
        <div>اضغط Enter للإضافة</div>
      </div>
      <input v-case="'default'" type="text" dir='rtl' placeholder="النطاقات (domains)"
        :class="`textentry textentry-${status}`" />
      <input v-case="'active'" type="text" dir='rtl' placeholder="label" :class="`textentry textentry-${status}`"
        @keyup.enter="addItem" />
      <input v-case="'placeholder'" :value="`${value}`" type="text" dir='rtl' placeholder="مثال: domain.com"
        :class="`textentry textentry-${status}`" @change="addItem" />
      <div class="textentry-footer d-flex justify-content-end">
        <div class="d-flex">
          <div v-for="item in items" class="textentry-item d-flex">
            <div class="item-cross" @click="deleteItem(item)">
              <b-icon icon="x" />
            </div>
            <div class="item-content d-flex align-items-center">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import './textentry.scss';
export default {
  name: 'my-textentry',
  props: {
    status: {
      type: String,
      default: 'default',
      validator: function (value) {
        return ["default", "active", "placeholder"].indexOf(value) !== -1;
      },
    }
  },
  data() {
    return ({
      value: '',
      items: ['kku.edu.sa', 'academi.com.sa']
    })

  },
  methods: {
    addItem(event) {
      this.items.push(event.target.value);
      this.value = '';
    },
    deleteItem(item) {
      const index = this.items.indexOf(item);
      if (index > -1) {
        this.items.splice(index, 1)
      }
    }
  }
}
</script>

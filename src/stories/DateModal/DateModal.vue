<template>
  <div class="date-card">
    <b-modal v-model="modalShow" class="date-modal" hide-header hide-backdrop hide-footer>
      <div class="date-card-title">
        <p class="text-center">إضافة موسم</p>
      </div>
      <div>
        <div class="py-3">
          <TextField :status="'default'" />
        </div>
        <div class="py-3">
          <Calendar :label="'start'" />
        </div>
        <div class="py-3">
          <Calendar :label="'end'" />
        </div>
      </div>
      <div class="d-flex justify-content-between py-2">
        <PrimaryButton type="primary" :label="'OK'" :size="'small'" :status="'enabled'" @click="onOK" />
        <PrimaryButton type="secondary" :label="'Cancel'" :size="'small'" :status="'enabled'" @click="onCancel" />
      </div>
    </b-modal>
  </div>
</template>

<script>
import './datemodal.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton.vue';
import TextField from '../TextField/TextField.vue';
import Calendar from '../Calendar/Calendar.vue';
export default {
  name: "my-modal",
  props: {},
  data() {
    return {
      modalShow: true,
      value: '',
      start_date: '',
      end_date: ''
    };
  },
  methods: {
    onOK() {
      this.modalShow = false;
    },
    onCancel() {
      this.modalShow = false;
    }


  },
  components: { PrimaryButton, TextField, Calendar }

};
</script>

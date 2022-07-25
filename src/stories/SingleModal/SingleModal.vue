<template>
  <div class="single-body">
    <b-modal v-model="modalShow" hide-header hide-backdrop hide-footer>
      <div class="d-flex justify-content-around align-items-center py-2">
        <img src="../../assets/person.svg" width="80" height="80" />
      </div>
      <div>
        <div class="smodal-title text-center f-5">هل ترغب في إلغاء اشتراك الطالب من الدورة</div>
        <div class="smodal-content text-center f-3">هذه خطوة تأكيدية لإلغاء اشتراك الطالب محمد سمير سعد من الدورة</div>
      </div>
      <div class="smodal-footer d-flex justify-content-around align-items-center py-2">
        <div>
          <PrimaryButton :type="'warning'" :label="'نعم، تأكيد'" :size="'small'" :status="'enabled'" @click="onOK" />
        </div>
        <div>
          <PrimaryButton :type="'secondary warning'" :label="'إلغاء'" :size="'small'" :status="'enabled'"
            @click="onCancel" />
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import './singlemodal.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton.vue';
export default {
  name: "my-modal",
  props: {},
  data() {
    return {
      modalShow: true
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
  components: { PrimaryButton }
};
</script>


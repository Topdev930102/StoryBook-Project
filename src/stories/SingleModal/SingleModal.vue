<template>
 <div>
  <b-modal v-model="modalShow" hide-header hide-backdrop hide-footer>

    <div class="d-flex justify-content-around align-items-center py-2">
      <img src="../../assets/person.svg" width="80" height="80"/>
    </div>
    <div>
      <p class="text-center f-5">هل ترغب في إلغاء اشتراك الطالب من الدورة</p>
      <p class="text-center f-3">هذه خطوة تأكيدية لإلغاء اشتراك الطالب محمد سمير سعد من الدورة</p>
    </div>
    <div class="d-flex justify-content-between align-items-center py-2">
      <PrimaryButton :type="'warning'" :label="'OK'" :size="'small'"  :status="'enabled'" @click="onOK"/>
      <PrimaryButton :type="'secondary warning'" :label="'Cancel'" :size="'small'" :status="'enabled'" @click="onCancel"/>
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
      onOK(){
        this.modalShow=false;
      },
      onCancel(){
        this.modalShow=false;
      }


    },
    components: { PrimaryButton }
};
</script>

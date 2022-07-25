<template>
  <div class="setting-row d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <div>
        <b-icon icon="trash" />
      </div>
      <div class="px-2">
        <PrimaryButton :type="'secondary'" :size="'xsmall'" :status="'enabled'" :label="'تعديل'" :icon="'pen'" />
      </div>
    </div>
    <div class="d-flex align-items-center">
      <div>
        الرئيسية
      </div>
      <div>
        <b-icon icon="text-left" />
      </div>
    </div>
  </div>
</template>
<script>
import './settingrow.scss';

import PrimaryButton from '../PrimaryButton/PrimaryButton.vue'

export default {
  name: 'MyRow',
  props: {
  },
  components: { PrimaryButton }
};
</script>

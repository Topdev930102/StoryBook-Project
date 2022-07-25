<template>
  <div>
    <div class="color-card d-flex justify-content-around">
      <label class="color-mark f-3">
        اللون الرئيسي
      </label>
      <div class="color-content f-3">
        <div>
          ادخل رقم اللون، مثال: #00d0d3
        </div>
        <div @click="selectColor">
          <img src="../../assets/color_picker.png" width="60" height="60" />
        </div>
        <input type="color" ref="colorpicker" class="color-picker" @change="previewColor" />
      </div>
    </div>
  </div>
</template>
<script>
import './color.scss';
export default {
  name: 'my-upload',
  data() {
    return {
      color: ''
    }
  },
  methods: {
    selectColor(e) {
      this.$refs.colorpicker.click();
    },
    previewColor(e) {
    }
  }
};
</script>

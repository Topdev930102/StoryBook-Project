<template>
  <div>
    <div v-if="type === 'Content'" class="table-row f-3">
      <div class="d-flex">
        <div class="px-2">
          <PrimaryButton type="primary" :label="'تعديل'" :size="'xsmall'" :status="'enabled'" :icon="'pen'" />
        </div>
        <div>
          <PrimaryButton type="secondary" :label="'تعديل'" :size="'xsmall'" :status="'enabled'" :icon="'book'"/>
        </div>
      </div>
      <div class="d-flex">
        <div class="d-flex">
          <div>
            لا يوجد مشتركين
          </div>
          <div>
            حسن مداوي
          </div>
        </div>
        <div class="d-flex px-2">
          <div>
            دورة
          </div>
          <div>
            <b-icon icon="person"></b-icon>
          </div>
        </div>
        <div class="d-flex">
          <ContentBadge :label="'غير منشور'" :status='false' />
          <div class="px-2">
            <RateBadge :rate="0" />
          </div>
          <div class="px-3">الخطة التجارية للمشاريع الصغيرة</div>
        </div>
      </div>
    </div>
    <div v-if="type === 'Teacher'" class="table-row f-3">
      <div class="d-flex">
        <div class="px-2">
          <PrimaryButton type="primary" :label="'تعديل'" :size="'xsmall'" :status="'enabled'" :icon="'pen'" />
        </div>
        <div>
          <PrimaryButton type="secondary" :label="'تعديل'" :size="'xsmall'" :status="'enabled'" :icon="'book'" />
        </div>
      </div>
      <div class="d-flex">
        <div>
          <div class="d-flex align-items-center">
            <ContentBadge :label="'غير منشور'" :status='false' />
            <div class="px-2">
              <UserBadge :status="true" />
            </div>
            <div class="px-3">الخطة التجارية للمشاريع الصغيرة</div>
          </div>
          <div class="text-end px-3">
            اخر ظهور : الخميس, 16 أبريل 2020
          </div>
        </div>
        <div>
          <Button :size="'large'" :status="true" />
        </div>
      </div>
    </div>
    <div v-if="type === 'Teacher Not Verified'" class="table-row f-3">
      <div class="d-flex">
        <div class="px-2">
          <PrimaryButton type="primary" :label="'تعديل'" :size="'xsmall'" :status="'enabled'" :icon="'pen'"/>
        </div>
        <div>
          <PrimaryButton type="secondary" :label="'تعديل'" :size="'xsmall'" :status="'enabled'" :icon="'book'" />
        </div>
      </div>
      <div>
        <div class="d-flex align-items-center">
          <div class="d-flex">
            <div class="px-2">
              <UserBadge :status="false" />
            </div>
            <div>
              <div class="text-end px-3">
                الخطة التجارية للمشاريع الصغيرة
              </div>
              <div class="text-end px-3">
                اخر ظهور : الخميس, 16 أبريل 2020
              </div>
            </div>
            <div>
              <Button :size="'large'" />
            </div>

          </div>

        </div>

      </div>

    </div>
    <div v-if="type === 'FAQs'" class="table-row f-3">
      <div class="d-flex align-items-center">
        <div class="px-2">
          <PrimaryButton type="primary" :label="'تعديل'" :size="'xsmall'" :status="'enabled'" :icon="'pen'"/>
        </div>
        <div class="row-toggle">
          <Toggle />
        </div>
      </div>
      <div class="d-flex">
        <div class="d-flex">
          <div>
            أهمية علم الاقتصاد…
          </div>
          <div>
            2/6/2012
            <b-icon icon="calendar">
              </b-icon>
          </div>
        </div>
        <div class="d-flex px-2">
          <div>
            حسن مداوي
          </div>
          <div>
            <b-icon icon="person"></b-icon>
          </div>
        </div>
        <div class="d-flex">
          <ContentBadge :label="'غير منشور'" :status='false' />
          <div class="px-3">الخطة التجارية للمشاريع الصغيرة</div>
        </div>
      </div>
    </div>
  </div>


</template>
<script>
import './tablerow.scss';
import ContentBadge from '../ContentBadge/ContentBadge.vue'
import RateBadge from '../RateBadge/RateBadge.vue'
import UserBadge from '../UserBadge/UserBadge.vue'
import PrimaryButton from '../PrimaryButton/PrimaryButton.vue'
import Button from '../Button/Button.vue'
import Toggle from '../Toggle/Toggle.vue';
export default {
  name: 'MyRow',
  props: {
    type: {
      type: String,
      default: 'Content',
      validator: function (value) {
        return ['Content', 'Teacher', 'Teacher Not Verified', 'FAQs'].indexOf(value) !== -1;
      },
    },
  },
  components: { ContentBadge, RateBadge, PrimaryButton, UserBadge, Button, Toggle }
};
</script>

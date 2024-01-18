<template>
  <view class="flex items-center justify-between bg-fff pr-20 pl-20 pt-10 pb-10" :class="$style['border']">
    <text class="fs-16">{{ title }}</text>
    <view class="flex-inline">
      <u-icon name="/static/image/system/icons/edit.png" size="24" class="mr-5" />
      <u-icon name="/static/image/system/icons/delete.png" size="24" />
    </view>
  </view>
</template>

<script lang="ts" setup>
interface TProps {
  title: string;
}
withDefaults(defineProps<TProps>(), {});
</script>

<style lang="scss" module>
.border {
  border-bottom: 1px solid $uni-border-color;
}
</style>

<template>
  <view :class="$style['recipe-card']">
    <u-image :src="image" width="320rpx" height="180rpx" radius="6px 6px 0 0" />
    <view class="flex items-center p-5">
      <u-image v-if="icon" :src="icon" width="32rpx" height="32rpx" />
      <text class="fs-14 ml-4">{{ title }}</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
interface TProps {
  icon?: string;
  image?: string;
  title: string;
}

withDefaults(defineProps<TProps>(), {});
</script>

<style lang="scss" module>
.recipe-card {
  margin-bottom: 30rpx;
  border-radius: $uni-border-radius-lg;
  border: 1px solid $uni-border-color;
}
</style>

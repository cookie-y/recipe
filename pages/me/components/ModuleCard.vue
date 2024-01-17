<template>
  <view :class="[$style['module-card'], { 'bg-fff': activated }]">
    <u-image :src="image" width="80rpx" height="80rpx" />
    <text class="mt-15">{{ title }}</text>
    <text v-if="activated" class="fs-12 c-999">{{ activatItem?.time }}到期</text>
  </view>
</template>

<script lang="ts" setup>
interface TProps {
  id: number;
  title: string;
  image: string;
}

const props = withDefaults(defineProps<TProps>(), {
  title: '',
  image: '',
});

const activatedList = [
  {
    id: 2,
    time: '2024-2-17',
  },
];

const activatItem = activatedList.find((value) => value.id === props.id);
const activated = Boolean(activatItem);
</script>

<style module lang="scss">
.module-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40rpx 0;
  width: 280rpx;
  height: 160rpx;
  border: 1px solid $uni-border-color;
  border-radius: $uni-border-radius-base;
}
</style>

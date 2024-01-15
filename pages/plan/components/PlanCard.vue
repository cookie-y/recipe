<template>
  <view :class="$style['plan-card']">
    <text class="font-bold">{{ title }}</text>
    <view class="p-10">
      <view v-for="item in recipes" :key="item.id" class="flex items-center">
        <u-image v-if="item.icon" :src="item.icon" width="48rpx" height="48rpx" />
        <text>{{ item.name }}</text>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { type TBaseRecipe } from '@/types/object/recipe';

interface TProps {
  title: string;
  recipes?: TBaseRecipe[];
}
withDefaults(defineProps<TProps>(), {
  title: '标题',
  recipes: () => [
    {
      id: 1,
      name: '三明治',
      icon: '/static/image/user/icons/coffee.png',
    },
  ],
});
</script>
<style lang="scss" module>
.plan-card {
  margin: 40rpx;
  padding: 20rpx;
  height: 240rpx;
  border-radius: $uni-border-radius-lg;
  background-color: #fff;
}
</style>

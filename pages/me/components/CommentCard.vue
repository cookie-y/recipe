<template>
  <view class="flex p-20 bg-fff rounded-6 mb-15">
    <u-image :src="avatar" width="80rpx" height="80rpx" />
    <view class="flex flex-col ml-10">
      <text class="fs-14">{{ username }}</text>
      <text class="mt-25 fs-16">{{ title }}</text>
      <u-text :text="content" lines="5" size="14" color="#333" margin="10rpx 0 0" />
      <view class="mt-5">
        <text class="fs-12 c-999">{{ time }}</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
interface TProps {
  avatar: string;
  username: string;
  title: string;
  content: string;
  time: string;
}
withDefaults(defineProps<TProps>(), {});
</script>

<style></style>

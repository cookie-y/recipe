<template>
  <view>
    <StatusBar />
    <view class="flex justify-between mt-5 mr-20 ml-20">
      <u-icon name="arrow-leftward" size="24" />
      <text class="fs-20">{{ title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
interface TProps {
  title?: string;
}
defineProps<TProps>();
</script>

<style></style>

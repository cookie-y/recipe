<template>
  <view>
    <StatusBar />
    <view class="flex justify-between mt-5 mr-20 ml-20">
      <u-icon name="arrow-leftward" size="24" @click="handleBack" />
      <text class="fs-20">{{ title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { handleBack } from '@/utils/common';

interface TProps {
  title?: string;
}
defineProps<TProps>();
</script>

<style></style>

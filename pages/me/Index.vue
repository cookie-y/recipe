<template>
  <view class="ml-20 mr-10">
    <StatusBar />
    <!-- 操作区 -->
    <view class="flex justify-between mt-5">
      <u-icon name="arrow-leftward" size="24" @click="handleBack" />
      <u-icon name="/static/image/system/icons/config.png" size="24" />
    </view>

    <!-- 账号卡片 -->
    <view class="flex items-center p-50 bg-fff mt-10 rounded-6">
      <u-image width="120rpx" height="120rpx" src="/static/image/user/recipes/lemon_tea.png" shape="circle" />
      <text class="ml-20 fs-16">曲奇</text>
    </view>

    <!-- 模块 -->
    <u-cell-group :border="false" class="bg-fff mt-20 rounded-4">
      <u-cell
        icon="/static/image/system/icons/box.png"
        title="装备"
        label="2/4"
        isLink
        url="/pages/me/Backpack"
        :border="false"
        :iconStyle="{ width: '36px', height: '36px' }"
      />
    </u-cell-group>

    <!-- 其他功能 -->
    <u-grid :border="false" col="4" class="mt-40">
      <u-grid-item @click="routeTo('/pages/module/ModuleSort')">
        <u-icon name="/static/image/system/icons/sort.png" size="30" />
        <text>我的分类</text>
      </u-grid-item>
      <u-grid-item @click="routeTo('/pages/me/ContactUs')">
        <u-icon name="/static/image/system/icons/comment.png" size="30" />
        <text class="grid-text">联系我们</text>
      </u-grid-item>
    </u-grid>
  </view>
</template>

<script lang="ts" setup>
import { routeTo, handleBack } from '@/utils/common';
</script>

<style></style>

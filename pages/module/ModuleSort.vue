<template>
  <view>
    <Navigation title="分类" />
    <view class="flex-inline ml-20 mt-10">
      <u-button size="small" icon="plus" color="#232946" iconColor="#fff">添加</u-button>
    </view>
    <view class="mt-15">
      <SortItem v-for="item in sortList" :key="item.id" :title="item.title" />
    </view>
  </view>
</template>

<script lang="ts" setup>
import SortItem from './components/SortItem.vue';

const sortList = [
  {
    id: 1,
    title: '主食',
  },
  {
    id: 2,
    title: '饮料',
  },
  {
    id: 3,
    title: '甜品',
  },
];
</script>

<style></style>

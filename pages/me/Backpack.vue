<template>
  <view>
    <Navigation title="装备" />
    <view class="flex justify-between m-20">
      <ModuleCard v-for="item in moduleList" :key="item.id" :id="item.id" :title="item.title" :image="item.image" />
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ModuleCard from './components/ModuleCard.vue';

const moduleList = ref([
  {
    id: 1,
    title: '自定义分类',
    image: '/static/image/system/icons/module_sort.png',
  },
  {
    id: 2,
    title: '菜谱无线添加',
    image: '/static/image/system/icons/recipe.png',
  },
]);
</script>

<style></style>

<template>
  <view>
    <StatusBar />
    <view class="flex justify-between items-center m-20">
      <view class="flex">
        <u-button size="small" icon="list" color="#232946" iconColor="#fff" class="mr-5">全部</u-button>
        <u-button size="small" icon="plus" color="#232946" iconColor="#fff">添加</u-button>
      </view>
      <text class="fs-20 font-bold">我的食谱</text>
    </view>
    <view class="m-20 flex flex-wrap justify-between">
      <RecipeCard v-for="item in data" :key="item.id" :image="item.image" :icon="item.icon" :title="item.title" />
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import RecipeCard from './components/RecipeCard.vue';

const data = ref([
  {
    id: 1,
    image: '/static/image/user/recipes/japanese_cuisine.png',
    icon: '/static/image/user/icons/main_course.png',
    title: '日式套餐',
  },
  {
    id: 2,
    image: '/static/image/user/recipes/strawberry_juice.png',
    icon: '/static/image/user/icons/drink.png',
    title: '草莓汁',
  },
  {
    id: 2,
    image: '/static/image/user/recipes/strawberry_juice.png',
    icon: '/static/image/user/icons/drink.png',
    title: '草莓汁',
  },
]);
</script>

<style lang="scss" module></style>

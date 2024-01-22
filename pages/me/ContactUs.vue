<template>
  <view class="relative">
    <Navigation title="联系我们" />
    <view class="mt-20">
      <CommentCard
        v-for="item in commentList"
        :key="item.id"
        :username="item.username"
        :title="item.title"
        :avatar="item.image"
        :content="item.content"
        :time="item.time"
      />
    </view>

    <u-button color="#232946" :class="$style['leave-comment']" @click="routeTo('/pages/me/PostComment')"
      >我要留言</u-button
    >
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import CommentCard from './components/CommentCard.vue';
import { routeTo } from '@/utils/common';

const commentList = ref([
  {
    id: 1,
    username: '曲奇',
    image: '/static/image/user/recipes/bread.png',
    title: '标题标题',
    content: '内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容',
    time: '2024-1-18 09:55',
  },
  {
    id: 2,
    username: '曲奇',
    image: '/static/image/user/recipes/bread.png',
    title: '标题标题',
    content: '内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容',
    time: '2024-1-18 09:55',
  },
  {
    id: 3,
    username: '曲奇',
    image: '/static/image/user/recipes/bread.png',
    title: '标题标题',
    content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
    time: '2024-1-18 09:55',
  },
  {
    id: 3,
    username: '曲奇',
    image: '/static/image/user/recipes/bread.png',
    title: '标题标题',
    content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
    time: '2024-1-18 09:55',
  },
]);
</script>

<style module lang="scss">
.leave-comment {
  position: fixed;
  bottom: 70px;
  left: calc(50% - 60px);
  width: 120px;
}
</style>

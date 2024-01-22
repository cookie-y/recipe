<template>
  <view>
    <Navigation title="三杯鱿鱼" />
    <view class="flex mt-20 ml-20 mr-20 justify-between items-center">
      <view :class="$style.ingredients">
        <view class="flex flex-col w-150">
          <view class="mb-20 flex flex-col">
            <text class="fs-16 mb-10">食材</text>
            <text v-for="(item, index) in recipeDetail.ingredients" :key="index" class="fs-14 mb-2">{{ item }}</text>
          </view>
          <view class="flex flex-col">
            <text class="fs-16 mb-10">提醒事项</text>
            <text class="fs-14">{{ recipeDetail.tips }}</text>
          </view>
        </view>
      </view>
      <u-image width="240rpx" height="240rpx" :src="recipeDetail.image" radius="4rpx" />
    </view>
    <view class="flex flex-col ml-20 mr-20 mt-40 mb-10">
      <view v-for="(item, index) in recipeDetail.instructions" class="mb-20 flex">
				<view>{{ index + 1 }}.&nbsp;</view>
				<text>{{ item }}</text>
			</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const recipeDetail = ref({
  ingredients: ['鱿鱼', '蒜', '姜', '红辣椒'],
  tips: '注意注意注意注意',
  instructions: [
    '把鱿鱼表面清洗干净，切成圈备用',
    '电饭锅里加麻油放姜片和蒜瓣，按下煮饭键爆香',
    '蒜变黄后，下鱿鱼圈，充分拌匀后，盖上盖子后，继续煮10分钟',
  ],
  image: '/static/image/user/recipes/japanese_cuisine.png',
});
</script>

<style lang="scss" module>
.ingredients {
  padding: 10rpx;
  border: 2px dashed $uni-border-color;
  border-radius: 4px;
  background-color: #fff;
}
</style>

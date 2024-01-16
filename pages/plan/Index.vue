<template>
  <view>
    <view class="bg-fff">
      <view :class="$style.header">
        <u-image
          src="/static/image/user/recipes/lemon_tea.png"
          width="120rpx"
          height="120rpx"
          shape="circle"
          :class="$style.avatar"
          @click="
            uni.navigateTo({
              url: '/pages/me/Index',
            })
          "
        />
      </view>
      <view class="flex justify-between mt-5">
        <u-text v-for="(item, index) in week" :key="index" :text="item" align="center" bold />
      </view>
      <view class="mt-5">
        <scroll-view class="truncate w-full" scroll-x>
          <view class="inline-block flex justify-between">
            <u-text v-for="item in datesInWeek" :key="`date-${item}`" :text="item" align="center" lineHeight="36" />
          </view>
        </scroll-view>
      </view>
    </view>
    <PlanCard title="早餐" />
    <PlanCard title="中餐" />
    <PlanCard title="晚餐" />
  </view>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import PlanCard from './components/PlanCard.vue';

const week: string[] = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

// 设置本地化为中文
dayjs.locale('zh-cn');

// 获取当前日期
const currentDate = dayjs();

// 生成当前日期所在周的每一天的数组
const datesInWeek: string[] = [];
for (let i = 0; i < 7; i++) {
  const date = currentDate.add(i, 'days').format('DD');
  datesInWeek.push(date);
}
</script>
<style lang="scss" module>
.header {
  position: relative;
  width: 750rpx;
  height: 380rpx;
  background-image: url('/static/image/system/images/food.png');
  background-position: center center;
  background-size: cover;
}
.avatar {
  position: absolute;
  top: calc(36rpx + var(--status-bar-height));
  left: 80rpx;
}
</style>

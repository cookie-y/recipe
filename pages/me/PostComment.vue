<template>
  <view>
    <Navigation title="我要留言" />

    <u-form class="m-20">
      <u-form-item label="标题">
        <u-input class="bg-fff border" placeholder="请输入标题" border="none" :customStyle="{ padding: '9px' }" />
      </u-form-item>
      <u-form-item label="内容">
        <u--textarea placeholder="请输入内容" border="none" class="border" />
      </u-form-item>
    </u-form>
    <view class="flex justify-between">
      <u-button type="primary" class="w-150">取消</u-button>
      <u-button color="#232946" class="w-150">发布</u-button>
    </view>
  </view>
</template>

<script></script>

<style></style>

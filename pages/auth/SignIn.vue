<template>
  <view class="content">
    <u-image :show-loading="true" src="/static/image/system/images/cooking.png" width="750rpx" height="800rpx" />
    <u-form labelWidth="70" errorType="toast" class="m-20">
      <u-form-item label="手机号">
        <u-input placeholder="请输入手机号" class="bg-fff h-34" />
      </u-form-item>
      <u-form-item label="验证码">
        <u-input placeholder="请输入验证码" class="bg-fff h-34">
          <template #suffix>
            <u-code seconds="60" ref="uCodeRef" />
            <u-button type="primary" size="small">获取验证码</u-button>
          </template>
        </u-input>
      </u-form-item>
      <u-form-item>
        <u-checkbox-group placement="column">
          <u-checkbox :customStyle="{ marginBottom: '8px' }" label="" name="" />
        </u-checkbox-group>
        <view class="flex-inline">
          <text>同意</text>
          <u-text text="《用户协议》" color="#4072B6" />
          <text>以及</text>
          <u-text text="《隐私协议》" color="#4072B6" />
        </view>
      </u-form-item>
    </u-form>
    <u-button color="#232946" shape="circle" size="large">登录</u-button>
    <view class="flex items-center justify-center mt-30">
      <u-line length="100rpx" color="#000" />
      <text>其他登录方式</text>
      <u-line length="100rpx" color="#000" />
    </view>
    <view class="flex justify-center mt-20">
      <u-image src="/static/image/system/icons/qq.png" width="100rpx" height="100rpx" class="mr-20" />
      <u-image src="/static/image/system/icons/we_chat.png" width="100rpx" height="100rpx" />
    </view>
  </view>
</template>

<script lang="ts"></script>

<style lang="scss" module></style>

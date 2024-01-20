<template>
  <view>
    <Navigation title="新增菜谱" />

    <u-form class="m-20">
      <u-form-item label="名称" required>
        <u-input class="bg-fff border" placeholder="请输入名称" border="none" :customStyle="{ padding: '9px' }" />
      </u-form-item>
      <u-form-item label="分类">
        <u-tag text="无分类" />
      </u-form-item>
      <u-form-item label="图标">
        <u-icon name="plus" size="30" class="c-121629 bg-fff border rounded-2" />
      </u-form-item>
      <u-form-item label="图片">
        <u-upload :maxCount="1">
          <view class="bg-fff border w-160 h-90 flex items-center justify-center rounded-4">
            <u-icon name="plus" size="50" class="c-121629" />
          </view>
        </u-upload>
      </u-form-item>
      <u-form-item label="食材">
        <view class="flex items-center">
					<u-input class="bg-fff border" placeholder="食材名称" border="none" :customStyle="{ padding: '9px' }" />
					<u-input class="bg-fff border" placeholder="食材用量" border="none" :customStyle="{ padding: '9px' }" />
				  <u-icon name="plus-circle" size="24" class="c-121629 ml-5" />
				</view>
      </u-form-item>
			<view class="flex">
				<u-tag text="鱿鱼-2只" plain bgColor="#fff" closable></u-tag>
				<u-tag text="红辣椒" plain bgColor="#fff" closable></u-tag>
			</view>
      <u-form-item label="步骤">
          <view class="flex ">
						<u--textarea
						  class="bg-fff border w-240"
						  placeholder="步骤..."
						  border="none"
						  :customStyle="{ padding: '9px' }"
						/>
				  <u-icon name="plus-circle" size="24" class="c-121629 ml-5" />
					</view>
      </u-form-item>
			<view class="flex justify-between">
				<text class="fs-14">1. 电饭锅里加麻油，放姜片和蒜瓣，按下煮饭键爆香，大概3分钟，把蒜煎到金黄</text>
				<view class="flex items-center ml-5">
				  <u-icon name="trash" size="20" class="c-121629" />
				</view>
			</view>
      <u-form-item label="备注">
        <u--textarea placeholder="请输入备注" border="none" class="border" />
      </u-form-item>
    </u-form>
    <view class="flex justify-between">
      <u-button type="primary" class="w-150" text="取消" />
      <u-button color="#232946" class="w-150" text="发布" />
    </view>
  </view>
</template>

<script></script>

<style></style>

export const routeTo = (url: string) => {
  uni.navigateTo({ url });
};

export const handleBack = () => {
  uni.navigateBack();
};

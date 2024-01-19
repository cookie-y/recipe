<script lang="ts">
export default {
  onLaunch: function () {
    console.log('App Launch');
  },
  onShow: function () {
    console.log('App Show');
  },
  onHide: function () {
    console.log('App Hide');
  },
};
</script>

<style lang="scss">
@import '@/uni_modules/uview-plus/index.scss';
@import '/static/css/common.scss';
@import '/static/css/iconfont.css';

body {
  background-color: #f5f5f5;
}
</style>

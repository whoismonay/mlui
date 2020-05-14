<template>
  <div :class="['app-progress__bar',{ 'app-progress__bar--radius': radius }]">
    <div class="app-progress__inner-bar" :style="{width: percent + '%'}"></div>
  </div>
</template>

<script>
export default {
  name: "a-progress",
  props: {
    percent: {
      type: Number,
      default: 0
    },
    radius: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="less" scoped>
@import "~styles/variable.less";
.app-progress__bar {
  background-color: @progress-bg-color;
  height: @progress-height;
  &.app-progress__bar--radius,
  &.app-progress__bar--radius .app-progress__inner-bar{
    border-radius: 10000px;
  }
}

.app-progress__inner-bar {
  width: 0;
  height: 100%;
  background-color: @progress-color;
  transition: width 1s;
}
</style>

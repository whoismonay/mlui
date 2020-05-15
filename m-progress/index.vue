<template>
  <div :class="['mlui-progress__bar',{ 'mlui-progress__bar--radius': radius }]">
    <div class="mlui-progress__inner-bar" :style="{width: percent + '%'}"></div>
  </div>
</template>

<script>
export default {
  name: "m-progress",
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
.mlui-progress__bar {
  background-color: @progress-bg-color;
  height: @progress-height;
  &.mlui-progress__bar--radius,
  &.mlui-progress__bar--radius .mlui-progress__inner-bar{
    border-radius: 10000px;
  }
}

.mlui-progress__inner-bar {
  width: 0;
  height: 100%;
  background-color: @progress-color;
  transition: width 1s;
}
</style>

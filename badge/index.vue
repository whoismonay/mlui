<template>
  <span
    v-text="text"
    :class="['app-badge', {'app-badge-dot': typeof text === 'undefined', 'app-badge-single': typeof text !== 'undefined' && text.toString().length === 1}]"
  ></span>
</template>
<script>
export default {
  name: "badge",
  props: {
    text: [String, Number]
  }
};
</script>
<style lang="less" scoped>
@import "~styles/variable.less";

.app-badge {
  display: inline-block;
  text-align: center;
  background: @badge-bg-color;
  color: #fff;
  font-size: 12px;
  height: 16px;
  line-height: 16px;
  border-radius: 8px;
  padding: 0 6px;
  background-clip: padding-box;
  vertical-align: middle;
}
.app-badge-single {
  padding: 0;
  width: 16px;
}
.app-badge-dot {
  height: auto;
  padding: 5px;
}
</style>
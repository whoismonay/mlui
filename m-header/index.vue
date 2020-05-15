<template>
  <div class="header-box">
    <div class="left-box">
      <slot name="leftButt">
        <span v-if="showBack" @click="$router.back()" class="icon-back"></span>
      </slot>
    </div>
    <div class="header-tittle">
      <span>{{tittle}}</span>
    </div>
    <div class="right-box">
      <div v-if="showPhone" class="icon_phone"></div>
      <slot name="rightButt">
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "m-header",
  data() {
    return {};
  },
  props: {
    tittle: {
      type: String,
      default: "标题"
    },
    showBack: {
      type: Boolean,
      default: true
    },
    showPhone: {
      type: Boolean,
      default: true
    }
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
@import "~styles/base";
.header-box {
  width: 100%;
  height: 80px;
  line-height: 80px;
  background-color: @base-color;
  color: @base-header-color;
  font-size: @base-header-size * 1px;
  display: flex;
  z-index: 1;
  .left-box {
    position: relative;
    flex: 1;
    .icon-back {
      position: absolute;
      display: inline-block;
      width: 80px;
      height: 80px;
      left: 0;
      top: 0;
      background: center / 18px 31px no-repeat;
      background-image: url("~assets/icons/back@3x.png");
    }
  }
  .header-tittle {
    flex: 3;
    font-weight: Bold;
  }
  .right-box {
    position: relative;
    flex: 1;
  }
  .icon_phone {
    width: 80px;
    height: 80px;
    right: 0;
    position: absolute;
    background-size: 32.2px 44.1px;
  }
}
</style>

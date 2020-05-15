<template>
  <div class="mlui-video">
    <video
      ref="player"
      class="mlui-video__player"
      :controls="nativeControls"
      :src="videoSrc"
      preload
      x5-video-player-type="h5-page"
      x-webkit-airplay
      playsinline
      x5-playsinline
      webkit-playsinline
    >您当前的设备不支持HTML5 Video！</video>
    <div class="c">456654</div>
  </div>
</template>

<script>
export default {
  name: "m-video",
  props: {
    nativeControls: {
      // 是否显示原生默认的控制条
      type: Boolean,
      default: true
    },
    videoType: {
      // 视频格式
      type: String,
      default: "MP4"
    },
    videoSrc: {
      // 视频链接
      type: String
    }
  },
  data() {
    return {
      flvPlayer: null,
      player: null
    };
  },
  mounted() {
    this.player = this.$refs.player;
    if (window.flvjs && window.flvjs.isSupported()) {
    }
  }
};
</script>

<style lang="less" scoped>
@import "~styles/variable.less";
.c {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ccc;
  color: #fff;
  z-index: 111111;
}
.mlui-video,
.mlui-video__player {
  width: 100%;
  height: auto;
}
</style>

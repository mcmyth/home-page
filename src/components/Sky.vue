<template>
  <label>
    <input type="checkbox" disabled/>
    <div class="scene">
      <div class="allstars">
        <div v-for="(item, index) in 30" :key="index" :class="'star' + index"></div>
      </div>
      <svg class="extras" width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          <radialGradient id="comet-gradient" cx="0" cy=".5" r="0.5">
            <stop offset="0%" stop-color="rgba(255,255,255,.8)"></stop>
            <stop offset="100%" stop-color="rgba(255,255,255,0)"></stop>
          </radialGradient>
        </defs>
        <g transform="rotate(-135)">
          <ellipse class="comet comet-a" fill="url(#comet-gradient)" cx="0" cy="0" rx="150" ry="2"></ellipse>
        </g>
        <g transform="rotate(20)">
          <ellipse class="comet comet-b" fill="url(#comet-gradient)" cx="100%" cy="0" rx="150" ry="2"></ellipse>
        </g>
        <g transform="rotate(300)">
          <ellipse class="comet comet-c" fill="url(#comet-gradient)" cx="40%" cy="100%" rx="150" ry="2"></ellipse>
        </g>
      </svg>
    </div>
  </label>
</template>

<script>
export default {
  name: 'Sky'
}
</script>

<style scoped lang="sass">
//一整條從白天到晚上的背景顏色
$sceneGradient: linear-gradient(#1D2B49,#1A45A0,#91cdff,#fff)

//設定Mixins
=size($w,$h:$w,$bdrs:0)
  width: $w
  height: $h
  border-radius: $bdrs

=abpos($l:initial,$t:initial)
  position: absolute
  left: $l
  top: $t
label
  position: fixed
  left: 0
  top: 0
  z-index: 0
.scene
  width: 100vw
  height: 100vh
  overflow: hidden
  background: $sceneGradient
  transition: 2s background
  background-size: 100% 300%
  box-shadow: 0px 0px 30px rgba(black,0.3)

//所有星星～
.allstars
  //外層容器撐滿整個框框
  +size(100%)
  +abpos(0,0)
  transition: 2s
  //星星從原本位置偏移落下的動畫，從右上到左下
  @keyframes falling
    0%,100%
      opacity: 0
    70%
      opacity: 1
    0%
      transform: translate(100px,0px)
    100%
      transform: translate(0px,200px)

  //以star開頭的為星星
  [class^='star']
    +size(3px,3px,50%)
    background-color: #fff
    animation: falling 2s infinite

  //產生30顆星星不同的偏移位置跟動畫delay
  @for $i from 0 through 30
    .star#{$i}
      $posX: random(100)*1%
      $posY: random(80)*-1% + 50%
      +abpos($posX,$posY)
      animation-delay: $i*-0.1s

input:checked+.scene
  background-position: 0 100%
  .allstars
    opacity: 0

input
  display: none

// 流星掠过动画
.comet
  transform-origin: center center
  animation: comet 10s linear infinite
@media screen and (max-width: 780px)
  .comet-c
    cx: 40%
    cy: 30%
  .comet-b
    cy: 35%
    cx: 150%
@keyframes comet
  0%, 40%
    transform: translateX(0)
    opacity: 0
  50%
    opacity: 1
  60%, 100%
    transform: translateX(-100vmax)
    opacity: 0
.comet-b
    animation-delay: -3.3s
.comet-c
    animation-delay: -5s
</style>

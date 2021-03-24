<template>
<div class="image-converter">
  <div class="wrap">
    <div class="control">
      <div @click="$refs.fileList.click()" class="btn upload_btn">
        选择图片
      </div>
      <div class="select">
        <select v-model="format" ref="format">
          <option v-for="(item, index) in formatList" :key="index" :value="index">{{ item }}格式</option>
        </select>
      </div>
      <div class="btn" id="start" @click="getImg">开始转换</div>
      <a @click="downloadFile($event)" href="javascript:void(0)" class="btn download" id="download">下载图片</a>
    </div>
    <div class="upload_tips">
      <div v-show="imgURL && !filename">
        <img id="imgShow" alt="preview"  :src="imgURL"/>
      </div>
      <input @change="fileChange($event)" type="file" ref="fileList"/><span v-if="!(imgURL && !filename)">{{ filename ? filename : '拖拽或选择文件上传...'}}</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ImageConverter',
  data () {
    return {
      filename: undefined,
      formatList: ['png', 'jpeg', 'webp'],
      format: 0,
      imgURL: undefined
    }
  },
  methods: {
    imgToCanvas (image) {
      const canvas = document.createElement('canvas')
      canvas.width = image.width
      canvas.height = image.height
      canvas.getContext('2d').drawImage(image, 0, 0)
      return canvas
    },
    getImg () {
      const imgFile = new FileReader()
      try {
        imgFile.onload = e => {
          const image = new Image()
          image.src = e.target.result // base64数据
          image.onload = () => {
            this.imgURL = this.imgToCanvas(image).toDataURL(`image/${this.formatList[this.format]}`)
            this.filename = undefined
          }
        }
        imgFile.readAsDataURL(this.$refs.fileList.files[0])
      } catch (e) {
        alert('请上传图片！' + e)
      }
    },
    fileChange (e) {
      const file = e.target.files || e.dataTransfer.files
      if (!file.length) return
      console.log(file[0])
      if (/^image/.test(file[0].type)) {
        this.filename = file[0].name
      } else {
        alert('请上传正确图片格式!')
      }
    },
    downloadFile (e) {
      if (this.imgURL) {
        e.target.setAttribute('href', this.imgURL)
        e.target.setAttribute('download', new Date().getTime())
      }
    }
  }
}
</script>

<style scoped lang="sass">
.control
  display: flex
  align-items: center
  text-align: center
  margin-bottom: 20px
  justify-content: center
  flex-wrap: wrap
  div, input
    margin: 10px

.btn
  position: relative
  display: flex
  align-items: center
  justify-content: center
  width: 80px
  height: 30px
  border-radius: 5px
  font-size: 12px
  color: #fff
  background: #0eaee2
  cursor: pointer

.download
  text-decoration: none

.upload_btn input
  opacity: 0
  pointer-events: none

.select
  margin-right: 20px
  width: 80px
  height: 30px
  padding: 0 5px
  border-radius: 5px
  border: 1px solid #ccc

select
  height: 100%
  outline: none
  border: none
  background: transparent

.img_name
  min-width: 100px
  margin-right: 20px
  text-overflow: ellipsis
  max-width: 30px
  overflow: hidden
  white-space: nowrap

.wrap
  text-align: center
  width: 100%
  max-width: 600px
  margin: 0 auto

.upload_tips
  width: 100%
  max-width: 250px
  height: 250px
  background-color: #dddddd
  margin: 0 auto
  display: flex
  align-items: center
  justify-content: center
  border-radius: 10px
  user-select: none
  overflow: hidden
  position: relative
  img
    max-width: 100%
    margin: 0 auto
  span
    word-break: break-word
    width: 90%
    margin: 0 auto
  input
    position: absolute
    opacity: 0
    left: 0
    top: 0
    width: 100%
    height: 100%
    display: block
</style>

<template>
<div class="image-converter">
  <div class="wrap">
    <div class="control">
      <div class="btn upload_btn">
        选择图片<input @change="fileChange($event)" type="file" ref="fileList"/>
      </div>
      <p v-show="filename" class="img_name">{{ filename }}</p>
      <div class="select">
        <select v-model="format" ref="format">
          <option v-for="(item, index) in formatList" :key="index" :value="index">{{ item }}格式</option>
        </select>
      </div>
      <div class="btn" id="start" @click="getImg">开始转换</div>
      <a @click="downloadFile($event)" href="javascript:void(0)" class="btn download" id="download">下载图片</a>
    </div>
    <div v-show="imgURL">
      预览：<br/>
      <img id="imgShow" alt="preview"  :src="imgURL"/>
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

<style scoped>
.control {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
}
.btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 30px;
  margin-right: 20px;
  border-radius: 5px;
  font-size: 12px;
  color: #fff;
  background: #0eaee2;
  cursor: pointer;
}
.download {
  text-decoration: none;
}
.upload_btn input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  cursor: pointer;
}
.select {
  margin-right: 20px;
  width: 80px;
  height: 30px;
  padding: 0 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
select {
  height: 100%;
  outline: none;
  border: none;
  background: transparent;
}
.img_name {
  min-width: 100px;
  margin-right: 20px;
}
p {
  margin: 5px 0;
  font-size: 14px;
}

</style>

<template>
<div id="error-page">
  <div id="container">
    <div id="main">
      <div class="wrapper">
        <div id="code">404</div>
        <div id="message">Page Not Found</div>
        <div id="url">{{ currentURL }}</div>
        <span class="line"></span>
      </div>
      <div class="wrapper">
        <div id="tips">
          <div id="help">
            <ul>
              <li>该内容可能还没有发布</li>
              <li>该内容可能不存在</li>
            </ul>
          </div>
        </div>
        <button id="back" @click="back">返回上一页</button>
      </div>
    </div>
  </div>
  <div id="footer">
    Copyright © {{ new Date().getFullYear() }} by MC Myth. All rights reserved.
  </div>
</div>
</template>

<script>
export default {
  name: 'Error404',
  data() {
    return {
      currentURL: ''
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  },
  created() {
    this.currentURL = window.location.href
  }
}
</script>

<style scoped>
#error-page {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F8F9FA;
  font-size: 15px;
  color: #555;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-size: cover;
}

a, a:visited {
  color: #4285F4;
  text-decoration: none;
  cursor: pointer;
}

a:hover {
  text-decoration: underline;
}

#container {
  width: 90%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#container #main {
  margin: 20px 0;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
}

#container button {
  border: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px;
  margin: 15px 0;
  background-color: transparent;
  transition: all .3s ease-in-out;
  outline: none;
}

#container #back {
  background-color: #4285F4;
  color: white;
  float: right;
}

.wrapper {
  max-width: 400px;
  margin: 0 auto;
  padding: 0 20px;
  width: 90%;
  box-sizing: border-box;
}

.line {
  display: block;
  width: 95%;
  height: 1px;
  margin: 10px auto;
  background-color: #c6c6c6;
}

.wrapper #code {
  text-align: center;
  font-size: 2.5rem;
}

.wrapper #message {
  text-align: center;
  font-size: 1.2rem;
  color: #888888;
}

.wrapper #url {
  color: #b0b0b0;
  text-align: center;
  margin-top: 10px;
  word-break: break-all;
}

.wrapper #help ul {
  padding: 0;
  margin: 0;
  text-align: left;
}

.wrapper #help ul li {
  margin: 5px;
}

.wrapper #tips {
  clear: both;
}

#footer {
  width: 100%;
  text-align: center;
  padding: 10px 0;
}
</style>

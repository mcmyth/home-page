# MC Myth Home Page

Demo: https://mc-myth.cn

## 配置项目
`config.js`
```javascript
export default {
  beian: '粤ICP备xxx号',
  // 主页按钮列表
  buttonList: [
    // img可替换成text,则为只显示文本作为图标
    // _blank参数可选,为false时则不以新标签打开页面
    {
      img: '/assets/icon/xxx.svg',
      title: 'xxx',
      link: 'https://domain.xxx',
      _blank: false
    }
  ],
  // 友链列表
  friendLink: [
    {
	  // description是可选的
      name: '...',
      link: 'https://domain.xxx',
      description: 'xxx'
    }
  ]
}

```

## 初始化项目

```
yarn install
```

### 编译并以热重载模式进行开发
```
yarn serve
```

### 编译为生产环境版本
```
yarn build
```

### 修复Lints
```
yarn lint
```

### 自定义配置
查看 [查看配置参考](https://cli.vuejs.org/config/).

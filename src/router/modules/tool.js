export default function(router) {
  router.push({
    path: '/tool/',
    component: () => import('@/views/tool/Index'),
    meta: {
      title: '小工具'
    },
    children: [
      {
        path: 'imageconverter',
        component: () => import('@/views/tool/ImageConverter'),
        meta: {
          title: '图片转换'
        }
      }
    ]
  })
}

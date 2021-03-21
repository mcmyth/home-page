export default function(router) {
  router.push({
    path: '/tool/',
    component: () => import('@/views/tool/Index'),
    meta: {
      title: 'ImageConverter'
    },
    children: [
      {
        path: 'imageconverter',
        component: () => import('@/views/tool/ImageConverter')
      }
    ]
  })
}

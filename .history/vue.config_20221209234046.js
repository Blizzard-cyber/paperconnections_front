/*
 * Copyright (c) 2021. ZHANGDI Studio All Rights Reserved.
 */
module.exports={
    publicPath:'/',
    lintOnSave: false,
    devServer:{
        port:8020, // 启动端口号
        open: false,
        proxy: {
            '/api': {
              target: 'http://127.0.0.1:8100/', //对应自己的接口
              changeOrigin: true,
              ws: true,
              pathRewrite: {
                '^/api': ''
              }
            }  // 启动后是否自动打开网页
    }
};

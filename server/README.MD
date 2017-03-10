react-hot-reload 总结
=====

1. webpack-dev-server实现

参考 
>    [https://github.com/gaearon/react-hot-boilerplate/tree/next](https://github.com/gaearon/react-hot-boilerplate/tree/next)

>    [http://webpack.github.io/docs/webpack-dev-server.html#hot-module-replacement](http://webpack.github.io/docs/webpack-dev-server.html#hot-module-replacement)

```js
 {
     entry:{
           index:[
                 'react-hot-loader/patch',
                  // activate HMR for React
                                  
                 'webpack-dev-server/client?http://localhost:3000',
                  // bundle the client for webpack-dev-server
                  // and connect to the provided endpoint                               
                  'webpack/hot/only-dev-server',
                  './src/index.jsx'
           ]
            
      },
      
      devServer: {
          host: 'localhost',
          port: 3000,
      
          historyApiFallback: true,
          // respond to 404s with index.html
      
          hot: true,
          // enable HMR on the server
        },
        
        plugins:[ 
            new webpack.HotModuleReplacementPlugin(),
            ]
 }
 

```

执行 webpack-dev-server命令即可开启


2. 基于Koa，使用middleware

参考

>[http://imweb.io/topic/5895ef825f25ed382669d516](http://imweb.io/topic/5895ef825f25ed382669d516)

`koa-webpack`

>This module is a fork of koa-webpack-middleware, as the afore mentioned project has fallen into a state of neglect, and contains many enhancements and updates.

官方的`koa-webpack-middleware`貌似维护不行，我按照文档给的例子测试，结果server开启后一直404。。。

具体配置参考此目录下的`devServer.js`
React + Redux + Koa + SSR 小例子 
===

系列文章在[博客](https://segmentfault.com/a/1190000007512055)


##TODO

###开发
- [x] 使用`redux-saga`管理状态 
- [x] 使用`babel-preset-env`代替`babel-preset-es2015`


###HMR 

具体在`/server/README.MD`

- [x] 使用`webpack-dev-server` CLI来实现HMR
- [x] 使用`koa-webpack` 来实现 HMR
- [ ] 整合`koa-webpack` 和`SSR服务`


###CSS
- [x] 使用`PostCSS-loader`代替`autoprefixer-loader`
- [x] 使用REM
- [x] 使用px2rem插件自动转换px
- [ ] 使用CSS Module


###团队规范
- [ ] stylelint规范CSS
- [ ] eslint规范js写法
- [ ] `webpack`中添加`eslint-loader`，不规范不予编译


###测试
- [x] <del>添加`mocha`单元测试</del>
- [x] 添加`ava`单元测试
- [x] 使用`gulp`管理`ava`单元测试
- [ ] 使用`Selenium`进行E2E测试


###部署
- [x] 使用`browserslist`来控制生成代码的兼容性
- [x] 使用`.editorconfig`规范IDE换行和编码
- [ ] 使用pm2管理服务器
- [ ] 线上HTML中的资源链接添加hash，控制缓存



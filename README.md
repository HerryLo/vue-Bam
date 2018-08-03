# vue

使用vue 2.0 + element UI 构建管理系统界面，使用[koa+MongoDB](https://github.com/HerryLo/koa-mongoDB.git)搭建后端接口

## 技术栈
  * vue-cli 脚手架直接生成
  
  * element-UI 作为UI框架，配合界面的搭建
  
  * webpack 打包压缩，babel编译Es6/7语法
  
  * 前后端分离，[后端项目](https://github.com/HerryLo/koa-mongoDB.git)，[前端管理系统](https://github.com/HerryLo/vue-Bam)

## 功能
| 功能 |  路由地址 |
|:------|:-------|
|登录    | /sign_in   | 
|用户管理 | /userAdmin |
|文章管理 | /articleList |
|创建文章 | /writeArt |

## 运行

``` bash
$ git clone https://github.com/HerryLo/BAM.git

// 安装依赖
$ npm install 

// 本地开发
$ npm run dev 

// 生产构建
$ npm run build
```

同时需要启动[koa+MongoDB](https://github.com/HerryLo/koa-mongoDB.git)提供接口。

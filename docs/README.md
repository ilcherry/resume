---
home: true
heroText: 高威
tagline: 8 年 Web 前端开发
---

## 专业技能

- 熟悉使用 Webpack/Babel/esbuild/Vite/Rollup 打包器和编译器，并有实施、调优经验
- 熟悉使用 Koa2/Express 后端框架写 BFF 业务，并用 vercel 部署
- 熟练掌握 Linux 基本命令，使用 Nginx 做反向代理和静态资源部署
- 熟练使用 Git 做项目版本管理、采用 GitHub flow 工作流和 github action CI/CD
- 熟练使用 React 框架以及 React-Router、Redux/Mobx 开发 SaaS 平台（熟悉 Vue/Svelte 框架）
- 熟练使用 VuePress、dump 和 Docusaurus 静态网站生成器
- 熟练使用 GitHub Actions/GitHub Pages、Netlify 和 Vercel 等 CI/CD 工具
- 熟练使用 Qodana 和 SonarQube 等静态分析工具
- 熟练使用 Jest 测试框架，熟悉 Playwright/Vitest 测试框架，具有编写单元测试、端到端测试项目经验
- 熟悉 Sentry 和 NewRelic 等前端监控产品

## 工作经历

<CompanyProfile
  name="Talkdesk"
  title="资深前端工程师"
  department="DCE 项目组"
  workTime="2021/8—至今"
/>

负责客服呼叫中心 SaaS 平台研发，独立完成 Digital Connect 数字平台建设。完善项目的前端工程化建设、制定开发规范，指导初级、中级前端开发

<CompanyProfile
  name="Thoughtworks"
  title="高级前端工程师"
  department="华北项目组"
  workTime="2020/11—2021/8"
/>

短短九个月里完成美国 [Allclearhealthcare](https://allclearhealthcare.com/) 公司新冠疫情个人通行码、麦肯锡 SaaS 学习平台和奔驰金融
APP（**React Native App**）等多个项目，并高质量交付产品、获得客户高度好评，指导初级前端开发

<CompanyProfile
name="青云科技武汉研发中心"
title="高级前端工程师"
department="前端研发部"
workTime="2018/7—2020/9"
/>

参与青云科技私有云平台建设，推动青立方超融合平台自动化、智能化安装产品落地

<div :style="{display: 'flex', justifyContent: 'space-between'}">
  <div><strong :style='{fontWeight:"700"}'>中铁工程机械设计研究院有限公司</strong></div>
  <div><strong :style='{fontWeight:"700"}'>前端工程师</strong></div>
  <div><strong :style='{fontWeight:"700"}'>智能制造信息化部</strong></div>
  <div><strong :style='{fontWeight:"700"}'>2015/10—2018/7</strong></div>
</div>

独立负责中铁设备管理云平台研发。针对客户的定制化要求，推出中铁上海局运维管理平台、中铁二局智慧设备管理云平台

## 项目经历

[**SaaS 智能化呼叫中心与客服管理平台**](https://www.talkdesk.com/cloud-contact-center/)

项目描述：SaaS 智能化呼叫中心与客服管理平台是一个云联络平台，提供自动聊天机器人、业务端到端自动化、通话记录自动分析等特色功能、简化业务流程的同时提高工作效率

项目职责：

- 使用 yarn 的 monorepo 管理多个仓库代码，对不同的仓库单独发版部署
- 选取 iframe 实现微前端、多个项目部署后提供资源链接，由不同的 iframe 加载
- 积极推动项目由 JS 改为 TS。并使用 ESLint 等工具管理项目代码规范
- 独立完成 Digital Connect 数字频道建设，成功签得施耐德、墨西哥大银行公司合同
- 使用 cspell、commitlint、ESLint、husky 等工具完善项目的工程化流程
- 使用 webdirver、playright 对项目做可视化测试，可甄别出 1px 的改动
- 在 confluence 上编写复杂业务场景技术实现方案.(使用 rxjs 整合多个接口的数据)
- 使用 Server-Sent-Events 技术替换短轮询，极大优化产品的性能
- 定期分享前端技术，讲过《前端工程化》

项目成果：talkdesk 智能客服自动化平台是公司的核心产品，拥有客户 1800 多家，并获得多家著名投资机构领投

**麦肯锡 SaaS 学习平台**

项目描述：由前后端不分离的 C# 项目重构成前后端分离的新麦肯锡学习平台

项目职责：基于 ant-design-pro 二次开发，从零开始使用 typescript，打造基于业务的可复用的 Modal/Table/Form 公共组件，使用
ant-design-chart 做条形图、折线图等做数据可视化，带领和指导初级前端做需求

**[青云云易捷系统](https://www.qingcloud.com/products/cloudexpress)**

项目描述：青云云易捷系统集成全栈化云计算能力，提供 QingCloud 企业云平台的软硬一体化交付，在计算、存储、网络资源的融合之上，实现
PaaS、SaaS 等企业级应用的横向扩展

项目职责：

- 开发企业设置、v2v 迁移、产品国际化等大功能模块
- 根据客户需求，完成小功能的迭代开发、并优化整个产品
- 根据测试人员的测试反馈，修复产品存在的 bug
- 使用 websocket 替换轮询进行数据交互，处理虚拟机的启动与停止
- 使用 react-i18next 做产品的国际化
- 使用 mobx store 的概念在 modal 里做多个大文件同时上传

项目业绩：青立方 ® 超融合系统易捷版作为私有云的简化版，目前已经大卖，武汉农商行、 中金等等很多公司都是该产品的忠实客户

**青云云易捷系统 installer**

项目描述：青云云易捷系统采用 Web Installer 对待安装机器及部署流程进行可视 化部署，以极简的 Step-by-Step
安装方式引导用户快速配置节点安装环境

项目职责：

- 审核项目全部的设计稿，制定项目采用的技术栈并实时优化技术栈
- 开发信息收集、节点设置、可选服务、节点部署、节点管理、功能检查 服务巡检、在线命令、高级设置和扩容节点等功能模块
- 使用 post 传输的 FormData 数据格式实现 50G 大文件的断点续传功能
- 用 websocket 替换轮询，重构安装部署的流程状态，并记录安装每一步 的状态(浏览器刷新的情景下)

**中铁智慧设备管理云平台**

项目描述：通过该平台，可满足施工方、监管方及设计方三方，对工程、人、设备、原料、任务排产、质检等全方位的监控和管理

项目职责：

- 积极参与部门需求会议，分析、讨论平台需求，撰写需求分析报告
- 使用 react+react-router+mobx+scss，搭建平台前端整体架构
- 基于高德地图解决铁路施工设备 GIS 地图显示
- 使用 video.js 播放 rtmp 实时视频流等等难题。
- 撰写设备管理云平台发明专利

项目业绩：中铁智慧设备管理云获得中铁上海局、中铁二局、中铁七局集体采购和好评，受到中铁工业的赞许

## 教育经历

<div :style="{display: 'flex', justifyContent: 'space-between'}">
  <div>2012/9-2016/6</div>
  <div>湖北工业大学</div>
  <div>全日制本科</div>
  <div>工学学士</div>
</div>

## 个人成就

- 著有《用于电脑的云计算管理平台的图形用户界面》外观设计专利、中国中铁企业管理现代化创新成果奖
- 在[个人博客](https://qinghuani.fun/)、[稀土掘金](https://juejin.cn/user/4212984286819384/posts)、[SegmentFault 思否](https://segmentfault.com/u/demo_5bf76b5f152ef/articles)
  、知乎、语雀、简书、[GitHub](https://github.com/qinghuanI/qinghuanI.github.io/issues) 上撰写技术博客
- 撰写[《WebStorm 使用指南》](https://www.qinghuani.fun/webstorm-guide/)电子书，帮助开发人员了解和掌握 WebStorm 使用技巧
- 发布 `sse-client` npm 依赖

## 自我评价

- 逻辑清晰，代码条理清晰，喜欢系统性思维
- 对 web 前端技术有强烈兴趣，热衷 web 前沿技术研究和新技术调研，有良好的学习能力和团队合作精神
- 具备良好的编程习惯，有较强的代码阅读能力和学习能力

::: slot footer
Copyright© 2015-present [qinghuanI](https://github.com/qinghuanI)
:::

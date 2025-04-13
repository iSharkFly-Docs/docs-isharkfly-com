# iSharkFly 文档和手册

欢迎来到鲨鱼君的文档和手册的空间

GitHub 上有关 HoneyMoose
的项目：[https://github.com/iSharkfly-Docs/docs-isharkfly-com](https://github.com/iSharkfly-Docs/docs-isharkfly-com)

[联系我们](CONTACT.md ':include')

## 如何运行文档

本文档是通过 VitePress 进行编译和安装的。

### 安装 docsify

如果你的计算机还没有安装 docsify 的话，请运行命令  `npm i docsify-cli -g` 来进行安装。

### 校验安装结果

运行命令 `docsify -version` 来校验安装结果，界面上应该显示：

```text
docsify-cli version:
  4.4.3
```

### 运行 文档

如果你希望在你的本地计算机上查看本文档，请运行  `yarn docs:dev` ， 在你的控制台上将会有下面的内如输出：

```powershell
PS D:\WorkDir\Repository\iSharkfly-Docs\Docs\docs-isharkfly-com> yarn docs:dev  
Re-optimizing dependencies because vite config has changed

  vitepress v1.6.3

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help

```

## iSharkFly 文档和手册快速导航

在下面的表格中，我们列出了一些比较有用的 CWIKIUS 相关软件开发使用教程的导航，在我们文档的整理中，也参考了一些这些文档。

在这里对原作者表示感谢。

| 网站名称               | URL                                                            | NOTE                      | GitHub                                                                                                       | 
|--------------------|----------------------------------------------------------------|---------------------------|--------------------------------------------------------------------------------------------------------------|
| DOCS.ISHARKFLY.COM | [https://docs.isharkfly.com/#/](https://docs.isharkfly.com/#/) | 本手册的编译版本将会部署在这个链接上        | [https://github.com/iSharkfly-Docs/docs-isharkfly-com](https://github.com/iSharkfly-Docs/docs-isharkfly-com) |
| WWW.CWIKIUS.CN     | [http://www.cwikius.cn/](http://www.cwikius.cn/)               | CWIKIUS.CN 一个有独立思考和温度的清新站 | N/A                                                                                                          |

### 前端和 UI

| 网站名称            | URL                                                                         | NOTE                        |
|-----------------|-----------------------------------------------------------------------------|-----------------------------|
| 前端技术社区          | https://www.ossez.com/c/toolkit-algorithm-computer-science/web-front-end/26 | 计算机相关的前端框架和讨论               |
| TypeScript 文档手册 | https://typescript.ossez.com/                                               | TypeScript 相关技术文档和手册        |
| Angular 技术手册    | https://angular.ossez.com/                                                  | Angular 手册的在线翻译版本，从源代码中进行编译 |
| TypeScript 文档手册 | https://typescript.ossez.com/                                               | TypeScript 相关技术文档和手册        |
| Docsify 中文文档手册  | https://docsify.isharkfly.com/                                              | Docsify 可以快速帮你生成文档网站        |

### 后端和数据

| 网站名称                   | URL                               | NOTE                 |
|------------------------|-----------------------------------|----------------------|
| Apache Druid 技术手册      | https://druid.isharkfly.com/      | Druid 手册的在线翻译版本      |
| Amazon OpenSearch 技术手册 | https://opensearch.isharkfly.com/ | OpenSearch 手册的在线翻译版本 |
| HAPI FHIR              | https://fhir.isharkfly.com/#/     | FHIR 相关技术文档的收集和讨论    |

### 容器 docker

| 网站名称               | URL                            | NOTE                                                        |
|--------------------|--------------------------------|-------------------------------------------------------------|
| Docker 手册中译在线版     | https://docker.ossez.com/      | 基于 Docker 容器英文手册的翻译版本                                       |
| Docker 手册中译 MD 在线版 | https://docker-docs.ossez.com/ | 因为 Docker 的官方手册进行了渲染，我们推荐你使用上面的链接，这个版本为 docsify 渲染版本，可能会丢格式 |
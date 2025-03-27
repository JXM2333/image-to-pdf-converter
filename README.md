# 图片转PDF工具

一个简单易用的图片转PDF工具，能够将上传的图片分别转换为PDF文件。

## 功能特点

- 简洁直观的用户界面
- 支持多种图片格式（JPG, PNG, GIF等）
- 支持拖放操作，轻松导入图片
- 每张原始图片生成独立的PDF文件
- 完美适配各种尺寸的图片，自动适应A4格式
- 纯前端实现，无需后端服务器

## 在线使用

您可以直接访问GitHub Pages使用本工具：[图片转PDF工具](https://jxm2333.github.io/image-to-pdf-converter/)

## 本地使用方法

### 方法一：直接使用

1. 克隆或下载本仓库
```bash
git clone https://github.com/JXM2333/image-to-pdf-converter.git
```

2. 在浏览器中打开`index.html`文件即可使用

### 方法二：构建为可执行文件（推荐）

这种方法会生成一个带有自定义图标的可执行文件，可以方便地分享给他人使用。

#### 前提条件

- 安装 [Node.js](https://nodejs.org/)（版本12或以上）

#### 构建步骤

1. 克隆或下载本仓库
2. 运行 `build.cmd` 批处理文件
3. 构建完成后，在 `build` 目录中找到 `图片转PDF工具.exe` 文件
4. 可以将整个 `build` 目录分享给他人使用

## 使用说明

1. 点击"+"按钮或"导入"按钮添加图片，也可以直接将图片拖放到界面中
2. 添加的图片将显示在列表中
3. 点击"转为PDF"按钮，为每张图片生成独立的PDF文件
4. 生成的PDF文件将自动下载到您的计算机上

## 技术实现

本项目使用纯前端技术实现，主要包括：

- HTML5/CSS3用于界面展示
- JavaScript实现核心功能
- 使用jsPDF库实现PDF生成
- 模块化设计，代码结构清晰

## 项目结构

```
.
├── index.html           // 主页面
├── styles.css           // 样式文件
├── main.js              // 主程序入口
├── FileValidator.js     // 文件验证模块
├── DragDropHandler.js   // 拖放处理模块
├── ImageProcessor.js    // 图像处理模块
├── PDFGenerator.js      // PDF生成模块
├── UIManager.js         // 界面管理模块
├── launcher.js          // 启动器脚本
├── set-icon.js          // 设置图标脚本
├── build.cmd            // 构建脚本
└── assets/
    └── icons/           // 应用图标
```

## 构建自己的版本

如果您想自定义图标或修改功能，可以按照以下步骤进行：

1. 替换 `image (4).ico` 为您自己的图标文件（必须是.ico格式）
2. 修改相关代码文件
3. 运行 `build.cmd` 重新构建应用

## 二次开发

如果您想对本项目进行二次开发，可以按照以下模块进行修改：

1. **FileValidator.js**: 负责验证上传文件的有效性和类型
2. **DragDropHandler.js**: 处理拖放操作的核心逻辑
3. **ImageProcessor.js**: 负责图像的预处理和转换
4. **PDFGenerator.js**: 实现图像到PDF的转换逻辑
5. **UIManager.js**: 处理用户界面相关的功能
6. **main.js**: 程序入口，协调各模块工作

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Edge 80+
- Safari 11+

## 贡献

欢迎贡献代码或提出建议，请通过以下方式参与：

1. Fork本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个Pull Request

## 许可证

本项目采用MIT许可证 - 详见[LICENSE](LICENSE)文件

## 鸣谢

- [jsPDF](https://github.com/parallax/jsPDF) - 用于生成PDF的JavaScript库
- [rcedit](https://github.com/electron/node-rcedit) - 用于修改exe资源的工具
- [pkg](https://github.com/vercel/pkg) - 用于将Node.js应用打包为可执行文件的工具
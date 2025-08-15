## 文件夹结构
- /app：包含应用程序的所有路由、组件和逻辑，这是我们将主要从中工作的地方。
- /app/lib：包含在应用程序中使用的函数，例如可重用的实用函数和数据获取函数。
- /app/ui：包含应用程序的所有 UI 组件，例如卡片、表格和表单。为节省时间，我们已经预先样式化了这些组件。
- /public：包含应用程序的所有静态资产，例如图片。
- /script/：包含一个 seeding（这里翻译为 “播种” 可以理解为数据库的 Migration）脚本，您将在后面的章节中使用它来填充您的数据库。
- 配置文件：您还会注意到应用程序根目录下有一些配置文件，例如 next.config.js。大多数这些文件在使用 `create-next-app`` 启动新项目时会被创建和预配置。在本课程中，您不需要修改它们。

## Placeholder data（占位数据）
在构建用户界面时，使用一些占位数据很有帮助。如果尚未提供数据库或 API，您可以：
- 使用 JSON 格式的占位数据或作为 JavaScript 对象。
- 使用第三方服务，如 mockAPI（https://mockapi.io/）。

## 运行项目
```bash
pnpm i
pnpm run dev
```

## 连接数据库
- 访问 vercel.com（https://vercel.com/signup）创建用户，选择导入创建的 github 项目；
- 选择 Neon 数据库，默认区域选择华盛顿特区，创建数据库之后将 .env.local 选项卡的信息保存到项目本地的 .env.example 中，将 .env.example 修改为 .env；
- 使用 pnpm run dev 运行项目，然后导航到 http://localhost:3000/seed，可以看到数据库初始化成功的信息，导航到 http://localhost:3000/query 可以看到一条数据信息；



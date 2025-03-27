@echo off
echo 图片转PDF工具 - 构建脚本
echo ============================

REM 检查是否安装了Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo 错误: 找不到Node.js，请先安装Node.js
    goto :END
)

REM 创建build目录
if not exist build mkdir build

REM 安装依赖
echo 安装依赖...
call npm install --no-save rcedit pkg

REM 使用pkg打包启动器为exe
echo 打包启动器...
call npx pkg launcher.js --target node16-win-x64 --output build/图片转PDF工具.exe

REM 设置exe图标
echo 设置图标...
node set-icon.js build/图片转PDF工具.exe "image (4).ico"

REM 复制应用文件到build目录
echo 复制应用文件...
copy index.html build\
copy styles.css build\
copy *.js build\
copy "image (4).ico" build\
if not exist build\assets mkdir build\assets
if not exist build\assets\icons mkdir build\assets\icons
copy "image (4).ico" build\assets\icons\pdf-icon.ico

echo.
echo 构建完成！可执行文件位于 build/图片转PDF工具.exe
echo.

:END
pause
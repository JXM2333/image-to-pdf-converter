/**
 * 图片转PDF工具启动器
 * 用于打开index.html文件
 */

const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

// 获取应用根目录(与启动器在同一目录)
const appDir = __dirname;
const indexPath = path.join(appDir, 'index.html');

// 检查index.html是否存在
if (!fs.existsSync(indexPath)) {
  console.error(`错误: 找不到应用入口文件: ${indexPath}`);
  console.error('请确保index.html文件与启动器在同一目录');
  
  // 等待用户按键退出
  console.log('按任意键退出...');
  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.on('data', process.exit.bind(process, 0));
  return;
}

// 使用默认浏览器打开index.html
const command = process.platform === 'win32'
  ? `start "" "${indexPath}"`
  : process.platform === 'darwin'
    ? `open "${indexPath}"`
    : `xdg-open "${indexPath}"`;

console.log('启动图片转PDF工具...');
exec(command, (error) => {
  if (error) {
    console.error('启动失败:', error);
    return;
  }
  
  // 成功启动后退出启动器进程
  process.exit(0);
});
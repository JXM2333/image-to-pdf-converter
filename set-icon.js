/**
 * 设置exe图标的脚本
 * 使用 node-rcedit 模块修改exe文件的图标
 * 
 * 用法: node set-icon.js <exe路径> <图标路径>
 * 示例: node set-icon.js launcher.exe "image (4).ico"
 */

const rcedit = require('rcedit');
const path = require('path');
const fs = require('fs');

// 获取命令行参数
const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('使用方法: node set-icon.js <exe路径> <图标路径>');
  process.exit(1);
}

const exePath = path.resolve(args[0]);
const iconPath = path.resolve(args[1]);

// 检查文件是否存在
if (!fs.existsSync(exePath)) {
  console.error(`错误: exe文件不存在: ${exePath}`);
  process.exit(1);
}

if (!fs.existsSync(iconPath)) {
  console.error(`错误: 图标文件不存在: ${iconPath}`);
  process.exit(1);
}

// 设置图标
console.log(`正在为 ${exePath} 设置图标 ${iconPath}...`);

rcedit(exePath, {
  'icon': iconPath
})
  .then(() => {
    console.log('✅ 图标设置成功！');
  })
  .catch(err => {
    console.error('❌ 设置图标失败:', err);
    process.exit(1);
  });
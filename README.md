# lucky-boy

年会抽奖程序。 [体验地址](http://www.taojunnan.com/lucky-boy/)

## 功能
按 <kbd>Enter</kbd> 或 <kbd>Space</kbd> 开始/停止抽奖  
按 <kbd>Del</kbd> 或 <kbd>Backspace</kbd> 清空抽奖记录  
按 <kbd>L</kbd> 显示/隐藏抽奖记录列表  
按 <kbd>P</kbd> 播放/暂停背景音乐  

默认从最后一个奖项开始抽，抽完后自动抽下一个奖项，也可以按<kbd>L</kbd>在抽奖记录列表中选中对应奖项的`radio`切换抽奖顺序  

在 `@/utils/member.js`中更新抽奖人名单  
在 `@/views/Home.vue`中`prizeInfo`更新奖品信息  
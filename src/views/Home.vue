<template>
  <div class="home">
    <!--主容器，显示词云-->
    <div ref="main" id="main" class="wall"></div>

    <transition name="fade">
      <!-- 中奖信息 -->
      <Winning v-if="showWinningDialog" :title="prizeTitle" :detail="prizeDetail" :name="prizeName" />
    </transition>

    <PrizeList v-model="showPrizeList" :currentIndex.sync="currentIndex" :info="prizeInfo" :list="prizeList" />

    <audio ref="audio" hidden loop="true" controls="controls">
      <source :src="bgMp3"/>
    </audio>
  </div>
</template>

<script>
import member from '@/utils/member'
import Winning from '@/components/Winning.vue'
import PrizeList from '../components/PrizeList.vue'
import bgMp3 from '@/assets/bg.mp3'

// 从本地存储获取当前被选中过的人员名单
const choosed = JSON.parse(localStorage.getItem('choosed')) || {}
// 普通旋转速度
const normalSpeed = [0.2, 0.08]
// 快速旋转速度
const fastSpeed = [5, 1]

export default {
  name: 'Home',
  data () {
    return {
      // 是否时开始状态
      isStart: false,
      // 显示中奖信息弹窗
      showWinningDialog: false,
      // 当前抽奖的是什么奖，几等奖，默认四等奖
      currentIndex: 4,
      // count：这个奖一共多少个，number: 这个奖目前抽了几个了
      prizeInfo: [
        { level: 0, name: '特等奖', prize: '小米智能音箱', count: 1, number: 0 },
        { level: 1, name: '一等奖', prize: '小爱音箱', count: 4, number: 0 },
        { level: 2, name: '二等奖', prize: '护眼台灯', count: 5, number: 0 },
        { level: 3, name: '三等奖', prize: '充电宝', count: 8, number: 0 },
        { level: 4, name: '四等奖', prize: '智能插座', count: 10, number: 0 }
      ],
      // 中奖名单
      prizeList: JSON.parse(localStorage.getItem('prizeList')) || [],
      // 中的几等奖
      prizeTitle: '',
      // 奖品是啥
      prizeDetail: '',
      // 中奖人
      prizeName: '',
      // 是否展示中奖信息栏
      showPrizeList: false,
      bgMp3
    }
  },
  components: {
    Winning,
    PrizeList
  },
  methods: {
    // 初始化下数据
    init () {
      // 从本地存储中获取现在抽到什么奖了
      this.currentIndex = Number(localStorage.getItem('currentIndex') || 4)

      // 从本地存储中取每个奖已经抽了多少个了
      this.prizeInfo.forEach((item, index) => {
        if (Array.isArray(this.prizeList[index])) {
          item.number = this.prizeList[index].length
        }
      })
    },
    // 创建名单列表
    createHTML () {
      var html = []

      member.forEach((item, index) => {
        item.index = index

        if (!choosed[item.name]) {
          html.push('<li><a href="#">' + item.name + '</a></li>')
        }
      })

      if (html.length === 0) {
        html.push('<li><a href="#">大家都有奖了</a></li>')
      }

      return ['<ul>', ...html, '</ul>'].join('')
    },
    // 创建画布
    createCanvas () {
      // 创建画布
      const canvas = document.createElement('canvas')
      // 设置好ID
      canvas.id = 'myCanvas'
      // 设置画布的大小
      canvas.width = document.body.clientWidth
      // 设置画布的高度
      canvas.height = document.body.clientHeight - 10
      // 设置画布的内部html
      canvas.innerHTML = this.createHTML()
      // 将画布添加到网页渲染
      document.getElementById('main').appendChild(canvas)

      // 词云初始化
      TagCanvas.Start('myCanvas', '', {
        textColour: '#FFD700',
        initial: normalSpeed,
        textHeight: 42,
        zoom: 1.05,
        dragControl: false,
        wheelZoom: false
      })
    },
    // 删除画布
    removeCanvas () {
      var ele = document.getElementById('myCanvas')

      ele && ele.parentNode.removeChild(ele)
    },
    // 抽奖算法， count: 抽几个人
    lottery (count = 1) {
      return member.filter(m => !choosed[m.name])
        .map(m => Object.assign({ score: Math.random() }, m))
        .sort((a, b) => a.score - b.score)
        .slice(0, count)
        .map(m => m.name)
    },
    // 重置
    handleReset () {
      const res = window.confirm('确定重置一切吗？')

      if (res) {
        localStorage.clear()
        window.location.reload()
      }
    },
    // 把中奖信息保存起来
    handleSave (info) {
      if (!this.prizeList[this.currentIndex]) {
        this.$set(this.prizeList, this.currentIndex, [])
      }

      // 给中奖名单中增加数据
      this.prizeList[this.currentIndex].push(info.name)

      localStorage.setItem('prizeList', JSON.stringify(this.prizeList))
    },
    // 查找下一个没抽完的奖
    getNextPrizeIndex () {
      let i = -1

      for (let index = this.prizeInfo.length - 1; index >= 0; index--) {
        const item = this.prizeInfo[index]

        if (item.number < item.count) {
          i = index
          break
        }
      }

      return i
    },
    // 开始抽奖
    handleStart () {
      // 如果正在显示着中奖信息弹窗，那么就先把它关闭
      if (this.showWinningDialog) {
        this.showWinningDialog = false
        return
      }

      this.isStart = !this.isStart

      let info = this.prizeInfo[this.currentIndex]
      if (this.currentIndex < 0) {
        window.alert('所有奖项均已抽完，明年再会')
        this.isStart = false
        this.setSpeed(normalSpeed)
        return
      }

      if (info.number >= info.count) {
        console.log(`-------- ${info.name}已全部抽完，自动切换下一个奖项 --------`)

        this.currentIndex = this.getNextPrizeIndex()

        // 重新获取奖品信息
        info = this.prizeInfo[this.currentIndex]
        // 如果无下一个奖项了，那么直接返回了
        if (!info) {
          console.log('没下一个奖项了')
          this.isStart = false
          return
        }
      }

      // 停的时候
      if (!this.isStart) {
        // 每次抽1人，返回抽中人的数组
        const res = this.lottery(1)

        // 更新被抽中过的名单
        res.forEach(name => {
          choosed[name] = true
        })
        localStorage.setItem('choosed', JSON.stringify(choosed))

        // 中奖人名
        const luckyBoyName = res.toString()

        // 当前奖项中奖认数累加
        info.number++

        // 保存中奖信息
        console.debug(`${info.name}: ${luckyBoyName} (${info.number}/${info.count})`)
        this.handleSave({ name: luckyBoyName })

        // 显示中奖信息弹窗
        const prizeTitle = `${info.name}`
        // const prizeDetail = `${info.prize}(${info.number}/${info.count})`
        const prizeDetail = `${info.prize}`
        this.showDialog(prizeTitle, prizeDetail, luckyBoyName)

        // 重新绘制，刷新列表
        this.removeCanvas()
        this.createCanvas()
      }

      // 开始或停止的时候切换词云的旋转速度
      this.setSpeed(this.isStart ? fastSpeed : normalSpeed)
    },
    // 设置词云的旋转速度 norrmalSpeed or fastSpeed
    setSpeed (speed) {
      TagCanvas.SetSpeed('myCanvas', speed)
    },
    // 显示中奖信息弹窗
    showDialog (title, detail, name) {
      this.prizeTitle = title
      this.prizeName = name
      this.prizeDetail = detail
      this.showWinningDialog = true
    },
    resize () {
      this.removeCanvas()
      this.createCanvas()
      this.isStart = false
      this.setSpeed(normalSpeed)
    }
  },
  mounted () {
    // 初始化下数据
    this.init()

    // 创建中间人员名单词云画布
    this.createCanvas()

    // 键盘事件
    document.onkeydown = (event) => {
      const e = event || window.event

      // console.debug('@code = ', e.keyCode)
      if (e) {
        const keyCode = e.keyCode

        if (keyCode === 13 || keyCode === 32) {
          // enter回车键 或 空格键
          this.handleStart()
        } else if (keyCode === 46 || keyCode === 8) {
          // delete或backspace
          this.handleReset()
        } else if (keyCode === 76) {
          // 按下L键，切换中奖信息栏是否显示
          this.showPrizeList = !this.showPrizeList
        } else if (keyCode === 80) {
          // 按下P键，播放音乐
          const audio = this.$refs.audio
          if (audio.paused) {
            audio.play()
          } else {
            audio.pause()
          }
        }
      }
    }

    window.addEventListener('resize', this.resize)
  },
  beforeDestroy () {
    document.onkeydown = null
    window.removeEventListener('resize', this.resize)
  },
  watch: {
    // 当前需要变动的时候保存至本地
    currentIndex (index) {
      localStorage.setItem('currentIndex', index)
    }
  }

}
</script>

<style scoped>
  .home {
    width: 100%;
    height: 100%;
    background: url('~@/assets/img/bg.jpg') no-repeat;
    background-size: 100% 100%;
    position: relative;
  }

  .wall {
    width: 100%;
    height: 100%;
  }

</style>

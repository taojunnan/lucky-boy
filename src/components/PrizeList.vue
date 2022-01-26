<template>
  <div class="prize-list" :class="{hide: !visible}">
    <div class="title">中奖信息</div>

    <div class="info">
      <label v-for="(item, index) in info" :key="item.name">
        <input tabindex="-1" type="radio" name="prize" :checked="currentIndex === index" @change="handleChange(index)">
        <span class="name">{{ item.name }}({{ item.number }} / {{ item.count }})</span>

        <ul v-if="Array.isArray(list[index])">
          <li v-for="(luckyBoy, i) in list[index]" :key="i">
            {{ luckyBoy }}
          </li>
        </ul>
        <div v-else>暂无中奖信息</div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrizeList',
  data () {
    return {
      visible: false
    }
  },
  props: {
    // v-model
    value: {
      required: true,
      type: Boolean
    },
    // 奖品信息
    info: {
      required: true,
      type: Array
    },
    // 中奖人列表
    list: {
      required: true,
      type: Array
    },
    // 当前奖项序号
    currentIndex: {
      required: true,
      type: Number
    }
  },
  methods: {
    handleChange (i) {
      // .sync
      this.$emit('update:currentIndex', i)
    }
  },
  watch: {
    value (v) {
      this.visible = v
    },
    visible (v) {
      this.$emit('input', v)
    }
  }
}
</script>

<style  scoped>
  .prize-list {
    width: 300px;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    display: block;
    background-color: #e55e5b;
    transition: all 300ms;

    box-sizing: border-box;
    padding: 20px;
    overflow: auto;
  }

  .prize-list.hide {
    right: -500px;
  }

  .prize-list::-webkit-scrollbar {
    width: 0;
  }

  ul {
    list-style: none;
  }

  .title {
    font-size: 36px;
    font-weight: 700;
  }

  .name {
    font-size: 22px;
    padding-left: 10px;
    font-weight: 500;
  }

  li {
    font-size: 20px;
    padding-left: 14px;
    font-weight: 400;
  }

  input[type='radio'] {
    width: 16px;
    height: 16px;
  }
</style>

<template>
  <div class="winning">
    <div class="content">
      <span class="prize-name">
        {{ title }}
      </span>

      <span class="prize-detail">
        {{ detail }}
      </span>

      <div class="name">
        {{ name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Winning',
  props: {
    // 就是几等奖这种
    title: {
      required: true,
      type: String
    },
    // 奖品信息
    detail: {
      required: true,
      type: String
    },
    // 中奖人的姓名
    name: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped>
  .winning {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background: url('~@/assets/img/alert2.png') no-repeat;
    background-size: 50%;
    background-position: 45% 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 25px;
    margin-top: 20px;
    color: #ffffff;
  }

  .content .prize-name {
    font-size: 36px;
    font-weight: 500;
    letter-spacing: 6px;
  }

  .content .prize-detail {
    font-size: 42px;
    font-weight: bolder;
    margin-top: 30px;
    letter-spacing: 2px;
  }

  .content .name {
    width: 200px;
    font-size: 32px;
    margin-top: 50px;
    font-weight: bold;
    color: #000000;
    background-color: #ffffff;
    padding: 10px 12px 10px 18px;
    border-radius: 30px;
    letter-spacing: 6px;
    text-align: center;
  }
</style>

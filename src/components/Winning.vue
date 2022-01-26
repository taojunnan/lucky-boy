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
    background: url('~@/assets/img/alert.png') no-repeat;
    background-size: contain;
    background-position: center;

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
    margin-top: 150px;
  }

  .content .prize-name {
    font-size: 42px;
    font-weight: 700;
  }

  .content .prize-detail {
    font-size: 36px;
    font-weight: 600;
    margin-top: 50px;
  }

  .content .name {
    font-size: 32px;
    margin-top: 50px;
    font-weight: bold;
    color: #fff100;
    background-color: red;
    padding: 10px 12px 10px 18px;
    border-radius: 10px;
    letter-spacing: 6px;
  }
</style>

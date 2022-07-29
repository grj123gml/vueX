<template>
  <div>
    <button :class="`one-button-${type}`" @click="clickFn">
      {{ title }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '主要按钮'
    },
    type: {
      type: String,
      default: 'primary',
      // 自动校验
      validator(val) {
        // console.log(val)
        return ['primary', 'success', 'warning', 'danger', 'message'].includes(
          val
        )
      }
    }
    // size: {
    //   type: String,
    //   default: 'normal',
    //   validator(val) {
    //     console.log(val)
    //     return ['normal', 'small', 'mini'].includes(val)
    //   }
    // }
  },
  methods: {
    clickFn() {
      this.$emit('myclick')
    }
  }
}
</script>

<style lang="less" scoped>
button {
  color: #fff;
  outline: none;
  border: none;
  padding: 8px 24px;
  border-radius: 4px;
  font-size: 18px;
}
.one-button-primary {
  background-color: rgb(31, 165, 31);
}
.one-button-success {
  background-color: hotpink;
}
.one-button-warning {
  background-color: rgb(207, 79, 50);
}
.one-button-danger {
  background-color: rgba(255, 0, 0, 0.954);
}
.one-button-message {
  background-color: rgb(72, 131, 190);
}
// .normal {
//   size: 32px;
// }
// .small {
//   size: 24px;
// }
// .mini {
//   size: 14px;
// }
</style>

<template>
  <div>
    <Buttton title="主要按钮" type="primary" @myclick="Fn"></Buttton><br />
    <Buttton title="成功按钮" type="success" @myclick="Fn"></Buttton><br />
    <Buttton title="警告按钮" type="warning" @myclick="Fn"></Buttton><br />
    <Buttton title="危险按钮" type="danger" @myclick="Fn"></Buttton><br />
    <Buttton title="信息按钮" type="message" @myclick="Fn"></Buttton><br />
  </div>
</template>

<script>
import Buttton from '@/components/Button.vue'
export default {
  components: {
    Buttton
  },
  methods: {
    Fn() {
      alert(111)
    }
  }
}
</script>

<style></style>

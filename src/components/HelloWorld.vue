<template>
  <div>
    <a-button type="danger" @click="comfirmFun">
      Primary
    </a-button>
    <a-icon type="star" class="myStar" />
  </div>
</template>

<script>
import { getMaterialList, getDetail } from 'api'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created() {
    getMaterialList()
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })

    getDetail()
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    comfirmFun() {
      this.$message.success('成功')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.myBtn {
  color: red;
}
.myStar {
  color: red;
}
</style>

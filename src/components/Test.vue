<template>
  <div class="test">
    <p>1111</p>
    <a href="javascript:void(0);">测试</a>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.test {
  width: 100%;
  height: 900px;
}
p {
  color: $color;
}
a {
  @include link-colors;
}
</style>

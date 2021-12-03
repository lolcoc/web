<template>
  <div class="hello">
    <HeaderPage/>
    放图片和简介
  </div>
</template>

<script>
import HeaderPage from '@/components/page/Header'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  components: {HeaderPage}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

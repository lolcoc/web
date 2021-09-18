<template>
  <div id="app">
    <HeaderPage/>
    <router-view/>
  </div>
</template>

<script>
import HeaderPage from '@/components/page/Header'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {HeaderPage}
}
</script>

<style>
#app {
}
</style>

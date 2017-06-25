<template>
  <div>
    <v-header :selected="2"></v-header>
    <div class="page-content">

    </div>
    <v-footer></v-footer>
    <v-backtop></v-backtop>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from '~components/header/header'
  import Footer from '~components/footer/footer'
  import Backtop from '~components/backtop/backtop'
  export default {
    head () {
      return {
        title: '维硕 | 客户案例',
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '../favicon.ico' }
        ],
        meta: [
        ]
      }
    },
    components: {
      'v-header': Header,
      'v-footer': Footer,
      'v-backtop': Backtop
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>

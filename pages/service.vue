<template>
  <div>
    <v-header :selected="1"></v-header>
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
    scrollToTop: false,
    head () {
      return {
        title: '维硕 | 服务支持',
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

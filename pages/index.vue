<template>
  <div>
    <v-header :transparent="false" :selected="0"></v-header>
    <div class="page-content container">
        <el-row class="banner-wrapper">
          <el-col class="typed" :lg="12" :xs="24">
          </el-col>
          <el-col class="image" :lg="12" :xs="24">
          </el-col>
        </el-row>

    </div>
    <v-footer></v-footer>
    <v-backtop></v-backtop>
  </div>
</template>

<script>
  import Header from '~components/header/header'
  import Footer from '~components/footer/footer'
  import Backtop from '~components/backtop/backtop'
  export default {
    scrollToTop: true,
    head () {
      return {
        title: '维硕 | 首页',
        link: [
          { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }
        ],
        meta: []
      }
    },
    data () {
      return {
          typeText: ['java', '快速建站']
      };
    },
    components: {
      'v-header': Header,
      'v-footer': Footer,
      'v-backtop': Backtop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../assets/css/main.styl"

  .page-content
    height 1500px
    .banner-wrapper
      position relative
      width 100%
      height 550px
      padding-top mini-header-height
      .image
        text-align center
        img
          max-width 100%
</style>

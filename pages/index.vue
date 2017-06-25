<template>
  <div>
    <v-header :transparent="true" :selected="0"></v-header>
    <div class="page-content">
      <div class="banner-wrapper">
        <img src="~static/index/stars.png" alt="" class="banner-stars">
        <img src="~static/index/rocket.png" alt="" class="banner-rocket">
      </div>
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
    components: {
      'v-header': Header,
      'v-footer': Footer,
      'v-backtop': Backtop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .page-content
    .banner-wrapper
      position relative
      width 100%
      height 650px
      margin-top -140px
      transform skewY(-5deg)
      transform-origin center
      text-align center
      background-image linear-gradient(180deg,#0d1a44 13%,#3c4f91 56%,#5fc1e4)
      .banner-stars
        transform skewY(5deg)
        margin-top 220px
        @media only all and (max-width 1000px)
          display none
      .banner-rocket
        position absolute
        transform skewY(5deg)
        width 300px
        bottom -100px
        right 15%
        @media only all and (max-width 768px)
          right 35%
          width 30%
          height auto
        @media only all and (max-width 500px)
          right 25%
          width 50%
          height auto
</style>

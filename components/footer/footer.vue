<template>
  <div class="footer">
    <div class="container">
      <div class="left">
        <div class="title">
          <b>winsour</b> | 南京维硕网络科技有限公司
        </div>
        <div class="link-wrapper">
          <nuxt-link to="/" style="flex: 0 0 50px" class="link-item">
            首页
          </nuxt-link>
          <nuxt-link to="/service" class="link-item">
            服务支持
          </nuxt-link>
          <nuxt-link to="/case" class="link-item">
            客户案例
          </nuxt-link>
          <nuxt-link to="/contact" class="link-item">
            关于我们
          </nuxt-link>
        </div>
        <div class="checkout">
          <a>© 浙公网安备 33010602001878号</a>
        </div>
      </div>
      <div class="right">
        <img class="qrcode" src="~static/qrcode.png" alt="">
        <div class="info">
          <div class="phone item">
            400-1234-123
          </div>
          <div class="mail item">
            winsour@winsour.com
          </div>
          <div class="addr item">
            南京市栖霞区紫东创意园
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/css/var.styl"
  .footer
    width 100%
    height footer-height
    background footer-color
    z-index 998
    @media only all and (max-width 768px)
      height auto
    .container
      position relative
      display flex
      height 100%
      width 94%
      margin 0 auto
      padding 2.5em 0
      flex-wrap wrap
      @media only all and (max-width 1400px)
        width 90%
        padding 2em 0
      .left
        flex 1
        @media only all and (max-width 768px)
          flex 0 0 100%
          padding-bottom 30px
        padding 10px 0
        .title
          color #a4aebd
          font-size 1.6em
          @media only all and (max-width 900px)
            font-size 1.3em
        .link-wrapper
          display flex
          .link-item
            height 40px
            line-height @height
            flex  0 0 70px
            color #768193
            font-size 13px
            cursor pointer
            transition all 0.2s linear 0s
            text-decoration none
            &:hover
              color #f6f6f6
        .checkout
          color #768193
          margin-top 30px
          @media only all and (max-width 900px)
            margin-top 10px
          a
            cursor pointer
            font-size 13px
            transition all 0.2s linear 0s
            &:hover
              color #f6f6f6
      .right
        padding 15px
        flex 0 0 40%
        justify-content flex-end
        border-left 1px solid #768193
        display flex
        @media only all and (max-width 768px)
          border-left none
          border-top 1px solid #768193
          flex 0 0 100%
          padding 30px 0 10px 0
        .qrcode
          margin 0 50px
          flex 0 0 100px
          height 100px
          @media only all and (max-width 768px)
            margin-left 0
        .info
          flex 1
          .item
            line-height 30px
            color #a4aebd
            font-size 1.1em
            @media only all and (max-width 768px)
              font-size 1.0em
          .phone
            line-height 35px
            font-size 1.5em
            font-weight 600
            @media only all and (max-width 768px)
              font-size 1.2em
</style>

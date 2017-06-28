<template>
  <div class="header" :class="{'mini': scrollY > 50 || !transparent}">
      <div class="bg-color">
        <div class="container">
          <nuxt-link to="/" class="header-item logo-wrapper" :class="{'mini': scrollY > 50 || !transparent}">
            <img src="~static/logo.png" alt="" class="logo">
            <div class="title">winsour</div>
          </nuxt-link >
          <div class="header-item link-wrapper" :class="{'mini': scrollY > 50 || !transparent}">
            <nuxt-link to="/" :class="{'selected': selected === 0 }" class="link-item">
              首页
            </nuxt-link>
            <nuxt-link to="/service" :class="{'selected': selected === 1 }" class="link-item">
              服务支持
            </nuxt-link>
            <nuxt-link to="/case"  :class="{'selected': selected === 2 }" class="link-item">
              客户案例
            </nuxt-link>
            <nuxt-link  to="/contact" :class="{'selected': selected === 3 }" class="link-item">
              关于我们
            </nuxt-link>
          </div>
          <div class="header-item extra-wrapper">
          </div>
          <div class="phone-link-wrapper" :class="{'mini': scrollY > 50 || !transparent}">
            <i @click="$menu_toggle" class="el-icon-menu"></i>
          </div>
        </div>
      </div>

      <!-- 下拉菜单 -->
      <transition name="slide" :class="{'mini': scrollY > 50 || !transparent}">
        <div v-show="s_menu_open" class="menu-list">
          <nuxt-link to="/" :class="{'selected': selected === 0 }" class="link-item">
            首页
          </nuxt-link>
          <nuxt-link to="/service" :class="{'selected': selected === 1 }" class="link-item">
            服务
          </nuxt-link>
          <nuxt-link to="/case" :class="{'selected': selected === 2 }" class="link-item">
            案例
          </nuxt-link>
          <nuxt-link to="/contact" :class="{'selected': selected === 3 }" class="link-item">
            关于
          </nuxt-link>
        </div>
      </transition>
    </div>
</template>

<script type="text/ecmascript-6">
  import {addEvent} from '~assets/util/add-event.js'
  export default {
    props: {
      transparent: {
        type: Boolean,
        default: false
      },
      selected: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        s_menu_open: false,
        scrollY: 0
      }
    },
    mounted () {
      /* 监听滚动条高度 */
      let $this = this;
      addEvent(window , 'scroll' , function () {
        $this.scrollY = document.documentElement.scrollTop || document.body.scrollTop;
      });
      /* window.onscroll = function () {

      } */
    },
    methods: {
        $menu_toggle () {
            this.s_menu_open = !this.s_menu_open
        }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/css/main.styl"
  .header
    position fixed
    top 0
    left 0
    right 0
    height header-height
    z-index 1000
    transition all 0.2s linear 0s
    &.mini
      height mini-header-height
      .bg-color
        background header-color
    @media only all and (max-width 768px)
      height mini-header-height
      .bg-color
        background header-color
    .bg-color
      .container
        display flex
        justify-content space-between
        height 100%
        margin 0 auto
        .logo-wrapper
          position relative
          flex 0 0 250px
          height 100%
          .logo
            position absolute
            top 20px
            width 70px
            height auto
            left 0
            cursor pointer
            transition all 0.2s linear 0s
          .title
            position absolute
            left 90px
            height header-height
            line-height @height
            height auto
            font-size 2.5em
            color #fff
            opacity 0.9
            cursor pointer
            transition all 0.2s linear 0s
          &.mini
            .logo
              width 40px
              top 15px
            .title
              color #fff
              left 50px
              height mini-header-height
              line-height @height
              font-size 1.9em
            &:hover
              opacity 1
          @media only all and (max-width 768px)
            .logo
              width 40px
              top 15px
            .title
              color #fff
              left 50px
              height mini-header-height
              line-height @height
              font-size 1.8em
            &:hover
              opacity 1
        .link-wrapper
          flex 1
          display flex
          justify-content flex-end
          .link-item
            flex 0 0 110px
            height header-height
            line-height header-height
            text-align center
            color #fff
            font-size 1.0em
            cursor pointer
            opacity 0.9
            transition all 0.2s linear 0s
            text-decoration none
            &:hover
              opacity 1
            &.selected
              font-size 1.2em
          &.mini
            .link-item
              height mini-header-height
              line-height mini-header-height
              font-size 1em
              color #fff
              &.selected
                border-bottom 5px solid #93b3d3
                font-weight 600
          @media only all and (max-width 768px)
            display none
        .extra-wrapper
            flex 0 0 0
        .phone-link-wrapper
          height header-height
          line-height @height
          color gray
          opacity 0.9
          flex 0 0 50px
          display none
          font-size 1.5em
          text-align center
          cursor pointer
          transition all 0.2s linear 0s
          &.mini
            height mini-header-height
            line-height mini-header-height
            color #fff
          &:hover
            opacity 1
          @media only all and (max-width 768px)
            display inline-block
            height mini-header-height
            line-height mini-header-height
            color #fff
    .menu-list
      position absolute
      height 200px
      bottom -200px
      right 0
      width 100%
      background #edefed
      transition all 0.2s linear 0s
      z-index -1
      border-bottom 1px solid #eeece8
      &.slide-enter-active, &.slide-leave-active
        bottom -200px
      &.slide-enter, &.slide-leave-active
        bottom 0
      .link-item
        display block
        width 100%
        padding 1em
        text-align center
        font-size 1.1em
        color rgba(0,0,0,0.8)
        cursor pointer
        text-decoration none
        &.selected
          font-size 1.3em
          color rgba(0,0,0,1)
</style>

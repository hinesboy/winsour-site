<template>
  <transition name="slideIn">
    <div @click="$backtop_click()" class="backtop" v-show="s_show">
      <i class="el-icon-caret-top"></i>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {addEvent} from '~assets/util/add-event.js'
  export default {
      data () {
          return {
              s_show: false
          }
      },
    mounted () {
      /* 监听滚动条高度 */
      let $this = this;
      this.watch_window_scroll();
      addEvent(window , 'scroll' , this.watch_window_scroll);
    },
    methods: {
      $backtop_click () {
          if (document.documentElement.scrollTop) {
            document.documentElement.scrollTop = 0;
          } else {
            document.body.scrollTop = 0;
          }
      },
      watch_window_scroll () {
        let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrolltop > 50) {
          this.s_show = true;
        } else {
          this.s_show = false;
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/css/main.styl"
  .backtop
    position fixed
    width 50px
    height @width
    line-height @height
    bottom 120px
    right 3%
    font-size 1.2em
    text-align center
    color #ffffff
    border-radius 50%
    background rgba(0,0,0,0.5)
    z-index 999
    cursor pointer
    transition all 0.2s linear 0s
    &:hover
      background rgba(0,0,0,0.7)
    @media only all and (max-width 1400px)
      right 5%
      bottom 80px
    @media only all and (max-width 768px)
      display none
</style>

<!-- 打字机插件 -->
<template>
   <div :style="styleSheet" class="typed-wrapper">
       {{def_str}}{{typeStr}}
   </div>
</template>
<script type="text/ecmascript-6">
    export default {
        props: {
            // 默认不变字符串
            def_str: {
                type: String,
                default: 'Please input : '
            },
            // typed字符串
            type_str: {
                type: Array,
                default: () => {
                    return ['code' , 'string' , 'hello world !'];
                }
            },
            // 打字速度
            speed: {
                type: Number,
                default: 100
            },
            styleSheet: {
                type: Object,
                default: () => {
                    return {
                        // color
                        'color': '#fff',
                        // font-size
                        'font-size': '16px',
                        // font-weight
                        'font-weight': '500',
                        // line-height
                        'line-height': '16px'
                    };
                }
            }
        },
        data() {
            return {
                typeStr: ''
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .typed-wrapper
        position relative
</style>

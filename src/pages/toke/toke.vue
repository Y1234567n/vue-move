<template>
  <div>
   
    <section class="content">
            <!--首页外卖-->
      <div class="on">
        <section class="msite">     
          <!--首页导航-->
           <Header :title="location.name" >
               <span class="header_search" slot="left">
              <i class="iconfont icon-sousuo"></i>
            </span>
            <span class="header_login"  slot="right">
              <span class="header_login_text">登录|注册</span>
            </span>          
          </Header>
          <nav class="msite_nav">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in getTwoArr" :key="index">
                  <a href="javascript:" class="link_to_food" v-for="(foot,index) in item" :key="index">
                    <div class="food_container">
                      <img :src="'https://fuss10.elemecdn.com' + foot.image_url">
                    </div>
                    <span>{{foot.title}}</span>
                  </a>
                </div>
              <!-- ........ -->
              </div>
              <!-- Add Pagination -->
              <div class="swiper-pagination"></div>
            </div>
          </nav>
          <!--首页附近商家-->
          <div class="msite_shop_list">
            <div class="shop_header">
              <i class="iconfont icon-xuanxiang"></i>
              <span class="shop_header_title">附近商家</span>
            </div>
            <Shopslist />
          </div>
        </section>
      </div>  
    </section>
    <!--on表示显示，off表示关闭-->
  
  </div>
</template>

<script type="text/ecmascript-6">
  import Shopslist from '../../components/Shoplist'
  import { mapState } from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    components: { Shopslist },
    computed: {
      ...mapState({
        location: state => state.toke.location ,
        recomments: state => state.toke.recomments,
        getTwoArr () {
          const arrBig= []
          let arr2 = []
          this.recomments.forEach(item => {
            if(arr2.length === 0){
              arrBig.push(arr2)
            }
            arr2.push(item)
            if(arr2.length===8) {
              arr2 = []
            } 
          })
          return arrBig
        }
      })
    },
   async mounted() {
    this.$store.dispatch('getRecomment')
  
    const resvle = await this.$store.dispatch('getLocation')
    new Swiper('.swiper-container',{
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      }})
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .content  //每个页面的内容
    >div //决定哪个页面显示
      display none
      &.on
        display block
      >section
        &.msite  //首页
          width 100%
          .msite_nav
            bottom-border-1px(#e4e4e4)
            margin-top 45px
            height 200px
            background #fff
            .swiper-container
              width 100%
              height 100%
              .swiper-wrapper
                width 100%
                height 100%
                .swiper-slide
                  display flex
                  justify-content center
                  align-items flex-start
                  flex-wrap wrap
                  .link_to_food
                    width 25%
                    .food_container
                      display block
                      width 100%
                      text-align center
                      padding-bottom 10px
                      font-size 0
                      img
                        display inline-block
                        width 50px
                        height 50px
                    span
                      display block
                      width 100%
                      text-align center
                      font-size 13px
                      color #666
              .swiper-pagination
                >span.swiper-pagination-bullet-active
                  background #02a774
          .msite_shop_list
            top-border-1px(#e4e4e4)
            margin-top 10px
            background #fff
            .shop_header
              padding 10px 10px 0
              .shop_icon
                margin-left 5px
                color #999
              .shop_header_title
                color #999
                font-size 14px
                line-height 20px
           
</style>

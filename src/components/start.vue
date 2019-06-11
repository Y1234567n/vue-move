<template>
  <div>
    <div class="star" :class="`star-`+isSize">
      <span class="star-item " v-for="(item, index) in starts" :key="index" :class="item"></span>
    </div>
    <div class="rating_section">
      {{start}}
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
   props: {
      isSize:Number,
      start: Number
   },
   computed:{
     starts (){
       const startLenght = []
       const start = this.start
       const startOn = Math.floor(start)
       for (let i= 0; i < startOn; i++) {
        startLenght.push('on')        
       }
       if((start*10 - startOn*10) >= 5){
        startLenght.push('half')   
       }
       if(startLenght.length<5){
        startLenght.push('off') 
       }
        return startLenght
     }
   }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../common/stylus/mixins.styl'
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/stars/star48_on')
        &.half
          bg-image('./images/stars/star48_half')
        &.off
          bg-image('./images/stars/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/stars/star36_on')
        &.half
          bg-image('./images/stars/star36_half')
        &.off
          bg-image('./images/stars/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/stars/star24_on')
        &.half
          bg-image('./images/stars/star24_half')
        &.off
          bg-image('./images/stars/star24_off')
  .rating_section
          float left
          font-size 10px
          color #ff6000
          margin-left 4px
  
</style>

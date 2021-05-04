<template>
  <div class="footer">
    <div
      class="icons"
      v-if="social && social.icons"
    >
      <a
        :href="item.link"
        :title="item.title"
        :class="['iconfont', item.iconClass]"
        v-for="(item, index) in social.icons"
        :key="index"
        target="_blank"
      ></a>
    </div>

    <!--Vdoing主题遵循MIT协议，完全开源且免费。如果您对主题的修改并不大，希望您保留主题的链接。-->
    Theme by
    <a
      href="https://github.com/xugaoyi/vuepress-theme-vdoing"
      target="_blank"
      title="本站主题"
    >Vdoing</a>
    
    <template v-if="footer">
      | Copyright © {{ footer.createYear }}-{{ test() }} 
      <span
        v-html="footer.copyrightInfo"  
      ></span> 
      <p>
        本网站已在灾难中运行: {{ thisRunTime }}
      </p>
    </template>
  </div>
</template>
 
<script>
export default {
  data(){
    return{
      thisRunTime: ' ',
    };
  },
  computed: {//计算
    social () {
      return this.$themeConfig.social
    },
    footer () {
      return this.$themeConfig.footer
    }
  },
  mounted(){//页面加载调用
    this.$nextTick(()=>{
           setInterval(()=> {
             this.thisRunTime = this.runTime();
            }, 1000);
    });
  },
  
    //  mounted () {
    //     this.thisRunTime = this.runTime()
    //     let _this = this
    //     this.timer = setInterval(function () {
    //         _this.runTime = _this.runTime()
    //     }, 1000)
    //  },
  methods:{//写函数||方法
    test(ev){
      return new Date().getFullYear()
    },
    runTime(){
      let d = new Date(), str = '',
      BirthDay = new Date("October 1,2019"),
      today = new Date(),
      timeold = (today.getTime() - BirthDay.getTime()),
      sectimeold = timeold / 1000,
      secondsold = Math.floor(sectimeold),
      msPerDay = 24 * 60 * 60 * 1000,
      msPerYear = 365 * 24 * 60 * 60 * 1000,
      e_daysold = timeold / msPerDay,
      e_yearsold = timeold / msPerYear,
      daysold = Math.floor(e_daysold),
      yearsold = Math.floor(e_yearsold);
      //str = yearsold + "年";
      str += daysold + "天";
      str += d.getHours() + '时';
      str += d.getMinutes() + '分';
      str += d.getSeconds() + '秒';
      console.log(str);
      return str;
      // // 初始时间，日/月/年 时:分:秒
      //   X = new Date("11/18/2016 8:32:00");
      //   Y = new Date();
      //   T = (Y.getTime()-X.getTime());
      //   M = 24*60*60*1000;
      //   a = T/M;
      //   A = Math.floor(a);
      //   b = (a-A)*24;
      //   B = Math.floor(b);
      //   c = (b-B)*60;
      //   C = Math.floor((b-B)*60);
      //   D = Math.floor((c-C)*60);
      //   //信息写入到DIV中
      //   span.innerHTML = "本站勉强运行: "+A+"天"+B+"小时"+C+"分"+D+"秒"
    },
  },
}
</script>

<style lang='stylus'>
// $mobileSidebarWidth = $sidebarWidth * 0.82
.footer
  padding 5rem 1.5rem 2.5rem
  text-align center
  color #666
  box-sizing border-box
  font-size 0.85rem
  transition all 0.2s ease
  .icons
    margin-bottom 12px
    .iconfont
      padding 0 10px
      font-size 1.3rem
  a
    color inherit
    &:hover
      color $accentColor
@media (min-width ($MQMobile + 1px))
  .sidebar-open .footer
    width auto
    padding-left ($sidebarWidth + 1.5rem)
@media (min-width 1520px)
  .have-rightmenu .footer
    padding-right ($rightMenuWidth + 1.5rem)
.no-sidebar .footer
  width auto
  padding-left 1.5rem
</style>

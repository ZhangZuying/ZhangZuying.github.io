<template>
  <div class="home-wrapper">
    <!-- banner块 s -->
    <div
      class="banner"
      :class="{ 'hide-banner': !showBanner }"
      :style="bannerBgStyle"
    >
      <div
        class="banner-conent"
        :style="
          !homeData.features && !homeData.heroImage && `padding-top: 7rem`
        "
      >
        <header class="hero">
          <img
            v-if="homeData.heroImage"
            :src="$withBase(homeData.heroImage)"
            :alt="homeData.heroAlt"
          />
          <h1 v-if="homeData.heroText" id="main-title">
            {{ homeData.heroText }}
          </h1>
          <p v-if="homeData.tagline" class="description">
            {{ homeData.tagline }}
          </p>
          <p class="action" v-if="homeData.actionText && homeData.actionLink">
            <NavLink class="action-button" :item="actionLink" />
          </p>
        </header>

        <!-- PC端features块 s -->
        <div class="features" v-if="hasFeatures && !isMQMobile">
          <div
            class="feature"
            v-for="(feature, index) in homeData.features"
            :key="index"
          >
            <router-link v-if="feature.link" :to="feature.link">
              <img
                class="feature-img"
                v-if="feature.imgUrl"
                :src="$withBase(feature.imgUrl)"
                :alt="feature.title"
              />
              <h2>{{ feature.title }}</h2>
              <p>{{ feature.details }}</p>
            </router-link>
            <a v-else href="javascript:;">
              <img
                class="feature-img"
                v-if="feature.imgUrl"
                :src="$withBase(feature.imgUrl)"
                :alt="feature.title"
              />
              <h2>{{ feature.title }}</h2>
              <p>{{ feature.details }}</p>
            </a>
          </div>
        </div>
        <!-- PC端features块 e -->
      </div>

      <!-- 移动端features块 s -->
      <!-- isMQMobile放到v-if上线后会报错 -->
      <div class="slide-banner" v-if="hasFeatures" v-show="isMQMobile">
        <div class="banner-wrapper">
          <div class="slide-banner-scroll" ref="slide">
            <div class="slide-banner-wrapper">
              <div
                class="slide-item"
                v-for="(feature, index) in homeData.features"
                :key="index"
              >
                <router-link v-if="feature.link" :to="feature.link">
                  <img
                    class="feature-img"
                    v-if="feature.imgUrl"
                    :src="$withBase(feature.imgUrl)"
                    :alt="feature.title"
                  />
                  <h2>{{ feature.title }}</h2>
                  <p>{{ feature.details }}</p>
                </router-link>
                <a v-else href="javascript:;">
                  <img
                    class="feature-img"
                    v-if="feature.imgUrl"
                    :src="$withBase(feature.imgUrl)"
                    :alt="feature.title"
                  />
                  <h2>{{ feature.title }}</h2>
                  <p>{{ feature.details }}</p>
                </a>
              </div>
            </div>
          </div>
          <div class="docs-wrapper">
            <span
              class="doc"
              v-for="(item, index) in homeData.features.length"
              :key="index"
              :class="{ active: currentPageIndex === index }"
            ></span>
          </div>
        </div>
      </div>
      <!-- 移动端features块 e -->
    </div>
    <!-- banner块 e -->

    <MainLayout>
      <template #mainLeft>
        <!-- 简约版文章列表 -->
        <UpdateArticle
          class="card-box"
          v-if="homeData.postList === 'simple'"
          :length="homeData.simplePostListLength || 10"
          :moreArticle="
            $themeConfig.updateBar && $themeConfig.updateBar.moreArticle
          "
        />

        <!-- 详情版文章列表 -->
        <template
          v-else-if="!homeData.postList || homeData.postList === 'detailed'"
        >
          <PostList :currentPage="currentPage" :perPage="perPage" />
          <Pagination
            :total="total"
            :perPage="perPage"
            :currentPage="currentPage"
            @getCurrentPage="handlePagination"
            v-show="Math.ceil(total / perPage) > 1"
          />
        </template>

        <Content class="theme-vdoing-content custom card-box" />
      </template>

      <template v-if="!homeData.hideRightBar" #mainRight>
        <BloggerBar v-if="$themeConfig.blogger" />
        <CategoriesBar
          v-if="
            $themeConfig.category !== false &&
            $categoriesAndTags.categories.length
          "
          :categoriesData="$categoriesAndTags.categories"
          :length="10"
        />
        <TagsBar
          v-if="$themeConfig.tag !== false && $categoriesAndTags.tags.length"
          :tagsData="$categoriesAndTags.tags"
          :length="30"
        />

        <div
          class="custom-html-box card-box"
          v-if="homeSidebarB"
          v-html="homeSidebarB"
        ></div>
      </template>
    </MainLayout>
  </div>
</template>

<script>
import NavLink from "@theme/components/NavLink";
import BScroll from "@better-scroll/core"
import Slide from "@better-scroll/slide"
import MainLayout from '@theme/components/MainLayout'
import PostList from '@theme/components/PostList'
import UpdateArticle from '@theme/components/UpdateArticle'
import Pagination from '@theme/components/Pagination'
import BloggerBar from '@theme/components/BloggerBar'
import CategoriesBar from '@theme/components/CategoriesBar'
import TagsBar from '@theme/components/TagsBar'

const MOBILE_DESKTOP_BREAKPOINT = 720 // refer to config.styl

BScroll.use(Slide)

export default {
  data() {
    return {
      isMQMobile: false,

      slide: null,
      currentPageIndex: 0,
      playTimer: 0,
      mark: 0,

      total: 0, // 总长
      perPage: 10, // 每页长
      currentPage: 1// 当前页
    }
  },
  computed: {
    homeData() {
      return {
        ...this.$page.frontmatter
      }
    },
    hasFeatures() {
      return !!(this.homeData.features && this.homeData.features.length)
    },
    homeSidebarB() {
      const { htmlModules } = this.$themeConfig
      return htmlModules ? htmlModules.homeSidebarB : ''
    },
    showBanner() { // 当分页不在第一页时隐藏banner栏
      return this.$route.query.p
        && this.$route.query.p != 1
        && (!this.homeData.postList || this.homeData.postList === 'detailed')
        ? false : true
    },
    bannerBgStyle() {
      let bannerBg = this.homeData.bannerBg
      if (!bannerBg || bannerBg === 'auto') { // 默认
        if (this.$themeConfig.bodyBgImg) { // 当有bodyBgImg时，不显示背景
          return ''
        } else { // 网格纹背景
          return 'background-blend-mode: soft-light;background-size: 35px!important;background: rgb(9,132,254) url(data:image/png;base64,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)'
        }
      } else if (bannerBg === 'none') { // 无背景
        if (this.$themeConfig.bodyBgImg) {
          return ''
        } else {
          return 'background: var(--mainBg);color: var(--textColor)'
        }
      } else if (bannerBg.indexOf('background:') > -1) { // 自定义背景样式
        return bannerBg
      } else if (bannerBg.indexOf('.') > -1) { // 大图
        return `background: url(${this.$withBase(bannerBg)}) center center / cover no-repeat`
      }

    },
    actionLink() {
      return {
        link: this.homeData.actionLink,
        text: this.homeData.actionText
      };
    }
  },
  components: { NavLink, MainLayout, PostList, UpdateArticle, BloggerBar, CategoriesBar, TagsBar, Pagination },
  created() {
    this.total = this.$sortPosts.length
  },
  beforeMount() {
    this.isMQMobile = window.innerWidth < MOBILE_DESKTOP_BREAKPOINT ? true : false; // vupress在打包时不能在beforeCreate(),created()访问浏览器api（如window）
  },
  mounted() {
    if (this.$route.query.p) {
      this.currentPage = Number(this.$route.query.p)
    }

    if (this.hasFeatures && this.isMQMobile && (!this.$route.query.p || this.$route.query.p == 1)) {
      this.init()
    }

    if (this.hasFeatures) {
      window.addEventListener('resize', () => {
        this.isMQMobile = window.innerWidth < MOBILE_DESKTOP_BREAKPOINT ? true : false;
        if (this.isMQMobile && !this.slide && !this.mark) {
          this.mark++
          setTimeout(() => {
            this.init()
          }, 60)
        }
      })
    }
  },
  beforeDestroy() {
    clearTimeout(this.playTimer)
    this.slide && this.slide.destroy()
  },
  watch: {
    '$route.query.p'() {
      if (!this.$route.query.p) {
        this.currentPage = 1
      } else {
        this.currentPage = Number(this.$route.query.p)
      }

      if (this.hasFeatures && this.currentPage === 1 && this.isMQMobile) {
        setTimeout(() => {
          this.slide && this.slide.destroy()
          this.init()
        }, 0)
      }
    }
  },
  methods: {
    init() {
      clearTimeout(this.playTimer)
      this.slide = new BScroll(this.$refs.slide, {
        scrollX: true, // x轴滚动
        scrollY: false, // y轴滚动
        slide: {
          loop: true,
          threshold: 100
        },
        useTransition: true, // 使用css3 transition动画
        momentum: false,
        bounce: false, // 回弹
        stopPropagation: false, // 是否阻止事件冒泡
        probeType: 2,
        preventDefault: false
      })

      // user touches the slide area
      this.slide.on('beforeScrollStart', () => {
        clearTimeout(this.playTimer)
      })
      // user touched the slide done
      this.slide.on('scrollEnd', () => {
        this.autoGoNext()
      })
      this.slide.on('slideWillChange', (page) => {
        this.currentPageIndex = page.pageX
      })
      this.autoGoNext()
    },
    autoGoNext() {
      clearTimeout(this.playTimer)
      this.playTimer = setTimeout(() => {
        this.slide.next()
      }, 4000)
    },
    handlePagination(i) { // 分页
      this.currentPage = i
    },
    getScrollTop() {
      return window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop
    },
  },

};
</script>

<style lang="stylus" scoped>
.home-wrapper
  .banner
    width 100%
    min-height 450px
    margin-top $navbarHeight
    color $bannerTextColor
    position relative
    overflow hidden
    .banner-conent
      max-width $homePageWidth
      margin 0px auto
      position relative
      z-index 1
      overflow hidden
      .hero
        text-align center
        margin-top 3rem
        img
          max-width 100%
          max-height 240px
          display block
          margin 2rem auto 1.5rem
        h1
          margin 0
          font-size 3.2rem
        .description, .action
          margin 1.5rem auto
        .description
          max-width 40rem
          font-size 1.1rem
          line-height 1.3
          opacity 0.9
        .action-button
          display inline-block
          font-size 1.2rem
          background-color $accentColor
          padding 0.8rem 1.6rem
          border-radius 4px
          transition background-color 0.1s ease
          box-sizing border-box
          border-bottom 1px solid darken($accentColor, 10%)
          color #fff
          &:hover
            background-color lighten($accentColor, 10%)
      // pc端features
      .features
        padding 2rem 0
        margin-top 2.5rem
        display flex
        flex-wrap wrap
        align-items flex-start
        align-content stretch
        justify-content space-between
      .feature
        flex-grow 1
        flex-basis 30%
        max-width 30%
        text-align center
        a
          // color lighten($bannerTextColor,10%)
          color inherit
          .feature-img
            width 10rem
            height 10rem
            animation heart 1.2s ease-in-out 0s infinite alternate
            animation-play-state paused
          h2
            font-weight 500
            font-size 1.3rem
            border-bottom none
            padding-bottom 0
          p
            opacity 0.8
            padding 0 0.8rem
      .feature:hover
        .feature-img
          animation-play-state running
        h2, p
          color $accentColor
    // 移动端滑动图标
    .slide-banner
      margin-top 2rem
      .banner-wrapper
        position relative
      .slide-banner-scroll
        min-height 1px
        overflow hidden
      .slide-banner-wrapper
        height 300px
        .slide-item
          display inline-block
          height 300px
          width 100%
          text-align center
          a
            // color lighten($bannerTextColor,10%)
            color inherit
            .feature-img
              width 10rem
              height 10rem
            h2
              font-size 1.1rem
              font-weight 500
              border-bottom none
              padding-bottom 0
            p
              opacity 0.8
              padding 0 0.8rem
      .docs-wrapper
        position absolute
        bottom 25px
        left 50%
        transform translateX(-50%)
        .doc
          display inline-block
          margin 0 4px
          width 8px
          height 8px
          border-radius 50%
          background var(--textColor)
          opacity 0.9
          &.active
            opacity 0.5
  // 分页不在第一页时，隐藏banner栏
  .banner.hide-banner
    display none
    & + .main-wrapper
      margin-top: ($navbarHeight + 0.9rem)
  .main-wrapper
    margin-top 2rem
    .main-left
      .card-box
        margin-bottom 2rem
      .pagination
        margin-bottom 3rem
      .theme-vdoing-content
        padding 0 2rem
        overflow hidden
        border none
        &>:first-child
          padding-top 2rem
        &>:last-child
          padding-bottom 2rem
    .main-right
      .custom-html-box
        padding 0
        overflow hidden
@keyframes heart
  from
    transform translate(0, 0)
  to
    transform translate(0, 8px)
// 1025px以下
@media (max-width 1025px)
  .home-wrapper
    .banner
      .banner-conent
        .hero
          h1
            font-size 2.5rem
          .description
            font-size 1rem
        .feature
          a
            h2
              font-size 1.1rem
            .feature-img
              width 9rem
              height 9rem
// 719px以下
@media (max-width $MQMobile)
  .home-wrapper
    .banner
      .banner-conent
        .features
          display none !important
// 419px以下
@media (max-width $MQMobileNarrow)
  .home-wrapper
    .banner-conent
      padding-left 1.5rem
      padding-right 1.5rem
      .hero
        img
          max-height 210px
          margin 2rem auto 1.2rem
        h1
          font-size 2rem
        h1, .description, .action
          margin 1.2rem auto
        .description
          font-size 1.2rem
        .action-button
          font-size 1rem
          padding 0.6rem 1.2rem
      .feature
        h2
          font-size 1.25rem
.theme-style-line
  .main-wrapper
    @media (max-width 719px)
      margin-top -1px
</style>

/**
 * Created by gaochao on 6/9/17.
 */
/**
 * 公共方法
 */
export default{
  methods:{
    /**
     * 如何使用:
     * this.scroll((direction) => {
        this.tabDirection = direction
      })
     * @param fn
     */
    scroll (fn) {
      let beforeScrollTop = document.body.scrollTop
      window.addEventListener('scroll', function () {
        let afterScrollTop = document.body.scrollTop
        let delta = afterScrollTop - beforeScrollTop
        if (delta === 0) return false
        fn(delta > 0 ? 'down' : 'up')
        beforeScrollTop = afterScrollTop
      }, false)
    }
  }
}

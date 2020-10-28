import postMixin from '@theme/mixins/posts'
import localMixin from '@theme/mixins/locales'
import cdnMixin from '@theme/mixins/cdn'
import { registerCodeThemeCss } from '@theme/utils/other'

export default ({
  Vue,
  siteData,
  isServer
}) => {
  Vue.mixin(postMixin)
  Vue.mixin(localMixin)
  Vue.mixin(cdnMixin)
  if (!isServer) {
    registerCodeThemeCss(siteData.themeConfig.codeTheme)
  }
}
export default {
    methods: {
        $getCDNPath(oriPath) {
            const path = require('path')
            if (this.$themeConfig.cdn) return path.join(this.$themeConfig.cdn, oriPath)
            else return $withBase(oriPath)
        }
    }
}
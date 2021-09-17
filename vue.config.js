module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                @import "@/assets/scss/_12bool.scss";
                @import "@/assets/scss/_vars.scss";
                @import "@/assets/scss/_mixins.scss";
                `

            }
        }
    }
}
var path = require('path');

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    resolve:{
      alias:{
        Service: path.resolve(__dirname, `src/service/${process.env.VUE_APP_DATABASE}`)
      }
    }
  }
}
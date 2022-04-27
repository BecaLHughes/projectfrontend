const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})


// module.exports = {
//   runtimeCompiler: true,
//   css: {
//     loaderOptions: {
//       sass: {
//         data: `@import "scss/_variables.scss";`
//       }
//     }
//   }
// }

module.exports = {
    runtimeCompiler: true,
    css: {
      loaderOptions: {
        sass: {
          data: `@import "scss/_variables.scss";`
        }
      }
    }
  }
  
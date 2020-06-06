module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "src/stylesheets/_variables.scss";
        `,
      },
    },
  },
};

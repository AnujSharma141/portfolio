module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "portfolio",
  },
  plugins: [{
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: 'React go',
      short_name: 'Reactgo',
      start_url: '/',
      background_color: '#f7f0eb',
      theme_color: '#a2466c',
      display: 'standalone',
      icon: 'src/images/logo.svg',
    },
  },"gatsby-plugin-sass"],
};

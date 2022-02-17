module.exports = {
  siteMetadata: {
      title: `NewSite`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": ""
    }
  }]
};
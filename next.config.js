
const withMDX = require('@zeit/next-mdx')({
  extension: /\.(md|mdx)?$/
})

const nextServer = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
});

nextServer.target = 'serverless';

module.exports = nextServer;

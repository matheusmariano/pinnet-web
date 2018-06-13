module.exports = {
  use: [
    '@neutrinojs/airbnb',
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'app'
        },
        devServer: {
          port: process.env.DOCKER_NODE_PORT
        }
      }
    ],
    '@neutrinojs/jest'
  ]
};

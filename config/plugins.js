module.exports = {
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: true,
      defaultLimit: 10,
      maxLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
};

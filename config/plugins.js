module.exports = {
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: true,
      introspection: true,
      defaultLimit: 10,
      maxLimit: 100,
      apolloServer: {
        introspection: true,
        playground: true, // 👈 add this
      },
    },
  },
};

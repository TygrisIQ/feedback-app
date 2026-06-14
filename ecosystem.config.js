module.exports = {
  apps: [
    {
      name: "feedback-app",
      script: "server.js",
      env: {
        NODE_ENV: "production",
        PORT: 8080,
      },
    },
  ],
};

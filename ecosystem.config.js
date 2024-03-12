module.exports = {
    apps: [
      {
        name: "appetizer",
        script: "npm",
        env: {
          NODE_ENV: "production"
        },
        args: "run start"
      }
    ]
  };
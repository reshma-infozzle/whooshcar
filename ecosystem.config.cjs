module.exports = {
  apps: [
    {
      name: "whooshcar",
      script: "server.ts",
      interpreter: "tsx",
      cwd: "/home/infozzle-admin/web/whooshcar.testingweblink.com/public_html",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};

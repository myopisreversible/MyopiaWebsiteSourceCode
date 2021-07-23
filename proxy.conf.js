const PROXY_CONFIG = [
  {
    context: [
      "/v0"
    ],
    "target": "https://firebasestorage.googleapis.com",
    // "target": "https://myopiacomment-e053.restdb.io",
    "secure": true,
    "changeOrigin": true,
    "logLevel": "debug"
  }
]
module.exports = PROXY_CONFIG;

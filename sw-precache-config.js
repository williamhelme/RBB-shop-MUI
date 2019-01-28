module.exports = {
  staticFileGlobs: ["build/static/css/**.css", "build/static/js/**.js"],
  swFilePath: "./build/service-worker.js",
  stripPrefix: "build/",
  navigateFallbackWhitelist: [/^(?!\/__)/, ' /getProjectConfig/'],
  importScripts: ["./service-worker-custom.js"],
  handleFetch: false
};

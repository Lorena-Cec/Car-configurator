self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [],
  "pages": {
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ],
    "/carselect": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/carselect.js"
    ],
    "/configurationExterior": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/configurationExterior.js"
    ],
    "/configurationInterior": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/configurationInterior.js"
    ],
    "/configurationSummary": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/configurationSummary.js"
    ],
    "/configurationView": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/configurationView.js"
    ],
    "/home": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/home.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];
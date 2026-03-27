exports.config = {
  runner: "local",
  specs: ["./test/specs/**/*.js"],
  maxInstances: 10,
  capabilities: [{ browserName: "chrome" }, { browserName: "MicrosoftEdge" }],
  logLevel: "info",
  framework: "mocha",
  reporters: [
    "spec",
    [
      "mochawesome",
      {
        outputDir: "./res/mochawesome-report",
        stdout: true,
        html: true,
        json: true,
      },
    ],
  ],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};

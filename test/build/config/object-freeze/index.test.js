"use strict";
const { resolve } = require("path");
const { run } = require("../../../utils/test-utils");

describe("config with `Object.freeze({})`", () => {
  it("should not throw error", async () => {
    const { exitCode, stderr, stdout } = await run(__dirname, [
      "-c",
      resolve(__dirname, "webpack.config.js"),
    ]);

    expect(exitCode).toBe(0);
    expect(stderr).toBeFalsy();
    expect(stdout).toBeTruthy();
  });
});

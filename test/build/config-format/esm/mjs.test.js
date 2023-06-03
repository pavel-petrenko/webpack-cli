const { run } = require("../../../utils/test-utils");

describe("webpack cli", () => {
  it("should support mjs config format", async () => {
    const { exitCode, stderr, stdout } = await run(__dirname, ["-c", "webpack.config.mjs"]);

    expect(exitCode).toBe(0);
    expect(stderr).toBeFalsy();
    expect(stdout).toBeTruthy();
  });
});

// test/seoHelpers.test.js

const assert = require('assert');
const { generateMetaTags } = require('../src/seoHelpers');
const Logger = require("logoligi");
const sinon = require("sinon");

describe("SEO Optimization Helpers", () => {
  describe("#generateMetaTags()", () => {
    const title = "Example Page";
    const description = "This is an example page for testing.";
    const keywords = "example, testing, SEO";

    const expectedMetaTags = `
<meta charset="UTF-8">
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="keywords" content="${keywords}">
<!-- Other meta tags for SEO -->
`;

    it("should return meta tags with given title, description, and keywords", () => {
      const generatedMetaTags = generateMetaTags(title, description, keywords);
      assert.strictEqual(generatedMetaTags, expectedMetaTags);
    });
    it("should log the generated meta tags when the environment is dev and log option is true", () => {
      // Stub the Logger.log method
      const logStub = sinon.stub(Logger, "log");

      // Temporarily change the environment to dev
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = "dev";

      generateMetaTags(title, description, keywords, { log: true });

      // Restore the original environment
      process.env.NODE_ENV = originalEnv;

      // Check if Logger.log was called with the expected meta tags
      assert(
        logStub.calledWith(expectedMetaTags, {
          color: "blue",
          bgColor: "white",
          box: "double",
        })
      );

      // Restore the original Logger.log method
      logStub.restore();
    });
  });
});

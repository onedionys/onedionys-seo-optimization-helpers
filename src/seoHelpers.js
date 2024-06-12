// src/seoHelpers.js

/**
 * SEO Optimization Helpers
 */
const Logger = require("logoligi");

// Get the current environment
const env = process.env.NODE_ENV;

/**
 * Function to generate meta tags for SEO optimization.
 * @param {string} title - The title of the page.
 * @param {string} description - The description of the page.
 * @param {string} keywords - The keywords related to the page.
 * @param {Object} options - Additional options.
 * @param {boolean} [options.log=false] - If true, the function will log the generated meta tags to the console in a dev environment.
 * @returns {string} - The meta tags for SEO optimization.
 */
function generateMetaTags(title, description, keywords, options = {}) {
  const metaTags = `
<meta charset="UTF-8">
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="keywords" content="${keywords}">
<!-- Other meta tags for SEO -->
`;

  // If the log option is true and the environment is dev, log the meta tags
  console.log(options, "env", env);
  if (options?.log && env !== "production") {
    console.log("logging meta tags");
    Logger.log(metaTags, {
      color: "blue",
      bgColor: "white",
      box: "double",
    });
  }

  return metaTags;
}

module.exports = {
  generateMetaTags,
};

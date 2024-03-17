// src/seoHelpers.js

/**
 * SEO Optimization Helpers
 */

/**
 * Function to generate meta tags for SEO optimization.
 * @param {string} title - The title of the page.
 * @param {string} description - The description of the page.
 * @param {string} keywords - The keywords related to the page.
 * @returns {string} - The meta tags for SEO optimization.
 */
function generateMetaTags(title, description, keywords) {
    const metaTags = `
        <meta charset="UTF-8">
        <title>${title}</title>
        <meta name="description" content="${description}">
        <meta name="keywords" content="${keywords}">
        <!-- Other meta tags for SEO -->
    `;
    return metaTags;
}

module.exports = {
    generateMetaTags,
};

// test/seoHelpers.test.js

const assert = require('assert');
const { generateMetaTags } = require('../src/seoHelpers');

describe('SEO Optimization Helpers', () => {
    describe('#generateMetaTags()', () => {
        it('should return meta tags with given title, description, and keywords', () => {
            const title = 'Example Page';
            const description = 'This is an example page for testing.';
            const keywords = 'example, testing, SEO';

            const expectedMetaTags = `
                <meta charset="UTF-8">
                <title>${title}</title>
                <meta name="description" content="${description}">
                <meta name="keywords" content="${keywords}">
                <!-- Other meta tags for SEO -->
            `;

            const generatedMetaTags = generateMetaTags(title, description, keywords);
            assert.strictEqual(generatedMetaTags, expectedMetaTags);
        });
    });
});

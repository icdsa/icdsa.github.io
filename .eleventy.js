function configureMarkdownIt() {
  // reference: https://github.com/markdown-it/markdown-it-container/issues/23

  return require("markdown-it")({ html: true })
    .use(require('markdown-it-attrs'))
    .use(require('markdown-it-container'), 'dynamic', {
      validate: function () { return true; },
      render: function (tokens, idx) {
        const token = tokens[idx];
        if (token.nesting === 1) {
          return '<div class="' + token.info.trim() + '">';
        } else {
          return '</div>';
        }
      }
    });
}

// This block defines the configuration settings for 11ty
module.exports = function (eleventyConfig) {

    // Set the markdown configuration in 11ty
    eleventyConfig.setLibrary("md", configureMarkdownIt());

    // Recursively copy over all files from src/assets to public/assets
    eleventyConfig.addPassthroughCopy("src/assets");

    // Copy the CNAME file so our custom domain works
    eleventyConfig.addPassthroughCopy("CNAME");

	return {
        dir: {
            input:  "src",           // set the source directory from where Markdown and template files are read
            output: "public"         // set the output directory where HTML is written
        },
        passthroughFileCopy: true    // enable the above .addPassthroughCopy settings
    }
};
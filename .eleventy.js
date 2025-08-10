const { filenameFormat } = require("@11ty/eleventy-img/src/image-path");

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

    eleventyConfig.addPlugin(require("@11ty/eleventy-img").eleventyImageTransformPlugin, {
        // output image formats
        formats: ["avif", "png", "webp", "jpeg"],

        // output image widths
        widths: [ 320, 760, 1500],

        htmlOptions: {
            imgAttributes: {
                loading: "lazy",
                decoding: "async"
            },
            pictureAttributes: {}
        },
        hashLength: 16,
        filenameFormat: function (id, src, width, format, options) {
            return `${id}-${width}.${format}`
        }
    });

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
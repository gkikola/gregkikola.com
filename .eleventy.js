const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  // Output directory: _site

  // Load plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Passthrough copies
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("dl");
  eleventyConfig.addPassthroughCopy("dl/guides");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("LICENSE.txt");
  eleventyConfig.addPassthroughCopy("README.md");
  eleventyConfig.addPassthroughCopy("contact/gkikola-pubkey.txt");
  eleventyConfig.addPassthroughCopy("projects/nonny/img");
}

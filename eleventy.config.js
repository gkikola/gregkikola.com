import eleventyNavigationPlugin from '@11ty/eleventy-navigation';
import prettier from 'prettier';

export default async function (eleventyConfig) {
  // Output directory: _site

  // Load plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Transforms
  eleventyConfig.addTransform('prettier', async function (content) {
    const path = this.page?.outputPath || '';
    const pathLower = path.toLowerCase();
    if (pathLower.endsWith('.html') || pathLower.endsWith('.js')) {
      const options = await prettier.resolveConfig(path);
      return prettier.format(content, { ...options, filepath: path });
    }
  });

  // Passthrough copies
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('dl');
  eleventyConfig.addPassthroughCopy('dl/guides');
  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addPassthroughCopy('CNAME');
  eleventyConfig.addPassthroughCopy('LICENSE.txt');
  eleventyConfig.addPassthroughCopy('README.md');
  eleventyConfig.addPassthroughCopy('contact/gkikola-pubkey.txt');
  eleventyConfig.addPassthroughCopy('projects/nonny/img');
  eleventyConfig.addPassthroughCopy('projects/optionpp/docs/');
  eleventyConfig.addPassthroughCopy('projects/ww-score/');
}

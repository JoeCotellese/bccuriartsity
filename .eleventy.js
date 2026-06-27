module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  eleventyConfig.addFilter("currentYear", () => new Date().getFullYear());

  // Pull one section markdown file out of the `section` collection by its `key`.
  eleventyConfig.addFilter("section", (sections, key) =>
    sections.find((s) => s.data.key === key)
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};

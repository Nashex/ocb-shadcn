const withMarkdoc = require("@markdoc/next.js");

/** @type {import('next').NextConfig} */
const nextConfig = withMarkdoc({
  appDir: true,
  schemaPath: "./src/markdoc",
})({
  pageExtensions: ["md", "mdoc", "js", "jsx", "ts", "tsx"],
});

module.exports = nextConfig;

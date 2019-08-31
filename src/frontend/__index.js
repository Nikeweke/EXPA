const dirName = '/frontend/'

const files = [
  'web-comps.md',
  'cdn-links.md',
  'css-resources.md',
  'gulp.md',
  'webpack.md',
  'sass.md',
  'css-tricks.md',
  'js-cases.md',
  'js-es678.md',
  'js-plugins.md',
  'jq-validate.md',
  'animated-bg.md',
  'angular-js.md',
  'react-js.md'
]

module.exports = files.map((item) => dirName + item)
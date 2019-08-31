
const dirName = '/tools/'

const files = [
  'git.md',
  'mermaid.md',
  'apidoc.md',
  'jsdoc.md',
  'jsdoc-style-guide.md',
]

module.exports = files.map((item) => dirName + item)
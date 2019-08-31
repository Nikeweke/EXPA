const dirName = '/tests-cicd/'

const files = [
  'intro.md',
  'tests.md',
  'ci-cd.md',
]

module.exports = files.map((item) => dirName + item)
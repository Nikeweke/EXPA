const dirName = '/problems/'

const files = [
  'angular.md',
  'docker.md',
  'git.md',
  'node.md',
  'react-native.md',
  'unix.md',
]

module.exports = files.map((item) => dirName + item)
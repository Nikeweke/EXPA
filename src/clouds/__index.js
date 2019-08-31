const dirName = '/clouds/'
const files = [
  'firebase-db.md',
  'aws.md',
]

module.exports = files.map((item) => dirName + item)
const dirName = '/authes/'
const files = [
  'intro.md',
  'forms-jwt.md',
  'oauth.md',
  'oauth-google.md',
  'oauth-github.md',
  'auth-services.md',
]

module.exports = files.map((item) => dirName + item)
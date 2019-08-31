
const dirName = '/deploying/'
const files = [
  'heroku.md',
  'unix.md',
  'vps.md',
  'namecheap-domain-to-vps.md',
  'mailgun-mail/intro.md',
  'mailgun-mail/api.md',
  'mailgun-mail/smtp.md',
  'docker.md'
]

module.exports = files.map((item) => dirName + item)
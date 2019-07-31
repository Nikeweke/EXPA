module.exports = {
  title: 'Expa',
  description: 'Experience from IT world',
  base: '/EXPA/',
  dest: '../docs',
  port: '3000',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/'},
      { text: 'To repository', link: 'https://github.com/Nikeweke/EXPA/'},
    ],
    sidebar: [
      '/introduction.md',
      '/starter-kit.md',
      '/technologies.md',
      '/what-project-must-have.md',
      '/testing-app.md',
      '/loggers.md',

      {
        title: 'Frontend',
        collapsable: true,
        children: [
          '/frontend/cdn-links.md',
          '/frontend/css-resources.md',
          '/frontend/gulp.md',
          '/frontend/webpack.md',
          '/frontend/sass.md',
          '/frontend/css-tricks.md',
          '/frontend/js-cases.md',
          '/frontend/js-es678.md',
          '/frontend/js-plugins.md',
          '/frontend/jq-validate.md',
          '/frontend/animated-bg.md',
          '/frontend/angular-js.md',
          '/frontend/react-js.md'
        ]
      },
      {
        title: 'Tools',
        collapsable: true,
        children: [
          '/tools/apidoc.md',
          '/tools/git.md',
          '/tools/mermaid.md',
        ]
      },
      {
        title: 'Mobile development',
        collapsable: true,
        children: [
          '/mobile-dev/ionic.md',
          '/mobile-dev/react-native.md'
        ]
      },
      {
        title: 'Deploying',
        collapsable: true,
        children: [
          '/deploying/heroku.md',
          '/deploying/unix.md',
          '/deploying/vps.md',
          '/deploying/namecheap-domain-to-vps.md',
          '/deploying/mailgun-mail/intro.md',
          '/deploying/mailgun-mail/api.md',
          '/deploying/mailgun-mail/smtp.md',
          '/deploying/docker.md'
        ]
      },
      {
        title: 'Authentications',
        collapsable: true,
        children: [
          '/authes/intro.md',
          '/authes/forms-jwt.md',
          '/authes/oauth.md',
          '/authes/oauth-google.md',
          '/authes/oauth-github.md',
          '/authes/auth-services.md',
        ]
      },
      {
        title: 'Tests and CI/CD',
        collapsable: true,
        children: [
          '/tests-cicd/intro.md',
          '/tests-cicd/tests.md',
          '/tests-cicd/ci-cd.md',
        ]
      },
      {
        title: 'Clouds',
        collapsable: true,
        children: [
          '/clouds/firebase-db.md',
          '/clouds/aws.md',
        ]
      },
    ]
  }
}
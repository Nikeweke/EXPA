module.exports = {
  title: 'Expa',
  description: 'Experience from IT world',
  base: '/EXPA/',
  dest: '../docs',
  port: '3000',

  themeConfig: {
    nav: [{
      text: 'Home',
      link: '/'
    }, ],
    sidebar: [
      '/introduction.md',
      '/starter-kit.md',
      '/technologies.md',
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
          '/frontend/js-plugins.md',
          '/frontend/jq-validate.md',
          '/frontend/animated-bg.md',
          '/frontend/angular-js.md',
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
        title: 'Backend',
        collapsable: true,
        children: [
          '/backend/c-sharp.md',
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
        ]
      },
    ]
  }
}
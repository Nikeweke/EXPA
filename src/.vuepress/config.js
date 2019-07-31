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
        children: require('../frontend/__index')
      },
      {
        title: 'Tools',
        collapsable: true,
        children: require('../tools/__index')
      },
      {
        title: 'Mobile development',
        collapsable: true,
        children: require('../mobile-dev/__index')
      },
      {
        title: 'Deploying',
        collapsable: true,
        children: require('../deploying/__index')
      },
      {
        title: 'Authentications',
        collapsable: true,
        children: require('../authes/__index')
      },
      {
        title: 'Tests and CI/CD',
        collapsable: true,
        children: require('../tests-cicd/__index')
      },
      {
        title: 'Clouds',
        collapsable: true,
        children: require('../clouds/__index')
      },
    ]
  }
}
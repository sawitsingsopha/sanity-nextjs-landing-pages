export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f34b59302ed611e7e8c4a22',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-tgj55wfe',
                  apiId: 'f3d66643-b127-43fc-aa09-2f9758ada086'
                },
                {
                  buildHookId: '5f34b593704f82ae785f3d41',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ruct59x4',
                  apiId: '1e212901-2d50-450d-af5b-2ede6f70f19f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sawitsingsopha/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ruct59x4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

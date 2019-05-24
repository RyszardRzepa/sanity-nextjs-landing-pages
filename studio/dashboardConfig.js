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
                  buildHookId: '5ce793e129b1b4a3356ee7ff',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-frznaiyx',
                  apiId: '43bc0ec4-a224-406a-875f-1ce36806ab2a'
                },
                {
                  buildHookId: '5ce793e1eeb03fd761608337',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-oxbgwhwt',
                  apiId: '9fed164d-a0c5-4a23-b2d1-405c86033793'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RyszardRzepa/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-oxbgwhwt.netlify.com', category: 'apps'}
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

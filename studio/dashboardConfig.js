export default {
  widgets: [
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
                  buildHookId: '62fd4144287ee1095736e292',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-qbbnwhdd',
                  apiId: 'd30adea1-36ea-49a1-835c-4897ea0d5620'
                },
                {
                  buildHookId: '62fd414589d3c50c4101d64f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-8bw9gmuu',
                  apiId: '8c1614d8-5db7-43ac-8b32-0185db18f12d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marcobarbosa/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-8bw9gmuu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

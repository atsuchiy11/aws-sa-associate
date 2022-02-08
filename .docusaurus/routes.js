
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/aws-sa-associate/__docusaurus/debug',
    component: ComponentCreator('/aws-sa-associate/__docusaurus/debug','f9a'),
    exact: true
  },
  {
    path: '/aws-sa-associate/__docusaurus/debug/config',
    component: ComponentCreator('/aws-sa-associate/__docusaurus/debug/config','52e'),
    exact: true
  },
  {
    path: '/aws-sa-associate/__docusaurus/debug/content',
    component: ComponentCreator('/aws-sa-associate/__docusaurus/debug/content','ed1'),
    exact: true
  },
  {
    path: '/aws-sa-associate/__docusaurus/debug/globalData',
    component: ComponentCreator('/aws-sa-associate/__docusaurus/debug/globalData','34d'),
    exact: true
  },
  {
    path: '/aws-sa-associate/__docusaurus/debug/metadata',
    component: ComponentCreator('/aws-sa-associate/__docusaurus/debug/metadata','823'),
    exact: true
  },
  {
    path: '/aws-sa-associate/__docusaurus/debug/registry',
    component: ComponentCreator('/aws-sa-associate/__docusaurus/debug/registry','c58'),
    exact: true
  },
  {
    path: '/aws-sa-associate/__docusaurus/debug/routes',
    component: ComponentCreator('/aws-sa-associate/__docusaurus/debug/routes','d00'),
    exact: true
  },
  {
    path: '/aws-sa-associate/blog',
    component: ComponentCreator('/aws-sa-associate/blog','07c'),
    exact: true
  },
  {
    path: '/aws-sa-associate/blog/archive',
    component: ComponentCreator('/aws-sa-associate/blog/archive','539'),
    exact: true
  },
  {
    path: '/aws-sa-associate/blog/first-blog-post',
    component: ComponentCreator('/aws-sa-associate/blog/first-blog-post','fff'),
    exact: true
  },
  {
    path: '/aws-sa-associate/blog/long-blog-post',
    component: ComponentCreator('/aws-sa-associate/blog/long-blog-post','b18'),
    exact: true
  },
  {
    path: '/aws-sa-associate/blog/mdx-blog-post',
    component: ComponentCreator('/aws-sa-associate/blog/mdx-blog-post','1df'),
    exact: true
  },
  {
    path: '/aws-sa-associate/blog/tags',
    component: ComponentCreator('/aws-sa-associate/blog/tags','16a'),
    exact: true
  },
  {
    path: '/aws-sa-associate/blog/tags/docusaurus',
    component: ComponentCreator('/aws-sa-associate/blog/tags/docusaurus','5c7'),
    exact: true
  },
  {
    path: '/aws-sa-associate/blog/tags/facebook',
    component: ComponentCreator('/aws-sa-associate/blog/tags/facebook','ae3'),
    exact: true
  },
  {
    path: '/aws-sa-associate/blog/tags/hello',
    component: ComponentCreator('/aws-sa-associate/blog/tags/hello','8e6'),
    exact: true
  },
  {
    path: '/aws-sa-associate/blog/tags/hola',
    component: ComponentCreator('/aws-sa-associate/blog/tags/hola','142'),
    exact: true
  },
  {
    path: '/aws-sa-associate/blog/welcome',
    component: ComponentCreator('/aws-sa-associate/blog/welcome','295'),
    exact: true
  },
  {
    path: '/aws-sa-associate/markdown-page',
    component: ComponentCreator('/aws-sa-associate/markdown-page','fa1'),
    exact: true
  },
  {
    path: '/aws-sa-associate/docs',
    component: ComponentCreator('/aws-sa-associate/docs','2f3'),
    routes: [
      {
        path: '/aws-sa-associate/docs/intro',
        component: ComponentCreator('/aws-sa-associate/docs/intro','04f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/aws-sa-associate/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/aws-sa-associate/docs/tutorial-basics/congratulations','78d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/aws-sa-associate/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/aws-sa-associate/docs/tutorial-basics/create-a-blog-post','9dc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/aws-sa-associate/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/aws-sa-associate/docs/tutorial-basics/create-a-document','15d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/aws-sa-associate/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/aws-sa-associate/docs/tutorial-basics/create-a-page','cb8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/aws-sa-associate/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/aws-sa-associate/docs/tutorial-basics/deploy-your-site','35b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/aws-sa-associate/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/aws-sa-associate/docs/tutorial-basics/markdown-features','7d6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/aws-sa-associate/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/aws-sa-associate/docs/tutorial-extras/manage-docs-versions','c36'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/aws-sa-associate/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/aws-sa-associate/docs/tutorial-extras/translate-your-site','e0c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/aws-sa-associate/',
    component: ComponentCreator('/aws-sa-associate/','47e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];

module.exports = {
    title: 'Videos Documentation',
    description: 'Videos Documentation',
    base: '/docs/videos/',
    plugins: {
        '@vuepress/google-analytics': {
            'ga': 'UA-1547168-20'
        },
        'sitemap': {
            hostname: 'https://dukt.net/docs/videos/'
        },
    },
    theme: 'default-prefers-color-scheme',
    themeConfig: {
        docsRepo: 'dukt/videos-docs',
        docsDir: 'docs',
        docsBranch: 'v3',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        sidebar: {
            '/': [
                {
                    title: 'Videos plugin for Craft CMS',
                    collapsable: false,
                    children: [
                        '',
                        'requirements',
                        'installation',
                        'connect-youtube',
                        'connect-vimeo',
                        'configuration',
                    ]
                },
                {
                    title: 'Fields',
                    collapsable: false,
                    children: [
                        'video-field',
                    ]
                },
                {
                    title: 'Templates',
                    collapsable: false,
                    children: [
                        'twig-variables',
                    ]
                },
                {
                    title: 'Models',
                    collapsable: false,
                    children: [
                        'video-model',
                    ]
                },
            ],
        }
    }
}

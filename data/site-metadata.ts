export const SITE_METADATA = {
  title: 'Brainstorm Creative  - dev blog, insights, and ideas',
  author: 'Emily Christy',
  headerTitle: 'Brainstorm Creative',
  description:
    'A personal space where I document my software projects, sharing lessons, insights, and resources for fellow developers.',
  language: 'en-us',
  locale: 'en-US',
  stickyNav: true,
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.brainstormcreative.co.uk',
  siteRepo: '',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.jpg`,
  socialBanner: `${
    process.env.BASE_PATH || ''
  }/static/images/twitter-card.jpeg`,
  email: 'hello@brainstormcreative.co.uk',
  github: '',
  x: '',
  facebook: '',
  youtube: '',
  linkedin: 'https://www.linkedin.com/in/iamemilychristy',
  threads: '',
  instagram: '',
  goodreadsBookshelfUrl: '',
  goodreadsFeedUrl: '',
  imdbRatingsList: '',
  analytics: {
    umamiAnalytics: {
      websiteId: process.env.NEXT_UMAMI_ID,
      shareUrl: '',
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    giscusConfigs: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    kbarConfigs: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
  support: {
    buyMeACoffee: 'https://www.buymeacoffee.com/emilychristy',
    paypal: 'https://paypal.me/hta218?country.x=VN&locale.x=en_US',
    kofi: 'https://ko-fi.com/hta218',
  },
}

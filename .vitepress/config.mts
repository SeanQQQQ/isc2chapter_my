import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ISC2 Malaysia Chapter",
  description: "CONNECT | EDUCATE | INSPIRE | SECURE",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Membership', link: '/membership' },
      { text: 'Exclusive Event', link: '/exclusive-event' },
      { text: 'Partnership', link: '/partnership' },
      { text: 'Volunteer', link: '/volunteer' },
      { text: 'Exclusive Community Forum', link: '/exclusive-community-forum' },
      { text: 'Report a Security Issue', link: '/report-security-issue' },
      { text: 'Certification', link: '/certification' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Membership', link: '/membership' },
          { text: 'Exclusive Event', link: '/exclusive-event' },
          { text: 'Partnership', link: '/partnership' },
          { text: 'Volunteer', link: '/volunteer' },
          { text: 'Exclusive Community Forum', link: '/exclusive-community-forum' },
          { text: 'Report a Security Issue', link: '/report-security-issue' },
          { text: 'Certification', link: '/certification' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@ISC2MY' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/isc2-malaysia-chapter/' },
      { icon: 'facebook', link: 'https://www.facebook.com/ISC2MY' }
    ]
  }
})

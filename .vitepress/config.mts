import { defineConfig } from 'vitepress'

export default defineConfig({
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  title: "ISC2 Malaysia Chapter",
  description: "CONNECT | EDUCATE | INSPIRE | SECURE",
  themeConfig: {
    logo: '/logo.jpg',
    siteTitle: false,
    nav: [
      {
        text: 'Home',
        items: [
          { text: 'About Us', link: '/home' },
          { text: 'Board of Directors', link: '/home/board-of-directors' },
        ]
      },
      {
        text: 'Membership',
        items: [
          { text: 'About Membership', link: '/membership' },
          { text: 'Join the Chapter', link: '/membership/join-the-chapter' },
          { text: 'Merchandise', link: '/membership/merchandise' },
        ]
      },
      { text: 'Exclusive Event', link: '/exclusive-event' },
      { text: 'Volunteer', link: '/volunteer' },
      { text: 'Community', link: '/exclusive-community-forum' },
      { text: 'Certification', link: '/certification' },
      {
        text: 'Others',
        items: [
          { text: 'Report Issue', link: '/report-security-issue' },
          { text: 'Contribution Guide', link: '/contribution' },
        ]
      },
    ],
    sidebar: [
      {
        items: [
          {
            text: 'Home',
            items: [
              { text: 'About Us', link: '/home' },
              { text: 'Board of Directors', link: '/home/board-of-directors' },
            ]
          },
          {
            text: 'Membership',
            items: [
              { text: 'About Membership', link: '/membership' },
              { text: 'Join the Chapter', link: '/membership/join-the-chapter' },
              { text: 'Merchandise', link: '/membership/merchandise' },
            ]
          },
          { text: 'Exclusive Event', link: '/exclusive-event' },
          { text: 'Volunteer', link: '/volunteer' },
          { text: 'Community', link: '/exclusive-community-forum' },
          { text: 'Certification', link: '/certification' },
          {
            text: 'Others',
            items: [
              { text: 'Report Issue', link: '/report-security-issue' },
              { text: 'Contribution Guide', link: '/contribution' },
            ]
          },
        ]
      }
    ],
    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@ISC2MY' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/isc2-malaysia-chapter/' },
      { icon: 'facebook', link: 'https://www.facebook.com/ISC2MY' }
    ],
    footer: {
      message: 'Disclaimer: ISC2 does not own, operate, or moderate this website. All content of this material, exclusive of licensed trademarks, trade dress, or website format, is the property of ISC2 Malaysia Chapter, which is not owned, managed, or controlled by ISC2 and operates independent of ISC2.',
      copyright: 'Copyright &copy; ISC2 Malaysia Chapter. ISC2 Inc., All Rights Reserved. ISC2, CISSP, SSCP, CCSP, CGRC, CSSLP, HCISPP, CISSP-ISSAP, CISSP-ISSEP, CISSP-ISSMP and CBK are registered marks of ISC2, Inc.'
    }
  }
})

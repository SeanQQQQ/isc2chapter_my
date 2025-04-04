---
prev: false
next: false
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://openclipart.org/download/247319/abstract-user-flat-3.svg',
    name: 'CY Teng',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/cheeyuen-teng' },
      { icon: 'github', link: 'https://www.github.com/rethinksec' },
    ]
  },
  {
    avatar: 'https://openclipart.org/download/247319/abstract-user-flat-3.svg',
    name: 'You could be next!',
  },
]
</script>

# Thanks for Your Contribution!

First of all, thank you for your interest in contribute into this website. This guide will provide you a quick walkthrough on how to contribute & maintain this website together.

## Technology within this site
This website is built entirely via [Vitepress](https://vitepress.dev/). Hence it is important that you have read through the Vitepress documentation before you would like to contribute.

## How to Contribute
If you would like to contribute further. It is always welcome to submit a pull request via GitHub ([Learn about pull request here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)). Once you have submitted your pull request, our team will work closely to cehck if the changes are making sense, and we will merge the pull request if the changes are good enough.

## What I can contribute
You can contribute to any content, this including, but not limited to:
- Newsletter
- Fix typo
- Adding/Updating new links/images to current content

## What I can get after contribution?
If your pull request is accepted, we may asked for some of your personal information such as your LinkedIn profile, GitHub profile etc so we can include you into our Contributor list!

## Contributor list

The following list are the contributors of this website. Thanks again for your contribution!
<VPTeamMembers size="small" :members="members" />
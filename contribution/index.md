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
If you would like to contribute further. It is always welcome to submit a pull request via GitHub ([Learn about pull request here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)). Once you have submitted your pull request, our team will work closely to check if the changes are making sense, and we will merge the pull request if the changes are good enough.

If you are not familiar with creating content via Vitepress, you may also create an issue via GitHub ([Learn about create issue here](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue)), the technical team will assist to get it done.

## Where to Contribute?
### Pull Request
- If you are raising a pull request, you will need to fork the repository first ([Repository Link](https://github.com/ISC2-Malaysia-Chapter/isc2chapter_my))
- Once you are done with the updates, then you can raise a pull request ([Create Pull Requests here](https://github.com/ISC2-Malaysia-Chapter/isc2chapter_my/pulls))
- Include your pull requests title & description, and the technical team will then review at the soonest possible.

### Create Issue
- After you have created a GitHub account, you can create your issue ([Create your issue here](https://github.com/ISC2-Malaysia-Chapter/isc2chapter_my/issues)), and select "New Issue" > "Feature Request"
- From there then fill up the title & description as needed.
- The technical team will then review the request & try to make it happens.

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
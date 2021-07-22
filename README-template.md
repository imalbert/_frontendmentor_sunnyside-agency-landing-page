# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/profile/imalbert)
- Live Site URL: [Add live site URL here](https://frontendmentor-sunnyside-agency-landing-page.vercel.app/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

#### Hero background

```html
<!-- I always struggle and overthink hero layouts with background images under overlay text -->

<!-- one way is by setting the background <img> as position: absolute and the content as siblings -- which could not make it work to my liking -->

<!-- here's one way with background-image that I went with this time -->
<header>
  <div className={styles.hero}>
    <nav>About Services Projects Contact</nav>
    <main>
      <h1>We are creatives</h1>
      <Image src={ArrowDownIcon} alt="" />
    </main>
  </div>
</header>

<style>
.hero {
  min-height: 544px;
  background-color: #65BBF9;
  background-image: url('../images/mobile/image-header.jpg');
  background-size: cover;
  background-position-x: 50%;
  background-position-y: bottom;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
}
.hero>nav {
  text-align: right;
}
.hero>main {
  flex: 1;
  text-align: center;
  padding: 30px 20px;
}
</style>
```

#### Nextjs font optimization

```html
<!-- By default, Next.js will automatically inline font CSS at build time, eliminating an extra round trip to fetch font declarations. This results in improvements to First Contentful Paint (FCP) and Largest Contentful Paint (LCP). -->
<!-- https://nextjs.org/docs/basic-features/font-optimization -->

<!-- Before -->
<link
  href="https://fonts.googleapis.com/css2?family=Inter"
  rel="stylesheet"
/>

<!-- After "only on the prod build version" -->
<style data-href="https://fonts.googleapis.com/css2?family=Inter">
  @font-face{font-family:'Inter';font-style:normal...
</style>
```

```css
/* grids https://css-tricks.com/snippets/css/complete-guide-grid/ */

/* https://nextjs.org/docs/api-reference/next/image */
/* use nextjs <Image> layout="responsive" and objectFit="cover" -- check out the other props */

```


##### Best pratices when writing a title

https://dequeuniversity.com/rules/axe/4.2/document-title?application=axeAPI
Title is the first thing that screen reader users hear when they arrive at a page. Treat it as an overview of the page for ALL viewers.

- Don't duplicate titles across pages
- Put all unique info first; Company name/brand go after
- Make the page title match the top heading (ideally labelled as h1). `title` and `h2` elements essentially serve the same purpose

##### Landmarks

https://www.scottohara.me/blog/2018/03/03/landmarks.html

- Main landmark should not be contained in another landmark
- Document should not have more than one main landmark

#### Hiding components for nav

- [ ] https://www.accessibility-developer-guide.com/examples/hiding-elements/

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**

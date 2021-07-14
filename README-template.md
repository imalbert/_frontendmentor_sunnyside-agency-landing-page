# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

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

```

#### Hiding components for nav

https://www.accessibility-developer-guide.com/examples/hiding-elements/

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**

# Augemted Reality Website for *slanted*

This project was done for the
[Slanted Magazine #37—AI](https://www.slanted.de/product/slanted-magazine-37-ai/).

The aim of it was to create a web app that can detect images in the magazine and then
play related videos.

The base is a simple static website created with [gatsbyjs](https://www.gatsbyjs.com/).
On top of it I'm using [AR.js](https://ar-js-org.github.io/AR.js-Docs/), which is a library
designed to bring `augmented reality` to the web. It's features include `image tracking`,
`location based AR` and `marker tracking`.

For this usecase I was picking the `marker tracking` functionality because with that it is possible
to create `markers` for many different pictures and then show content when thy are detected by the
library.

The idea itself, creating `markers` for images, load them into the library and show content based on
what was found, sounds pretty easy, but there have been some problems to solve:

## Problems

### Performance issues with multiple markers
#### At the time of implementation the library was not jet designed to include a large ammount of `markers` and track them without creating `preformance issues`.

But the plan was to track `47 images` over `8 chapters` of the magazine. So I had to come up with a
solution for this problem. In my research I found out that it is possible to track around
`12 markers` at the same time without creating performance issues. So the idea was to split the
`images` into groups of around `12 markers`. There I got pretty lucky with the distribution of
images over the `8 chapters`. The chapter with the most images includes `14` and this was still ok
for the performance. So in the end the website was seperated into the `8 chapters` and for every
chapter only the included images are tracked.


### Combining modern javascript framework with the library
#### AR.js is not designed to be used in a modern javascript frameworks like `react`. Therefore it was tricky to include it in a way that everything was starting up correctly (`marker loading` and access to the `camera`).

As I'm coming from a background of extensivly using modern frontend frameworks like `vuejs` or
`react` I didn't want to miss out on all the convenience it gives me.
`AR.js` is sadly not a module based javascript library and not avaliable via the
`node package manager (npm)`, so I had to include it directly into the `head` of the `html document`.
This has some implications, as it is polluting the `global namespace` with it's definitions and it
is harder to get control of loading times and code execution times. So I hade to make sure that the
timings, of when is the react app loaded and when is the `AR.js library` loaded, correct. Luckily
there is some tooling around `react` called `gatsbyjs` that makes it easy to render the webpages on
the server side and only serve static web pages. This allowed me to use `react` and `AR.js` together.


### Not every browser is created equal
#### On mobile it didn't work well with every browser, so I had to find a workaround for browsers where the `AR functionality` didn't work as expected.

The solution of this problem was quite easy. Browsers where it didn't work well just show a fallback
webpage where the user can click on the title of the image in the magazine and then see the related
video.

## Conclusion
All in all I was pretty happy with the result, even when not everything worked as expected. In the
process of creating the website I learnd a lot about marker tracking and got interested in doing
more `augmented reality` projects.
For the future I would like to understand the mechanisms behind the `AR.js` library and maybe even
build my own library, to solve some of the problems I encountered.
Also it would be very interesting for me to find out what else is possible with `augmented reality`,
how we can benefit from using it in our society, where it makes sense and where not.
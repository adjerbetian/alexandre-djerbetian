# My personal website

![](https://github.com/adjerbetian/alexandre-djerbetian/workflows/End%20to%20end%20tests/badge.svg)
![](https://github.com/adjerbetian/alexandre-djerbetian/workflows/unit%20%26%20integration%20tests/badge.svg)

See https://alexandre.djerbetian.com

## Todo

- **Infrastructure**
  - [X] [improve typescript in monorepo](https://medium.com/@NiGhTTraX/how-to-set-up-a-typescript-monorepo-with-lerna-c6acda7d4559)
  - [X] automatic deploy workflow
  - [X] separate the server by domain module
  - [ ] try yarn 2
  - [ ] use [pre-rendering](https://github.com/chrisvfritz/prerender-spa-plugin)
- **General**    
  - [ ] add a link to the source code repository on github
  - [ ] change the home page picture
  - [ ] add the navbar for mobile
  - [ ] curve the navbar
- **Content**
  - [ ] convert all quotes to the new format
  - [ ] add the quotes for the new books
- **Quotes**
  - [ ] redesign the quote page
  - [X] add book filters
  - [ ] add pagination
  - [ ] add tag filters
  - [ ] add test for id unicity
  - [ ] add code coloration
  - [ ] add textual search
- **Quote of the day**
  - [ ] add the "quote of the day" feature
  - [ ] add the subscription to the *quote of the day*
- **Articles**
  - [ ] add an article section
  - [ ] add my video about Clean Architecture
  - [ ] add the slides of Clean Archi
  - [ ] write an article about ["Fuck classes, use factories"](https://github.com/360Learning/platform/pull/546#discussion_r422938352)

## Install

- prerequisites
  - docker
  - nodejs
- to run the site in production mode locally
  - `npm run prod`
- to develop locally
  - `npm run bootstrap`: install dependencies
  - `npm run dev`: run in a container in watch mode
- to run tests
  - `npm run test`: unit / integration
  - `npm run test:e2e`: e2e tests in a container
  - `npm run cypress`: opens cypress (requires the website to run locally)

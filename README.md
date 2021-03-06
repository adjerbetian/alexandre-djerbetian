# My personal website

![](https://github.com/adjerbetian/alexandre-djerbetian/workflows/End%20to%20end%20tests/badge.svg)
![](https://github.com/adjerbetian/alexandre-djerbetian/workflows/unit%20%26%20integration%20tests/badge.svg)

## Links:
- the website: https://alexandre.djerbetian.com
- [Cypress dashboard](https://dashboard.cypress.io/projects/iwigtu/runs)

## Todo

- **Infrastructure**
  - [X] [improve typescript in monorepo](https://medium.com/@NiGhTTraX/how-to-set-up-a-typescript-monorepo-with-lerna-c6acda7d4559)
  - [X] automatic deploy workflow
  - [X] separate the server by domain module
  - [X] use yarn workspaces
  - [X] enable the video download of cypress in Github actions
  - [ ] try yarn 2
  - [ ] try koa or fastify instead of express
  - [ ] use [pre-rendering](https://github.com/chrisvfritz/prerender-spa-plugin)
  - [ ] use test reports in Github actions
- **General**
  - [X] add a link to the source code repository on github
  - [X] change the home page picture
  - [X] update resume
  - [X] add slide in / fade in animations on resume page
  - [ ] add the navbar for mobile
  - [ ] curve the navbar
  - [ ] add a *Not Found* page
- **Content**
  - [X] convert all quotes to the new format
  - [ ] change quote rating from numbers to enum
  - [ ] add the quotes for the new books
- **Quotes**
  - [X] add book filters
  - [X] add test for id unicity
  - [X] add code coloration
  - [ ] redesign the quote page
  - [ ] add the personal comments
  - [ ] add pagination
  - [ ] add tag filters
  - [ ] add textual search
- **Quote of the week**
  - [ ] add the "*quote of the week*" feature on a page
    - one small quotes and one big quote, or 2 medium quotes
  - [ ] add a small *quote of the week* on the home page
  - [ ] add the subscription to the *quote of the week*
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
  - `yarn prod`
- to develop locally
  - `yarn bootstrap`: install dependencies
  - `yarn dev`: run in a container in watch mode
- to run tests
  - `yarn test`: unit / integration
  - `yarn test:e2e`: e2e tests in a container
  - `yarn cypress`: opens cypress (requires the website to run locally)

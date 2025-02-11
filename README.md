# Metapack: recruitment task

Create an application displaying GitHub users. Use [GitHub API](https://developer.github.com/v3/) as your data source.

Helpful links:

- [For fetching all users data](https://docs.github.com/en/rest/reference/users#list-users)
- [For fetching specific user data](https://docs.github.com/en/rest/reference/users#get-a-user)

## Designs

Here you can find a basic overview of the views in the app and some details on how things should work. Please check the _Designs.pdf_ attached to the task for more detals regarding the layout of the application.

1. Every card (white rectangle) has 20px padding on each side,
2. There is 30px padding around the application,
3. The maximum width of the application views on desktop should be 1130px,
4. The user image has different sizes:

- 76px x 76px in users list page,
- 120px x 120px in profile section of user details page.

Colors
#262626 - Base text
#999999 - Secondary text
#1A74FF - Link/button
#F5F5F5 - Background

Badges
#B3D1FF - Team A background
#0047B3 - Team A text
#FFD6C8 - Team B background
#C83300 - Team B text
#A6FCC8 - Team C background
#059E42 - Team C text

If font size is not specified for something -> it should be 14px.
If something is not specified - decide how should it look on your own.

### Home page

- Display a grid of GitHub users. One _user_ should have:
  - Avatar,
  - GitHub username (example: _@octocat_),
  - Id,
  - Team badge,
  - Link do their profile on GitHub (named _GitHub page_),
  - A button linking to their profile in your app (the _User Details page_),

#### Team badge

The team badge is assinged based on following rules:

- If user ID is a multiple of 4 we want to assign a Team A badge,
- If user ID is a multiple of 6 we want to assign a Team B badge,
- If user ID is a multiple of both 4 and 6 we want to assign a Team C badge,
- In every other case there should be no badge assigned.

### User details page

- This view should contain information about the chosen user:
  - Avatar,
  - Name,
  - GitHub username,
  - Id,
  - Team badge,
  - Link do their profile on GitHub,
- A _Back_ button, which, when clicked, should redirect the user to the home page.

## Bonus points

- In _Home page_:
  - Show a loading spinner before the users are fetched in Home.
  - Implement infinite scroll (fetch more users automatically after scrolling down).
  - The layout changes depending on the screen width:
    - When the screen width is less than _800px_ there should be 2 columns on users list page,
    - When screen size is less thant _420px_ there should be only one column,
    - When screen size is less than 420px there should be only one column on users list page.
- In _User Details page_:
  - Show a loading spinner when loading user data.
  - This view can additionaly contain information about the chosen user:
    - How many public repositories he has,
    - List of the repositories he has.
- _Everywhere_:
  - Create tests for one React component.
  - Create test for one Redux reducer.

# Tips

- For implement 'routing' we prefer `react-router` library, but you can use whatever you want.
- For implement 'fetching' we prefer `axios` library, but you can use whatever you want.
- Fix every linter errors and warrning. You can check any errors using `yarn lint`.
- Every page should work after refresh (including fetch data from API).
- There is no design for the spinner - you can come up with your own.
- As a part of the review we will read your commit history, so one commit history isn't the best idea.
- If you happen to exhaust the limit of available API calls, you can increase it by using a [GitHub personal access token](https://github.com/settings/tokens). For detailed instruction, see the [Rate limiting](https://developer.github.com/v3/#rate-limiting) chapter of GitHub API documentation.
- Don't worry if you don't know how to solve everything in this task. Do as much as you know :)

# Technology

This repository already includes React, Redux, CSS modules and TypeScript. You are free to choose whatever auxiliary libraries you like. You can also write a whole new app on your own if you don't want to use our skeleton.

# Submitting your work

To submit your work you should put the repository on a _private_ GitHub repository and invite _@kolodziejmarcin96_ as a collaborator.

Don't worry if you need a little assistance — if you have any questions, just shoot us an e-mail. We're happy to help.

# Getting started

```bash
# Install dependencies
yarn

# Start the server in development mode
yarn start

# Build for production
yarn build
```

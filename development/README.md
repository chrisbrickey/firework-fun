## Firework-Fun - development README

### How to run this program

##### During Development: use the 'lib' directory at the top level
- Move webpack.config.js to root level
- In package.json, replace "start" script with `"postinstall": "webpack --watch"`, ...OR...open root directory in the terminal and type the command: `webpack --watch`
- To run locally: Drag/drop the top-level file called `index.html` into the browser
- Move `index.html` to the top-level during development. You may need to alter some of the file path references during development because `index.html` and sound files are placed at different points in the file structure for development vs production.
- Make changes to the JS files within the /lib directory at the top level (not within the 'public folder').  Webpack will automatically adjust the bundle.js and bundle.js.map files in the /lib directory to reflect changes.
- When ready to transition to production, replace bundle.js and bundle.map.js in the /public/js directory with those from the top-level /lib directory (that you just altered). Don't forget to

##### During Production: use the 'public' directory
- `node server.js` runs the program locally from the 'public' directory
- From git master branch, `git push heroku master` to push changes to heroku
- Heroku app name: tranquil-waters-60122
- To view hosted version via custom domain: http://www.firework-fun.com

### Background

Firework-Fun is an activity that allows users to setup their own fireworks show by choosing the location, color and relative timing of fireworks. The setting is a night sky.

### Functionality & MVP  

In Firework-Fun, users will be able to:

- [ ] Select the color of individual fireworks
- [ ] Select the location at which fireworks will be deployed
- [ ] Hear (and mute) a firework
- [ ] Start and reset the display


In addition, this project will include:

- [ ] Instructions describing how to setup a custom fireworks show
- [ ] A production Readme

### Wireframes

Original plans included a modal to overlay the main screen showing the user how to build a fireworks display. I made the game more intuitive by condensing instruction into the labels for the buttons. This enables users to start the activity with minimal reading.

The single page of the app includes controls for selecting different fireworks, playing a customer show, clearing a custom show, playing a demo show, and muting/unmuting sound.

- [View Original Wireframes][wireframes]

[wireframes]: wireframes


### Architecture and Technologies

In this project I planned to implement the following technologies, but later made the design decision to write the entire app in vanilla JavaScript:

- Vanilla JavaScript for overall structure and game logic
- `Easel.js` with `HTML5 Canvas` for DOM manipulation and rendering
- `Tween.js` for firework trajectory
- `Sound.js` for firework 'boom' (may also be able to do this with vanilla JS soundboard)
- `Webpack` to bundle and serve up the various scripts

In addition to the webpack entry file, there will be three scripts involved in this project:

`display.js`: creates and updates the main page and instruction modal by rendering  Easel elements to the DOM.

`logic.js`: stores the firework details and the order of fireworks, handles the logic for showing the sequence  

`firework.js`: includes the constructor and update functions for the `firework` objects

### Implementation Timeline

**Day 1**

- Setup Node modules, create `webpack.config.js`, `package.json` and `entry.js`.
- Construct and connect script files.  
- Create successful build via heroku.
- Learn the basics of `HTML5 Canvas` and `Easel.js`.

**Day 2**

- Render outline of the main page.
- Add one firework to the display.
- Begin building the logic to control fireworks.
- Find sound file(s) for the fireworks.

**Day 3**

- Render details of display and user controls.
- Build remaining fireworks.
- Complete logic for saving and displaying fireworks.
- Connect to custom domain and setup binary canary.

**Day 4**:

- Render instructional modal.
- Refine app.


### Bonus features

- [ ] Add speed controller to speed up and slow down the fireworks display
- [ ] Select the order in which fireworks are deployed
- [ ] Enable users to build their own fireworks by designing color, shape, explosion trajectory

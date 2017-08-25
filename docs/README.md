## Firework-Fun

### How to run this program
- Open root directory in the terminal and type the command: `webpack --watch`
- To run locally and view immediate changes: Drag/drop the file called `index3.html` into the browser
- To view hosted version via github pages:  https://chrisbrickey.github.io/custom-fireworks3/index3.html
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

## Custom Fireworks

### Background

Custom Fireworks is an activity that allows users to setup their own fireworks show by choosing the location, color/shape and relative timing of fireworks. The setting is an urban skyline at night.

### Functionality & MVP  

In Custom Fireworks, users will be able to:

- [ ] Select the color/shape of individual fireworks
- [ ] Select the location at which fireworks will be deployed
- [ ] Allow multiple fireworks to be fired at the same time (e.g. finale where every firework goes off at once)
- [ ] Hear (and mute) the fireworks show
- [ ] Start, pause, and reset the display


In addition, this project will include:

- [ ] An About modal describing how to setup a custom fireworks show
- [ ] A production Readme

### Wireframes

When the user first opens the app, a modal will overlay the main screen showing the user how to build a fireworks display. This main page of the app will include user controls on the left and a display/viewer on the right. From the main page, the user can access this modal again and watch a demo display.  

- [View Wireframes][wireframes]

[wireframes]: wireframes


### Architecture and Technologies

This project will be implemented with the following technologies:

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

- [ ] Add speed controller to speed up and slow down the fireworks display (set up as input to setInterval)
- [ ] Select the order in which fireworks are deployed
- [ ] Enable users to build their own fireworks by designing color, shape, explosion trajectory, sound, etc.

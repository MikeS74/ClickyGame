# Clicky Game

 https://mikes74.github.io/ClickyGame/

## Click the images to shuffle up my friends! 
Future versions will include game functionality and scoreboard

## Requirements
- Create a React App that renders different images
- Each image should listen for click events
- Every time an image is clicked, all images should shuffle themselves
- Additional game functionality not featured here

## Technologies Used
- ReactJS & JSX
- Javascript ES6
- JSON
- React Component Modularization

## Code Explanation
JSON objects are imported into a main App.js file. The state of that data is then initialized. App.render maps the object data for use in React component props. React setState is used to modify the initial object data with onClick event listeners. New modified state data is used to render all corresponding components again.
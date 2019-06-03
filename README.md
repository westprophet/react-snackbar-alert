# react-snackbar-alert
Simple snackbar-style notifications for React

[![npm](https://img.shields.io/npm/v/react-snackbar-alert.svg)](https://npmjs.com/package/react-snackbar-alert)

[![CircleCI](https://circleci.com/gh/joeattardi/react-snackbar-alert.svg?style=svg)](https://circleci.com/gh/joeattardi/react-snackbar-alert)

## Prerequisites

React Snackbar Alert requires React 16 and styled-components 4 as peer dependencies:

    npm install --save react react-dom styled-components

## Installation

    npm install --save react-snackbar-alert

## API & Examples

[https://joeattardi.github.io/react-snackbar-alert/](https://joeattardi.github.io/react-snackbar-alert/)

## Usage

Snackbar notifications in 3 easy steps:

1. Import the `SnackbarManager` component
2. Add the `SnackbarManager` component to your application's `render` method and save it to a ref
3. Call `create` on the ref to create snackbar alerts

### Example

```javascript
  import React from 'react';
  import { SnackbarManager } from 'react-snackbar-alert';

  export default class App extends React.Component {
    constructor(props) {
      super(props);

      this.snackbarManager = React.createRef();

      this.showAlert = this.showAlert.bind(this);
    }

    showAlert() {
      this.snackbarManager.current.create({
        message: 'Hello World!'
      });
    }

    render() {
      return (
        <div>
          <SnackbarManager ref={this.snackbarManager} />
          <button onClick={this.showAlert}>Show Alert</button>
        </div>
      )
    }
  }
```

## Options

### `SnackbarManager` Props

The `SnackbarManager` component accepts the following props:

- `animationTimeout` - The duration of the show and hide animations, in milliseconds (default: 500)
- `component` - A custom component to use instead of the built-in `Snackbar` component
- `dismissable` - Whether or not the created snackbars can be manually dismissed by the user
- `pauseOnHover` - Whether or not a snackbar's timeout should be paused when it is hovered over (default: false)
- `position` - The position on screen to show the snackbars. One of `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right` (default: bottom)
- `progressBar` - Whether or not to show an animated progress bar showing the time before a snackbar is removed (default: true)
- `timeout` - The time before a snackbar is removed, in milliseconds (default: 3000)

### `SnackbarManager.create` Options

The `create` method of `SnackbarManager` accepts an options object, which can have the following properties:

- `animationTimeout` - The duration of the show and hide animations (overrides the timeout in `SnackbarManager`)
- `data` - Custom data to use when rendering a custom snackbar
- `dismissable` - Whether or not this snackbar can be manually dismissed by the user
- `message` - The message to display
- `pauseOnHover` - Whether or not to pause this snackbar on hover
- `progressBar` - Whether or not to show the progress bar for this snackbar
- `sticky` - Whether or not this snackbar should be sticky. Sticky snackbars are not automatically removed.
- `timeout` - The time before this snackbar is removed (overrides the timeout in `SnackbarManager`)

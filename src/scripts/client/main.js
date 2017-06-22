"use strict";

import './rAF-polyfill.js';
import { animate, guid } from './utils.js';
import state from './state.js';

animate();

/*
- setup pixi canvas
- create user on page load
-- assign color and guid to user
-- push user to state object
- get touch-add working
-- create node using user's color
-- save node info to nodes array
- share state over websockets
- update state object when socket info comes in
 */

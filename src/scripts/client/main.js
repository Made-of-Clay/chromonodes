"use strict";

import './rAF-polyfill.js';
import { animate, guid } from './utils.js';
import state from './state.js';

animate();

/*
TODO: setup pixi canvas
TODO: create user on page load
-- assign color and guid to user
-- push user to state object
TODO: get touch-add working
-- create node using user's color
-- save node info to nodes array
TODO: share state over websockets
TODO: update state object when socket info comes in
 */

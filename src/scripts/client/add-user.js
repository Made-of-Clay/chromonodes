"use strict";

import { guid, randomHex } from './utils.js';

export default function addUser(app) {
    let userID = guid();
    let color = randomHex();
    app.state.users[userID] = { color };

    app.state.currentUser = {
        userID, color
    };

    return app;
}
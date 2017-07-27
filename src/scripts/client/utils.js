"use strict";

export function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    // return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}

export function randomHex() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

export function getDistance(coords1, coords2) {
    return Math.sqrt(Math.pow((coords1.x - coords2.x), 2) + Math.pow((coords1.y - coords2.y), 2));
}

export function isNull(value) {
    return value === null;
}
export function isArray(value) {
    return Array.isArray(value);
}

export function coordsAreNull(obj) {
    return isNull(obj.x) && isNull(obj.y);
}

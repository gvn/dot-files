/*global slate: false */
/*jslint browser: false, sloppy: true, forin: true, plusplus: true, maxerr: 50, indent: 4 */

// CONFIG

slate.configAll({
    defaultToCurrentScreen: true,
    nudgePercentOf: 'screenSize',
    resizePercentOf: 'screenSize'
});

// WINDOW RESIZING

var moveLeft = slate.operation('move', {
    x: 'screenOriginX',
    y: 'screenOriginY',
    width: 'screenSizeX / 2',
    height: 'screenSizeY'
});

var moveRight = slate.operation('move', {
    x: 'screenOriginX + screenSizeX / 2',
    y: 'screenOriginY',
    width: 'screenSizeX / 2',
    height: 'screenSizeY'
});

var fullscreen = slate.operation('move', {
    x: 'screenOriginX',
    y: 'screenOriginY',
    width: 'screenSizeX',
    height: 'screenSizeY'
});

// BINDINGS

slate.bindAll({
    'up:ctrl;cmd': fullscreen,
    'left:ctrl;cmd': moveLeft,
    'right:ctrl;cmd': moveRight,

    // Most common apps on home row
    'j:f19': slate.operation('focus', {app: 'Google Chrome'}),
    'k:f19': slate.operation('focus', {app: 'Sublime Text 2'}),
    'l:f19': slate.operation('focus', {app: 'Terminal'}),

    'm:f19': slate.operation('focus', {app: 'Mail'}),
    'a:f19': slate.operation('focus', {app: 'Adium'}),
    'i:f19': slate.operation('focus', {app: 'iCal'}),
    'p:f19': slate.operation('focus', {app: 'Spotify'})
});

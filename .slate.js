/*global slate: false */
/*jslint browser: false, sloppy: true, forin: true, plusplus: true, maxerr: 50, indent: 4 */

/*
    TODO:

    - resize/move windows on screen plug/unplug
    - launch apps with f19 shortcuts if they're not already open

*/

// CONFIG

slate.configAll({
    defaultToCurrentScreen: true
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

var showAndFocusApp = function (appName) {
    return slate.operation('sequence', {
        'operations': [
            [slate.operation('focus', {app: appName})],
            [slate.operation('show', {app: appName})]
        ]
    });
};

// BINDINGS

slate.bindAll({
    'up:ctrl;cmd': fullscreen,
    'left:ctrl;cmd': moveLeft,
    'right:ctrl;cmd': moveRight,

    // Most common apps on home row
    'j:f19': showAndFocusApp('Google Chrome'),
    'k:f19': showAndFocusApp('Sublime Text 2'),
    'l:f19': showAndFocusApp('iTerm'),

    'm:f19': showAndFocusApp('Mail'),
    'a:f19': showAndFocusApp('Adium'),
    'i:f19': showAndFocusApp('iCal'),
    'p:f19': showAndFocusApp('Spotify')
});

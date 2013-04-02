/*global slate: false */
/*jslint browser: false, sloppy: true, forin: true, plusplus: true, maxerr: 50, indent: 4 */

/*
    TODO:

    - adium layout
    - 2 monitor layout
    - resize/move windows on screen plug/unplug
    - launch apps with f19 shortcuts if they're not already open

*/

// CONFIG

slate.configAll({
    defaultToCurrentScreen: true
});

// WINDOW RESIZING

var halfLeft = slate.operation('move', {
    x: 'screenOriginX',
    y: 'screenOriginY',
    width: 'screenSizeX / 2',
    height: 'screenSizeY'
});

var halfRight = slate.operation('move', {
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

var adiumChat = slate.operation('move', {
    x: 'screenOriginX + screenSizeX / 2',
    y: 'screenOriginY',
    width: 'screenSizeX * 0.4',
    height: 'screenSizeY * 0.666'
});

var showAndFocusApp = function (appName) {
    return slate.operation('sequence', {
        'operations': [
            [slate.operation('focus', {app: appName})],
            [slate.operation('show', {app: appName})]
        ]
    });
};

// LAYOUT HASHES

var hashes = {
    allWindowsFullscreen: {
        'operations': [fullscreen],
        'repeat': true
    }
};

// LAYOUTS

var oneMonitorLayout = slate.layout('oneMonitor', {
    'Sublime Text 2': hashes.allWindowsFullscreen,
    'iCal': hashes.allWindowsFullscreen,
    'Spotify': hashes.allWindowsFullscreen,
    'Mail': hashes.allWindowsFullscreen,
    'iTerm': hashes.allWindowsFullscreen,
    'Mou': hashes.allWindowsFullscreen,
    'Xcode': hashes.allWindowsFullscreen,

    'Adium': {
        'operations': [adiumChat],
        'repeat': false
    }
});

var twoMonitorLayout = slate.layout('twoMonitors', {
    // TODO
});

// LAYOUT OPERATIONS

var oneMonitor = slate.operation('layout', {name: oneMonitorLayout});
var twoMonitor = slate.operation('layout', {name: twoMonitorLayout});

// BINDINGS

slate.bindAll({
    'up:ctrl;cmd': fullscreen,
    'left:ctrl;cmd': halfLeft,
    'right:ctrl;cmd': halfRight,

    // Most common apps on home row
    'j:f19': showAndFocusApp('Google Chrome'),
    'k:f19': showAndFocusApp('Sublime Text 2'),
    'l:f19': showAndFocusApp('iTerm'),

    // Semi-common apps
    'm:f19': showAndFocusApp('Mail'),
    'a:f19': showAndFocusApp('Adium'),
    'i:f19': showAndFocusApp('iCal'),
    'p:f19': showAndFocusApp('Spotify'),

    // Manual environment-specific-layout triggers
    '1:f19': oneMonitor,
    '2:f19': twoMonitor
});

slate.on('screenConfigurationChanged', function (event) {
    if (slate.screenCount() === 2) {
        twoMonitor.run();
    } else if (slate.screenCount() === 1) {
        oneMonitor.run();
    }
});

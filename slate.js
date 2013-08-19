/*
    TODO:

    - adium on correct screen
    - launch apps with f19 shortcuts if they're not already open

*/

// CONFIG

var monitors = {
    viewsonic: '1920x1080',
    mbp: '1680x1050'
};

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

var fullscreen2 = slate.operation('move', {
    x: 'screenOriginX',
    y: 'screenOriginY',
    width: 'screenSizeX',
    height: 'screenSizeY',
    screen: 'monitors.viewsonic'
});

var adiumChat = slate.operation('move', {
    x: 'screenOriginX + screenSizeX / 2',
    y: 'screenOriginY',
    width: 'screenSizeX * 0.4',
    height: 'screenSizeY * 0.666'
});

var adiumContacts = slate.operation('corner', {
    direction: 'top-right',
    width: 'screenSizeX * 0.1',
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
    },
    allWindowsFullscreen2: {
        'operations': [fullscreen2],
        'repeat': true
    },
    adium: {
        'operations': [adiumContacts, adiumChat],
        'title-order' : ['Contacts'],
        'repeat-last': true,
        'ignore-fail': true
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
    'Adium': hashes.adium
});

var twoMonitorLayout = slate.layout('twoMonitors', {
    'Sublime Text 2': hashes.allWindowsFullscreen,
    'iCal': hashes.allWindowsFullscreen2,
    'Spotify': hashes.allWindowsFullscreen2,
    'Mail': hashes.allWindowsFullscreen2,
    'iTerm': hashes.allWindowsFullscreen,
    'Mou': hashes.allWindowsFullscreen,
    'Xcode': hashes.allWindowsFullscreen,
    'Adium': hashes.adium
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
    'k:f19': showAndFocusApp('Sublime Text'),
    'l:f19': showAndFocusApp('iTerm'),
    ';:f19': showAndFocusApp('Adium'),

    // Semi-common apps
    'm:f19': showAndFocusApp('Mail'),
    'i:f19': showAndFocusApp('iCal'),
    'p:f19': showAndFocusApp('Spotify'),
    'f:f19': showAndFocusApp('Finder'),

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

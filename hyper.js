module.exports = {
  config: {
    modifierKeys: {
      altIsMeta: true
    },

    // default font size in pixels for all tabs
    fontSize: 10,

    // font family with optional fallbacks
    fontFamily: '"Meslo LG L", Menlo, monospace',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: 'rgba(90, 247, 142, 0.8)',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'UNDERLINE',

    // color of the text
    foregroundColor: '#fff',

    // terminal background color
    backgroundColor: '#282a36',

    // border color (window, tabs)
    borderColor: 'rgba(100, 100, 100, 0.6)',

    // custom css to embed in the main window
    css: `
      .tab_tab:not(.tab_active) {
        color: rgba(255, 255, 255, 0.3);
        transition: none;
      }

      .tab_tab.tab_active {
        color: rgba(255, 255, 255, 0.9);
        transition: color 50ms ease-in;
      }
    `,

    // set to `true` if you're using a Linux set up
    // that doesn't shows native menus
    // default: `false` on Linux, `true` on Windows (ignored on macOS)
    showHamburgerMenu: '',

    // set to `false` if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` on windows and Linux (ignored on macOS)
    showWindowControls: '',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '10px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#000000',
      red: '#ff6e67',
      green: '#5af78e',
      yellow: '#f4f99d',
      blue: '#caa9fa',
      magenta: '#ff92d0',
      cyan: '#9aedfe',
      white: '#c7c7c7',
      lightBlack: '#808080',
      lightRed: '#ff6e67',
      lightGreen: '#5af78e',
      lightYellow: '#f4f99d',
      lightBlue: '#caa9fa',
      lightMagenta: '#ff92d0',
      lightCyan: '#9aedfe',
      lightWhite: '#ffffff'
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    shell: '',

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to false for no bell
    bell: 'SOUND',

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: true,

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg

    // Plugin configs

    paneNavigation: {
      hotkeys: {
        navigation: {
          up: 'command+alt+k',
          down: 'command+alt+j',
          left: 'command+alt+h',
          right: 'command+alt+l'
        },
        jump_prefix: 'command+alt' // completed with 1-9 digits
      },
      showIndicators: false,
      focusOnMouseHover: false
    }
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    "hyper-pane",
    "hypercwd"
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};

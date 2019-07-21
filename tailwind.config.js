/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.
*/
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    colors: {
      'transparent': 'transparent',

      'black': '#00090A',
      'grey-darkest': '#111010',
      'grey-darker': '#2a2828',
      'grey-dark': '#464242',
      'grey': '#706969',
      'grey-light': '#978e8e',
      'grey-lighter': '#c2b6b6',
      'grey-lightest': '#fff7f7',
      'white': '#ffffff',

      'red-darkest': '#0e0100',
      'red-darker': '#4f0802',
      'red-dark': '#950d1d',
      'red': '#dd2238',
      'red-light': '#f55265',
      'red-lighter': '#fe8b99',
      'red-lightest': '#ffc8cf',

      'yellow-darkest': '#665E02',
      'yellow-darker': '#A99D08',
      'yellow-dark': '#DACB0D',
      'yellow': '#F8E71C',
      'yellow-light': '#FFF35D',
      'yellow-lighter': '#FFF575',
      'yellow-lightest': '#FFFBCA',

      'blue-darkest': '#00353F',
      'blue-darker': '#007A83',
      'blue-dark': '#009299',
      'blue': '#00D1D0',
      'blue-light': '#00E8D8',
      'blue-lighter': '#A1FFF8',
      'blue-lightest': '#F0F9F9',
    },

    /* spacing: {
      ...defaultTheme.spacing,
      '80': '20rem',
    }, */

    fontFamily: {
      'sans': [
        'Proxima Nova',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
      'serif': [
        'Constantia',
        'Lucida Bright',
        'Lucidabright',
        'Lucida Serif',
        'Lucida',
        'DejaVu Serif',
        'Bitstream Vera Serif',
        'Liberation Serif',
        'Georgia',
        'serif',
      ],
      'mono': [
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },

    /* minHeight: {
      ...defaultTheme.minHeight,
      footer: 'calc(100vh - 220px)',
    }, */

    /*
    |-----------------------------------------------------------------------------
    | Shadows                                https://tailwindcss.com/docs/boxShadow
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your shadow utilities. As you can see from
    | the defaults we provide, it's possible to apply multiple boxShadow
    | per utility using comma separation.
    |
    | If a `default` shadow is provided, it will be made available as the non-
    | suffixed `.shadow` utility.
    |
    | Class name: .shadow-{size?}
    |
    */

    boxShadow: {
      default: '0 2px 4px 0 rgba(0,0,0,0.55)',
      'md': '0 4px 8px 0 rgba(0,0,0,0.55), 0 2px 4px 0 rgba(0,0,0,0.55)',
      'md-dark': '0 4px 8px 0 rgba(218,211,224,0.95), 0 2px 4px 0 rgba(218,211,224,0.95)',
      'lg': '0 15px 30px 0 rgba(0,0,0,0.55), 0 5px 15px 0 rgba(0,0,0,0.55)',
      'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      'outline': '0 0 0 3px rgba(52,144,220,0.5)',
      'none': 'none',
    },
  },

  variants: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: [],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexDirection: ['responsive'],
    flexWrap: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    justifyContent: ['responsive'],
    alignContent: ['responsive'],
    flex: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    opacity: ['responsive'],
    outline: ['focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    inset: ['responsive'],
    resize: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    fill: [],
    stroke: [],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    fontSize: ['responsive'],
    fontStyle: ['responsive', 'hover', 'focus'],
    fontSmoothing: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive', 'hover', 'focus'],
    letterSpacing: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    wordBreak: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive'],
  },


  /*
  |-----------------------------------------------------------------------------
  | Plugins                                https://tailwindcss.com/docs/plugins
  |-----------------------------------------------------------------------------
  |
  | Here is where you can register any plugins you'd like to use in your
  | project. Tailwind's built-in `container` plugin is enabled by default to
  | give you a Bootstrap-style responsive container component out of the box.
  |
  | Be sure to view the complete plugin documentation to learn more about how
  | the plugin system works.
  |
  */

  corePlugins: {
    objectFit: false,
    objectPosition: false,
  },

  plugins: [],

}

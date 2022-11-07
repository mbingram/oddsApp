module.exports = {
  important: true,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: ["./src/**/*.{html,js}"],
  // purge: [
  //   './components/**/*.js',
  //   './pages/**/*.js'],
  theme: {
    ripple: theme => ({
      colors: theme('colors')
    }),
    // zIndex: {
    //   '-10': '-10',
    //   '0': 0,
    //   '10': 10,
    //   '20': 20,
    //   '30': 30,
    //   '40': 40,
    //   '50': 50,
    //   '25': 25,
    //   '50': 50,
    //   '75': 75,
    //   '100': 100,
    //   'auto': 'auto'
    // },
    extend: {
      backgroundImage: theme => ({
        // 'green-bubbles': "url('/src/images/pictures/green_bubbles.png')",
      }),
      padding: {
        '1px': '1px',
        '2px': '2px',
        '3px': '3px',
        '5px': '5px',
        '6px': '6px',
        '7px': '7px',
        '8px': '8px',
        '10px': '10px',
        '12px': '12px',
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '22px': '22px',
        '24px': '24px',
        '30px': '30px',
        '32px': '32px',
        '33px': '33px',
        '41px': '41px',
        '48px': '48px',
        '52px': '52px',
        '54px': '54px',
        '56px': '56px',
        '59px': '59px',
        '62px': '62px',
        '65px': '65px',
        '69px': '69px',
        '80px': '80px',
        '84px': '84px',
        '38' : '9.5rem',
      },
      margin: {
        '84': '20rem',
        '110': '24rem'
      },
      fontSize: {
        '10px': '10px',
        '12px': '12px',
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
        '22px': '22px',
        '24px': '24px'
      },
      width: {
        '12px': '12px',
        '14': '3.5rem',
        '30': '7.5rem',
        '36': '9rem',
        '82': '20.5rem',
        '84': '21rem',
        '86': '21.5rem',
        '88': '22rem',
        '92': '23rem',
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
        '216': '54rem',
        '220': '70rem',
        'div': '70rem',
        '40px': '40px',
        '100px': '100px',
        '3/10': '30%'

      },
      height: {
        '14': '3.5rem',
        '40px': '40px',
        '36': '9rem',
        '84': '21rem',
        '88': '22rem'
      },
      borderRadius: {
        'button': '4px'
      },
      fontFamily: {
        // 'sans': ['ui-sans-serif', 'Roboto'],
      },
      colors: {
        seafoam: '#a8e6cf',
        rainforest: '#dcedc1',
        pink: '#ffaaa5',
        lipPink: '#ff8b94',
        facebook: '#1778F2',
        pricingPurple: '#b19cd9',
        // NEW COLORS
        basePink: '#ef86a6',
        accentRed: '#b84c65',
        turquoise: '#73ced0',
        kathiGreen: '#79cea5',
        deleteRed: '#d83232',
        backgroundGrey: '#f5f6f8',
        accentGrey: '#d9d9d9',
        inputGrey: '#555555',
        errorRed: '#dd0040',
        // NEW NEW COLORS 
        // baseBeige: '#fff6ea',
        goPurple: '#454699',
        hoverPurple: '#7374bd',
        softGreen: '#8bcfb1',
        mustard: '#ebbb20',
        emerald: '#07696d',
        // REDESIGN COLORS
        actionOrange: '#f37708',
        eggplantPurple: '#864f61',
        lightEggplant: '#d8b6c1',
        // backgroundEggplant: '#e3dadd',
        backgroundEggplant: '#ede4e7',
        greyEggplant: '#A5999D',
        horizonBlue: '#82bece',
        summerYellow: '#ffd568',
        retroGreen: '#838d3e',
        softGrey: '#f6f6f6',
        textBlack: '#2e2d2d',
        aqua: '#5EAF9E',
        lightAqua: '#D9EDE9',
        // JULY REDESIGN COLORS
        softBgGrey: '#E5E5E5',
        softPlaceholderGrey: '#BDBDBD',
        progressGrey: '#C4C4C4',
        // AUGUST REDESIGN COLORS
        bgGrey: '#fafafa',
        fontGrey: '#7C7C7C',
        outlineGrey: '#545D69'
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      linearGradientColors: theme => theme('colors'),
      radialGradientColors: theme => theme('colors'),
      conicGradientColors: theme => theme('colors'),
      margin: {
        '13': '3.2rem',
        '14': '3.5rem',
        '38': '9.5rem',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    wordBreak: ['responsive'],
    padding: ['responsive', 'hover', 'focus', 'active'],
    textColor: ['responsive', 'hover', 'focus', 'active'],
    height: ['responsive', 'hover', 'focus', 'active'],
    dropShadow: ['responsive', 'hover', 'focus', 'active'],
    fill: ['responsive', 'hover', 'focus', 'active'],
  },
  // plugins: [
  //   require('tailwindcss-gradients'),
  //   require('tailwindcss-ripple')()
  // ],
}



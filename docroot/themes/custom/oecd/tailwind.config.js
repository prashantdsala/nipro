const forms = require('@tailwindcss/forms');
const colors = require('tailwindcss/colors');
const typography = require('@tailwindcss/typography')({
  modifiers: ['lg'],
});
const token = require('./SPACEtokens.json');

const { fontSize } = token;
for (var key in fontSize) {
  let { value } = fontSize[key];
  value = parseInt(value, 10);
  const remValue = `${value / 16}rem`;
  fontSize[key].value = remValue;
}

const { lineHeights } = token;
for (var key in lineHeights) {
  let { value } = lineHeights[key];
  value = parseInt(value, 10);
  const remValue = `${value}px`;
  lineHeights[key].value = remValue;
}

const { paragraphSpacing } = token;
for (var key in paragraphSpacing) {
  let { value } = paragraphSpacing[key];
  value = parseInt(value, 10);
  const remValue = `${value}px`;
  paragraphSpacing[key].value = remValue;
}

module.exports = {
  mode: 'jit',
  important: false,
  darkMode: 'class',
  content: ['./safelist.txt', './source/**/*.twig', './source/**/*.yml', './apps/**/*.twig'],
  theme: {
    boxShadow: {
      xs: '0px 1px 4px rgba(16, 24, 40, 0.05)',
      sm: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
      md: '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
      lg: '0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05)',
      xl: '0px 20px 24px -4px rgba(16, 24, 40, 0.1), 0px 8px 8px -4px rgba(16, 24, 40, 0.04)',
      xxl: 'box-shadow: 0px 24px 48px -12px rgba(16, 24, 40, 0.25)',
      xxxl: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px rgb(248 249 249)',
      extralarge: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px rgb(245 252 252)',
      focusRing: '0px 0px 0px 4px rgb(218 237 237)',
    },
    colors: {
      'color-inherit': 'inherit',
      transparent: 'transparent',
      white: token.white.value,
      black: token.black.value,
      facebookBlue: '#1877F2',
      defaultBlack: {
        50: '#2b2b2b',
        100: '#1f1f1f',
        200: '#17161a',
      },
      warning: {
        100: token.warning[100].value,
        400: token.warning[400].value,
        600: token.warning[600].value,
        800: token.warning[800].value,
      },
      text: {
        heading: token.text.heading.value,
        body: token.text.body.value,
        primaryLight: token.text.primaryLight.value,
        primaryMedium: token.text.primaryMedium.value,
        primaryDark: token.text.primaryDark.value,
        danger: token.text.danger.value,
        success: token.text.success.value,
        warning: token.text.warning.value,
        neutralLight: token.text.neutralLight.value,
        neutralMedium: token.text.neutralMedium.value,
      },
      textButtonPrimary: {
        buttonDanger: token.text.button.danger.value,
        buttonPrimaryDefault: token.text.button.primary.defaultHoverActiveDisabled.value,
        buttonPrimaryHover: token.text.button.primary.defaultHoverActiveDisabled.value,
        buttonPrimaryActive: token.text.button.primary.defaultHoverActiveDisabled.value,
        buttonPrimaryDisabled: token.text.button.primary.defaultHoverActiveDisabled.value,
      },
      textButtonSecondary: {
        buttonSecondaryDefault: token.text.button.secondary.defaultHoverActive.value,
        buttonSecondaryHover: token.text.button.secondary.defaultHoverActive.value,
        buttonSecondaryActive: token.text.button.secondary.defaultHoverActive.value,
        buttonSecondaryDisabled: token.text.button.secondary.disabled.value,
      },
      textButtonTertiary: {
        buttonTertiaryDefault: token.text.button.tertiary.defaultHoverActive.value,
        buttonTertiaryHover: token.text.button.tertiary.defaultHoverActive.value,
        buttonTertiaryActive: token.text.button.tertiary.defaultHoverActive.value,
        buttonTertiaryDisabled: token.text.button.tertiary.disabled.value,
      },
      textButtonLink: {
        buttonLinkDefault: token.text.button.link.defaultActive.value,
        buttonLinkHover: token.text.button.link.hover.value,
        buttonLinkActive: token.text.button.link.defaultActive.value,
        buttonLinkDisabled: token.text.button.link.disabled.value,
      },
      background: {
        success: token.background.success.value,
        danger: token.background.danger.value,
        white: token.background.white.value,
      },
      backgroundNeutral: {
        neutralLight: token.background.neutralLight.value,
        neutralMedium: token.background.neutralMedium.value,
        neutralDark: token.background.neutralDark.value,
        neutralExtraDark: token.background.neutralExtraDark.value,
      },
      backgroundPrimary: {
        primaryExtraLight: token.background.primaryExtraLight.value,
        primaryLight: token.background.primaryLight.value,
        primaryMedium: token.background.primaryMedium.value,
        primaryDark: token.background.primaryDark.value,
        primaryExtraDark: token.background.primaryExtraDark.value,
      },
      backgroundButtonPrimary: {
        buttonPrimaryDefault: token.background.button.primary.defaultActive.value,
        buttonPrimaryHover: token.background.button.primary.hover.value,
        buttonPrimaryActive: token.background.button.primary.defaultActive.value,
        buttonPrimaryDisabled: token.background.button.primary.disabled.value,
      },
      backgroundButtonSecondary: {
        buttonSecondaryDefault: token.background.button.secondary.defaultActiveDisabled.value,
        buttonSecondaryHover: token.background.button.secondary.hover.value,
        buttonSecondaryActive: token.background.button.secondary.defaultActiveDisabled.value,
        buttonSecondaryDisabled: token.background.button.secondary.defaultActiveDisabled.value,
      },
      backgroundButtonTertiary: {
        buttonTertiaryDefault: token.background.button.tertiary.defaultActiveDisabled.value,
        buttonTertiaryHover: token.background.button.tertiary.hover.value,
        buttonTertiaryActive: token.background.button.tertiary.defaultActiveDisabled.value,
        buttonTertiaryDisabled: token.background.button.tertiary.defaultActiveDisabled.value,
      },
      stroke: {
        dividerLight: token.stroke.dividerLight.value,
        dividerDark: token.stroke.dividerDark.value,
        focused: token.stroke.focused.value,
        icon: token.stroke.icon.value,
        borderDefault: token.stroke.border.default.value,
        borderFocused: token.stroke.border.focused.value,
        borderDanger: token.stroke.border.danger.value,
        borderLight: token.stroke.border.light.value,
      },
      StrokeButton: {
        buttonSecondaryGreyDisabled: token.stroke.button.secondaryGrey.disabled.value,
        buttonSecondaryGreyDefault: token.stroke.button.secondaryGrey.defaultHoverActive.value,
        buttonSecondaryGreyHover: token.stroke.button.secondaryGrey.defaultHoverActive.value,
        buttonSecondaryGreyActive: token.stroke.button.secondaryGrey.defaultHoverActive.value,
      },
      neutral: {
        100: token.neutral[100].value,
        200: token.neutral[200].value,
        300: token.neutral[300].value,
        400: token.neutral[400].value,
        500: token.neutral[500].value,
        600: token.neutral[600].value,
        700: token.neutral[700].value,
        800: token.neutral[800].value,
      },
      primary: {
        100: token.primary[100].value,
        200: token.primary[200].value,
        400: token.primary[400].value,
        600: token.primary[600].value,
        800: token.primary[800].value,
      },
      danger: {
        100: token.danger[100].value,
        400: token.danger[400].value,
        600: token.danger[600].value,
        800: token.danger[800].value,
      },
      warning: {
        100: token.warning[100].value,
        400: token.warning[400].value,
        600: token.warning[600].value,
        800: token.warning[800].value,
      },
      success: {
        100: token.success[100].value,
        400: token.success[400].value,
        600: token.success[600].value,
        800: token.success[800].value,
      },
      secondary1: {
        100: token.secondary1[100].value,
        400: token.secondary1[400].value,
        600: token.secondary1[600].value,
        800: token.secondary1[800].value,
      },
      secondary2: {
        100: token.secondary2[100].value,
        400: token.secondary2[400].value,
        600: token.secondary2[600].value,
        800: token.secondary2[800].value,
      },
      secondary3: {
        100: token.secondary3[100].value,
        400: token.secondary3[400].value,
        600: token.secondary3[600].value,
        800: token.secondary3[800].value,
      },
      secondary4: {
        100: token.secondary4[100].value,
        400: token.secondary4[400].value,
        600: token.secondary4[600].value,
        800: token.secondary4[800].value,
      },
      secondary5: {
        100: token.secondary5[100].value,
        400: token.secondary5[400].value,
        600: token.secondary5[600].value,
        800: token.secondary5[800].value,
      },
      secondary6: {
        100: token.secondary6[100].value,
        400: token.secondary6[400].value,
        600: token.secondary6[600].value,
        800: token.secondary6[800].value,
      },
      secondary7: {
        100: token.secondary7[100].value,
        400: token.secondary7[400].value,
        600: token.secondary7[600].value,
        800: token.secondary7[800].value,
      },
      secondary8: {
        100: token.secondary8[100].value,
        400: token.secondary8[400].value,
        600: token.secondary8[600].value,
        800: token.secondary8[800].value,
      },
      defaultRed: {
        50: '#f2005d',
        100: '#ed1c24',
      },
      defaultGray: {
        50: '#f3f3f3',
        100: '#e5e5e5',
        200: '#acacac',
        400: '#2b2b2b',
        500: '#767676',
      },
      defaultTeal: {
        50: '#ocd9d9',
        100: '#00D7D7',
      },
      defaultGreen: '#ebff04',
      defaultYellow: '#fffacb',
      gray: colors.gray,
      teal: colors.teal,
      red: colors.rose,
      green: colors.green,
      yellow: colors.amber,
      fairPink: {
        100: '#FFE9E9',
      },
      wafer: {
        100: '#E8D6D7',
      },
      cooperRose: {
        100: '#946A6A',
      },
    },
    letterSpacing: {
      widest: '0.125rem',
      default: token.letterSpacing[0].value,
      closed: token.letterSpacing.closed.value,
      extraSpaced: token.letterSpacing.extraWide.value,
      mediumSpaced: token.letterSpacing.wide.value,
    },
    extend: {
      spacing: {
        12: paragraphSpacing[12].value,
        14: paragraphSpacing[14].value,
        16: paragraphSpacing[16].value,
        18: paragraphSpacing[18].value,
        20: paragraphSpacing[20].value,
        24: paragraphSpacing[24].value,
        32: paragraphSpacing[32].value,
        36: paragraphSpacing[36].value,
        48: paragraphSpacing[48].value,
        60: paragraphSpacing[60].value,
        72: paragraphSpacing[72].value,
      },
      fontSize: {
        inherit: 'inherit',
        0: 0,
        sm2: '1.5rem',
        lg2: '2rem',
        40: '2.5rem',
        48: '3rem',
        64: '4rem',
        12: fontSize['12'].value,
        14: fontSize['14'].value,
        16: fontSize['16'].value,
        18: fontSize['18'].value,
        20: fontSize['20'].value,
        24: fontSize['24'].value,
        30: fontSize['30'].value,
        36: fontSize['36'].value,
        48: fontSize['48'].value,
        60: fontSize['60'].value,
        72: fontSize['72'].value,
        96: fontSize['96'].value,
        130: fontSize['130'].value,
      },
      lineHeight: {
        20: lineHeights[20].value,
        22: '1.4',
        24: lineHeights[24].value,
        28: lineHeights[28].value,
        32: lineHeights[32].value,
        36: lineHeights[36].value,
        40: lineHeights[40].value,
        44: lineHeights[44].value,
        60: lineHeights[60].value,
        72: lineHeights[72].value,
        76: lineHeights[76].value,
        96: lineHeights[96].value,
        116: lineHeights[116].value,
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: theme('colors.gray.100'),
            '[class~="lead"]': {
              color: theme('colors.gray.100'),
            },
            blockquote: {
              color: theme('colors.gray.100'),
            },
            h2: {
              color: theme('colors.gray.100'),
            },
            h3: {
              color: theme('colors.gray.100'),
            },
            h4: {
              color: theme('colors.gray.100'),
            },
            a: {
              color: theme('colors.gray.100'),
              '&:hover': {
                color: theme('colors.gray.100'),
              },
            },
          },
        },
      }),
      fill: {
        current: 'currentColor',
        white: 'text-white',
      },
      height: {
        69: '4.3125rem',
        72: '4.5rem',
        18: '1.125rem',
        26.67: '1.667rem',
      },
      width: {
        3: '0.1875rem',
        78: '4.875rem',
        18: '1.125rem',
        26.67: '1.667rem',
        300: '18.75rem',
        280: '17.5rem',
        800: '50rem',
        850: '53.125rem',
        900: '56.25rem',
        '7/20': '35%',
        '20/100': '20%',
        '40/100': '40%',
        '50/100': '50%',
        '55/100': '55%',
        '60/100': '60%',
        '65/100': '65%',
        '70/100': '70%',
        '30/100': '30%',
        '35/100': '35%',
        '80/100': '80%',
      },
      maxWidth: {
        none: 'none',
        auto: 'auto',
        '165': '10.35rem',
        '7xl': '7.5rem',
        '8xl': '120rem',
        '9xl': '90rem',
        'screen-xl': '71rem',
        'screen-2xl': '92rem',
        'screen-3xl': '105rem',
        '20/100': '20%',
        '40/100': '40%',
        '30/100': '30%',
        '35/100': '35%',
        '50/100': '50%',
        '55/100': '55%',
        '60/100': '60%',
        '65/100': '65%',
        '70/100': '70%',
        '80/100': '80%',
        600: '37.5rem',
        120: '7.5rem',
        220: '13.75rem',
        336: '21rem',
        360: '22.5rem',
        376: '23.5rem',
        420: '26.25rem',
        480: '30rem',
        768: '48rem',
        798: '49.875rem',
        800: '50rem',
        850: '53.125rem',
        900: '56.25rem',
      },
      maxHeight: {
        405: '25.3125rem',
      },
      gridTemplateColumns: {
        '33/66': '33% 66%',
        '66/33': '66% 33%',
        '25/50/25': '25% 50% 25%',
      },
      margin: {
        12: '0.75rem',
        30: '7.5rem',
        18: '1.125rem',
        20: '1.15rem',
        40: '2.5rem',
        48: '3rem',
        52: '3.25rem',
        64: '4rem',
        72: '4.5rem',
        80: '5rem',
        96: '6rem',
        112: '7rem',
        120: '7.5rem',
        150: '9.375rem',
        160: '10rem',
      },
      padding: {
        30: '7.5rem',
        18: '1.125rem',
        20: '1.15rem',
        40: '2.5rem',
        48: '3rem',
        52: '3.25rem',
        64: '4rem',
        72: '4.5rem',
        80: '5rem',
        96: '6rem',
        112: '7rem',
        120: '7.5rem',
        150: '9.375rem',
        160: '10rem',
      },
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      maxSm: { max: '639px' },
      // => @media (max-width: 639px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }
      maxMd: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      maxLg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      lgMd: '1200px',
      // => @media (min-width: 1200px) { ... }
      maxLgMd: { max: '1199px' },
      // => @media (max-width: 1199px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      maxXl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      max2xl: { max: '1535px' },
      // => @media (max-width: 1535px) { ... }
    },
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '1216px',
        '2xl': '1536px',
      },
    },
    fontFamily: {
      primary: ['SpaceGroteskRegular', 'Roboto', 'sans-serif'],
      secondary: ['Helvetica-Now-Display', 'Roboto', 'sans-serif'],
      primaryBold: ['SpaceGroteskBold', 'Roboto', 'sans-serif'],
    },
    flex: {
      '1': '1 1 0%',
      '2': '2 2 0%',
      initial: '0 1 auto',
      inherit: 'inherit',
      none: 'none',
      '25%': '0 0 25%',
      '30%': '0 0 30%',
      '70%': '0 0 70%',
      '33%': '0 0 33%',
      '50%': '0 0 50%',
      '100%': '0 0 100%',
    },
  },
  variants: {
    opacity: ['responsive'],
    borderWidth: ['responsive', 'hover', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'group-hover'],
    textDecoration: ['responsive', 'hover', 'group-hover'],
    textColor: ['responsive', 'hover', 'group-hover', 'dark'],
    fontFamily: ['responsive', 'hover', 'focus'],
    fill: ['responsive', 'hover', 'focus'],
    spacing: ['responsive', 'last'],
    typography: ['responsive', 'dark'],
  },
  plugins: [forms, typography],
};

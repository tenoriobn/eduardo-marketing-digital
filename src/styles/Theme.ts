const Theme = {
  colors: {
    'black': '#000',
    'white': '#FFFFFF',
    'lightGray': '#EBEBEB',
    'softGray': '#D7D7D7',
    'silverGray': '#A4A4A4',
    'silverGray-4': '#323232',
    'mediumGray': '#959595',
    'darkGray': '#2D2D2D',
    'red': 'rgb(255 69 69 / 81%)',
  },
  gradients: {
    softLight: 'linear-gradient(80deg, rgba(255,255,255,0.14) 48%, rgba(153, 153, 153, 0.04) 100%)'
  },
  borderRadius: {
    'rounded-3xl': '1.5rem',
    'rounded-4xl': '3rem',
    'rounded-full': '62.5rem',
  },
  fontSize: {
    'text-sm': '0.75rem',
    'text-14': '0.875rem',
    'text-base': '1rem',
    'text-lg': '1.125rem',
    'text-xl': '1.25rem',
    'text-2xl': '1.5rem',
    'text-3xl': '2rem',
    'text-36xl': '2.25rem',
    'text-4xl': '3rem',
    'text-5xl': '3.375rem',
  },
  fontWeight: {
    'italic': 'italic',
    'regular': '400',
    'medium': '500',
    'semibold': '600',
    'bold': '700',
  },
  spacing: {
    'margin-8': '0.5rem',
    'margin-xs': '0.75rem',
    'margin-base': '1rem',
    'margin-2xl': '1.5rem',
    'margin-3xl': '2rem',
    'margin-8xl': '5rem',
    'margin-120': '7.5rem',
  },
  transitions: {}
} as const;

export default Theme;

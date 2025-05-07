import { montserrat } from './Font';

export const Theme = {
  colors: {
    'black': '#000',
    'white': '#FFFFFF',
    'lightGray': '#EBEBEB',
    'softGray': '#D7D7D7',
    'silverGray': '#A4A4A4',
    'silverGray-4': '#323232',
    'softGray-78': 'rgba(215, 215, 215, 0.78)',
    'mediumGray': '#959595',
    'darkGray': '#2D2D2D',
    'darkGray-50': '#2d2d2d7f',
    'darkGray-90': 'rgba(45, 45, 45, 0.9)',
    'darkGray-76': 'rgba(45, 45, 45, 0.76)',
    'charcoalGray': '#484848',
    'red': 'rgb(255 69 69 / 81%)',
    'grayStone': '#6d6d6d',
    'ironGray': '#646464',
    'lightSilver-04': 'rgba(164, 164, 164, 0.04)',
    'graphiteGray': '#363636'

  },
  gradients: {
    softLight: 'linear-gradient(80deg, rgba(255,255,255,0.14) 48%, rgba(153, 153, 153, 0.04) 100%)',
    softGrayLight: 'linear-gradient(80deg, rgb(215 215 215 / 78%) 80%, rgb(215 215 215 / 5%) 100%)'
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
  transitions: {
    'softInteraction': 'all 550ms cubic-bezier(0.19, 1, 0.22, 1)',
    'elegantEntrance': 'all 750ms cubic-bezier(0.19, 1, 0.22, 1)',
  },
  font: {
    montserrat: montserrat.style.fontFamily,
  }
} as const;

export type ThemeType = typeof Theme;

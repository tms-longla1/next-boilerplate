import type { Config } from 'tailwindcss'

const config: Config = {
  important: '#app',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontSize: {
      xs: ['10px', '12px'],
      sm: ['12px', '14px'],
      md: ['14px', '17px'],
      base: ['16px', '19px'],
      lg: ['18px', '22px'],
      xl: ['20px', '24px'],
      xxl: ['24px', '29px']
    },
    extend: {
      colors: {},
      borderColor: {
        'color-input-default': '#5d6565',
        'color-input-focus-default': '#2a2aa2'
      },
      backgroundColor: {
        base: '#181818',
        'color-button-default': '#3b3abe'
      },
      backgroundImage: {
        'fade-bottom-gradual':
          'linear-gradient(to bottom, transparent 0%, hsla(0, 0%, 9%, .5) 60%, #181818 90%, #181818 100%)'
      }
    }
  },
  plugins: []
}
export default config

import type { Config } from 'tailwindcss'

// NOTE: This file is NOT used by Tailwind CSS v4.
// Theme configuration is in src/app/globals.css under @theme block.
// This file is kept for editor tooling compatibility only.

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: { extend: {} },
  plugins: [],
}

export default config

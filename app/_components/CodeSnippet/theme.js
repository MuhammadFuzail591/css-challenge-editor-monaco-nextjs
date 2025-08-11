export const customTheme = {
  name: 'gray-harmony-dark',
  type: 'dark',
  colors: {
    'editor.background': '#1F2937', // Tailwind gray-800 (darker than heading bg)
    'editor.foreground': '#E5E7EB' // Tailwind gray-200 for text
  },
  tokenColors: [
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: '#9CA3AF', fontStyle: 'italic' } // gray-400 comments
    },
    {
      scope: ['string', 'constant.other.symbol'],
      settings: { foreground: '#FBBF24' } // amber-400 strings
    },
    {
      scope: ['keyword', 'storage.type'],
      settings: { foreground: '#60A5FA' } // blue-400 keywords
    },
    {
      scope: ['variable', 'identifier'],
      settings: { foreground: '#F9FAFB' } // near-white variables
    },
    {
      scope: ['function', 'entity.name.function'],
      settings: { foreground: '#34D399' } // emerald-400 functions
    },
    {
      scope: ['number', 'constant.numeric'],
      settings: { foreground: '#F472B6' } // pink-400 numbers
    }
  ]
}

export default customTheme

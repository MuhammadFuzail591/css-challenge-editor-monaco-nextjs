'use client'
import React from 'react'

const ThemeContext = React.createContext()

export function ThemeProvider ({ children }) {
  const [theme, setTheme] = React.useState('light')

  React.useEffect(() => {
    // Initial detection
    const currentTheme = document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light'
    setTheme(currentTheme)

    // Watch for changes to the <html> class
    const observer = new MutationObserver(() => {
      const newTheme = document.documentElement.classList.contains('dark')
        ? 'dark'
        : 'light'
      setTheme(newTheme)
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Hook for easy usage
export function useTheme () {
  return React.useContext(ThemeContext)
}

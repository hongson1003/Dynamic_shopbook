import { useEffect, useState } from 'react'

export const useColorMode = () => {
  const [theme, setTheme] = useState(localStorage.theme || 'light')

  const colorTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(colorTheme)
    root.classList.add(theme)

    // save theme to local storage
    localStorage.setItem('theme', theme)
  }, [theme, colorTheme])

  return { colorTheme, setTheme, theme } as const
}

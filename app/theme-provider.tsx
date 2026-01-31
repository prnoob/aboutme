'use client'
import { createContext, useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import SwitchDark from './components/SwitchDark'
export const ThemeContext = createContext({ dark: false })

const themeMode = {
    light: 'light',
    dark: 'dark',
}

function ThemeProviderContent({ children }: { children: React.ReactNode }) {
    const [dark, setDark] = useState(false)
    const searchParams = useSearchParams()
    const mode = searchParams.get('mode')

    useEffect(() => {
        if (mode == themeMode.dark) {
            setDark(true)
        }
    }, [mode])

    return (
        <ThemeContext.Provider value={{ dark: dark }}>
            <div className="fixed right-3 top-2 cursor-pointer z-[999]">
                <SwitchDark
                    initSwitch={dark}
                    callback={isDark => {
                        setDark(isDark)
                    }}
                />
            </div>
            <div className={`${dark ? 'dark bg-slate-800' : ''}`}>{children}</div>
        </ThemeContext.Provider>
    )
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={<div className={`dark:bg-slate-800`}>{children}</div>}>
            <ThemeProviderContent>{children}</ThemeProviderContent>
        </Suspense>
    )
}

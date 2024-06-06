'use client'

import { ThemeProvider } from "@material-tailwind/react";
import customTheme from './themeConfig'

export default function MaterialTailwindThemeProvider({ children }: any) {
    return <ThemeProvider value={customTheme}>
        {children}
    </ThemeProvider>
}
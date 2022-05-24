import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import { ThemeProvider as Emotion10ThemeProvider } from "emotion-theming"
import theme from "../src/themes"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

const withThemeProvider = (Story, context) => {
  return (
    <Emotion10ThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Story {...context} />
      </ThemeProvider>
    </Emotion10ThemeProvider>
  )
}

export const decorators = [withThemeProvider]

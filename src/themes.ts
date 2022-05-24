import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  typography: {
    fontFamily: "Plus Jakarta Sans",
    fontSize: 14,
    fontWeightRegular: 400
  },
  palette: {
    primary: {
      main: "#65E9D9",
      dark: "#3D8479"
    }
  }
})

export default theme

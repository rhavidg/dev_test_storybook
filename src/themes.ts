import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  typography: {
    "fontFamily": ["Plus Jakarta Sans"].join(','),
    "fontSize": 14,
    "fontWeightRegular": 400,

  },
  palette: {
    primary: {
      main: "#65E9D9"
    }
  }
})

export default theme

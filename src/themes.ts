import { createTheme } from "@mui/material/styles"
import { orange, red, teal } from "@mui/material/colors"

const theme = createTheme({
  typography: {
    fontFamily: "Plus Jakarta Sans",
    fontSize: 14
  },
  status: {
    danger: red[500]
  },
  palette: {
    primary: {
      main: teal[200]
    }
  },
 
})

export default theme

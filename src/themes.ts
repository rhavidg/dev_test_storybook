import { createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"

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
      main: "#65E9D9"
    }
  }
})

export default theme

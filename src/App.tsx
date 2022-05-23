import React from "react"
import "./App.css"
import { ThemeProvider } from '@mui/material/styles'
import theme from './themes'
import CustomLayerCard from './components/customLayerCard/CustomLayerCard'
import CardMedia from './CardMedia.png'


function App() {
  
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <CustomLayerCard text="Flood card" img={CardMedia} checked/>
    </div>
    </ThemeProvider>
  )
}

export default App

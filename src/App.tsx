import React from "react"
import "./App.css"
import { ThemeProvider } from '@mui/material/styles'
import theme from './themes'
import CustomLayerCard from './Components/CustomLayerCard/CustomLayerCard'
import CardMedia from './Assets/CardMedia.png'


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

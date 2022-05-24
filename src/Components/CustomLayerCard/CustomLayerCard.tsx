import React, { useState } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import { Checkbox } from "@mui/material"
import theme from "../../themes"
import Typography from "@mui/material/Typography"

interface CustomLayerCardProps {
  img: string
  checked: boolean
  text: string
  border?: string
  boxShadow?: string
}
export const CustomLayerCard = ({ img, checked, text, border, boxShadow }: CustomLayerCardProps) => {
  const [checkboxState, setCheckboxState] = useState(checked)
  return (
    <Card
      sx={{
        border: border + " solid " + theme.palette.primary.main,
        borderRadius: 2,
        boxShadow: boxShadow ? boxShadow + " " + theme.palette.primary.main : "",
        maxWidth: 229,
        "&:hover": {
          border: "0px",
          boxShadow: "0px 0px 0px 2px" + theme.palette.primary.main
        }
      }}
    >
      <CardMedia component="img" image={img} alt="" sx={{ borderRadiusTop: 2, height: 100, width: 229 }} />
      <CardContent sx={{ padding: 0, "&:last-child": { paddingBottom: 0 }, display: "flex", alignItems: "center" }}>
        <Checkbox
          checked={checkboxState}
          sx={{
            "&.Mui-checked": {
              color: theme.palette.primary.main
            }
          }}
          onClick={() => setCheckboxState(!checkboxState)}
        />
        <Typography variant="body2" component="div">
          {text}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CustomLayerCard

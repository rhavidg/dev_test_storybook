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
}
export const CustomLayerCard = ({ img, checked, text }: CustomLayerCardProps) => {
  const [checkboxState, setCheckboxState] = useState(checked)
  return (
    <Card
      sx={{
        border: checked ? '1px solid ' + theme.palette.primary.dark : '1px solid #EFEFEF',
        borderRadius: 2,
        boxShadow: checked ? '0px 0px 0px 2px ' + theme.palette.primary.main : 'none',
        maxWidth: 229,
        "&:hover": {
          border: "0px",
          boxShadow: "0px 0px 0px 2px" + theme.palette.primary.main
        }
      }}
    >
      <CardMedia component="img" image={img} alt="" sx={{ borderRadiusTop: 2, height: 100, width: 229 }} />
      <CardContent sx={{ padding: '2px 7px 2px 7px', height: 50, "&:last-child": { paddingBottom: 0 }, display: "flex", alignItems: "center" }}>
        <Checkbox
          checked={checkboxState}
          sx={{
            "&.Mui-checked": {
              color: theme.palette.primary.main
            },
            '& .MuiSvgIcon-root': { fontSize: 18 },
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

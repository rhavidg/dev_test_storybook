import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Checkbox } from '@mui/material';
import theme from '../../themes';
import Typography from '@mui/material/Typography';

interface CustomLayerCardProps {
    img: any;
    checked: boolean;
    text: string;
    border: string,
}
export const CustomLayerCard = ({ img, checked, text, border }: CustomLayerCardProps) => (
    <Card sx={{
        maxWidth: 345,
        border: border + ' solid ' + theme.palette.primary.main,
        borderRadius: 2,
    }}
    >
        <CardMedia component="img" image={img} alt="" sx={{borderRadiusTop: 2}}  />
        <CardContent>
            <Checkbox checked={checked} sx={{color: theme.palette.primary.main}} />
            <Typography variant="body2" component="span">
                {text}
            </Typography>
        </CardContent>
    </Card>
)

export default CustomLayerCard
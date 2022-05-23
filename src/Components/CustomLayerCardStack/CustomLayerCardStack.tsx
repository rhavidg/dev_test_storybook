import React from 'react';

interface CustomLayerCardStackProps {
    children: any,
}

function CustomLayerCardStack({children}: CustomLayerCardStackProps): any  {
    return <div style={{display: 'flex', gap: '2rem', flexDirection: 'column' }}>
        {children}
    </div>

}


export default CustomLayerCardStack
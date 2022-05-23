import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardMedia from '../Assets/CardMedia.png';
import CustomLayerCard from '../Components/CustomLayerCard/CustomLayerCard';
import CustomLayerCardStack from '../Components/CustomLayerCardStack/CustomLayerCardStack';

export default {
    title: 'Custom Layer Card Stack',
    component: CustomLayerCardStack,
    argTypes: {
       breadcrumbs: {
           control: 'array',      
       }  
    }
} as ComponentMeta<any>

const Template: ComponentStory<any> = (args) => (
    <CustomLayerCardStack>
        {args.cards.map((card:any) => {
            return <CustomLayerCard checked={card.checked} text={card.text} img={card.img} border={card.border} boxShadow={card.boxShadow}/>
        })}
    </CustomLayerCardStack>
   
)
export const AllStates = Template.bind({})

AllStates.args={
    cards: [
        {
            text: 'Card Unselected',
            img: CardMedia,
            checked: false,
            border: '1px solid #EFEFEF;',
        },
        {
            text: 'Card Hover',
            img: CardMedia,
            checked: true,
            border: '0px',
            boxShadow: '0px 0px 0px 2px'
        },
        {
            text: 'Card Selected',
            img: CardMedia,
            checked: true,
            border: '1px',
            boxShadow: '0px 0px 0px 2px'
        }
    ]
      
}
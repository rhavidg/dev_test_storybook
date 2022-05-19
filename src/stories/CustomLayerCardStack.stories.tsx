import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardMedia from '../../images/CardMedia.png'
import CustomLayerCard from '../components/customLayerCard/CustomLayerCard';
import CustomLayerCardStack from '../components/customLayerCardStack/CustomLayerCardStack';

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
            return <CustomLayerCard checked={card.checked} text={card.text} img={card.img} border={card.border}/>
        })}
    </CustomLayerCardStack>
   
)
export const AllStates = Template.bind({})

AllStates.args={
    cards: [
        {
            text: 'Card1',
            img: CardMedia,
            checked: false,
            border: '0px',
        },
        {
            text: 'Card2',
            img: CardMedia,
            checked: true,
            border: '1px',
        },
        {
            text: 'Card3',
            img: CardMedia,
            checked: true,
            border: '2px',
        }
    ]
        
    
}